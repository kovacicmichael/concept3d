const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const initialLocations = [
  {
    id: "id1",
    name: "Denver",
    lat: 39.742043,
    lng: -104.991531,
  },
  {
    id: "id2",
    name: "LA",
    lat: 34.052235,
    lng: -118.243683,
  },
  {
    id: "id3",
    name: "Boston",
    lat: 42.364506,
    lng: -71.038887,
  },
];

app.locals.idIndex = 3;
app.locals.locations = initialLocations;
app.locals.polygonMarkers = [];

// locations
app.get("/locations", (req, res) => {
  res.send({ locations: app.locals.locations });
});
app.post("/locations", (req, res) => {
  let data = req.body;
  data.id = "id" + Math.floor(Math.random() * Math.floor(500)).toString();
  app.locals.locations.push(data);
  res.send(data);
});

// polygonMarkers
app.get("/polygonMarkers", (req, res) => {
  res.send({ polygonMarkers: app.locals.polygonMarkers });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

const portNumber = process.env.PORT || 3001;

app.listen(portNumber, () => {
  console.log("RrrarrrrRrrrr server alive on port 3001");
});
