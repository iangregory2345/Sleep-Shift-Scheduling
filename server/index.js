const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

const fs = require('fs')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const {spawn} = require('child_process');
const { json } = require('body-parser');

require('dotenv').config()

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();
  app.use(express.urlencoded())

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  //To help parse cookies
  app.use(cookieParser());

  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  app.get('/api/schedule', function (req, res) {
    var output = [];
    var {work_start, work_end, travel_time, age, sleep_pattern} = req.query
    // console.log(`[New Exactify Request]\nParams: { Time: ${time}, Num Songs: ${n_songs}, Song Durations: ${songs_duration} }`)
    console.log( work_start, work_end, travel_time, age, sleep_pattern)
    
    // spawn new child process to call the python script
    const python = spawn('python', ['./server/sleep_time_rec.py', work_start, work_end, travel_time, age, sleep_pattern]);

    // collect data from script
    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...');
      output.push(JSON.parse(data));
    });

    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    console.log('solution:', output)
    res.set('Content-Type', 'application/json');
    res.send(output)
    });
  });


  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker ' + process.pid}: listening on port ${PORT}`);
  });
  // https.createServer({
  //   key: fs.readFileSync('server.key'),
  //   cert: fs.readFileSync('server.cert')
  // }, app)
  // .listen(PORT, function () {
  //   console.log(`API running on port ${PORT}! Go to https://localhost:${PORT}/api`)
  // })
}

