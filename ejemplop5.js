var data;
var n;
function preload() {
	data = loadTable('https://raw.githubusercontent.com/profesorfaco/dno037-2018-06/gh-pages/data/poblacion.csv','csv', 'header');
}
function setup() {
	console.log(data);
	console.log(data.getRowCount() + ' son las filas en la tabla');
	console.log(data.getColumnCount() + ' son las columnas en la tabla');
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index','-1');
	noStroke();
	fill(0,150);
	textAlign(CENTER);
	textStyle(BOLD);
	beginShape();
	vertex(0,height)
   	for (var a = 0; a < data.getRowCount(); a++) {
		var habitantes = data.get(a, 1);
		var posX = (windowWidth/(data.getRowCount()+1))*(a+1);
		var posY = map(habitantes, 0, 7112808, (windowHeight-50), 100);
		vertex(posX,posY);
   		var region = data.get(a, 0);
   		textSize(11);
   		text(region + '\n•',posX,posY-10);
	}
	vertex(width,height);
	endShape(CLOSE);
}
