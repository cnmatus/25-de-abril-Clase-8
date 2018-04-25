var w = 500, h = 500, radius = 230;

var calculo = [
   {name: 'McGinnis', count:  4200000 , color: 'grey'},
   {name: 'Owens', count:  4200000 , color: 'white'},
   {name: 'Shannon', count: 4200000, color: 'grey'},
   {name: 'Grady', count: 4200000, color: 'white'},
   {name: 'Graubard', count: 4200000, color: 'grey'},
   {name: 'Oneil', count: 4200000, color: 'white'},
   {name: 'Grims', count: 4200000, color: 'grey'},
   {name: 'Cox', count: 6663000, color: 'white'},
   {name: 'Spooner', count: 4200000, color: 'grey'},
   {name: 'Read', count: 4200000, color: 'white'},
   {name: 'Van es', count: 4200000, color: 'grey'},
   {name: 'Hull', count: 4200000, color: 'white'},

 ];

 var arc = d3.arc().outerRadius(radius - 50).innerRadius(100);

 var pie = d3.pie().sort(null).value(function(d) { return d.count; });

 var svg = d3.select('#here').append("svg")
   .attr("width", w)
   .attr("height", h)
   .style("background","black")
   .append("g")
   .attr("transform", "translate(" + w/2 + "," + h/2 + ")");

 var g = svg.selectAll(".arc")
   .data(pie(calculo))
   .enter().append("g");

 g.append("path")
   .attr("d", arc)
   .style("fill", function(d,i) { return d.data.color; });

 g.append("text")
   .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
   .style("text-anchor", "middle")
   .text(function(d) { return d.data.name; })
   .attr("fill","black")
   .style("font-size","11px")
