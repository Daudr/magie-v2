var compression = require('compression');
var express = require("express");
var bodyParser = require("body-parser");
var mongojs = require("mongojs");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const s3 = require('s3');

var client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "eu-wset-1",
  },
});

uploadFoto = function(foto) {
  var params = {
    localFile: foto,

    s3Params: {
      Bucket: BUCKET_NAME,
      Key: foto
    },
  };
  var uploader = client.uploadFile(params);
  uploader.on('error', function(err) {
    console.error("unable to upload:", err.stack);
  });
  uploader.on('end', function() {
    console.log("done uploading");
  });

  return s3.getPublicUrl(BUCKET_NAME, params.Key, "eu-west-1");
}

const config = require('./config/database');

var ObjectID = mongojs.ObjectID;

const STAFF_COLLECTION = "staff";
const EVENTS_COLLECTION = "eventi";
const NEWS_COLLECTION = "news";

const BUCKET_NAME = process.env.S3_BUCKET_NAME;

// Connessione mongoose
mongoose.connect(config.database);

var app = express();
app.use(bodyParser.json());
app.use(compression());

// Passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

const admins = require('./routes/admins');

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// HTTP Caching
app.use(function(req, res, next) {
    res.setHeader("Cache-Control", "max-age=no-store");
    return next();
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

var evt = mongojs(process.env.MONGODB_URI, [EVENTS_COLLECTION]);

/*  "/api/eventi"
 *    GET: finds all events
 *    POST: creates a new event
 */

app.get("/api/eventi", function(req, res){
	evt.eventi.find().sort({data: 1}).toArray(function(err, eventi){
		if(err){
			handleError(res, err.message, "Failed to load events.");
		} else {
			res.status(200).json(eventi);
		}
	});
});

app.post("/api/eventi", function(req, res){
  console.log(req.body);
	if(!req.body.nome || !req.body.data || !req.body.oraInizio ){
		handleError(res, "Invalid user input", "Must provide a name.", 400);
	} else {
    var fotoMin = uploadFoto(req.body.fotoMin);
    var fotoFull = uploadFoto(req.body.fotoFull);

		var evento = {
			nome: req.body.nome,
			data: new Date(req.body.data),
			oraInizio: req.body.oraInizio,
			oraFine: req.body.oraFine,
			luogo: req.body.luogo,
			descrizione: req.body.descrizione,
			fotoMin: this.fotoMin,
			foto: this.fotoFull
		};

		evt.eventi.insert(evento, function(err, evento) {
			if(err) {
				handleError(res, err.message, "Failed to insert event");
			} else {
				res.status(201).json(evento);
			}
		});
	}
});


/*  "/api/eventi/:id"
 *    GET: find event by id
 *    PUT: update event by id
 *    DELETE: deletes event by id
 */

app.get("/api/eventi/:id", function(req, res){
	evt.eventi.findOne({_id: new ObjectID(req.params.id)}, function(err, doc){
		if (err) {
			handleError(res, err.message, "Failed to load event.");
		}
		res.status(200).json(doc);
	});
});

app.put("/api/eventi/:id", function(req, res){
	var evento = req.body;
	delete evento._id;

	evt.eventi.update({_id: ObjectID(req.params.id)}, evento, function(err, evento){
		if (err) {
			handleError(res, err.message, "Failed to update event")
		} else {
			evento._id = req.params.id;
			res.status(200).json(evento);
		}
	})
})

app.delete("/api/eventi/:id", function(req, res){
	evt.eventi.remove({_id: new ObjectID(req.params.id)}, function(err, result){
		if(err) {
			console.log(err);
			handleError(res, err.message, "Failed to delete event");
		} else {
			res.status(200).json(req.params.id);
		}
	});
});

/*  "/api/eventisoon"
 *    GET: finds the future 3 events
 */

app.get("/api/eventisoon", function(req, res){
	evt.eventi.find({data: {$gte: new Date()}}).sort({data: 1}).limit(3).toArray(function(err, eventi){
		if(err){
			handleError(res, err.message, "Failed to load the future 3 events.");
		}
		res.status(200).json(eventi);
	});
});

/*  "/api/eventifuture"
 *    GET: finds all the future events
 */

app.get("/api/eventifuture", function(req, res){
	evt.eventi.find({data: {$gte: new Date()}}).sort({data: 1}).skip(3).toArray(function(err, eventi){
		if(err){
			handleError(res, err.message, "Failed to load the future events.");
		}
		res.status(200).json(eventi);
	});
});

/*  "/api/eventi/past"
 *    GET: finds all the past events
 */

app.get("/api/eventipast", function(req, res){
	evt.eventi.find({data: {$lt: new Date()}}).sort({data: -1}).toArray(function(err, eventi){
		if(err){
			handleError(res, err.message, "Failed to load the past events.");
		}
		res.status(200).json(eventi);
	});
});

/*  "/api/news"
 *    GET: finds all newsletter"s contacts
 *    POST: creates a new newsletter"s contact
 */

var nw = mongojs(process.env.MONGODB_URI, [NEWS_COLLECTION]);

app.get("/api/news", function(req, res){
	nw.news.find().toArray(function(err, contatti){
		if(err){
			handleError(res, err.message, "Failed to load contacts.");
		} else {
			res.status(200).json(contatti);
		}
	});
});

app.post("/api/news", (req, res) => {
  receiver = req.body;
  nw.news.insert(receiver, function(err, receiver) {
    if(err) {
      handleError(res, err.message, "Failed to insert event");
    } else {
      res.status(201).json(receiver);
    }
  });
});

/* "api/email"
 *    POST: send emails
 */

app.post("/api/email", function(req, res){
  email = req.body;

  var helper = require('sendgrid').mail;
  var fromEmail = new helper.Email(email.fromEmail);
  var toEmail = new helper.Email(email.toEmail);
  var subject = email.subject;
  var content = new helper.Content('text/plain', email.content);
  var mail = new helper.Mail(fromEmail, subject, toEmail, content);

  // mail.personalizations[0].addSubstitution(new helper.Substitution('%name%', email.nome));

  mail.setTemplateId(process.env.SENDGRID_TEMPLATE_ID);

  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function (error, response) {
    if (error) {
      console.log('Error response received');
    } else {
      response.send({success: true});
    }
  });
});

// Admin routes
app.use('/admin', admins);

app.get('*', function(req, res, next){
	res.sendFile(distDir + '/index.html');
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
