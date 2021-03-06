const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const admins = require('./routes/admins');
const config = require('./config/database');
const MailChimp = require('mailchimp-api-v3');
const request = require('request');
const rendertron = require('rendertron-middleware');

var ObjectID = mongojs.ObjectID;

const STAFF_COLLECTION = 'staff';
const EVENTS_COLLECTION = 'eventi';
const NEWS_COLLECTION = 'news';

// Connessione mongoose
mongoose.connect(config.database);

var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(compression());
app.use(
  rendertron.makeMiddleware({
    proxyUrl: 'https://render-tron.appspot.com/render'
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Create link to Angular build directory
var distDir = __dirname + '/dist/';
app.use(express.static(distDir));

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log('ERROR: ' + reason);
  res.status(code || 500).json({ error: message });
}

app.get('*/**.jpg', (req, res) => {
  res.setHeader('Cache-Control', 'max-age=1296000, s-maxage=2592000');
});

app.get('*/**.png', (req, res) => {
  res.setHeader('Cache-Control', 'max-age=1296000, s-maxage=2592000');
});

app.get('*/**.gif', (req, res) => {
  res.setHeader('Cache-Control', 'max-age=1296000, s-maxage=2592000');
});

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.DB_URI, { useNewUrlParser: true });

client.connect(err => {
  const evt = client.db('heroku_slmcz4nh').collection('eventi');

/*  "/api/eventi"
 *    GET: finds all events
 *    POST: creates a new event
 */

app.get('/api/eventi', function(req, res) {
  evt
    .find()
    .sort({ data: 1 })
    .toArray(function(err, eventi) {
      if (err) {
        handleError(res, err.message, 'Failed to load events.');
      } else {
        res.status(200).json(eventi);
      }
    });
});

app.post('/api/eventi', function(req, res) {
  console.log(req.body);
  if (!req.body.nome || !req.body.data || !req.body.oraInizio) {
    handleError(res, 'Invalid user input', 'Must provide a name.', 400);
  } else {
    var evento = {
      nome: req.body.nome,
      data: new Date(req.body.data),
      oraInizio: req.body.oraInizio,
      oraFine: req.body.oraFine,
      luogo: req.body.luogo,
      descrizione: req.body.descrizione.replace('/n', '<br>'),
      fotoMin: req.body.fotoMin || 'assets/icons/logo/logo_magie.png',
      foto: req.body.fotoFull || 'assets/icons/logo/logo_magie.png'
    };

    evt.insert(evento, function(err, evento) {
      if (err) {
        handleError(res, err.message, 'Failed to insert event');
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

app.get('/api/eventi/:id', function(req, res) {
  evt.findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, 'Failed to load event.');
    }
    res.status(200).json(doc);
  });
});

app.put('/api/eventi/:id', function(req, res) {
  var evento = req.body;
  delete evento._id;

  evt.update({ _id: ObjectID(req.params.id) }, evento, function(
    err,
    evento
  ) {
    if (err) {
      handleError(res, err.message, 'Failed to update event');
    } else {
      evento._id = req.params.id;
      res.status(200).json(evento);
    }
  });
});

app.delete('/api/eventi/:id', function(req, res) {
  evt.remove({ _id: new ObjectID(req.params.id) }, function(
    err,
    result
  ) {
    if (err) {
      console.log(err);
      handleError(res, err.message, 'Failed to delete event');
    } else {
      res.status(200).json(req.params.id);
    }
  });
});

/*  "/api/eventisoon"
 *    GET: finds the future 3 events
 */

app.get('/api/eventisoon', function(req, res) {
  evt
    .find({ data: { $gte: new Date() } })
    .sort({ data: 1 })
    .limit(3)
    .toArray(function(err, eventi) {
      if (err) {
        handleError(res, err.message, 'Failed to load the future 3 events.');
      }
      res.status(200).json(eventi);
    });
});

/*  "/api/eventifuture"
 *    GET: finds all the future events
 */

app.get('/api/eventifuture', function(req, res) {
  evt
    .find({
      data: { $gte: new Date(new Date().setDate(new Date().getDate() - 1)) }
    })
    .sort({ data: 1 })
    .skip(3)
    .toArray(function(err, eventi) {
      if (err) {
        handleError(res, err.message, 'Failed to load the future events.');
      }
      res.status(200).json(eventi);
    });
});

/*  "/api/eventi/past"
 *    GET: finds all the past events
 */

app.get('/api/eventipast', function(req, res) {
  evt
    .find({
      data: { $lt: new Date(new Date().setDate(new Date().getDate() - 1)) }
    })
    .sort({ data: -1 })
    .toArray(function(err, eventi) {
      if (err) {
        handleError(res, err.message, 'Failed to load the past events.');
      }
      res.status(200).json(eventi);
    });
});

/*  "/api/news"
 *    GET: finds all newsletter"s contacts
 *    POST: creates a new newsletter"s contact
 */

var nw = mongojs(process.env.MONGODB_URI, [NEWS_COLLECTION]);

app.get('/api/news', function(req, res) {
  nw.news.find().toArray(function(err, contatti) {
    if (err) {
      handleError(res, err.message, 'Failed to load contacts.');
    } else {
      res.status(200).json(contatti);
    }
  });
});

app.post('/api/news', (req, res) => {
  receiver = req.body;
  nw.news.insert(receiver, function(err, receiver) {
    if (err) {
      handleError(res, err.message, 'Failed to insert event');
    } else {
      var options = {
        method: 'POST',
        url: 'https://magie.herokuapp.com/api/mailchimp',
        headers: { 'content-type': 'application/json' },
        body: { email: receiver.email },
        json: true
      };

      request(options, function(error, response, body) {
        if (error) throw new Error(error);
      });
      res.status(201).json(receiver);
    }
  });
});

app.post('/api/mailchimp', (req, res) => {
  member = req.body;

  var mailchimp = new MailChimp(process.env.MAILCHIMP_KEY);

  mailchimp.post(
    { path: 'lists/3b67de1fae/members' },
    {
      email_address: member.email,
      status: 'subscribed'
    },
    (err, result) => {
      if (err) throw new Error(err);
      else {
        res.status(200).json({ success: true });
      }
    }
  );
});

/* "api/email"
 *    POST: send emails
 */

app.post('/api/email', function(req, res) {
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

  sg.API(request, function(error, response) {
    if (error) {
      console.log('Error response received');
    } else {
      response.send({ success: true });
    }
  });
});

// Admin routes
app.use('/admin', admins);

app.get('*', (req, res, next) => {
  res.sendFile(distDir + '/index.html');
});

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log('App now running on port', port);
});
});
