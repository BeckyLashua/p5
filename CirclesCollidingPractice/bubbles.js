function Bubbles(tempX, tempY, tempRadius, tempColor) {
  
  // Initialize Bubble object
  this.x = tempX;
  this.y = tempY;
  this.radius = tempRadius;
  this.xspeed = random(-1,1);
  this.yspeed = random(-1,1);
  this.c = tempColor;
    
  // Display method to draw bubbles to screen
  this.display = function() {
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.radius*2, this.radius*2); 
  }
    
  // Update method for updating location 
  this.update = function() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  // Wall detection method that bounces bubble off wall
  this.bounceOffWall = function() {
    if (this.x >= width - this.radius || this.x <= 0 + this.radius) {
      this.xspeed *= -1;    
    }  
    if (this.y >= height - this.radius || this.y <= 0 + this.radius) {
      this.yspeed *= -1;
    }
 }
  
  // Collision detection method
  this.hasCollided = function(other) {
    var distanceBetweenBubbles = dist(this.x, this.y, other.x, other.y);
    if (distanceBetweenBubbles < this.radius + other.radius) {
      return true;
    }
  }
    
  // Freeze method for freezing both cirlces when incoming collision is detected
  this.freeze = function() {
    this.xspeed = 0;
    this.yspeed = 0;
  }
  
  // Ricochet method for bouncing circles away from each other
  this.ricochet = function(other) {
    this.xspeed *= -1;
    this.yspeed *= -1;
    this.xspeed *= -1;
    this.xspeed *= -1;
  }
  
  // Avoidant method for making sure circles never touch
  /*this.avoid = function(other) {
    var distanceBetweenBubbles = dist(this.x, this.y, other.x, other.y);
    var avoidant_distance = (this.radius + other.radius) * 1.5;
    if (distanceBetweenBubbles < avoidant_distance) {
      this.ricochet(other);
    }  
  }*/
  
}