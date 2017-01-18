var height = 500;
var width = 700;
var centerX = width / 2;
var centerY = height / 2;

var nodeRadius = 5;
var shapeRadius = 100;
var divisions = 10;

var nodes = [];
var circlesCoord = [];

var Node = function(x, y) {
  this.x = x;
  this.y = y;

  this.getCoord = function() {
    return {"x": this.x, "y": this.y};
  }
}

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)

for (var i=0; i<divisions; i++) {
  var angle = i * 2 * Math.PI / divisions + Math.random() * 0.2 - 0.2
  var x = centerX + shapeRadius * Math.cos(angle);
  var y = centerY + shapeRadius * Math.sin(angle);
  var node = new Node(x, y);
  nodes.push(node);
}

for (var i=0; i<nodes.length; i++) {
  circlesCoord.push(nodes[i].getCoord());
}

console.log(circlesCoord);

//var lineFunction = d3.line()
//  .x(function(d) { return d.x; })
//  .y(function(d) { return d.y; });

// var lineGraph = svgContainer.append("path")
//   .attr("d", lineFunction(lineData))
//   .attr("stroke", "black")
//   .attr("stroke-width", 2)
//   .attr("fill", "none");

var circles = svg.selectAll("circle")
  .data(circlesCoord)
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
