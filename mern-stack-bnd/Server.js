 // Imported required packages
 const express = require('express'),
 path = require('path'),
 bodyParser = require('body-parser'),
 cors = require('cors'),
 mongoose = require('mongoose');
 require('dotenv').config();
 
 


// MongoDB Databse url
 var mongoDatabase = process.env.MONGO_URL;
 
 
 // Created express server
 const app = express();
 mongoose.Promise = global.Promise;
 
 // Connect Mongodb Database
 mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
 () => { console.log('Database is connected') },
 err => { console.log('There is problem while connecting database ' + err) }
 );
 
 // All the express routes
 const employeeRoutes = require('./Routes/Employee.route');
const { env } = require('process');
 
 // Conver incoming data to JSON format
 app.use(bodyParser.json());
 
 // Enabled CORS
 app.use(cors({
    origin: 'https://crud-app3-9qcp.onrender.com'
  }));
  
 
 // Setup for the server port number
 const port = process.env.PORT || 4000;
 
 // Routes Configuration
 app.use('/employees', employeeRoutes);
 
 // Staring our express server
 const server = app.listen(port, function () {
 console.log('Server Lisening On Port : ' + port);
 });



 