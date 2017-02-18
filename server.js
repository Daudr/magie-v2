var compression = require('compression');
var express = require("express");
var bodyParser = require("body-parser");
var mongojs = require("mongojs");

var ObjectID = mongojs.ObjectID;

var STAFF_COLLECTION = "staff";
var EVENTS_COLLECTION = "eventi";
var FILES_COLLECTION = "fs.files";
var NEWS_COLLECTION = "newsletter";

var app = express();
app.use(bodyParser.json());
app.use(compression());

// Create link to Angular build directory
var distDir = __dirname + "/dist/index.html";
app.use(express.static(distDir));

// HTTP Caching
app.use(function(req, res, next) {
    res.setHeader("Cache-Control", "max-age=2419200");
    return next();
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

/* app.get('*', function(req, res, next){
	res.render('index.html');
}); */

var st = mongojs(process.env.MONGODB_URI, [STAFF_COLLECTION], function(err){
	if(err){
		console.log(err);
		process.exit(1);
	}
});

/*  "/api/staff"
 *    GET: finds all staff
 *    POST: creates a new person in staff
 */

app.get("/api/staff", function(req, res){
	st.staff.find().toArray(function(err, staff){
		if(err){
			handleError(res, err.message, "Failed to get staff.");
		} else {
			res.status(200).json(staff);
		}
	});
});

app.post("/api/staff", function(req, res){
	var person = req.body;

	if(!req.body.name){
		handleError(res, "Invalid user input", "Must provide a name.", 400);
	}

	st.staff.insertOne(person, function(err, person){
		if(err){
			handleError(res, err.message, "Failed to create new person.");
		}
		res.status(201).json(person);
	});
});

/*  "/api/staff/:id"
 *    GET: find person by id
 *    PUT: update person by id
 *    DELETE: deletes person by id
 */

app.get("/api/staff/:id", function(req, res){
	st.staff.findOne({_id: new ObjectID(req.params.id)}, function(err, person){
		if(err){
			handleError(res, err.message, "Failed to get contact");
		} else {
			res.status(200).json(person);
		}
	});
});

app.put("/api/staff/:id", function (req, res) {
    var person = req.body;
    delete person._id;

    st.staff.updateOne({ _id: new ObjectID(req.params.id) }, person, function (err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to update person");
        } else {
            person._id = req.params.id;
            res.status(200).json(person);
        }
    });
});

app.delete("/api/staff/:id", function(req, res){
	st.staff.deleteOne({_id: new ObjectID(req.params.id)}, function(err, result){
		if(err){
			handleError(res, err.message, "Failed to delete person");
		} else {
			res.status(200).json(req.params.id);
		}
	});
});


/*  "/api/staff/corsi"
 *    GET: finds all staff of corsi
 */

app.get("/api/staffcorsi", function(req, res) {
	st.staff.find({compiti: "Corsi - A.S.D. Ice Team Sanve"}).toArray(function(err, staff){
		if(err){
			handleError(res, err.message, "Failed to get staff.");
		} else {
			res.status(200).json(staff);
		}
	});
}); 

var evt = mongojs(process.env.MONGODB_URI, [EVENTS_COLLECTION]);


/*  "/api/eventi"
 *    GET: finds all events
 *    POST: creates a new event
 */

app.get("/api/eventi", function(req, res){
	evt.eventi.find().sort({data: 1}).toArray(function(err, eventi){
		if(err){
			handleError(res, err.message, "Failed to load events.");
		}
		console.log(eventi);
		res.status(200).json(eventi);
	});
});


/*  "/api/eventi/:id"
 *    GET: find event by id
 *    PUT: update event by id
 *    DELETE: deletes event by id
 */

app.get("/api/eventi/:id", function(req, res){
	evt.eventi.findOne({_id: new ObjectID(req.params.id)}, function(err, evento){
		if(err){
			handleError(res, err.message, "Failed to load event.");
		}
		res.status(200).json(evento);
	});
});

/*  "/api/eventi/soon"
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

/*  "/api/eventi/future"
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


/*  "/api/files"
 *    GET: finds all files
 *    POST: creates a new file
 */


/*  "/api/files/:id"
 *    GET: find file by id
 *    PUT: update file by id
 *    DELETE: deletes file by id
 */


/*  "/api/news"
 *    GET: finds all newsletter"s contacts
 *    POST: creates a new newsletter"s contact
 */

var nw = mongojs(process.env.MONGODB_URI, [NEWS_COLLECTION]);

app.get("/api/news", function(req, res){
	nw.news.find().toArray(function(err, contatti){
		if(err){
			handleError(res, err.message, "Failed to load near contacts.");
		}
		res.status(200).json(contatti);
	});
});

/*  "/api/news/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

var helper = require('sendgrid').mail;
  
from_email = new helper.Email("michidarin@gmail.com");
to_email = new helper.Email("michidarin@gmail.com");
subject = "Sending with SendGrid is Fun";
content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js");
mail = new helper.Mail(from_email, subject, to_email, content);

var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});

sg.API(request, function(error, response) {
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
