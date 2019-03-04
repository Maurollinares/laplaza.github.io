
let a = [];
let tamany =[30,50,20,10,5];
let ample =[60,100,30,40,150];
let alt=[20,50,80,10,140];
let paleta=['red','blue', 'black', 'green','pink'];
let espaix=[60,100,30,40,150];
let espaiy=[20,50,80,10,140];
let grossor=[1,2,3,4,5];
let velocitat=[0.5,1,0.2,3,2];
let gx=[0.6,0.4,0.1,0.21,0.3];
let wx=[0.1,0.2,0.3,0.25,0.4];
let wind;
let gravity;

function setup(){
	createCanvas(192,157);
	background(255);
	for(let i=0; i<5; i=i+1 ){
		a.push(new Antena());
	}
}
function draw(){

	let gravity=new createVector(1,1);

	for(let i=0; i<a.length; i=i+1){
		wind= createVector(wx[i],wx[i]);
		gravity= createVector(gx[i],gx[i]);
		a[i].update();
		a[i].applyForce(wind);
		a[i].applyForce(gravity);
		a[i].display(tamany[i], ample[i], espaix[i], alt[i], espaiy[i], paleta[i], 1);
		a[i].checkEdges();
	}

}
class Antena{
	constructor(){
		this.mass=5;
		this.position= new createVector(30,5);
		this.velocity= new createVector(-2, 2);
		this.acceleration= new createVector(5,5);
	}
	applyForce(force){
		var f= p5.Vector.div(force, this.mass);
		this.acceleration.add(f);
	}
	update(vel){
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.acceleration.mult(0);
				
	}

	display(t,ampr, sx, altr, sy, c, g){
		stroke(c);
		strokeWeight(g);
		for(var posx=0; posx<ampr; posx=posx+sx){
			for(var posy=0; posy<altr; posy=posy+sy){
				push();
				translate(posx+this.position.x-ampr,posy+this.position.y-altr);
					fill(paleta[int(random(paleta.length))]);
					quad(t*12,t*16,t*2,t*2);
					
           			triangle(t*8,t*14,t*2,t*2,t*6,t*4);
           			
            		rect(t*4,t*12,t*2,t*2,t*5);
				pop();
			}
		}
	}
	checkEdges(){
		if(this.position.x>width){
			this.position.x=width;
			this.velocity.x= this.velocity.x*-1;
		}else if(this.position.x<0){
			this.position.x=0;
			this.velocity.x=this.velocity.x*-1;
		}
		if(this.position.y>height){
			this.position.y=height;
			this.velocity.y*=-1;
		}else if(this.position.y<-100){
			this.position.y=-50;
			this.velocity.y*=-1;
		}
	}
}