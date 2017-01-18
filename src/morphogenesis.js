var height = 700;
var width = 700;
var radius = 5;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)

var circleData = [
  { "x": 10,  "y": 10},
  { "x": 40,  "y": 15},
  { "x": 45,  "y": 35},
];

//var lineFunction = d3.line()
//  .x(function(d) { return d.x; })
//  .y(function(d) { return d.y; });

// var lineGraph = svgContainer.append("path")
//   .attr("d", lineFunction(lineData))
//   .attr("stroke", "black")
//   .attr("stroke-width", 2)
//   .attr("fill", "none");

var circles = svg.selectAll("circle")
  .data(circleData)
.enter().append("circle")
  .attr("cx", function(d) { return d.x; })
  .attr("cy", function(d) { return d.y; })
  .attr("r", radius)
  .attr("fill", "black");

console.log("yop!")

// lineData = [
//   { "x": 15,   "y": 90},
//   { "x": 30,  "y": 25},
//   { "x": 105,  "y": 55},
//   { "x": 175,  "y": 65},
// ];
//
// svgContainer.selectAll("path")
//   .data(lineData)
//   .transition()
//   .duration(1000)
//   .attr("d", lineFunction(lineData));
//
// svgContainer.selectAll("circle")
//   .data(lineData)
//   .transition()
//   .duration(1000)
//   .attr("cx", function(d) { return d.x; })
//   .attr("cy", function(d) { return d.y; });
