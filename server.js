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

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

console.log("mongodb://mike:mike@ds147789.mlab.com:47789/heroku_slmcz4nh");

var st = mongojs("mongodb://mike:mike@ds147789.mlab.com:47789/heroku_slmcz4nh", [STAFF_COLLECTION], function(err){
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

app.get("/api/staff/corsi", function(req, res) {
	st.staff.find({compiti: "Corsi - A.S.D. Ice Team Sanve"}).toArray(function(err, staff){
		if(err){
			handleError(res, err.message, "Failed to get staff.");
		} else {
			res.status(200).json(staff);
		}
	});
}); 

var evt = mongojs("mongodb://mike:mike@ds147789.mlab.com:47789/heroku_slmcz4nh", [EVENTS_COLLECTION]);


/*  "/api/eventi"
 *    GET: finds all events
 *    POST: creates a new event
 */

app.get("/api/eventi", function(req, res){
	evt.eventi.find(function(err, eventi){
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
	evt.eventi.find({data: {$gte: new Date()}}).limit(3, function(err, eventi){
		if(err){
			handleError(res, err.message, "Failed to load the future 3 events.");
		}
		res.status(200).json(eventi);
	});
});

/*  "/api/eventi/future"
 *    GET: finds all the future events
 */

app.get("/api/eventi/future", function(req, res){
	evt.eventi.find({data: {$gte: new Date()}}, function(err, eventi){
		if(err){
			handleError(res, err.message, "Failed to load the future events.");
		}
		res.status(200).json(eventi);
	});
});

/*  "/api/eventi/past"
 *    GET: finds all the past events
 */

app.get("/api/eventi/past", function(req, res){
	evt.eventi.find({data: {$lt: new Date()}}, function(err, eventi){
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

var nw = mongojs("mongodb://mike:mike@ds147789.mlab.com:47789/heroku_slmcz4nh", [NEWS_COLLECTION]);

app.get("/api/news", function(req, res){
	nw.news.find(function(err, contatti){
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