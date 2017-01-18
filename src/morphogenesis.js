var height = 700;
var width = 700;

var nodeRadius = 5;
var shapeRadius = 100;
var divisions = 10;

var nodes = [];

var Node = function(x, y) {
    this.x = x;
    this.y = y;
  }

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)

for (var i=0; i<divisions; i++){
  var x = shapeRadius * Math.cos(360/i + Math.random(-10, 10));
  var y = shapeRadius * Math.sin(360/i + Math.random(-10, 10));
  var node = new Node(x, y);
  nodes.push(node);
}

console.log(nodes.length)

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
  .attr("r", nodeRadius)
  .attr("fill", "black");

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
