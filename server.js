var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require("mongojs");

var ObjectID = mongojs.ObjectID;

var STAFF_COLLECTION = "staff";
var EVENTS_COLLECTION = "eventi";
var FILES_COLLECTION = "fs.files";
var NEWS_COLLECTION = "newsletter";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var st = mongojs('process.env.MONGODB_URI', [STAFF_COLLECTION]);

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

/*  "/api/staff"
 *    GET: finds all staff
 *    POST: creates a new person in staff
 */

app.get('/api/staff', function(req, res){
	st.staff.find(function(err, staff){
		if(err){
			handleError(res, err.message, "Failed to get staff.");
		} else {
			res.status(200).json(staff);
		}
	});
});

app.post('/api/staff', function(req, res){
	var person = req.body;

	if(!req.body.name){
		handleError(res, "Invalid user input", "Must provide a name.", 400);
	}

	st.collection(STAFF_COLLECTION).insertOne(person, function(err, person){
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

app.get('/api/staff/:id', function(req, res){
	st.collection(STAFF_COLLECTION).findOne({_id: new ObjectID(req.params.id)}, function(err, person){
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

    st.collection(STAFF_COLLECTION).updateOne({ _id: new ObjectID(req.params.id) }, person, function (err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to update person");
        } else {
            person._id = req.params.id;
            res.status(200).json(person);
        }
    });
});

app.delete('/api/staff/:id', function(req, res){
	st.collection(STAFF_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result){
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

app.get('/api/staff/corsi', function(req, res) {
	st.collection(STAFF_COLLECTION).find({compiti: "Corsi - A.S.D. Ice Team Sanve"}, function(err, staff){
		if(err){
			handleError(res, err.message, "Failed to get staff.");
		} else {
			res.status(200).json(staff);
		}
	});
});

var evt = mongojs('process.env.MONGODB_URI', [EVENTS_COLLECTION]);


/*  "/api/eventi"
 *    GET: finds all events
 *    POST: creates a new event
 */

app.get('/api/eventi', function(req, res){
	evt.collection(EVENTS_COLLECTION).find(function(err, eventi){
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

app.get('/api/eventi/:id', function(req, res){
	evt.collection(EVENTS_COLLECTION).findOne({_id: new ObjectID(req.params.id)}, function(err, evento){
		if(err){
			handleError(res, err.message, "Failed to load event.");
		}
		res.status(200).json(evento);
	});
});

/*  "/api/eventi/soon"
 *    GET: finds all near events
 */

app.get('/api/eventi/soon', function(req, res){
	evt.collection(EVENTS_COLLECTION).find({data: {$gt: new Date()}}).limit(3, function(err, eventi){
		if(err){
			handleError(res, err.message, "Failed to load near events.");
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
 *    GET: finds all newsletter's contacts
 *    POST: creates a new newsletter's contact
 */

var nw = mongojs('process.env.MONGODB_URI', [NEWS_COLLECTION]);

app.get('/api/news', function(req, res){
	nw.collection(NEWS_COLLECTION).find(function(err, contatti){
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

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});