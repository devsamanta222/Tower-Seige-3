class Box {
  constructor(x,y,width,height) {
    var options = {
       friction: 0.3,
       density: 0.8,
       restitution: 0.2
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display(){

    if(this.body.speed < 3){
      var pos =this.body.position;
    rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    
      
    }
    else{
     World.remove(world, this.body);
     push();

     this.Visiblity = this.Visiblity - 5;
     //tint(255,this.Visiblity);
     pop();
     
   }


    
    
    
   
  }
  score(){
    if(this.Visibility<0 && this.Visibility>-1005){
      score++;
    }
  }



};
