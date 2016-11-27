var pg = require('pg');//Add the postgres package
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/jordan';//Create connection string to the db

/* Functions to perform all executions */
// Used to retrive any bike information
function complieBikeResults(query,done,callback){
  let results = [];

  // Go through results one at a time and store them in results array
  query.on('row', (row) => {
    results.push(row);
  });

  query.on('end', () => {
    // Close connection to the client
    done();
    // callback with the results
    callback(results);
  });
}

// Used to retrive all bike data from the client
function getAllBikes(req, res){
  // Get a Postgres client from the connection pool
  pg.connect(connectionString,(err,client,done) => {
    // Handle connection errors
    if(err){
      done();// Close connection to the Postgres client
      console.log(err);// Put the error into the console so that we can see it
      res.status(500).json({success:false, data: err});
    }

    // Retrive all bike data from the client
    var query = client.query('SELECT * FROM bike_counts');

    complieBikeResults(query,done,function(results){
      // Check if there are results
      if(results.length == 0){
        res.status(200).json({ data: 'request successful but no content in response payload body' });
      }else if(results.length >= 1){
        res.status(201).json(results);
      }
    });
  })
}

// Used to retrive all formatted bike data  from the client
function getAllFormatedBikes(req, res) {
  // Get a Postgres client from the connection pool
  pg.connect(connectionString,(err,client,done) => {
    // Handle connection errors
    if(err){
      done();// Close connection to the Postgres client
      console.log(err);// Put the error into the console so that we can see it
      res.status(500).json({success:false, data: err});
    }

    // Retrive all bike data from the client
    var query = client.query('SELECT * FROM bike_counts');

    complieBikeResults(query,done,function(results){
      // Check if there are results
      if(results.length == 0){
        res.status(200).json({ data: 'request successful but no content in response payload body' });
      }else if(results.length >= 1){
        res.status(201).json(results);
      }
    });
  })
}

// Used to retrive a single set of bike data from the client
function getSingleBike(req, res){
  // Get id passed in with request
  let bikeId = parseInt(req.params.id);

  // Get a Postgres client from the connection pool
  pg.connect(connectionString,(err,client,done) => {
    // Handle connection errors
    if(err){
      done();// Close connection to the Postgres client
      console.log(err);// Put the error into the console so that we can see it
      res.status(500).json({success:false, data: err});
    }

    // Retrive all bike data from the client
    var query = client.query('SELECT * FROM bike_counts WHERE id=($1)', [bikeId]);

    complieBikeResults(query,done,function(results){
      // Check if there are results
      if(results.length == 0){
        res.status(200).json({ success:true, data: 'request successful but no content in response payload body' });
      }else if(results.length >= 1){
        res.status(201).json(results);
      }
    });
  })
}

module.exports = {
  getAllBikes: getAllBikes,
  getSingleBike: getSingleBike,
  getAllFormatedBikes: getAllFormatedBikes
};
