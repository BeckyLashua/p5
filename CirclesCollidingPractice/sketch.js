var bubbles = [];
var bubblesInfo = [];



function setup() {
  createCanvas(640,480);
  // Loops 25 times, checking to see if there are any intersections. If not, adds to bubblesInfo and draws the circle. 
  for (var i = 0; i < 35; i++) {
    var newLocation = true;
    var radius = 25;
    var x = random(0 + radius, width - radius);
    var y = random(0 + radius, height - radius);
    var c = (255,255,255);
    for (var j = 0; j < bubblesInfo.length; j++) {
      var distance = dist(x, y, bubblesInfo[j].x, bubblesInfo[j].y);
      if (distance < (radius + bubblesInfo[j].radius)) {
        newLocation = false;  
      }
    }
    if (newLocation) {
      bubblesInfo.push({'x': x, 'y': y, 'radius': radius});
      bubbles.push(new Bubbles(x, y, radius, c)); 
    }
  }

}

function draw() {
  background(130);
    
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].bounceOffWall();
    bubbles[i].update();
    for (var j = 0; j < bubbles.length; j++) {
      if (j !== i && bubbles[i].hasCollided(bubbles[j])) {
        //Freezes the circles in place once they collide
        //bubbles[i].freeze();
        //bubbles[j].freeze();   
        /* Circles change color as they come into contact with other circles, each clump of circles pertaining to their own color 
        if (bubbles[i].c != (255,255,255) && bubbles[j].c == (255, 255, 255)) {
          bubbles[j].c = bubbles[i].c;
        } else if (bubbles[j].c != (255, 255, 255) && bubbles[i].c == (255, 255, 255)) {
          bubbles[i].c = bubbles[j].c;
        } else if (bubbles[j].c == (255, 255, 255) && bubbles[i].c == (255, 255, 255)) {
          var r = random(0,255);
          var g = random(0,255);
          var b = random(0,255);
          bubbles[i].c = color(r,g,b);
          bubbles[j].c = color(r,g,b); 
        } */  
          
        // Circles ricochet when they collide
        bubbles[i].ricochet(bubbles[j]);
      } 
    }
    bubbles[i].display();
    
  }
}

/* Idea for a color changing method.

1. Make an empty array for storing bubble clumpings

2. In for loop, when checking to see if two bubbles have collided, check to see if either one already exists in the array

3. If the array does not have either one inside of it, add an array to the list that holds their x, y, and change color to a random color

4. If the array DOES have either one inside of it, use whichever one's color change the other's color, and add info to array

OR

1. In for loop, when checking to see if two bubbles have collided, check to see if one of their colors is anything but white. If it is, change the white bubble to that color
2. If both are white, make them both the same randomly set color. 
*/

 
       