class Polygon{
    constructor(x,y,radius){
        var options={
            isStatic:false
        }
        this.polygon=loadImage("polygon.png")
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)
        }

        display(){
            imageMode(CENTER)
            
            image(this.polygon,this.body.position.x,this.body.position.y,this.radius,this.radius)

        }
}