class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0,
            
            }
         this.Visiblity =255;   
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("bottle.jpg")
        World.add(world, this.body);

      
      }
      display(){
        if(this.body.speed < 5){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
 
          
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(250,this.Visiblity);
           image(this.image, this.body.position.x, this.body.position.y, 50,50 );
           pop();
         }

        

       
      }
}
