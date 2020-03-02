function f(a) //-> hoisting
{
	this.x=a;
	var k=new f(3);
	k.x== 3;
}
function (x) { x <5};

g(4)-> true;

ii.uni.wroc.pl/~wzychla/ra2H2I/weppo.html

x.imie="Piotr";
x.hello=function(){console log "Cześć jestem" + this.imie;};
var y=Object create (x);
y.imie = "Paweł";
y.hello();

/*var x=
{
	imie."Piotr";
	hello;
}
*/
function osoba (imie) {this.imie=imie;}
osoba.prototype.hello;


function Figura(x,y)
{
	this.x=x || 0;
	this.y=y || 0;
}
Figura.prototype.area=funtion() {return 0;}
console.log (0 || 2);
function Square (a,x,y)
{
	Figura.call(this.x.y);
	this.a=a||0;
}
Square.prototype=Object.create(Figura.prototype);

x.hello=5;
x["hello"]=5;
delete x.hello;