/**
 * Created by julieanderson on 7/15/17.
 */
var dataset = [9,2,3,4,2,6,4,8,9];
var w = 200;
var h = 100;
var barPadding = 4;

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d,i){
        return i * (w / dataset.length);
    })
    .attr("y", function(d){
        return h-(d* 10);
    })
    .attr("width", w / dataset.length - barPadding)
    .attr("height", function(d){
        return d * 10;
    })
    .attr("fill", "#e51b5e");

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d){
        return d;
    })
    .attr("x", function(d, i) {
        return i * (w / dataset.length)+ (w/ dataset.length - barPadding) /2;
    })
    .attr("y", function(d) {
        return h - (d * 10)+14;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white")
    .attr("text-anchor", "middle");
