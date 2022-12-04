# 8. Challenge: Mutiple Color Swaps

**Goal**: Use color swapping to make an exciting image!

![](https://youtu.be/PDCwOpzOrxo)




##  👉 Your turn
- stack if statements between code to get different words or elements to change color and move in sync.
- vary the number on each word or shape so they change color at different times
- create multiple arrays of color by changing the '%7' value


<details>
<summary>tl;dr</summary>

```javascript
colorlist =   ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

newColors =   ['black', 'white']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('lightskyblue');
  fill('white');
  textFont("sans-serif");
  textSize(100);
  textAlign(CENTER);
  textStyle(BOLD);
  stroke('deepskyblue');
  strokeWeight(5);
  bgImg = loadImage("clouds.jpg");
  colorIndex = 0;
  bAndWIndex = 0;
}

function draw() {

  image(bgImg, 0, 0, width, height);

  //the normal once a second counter

  if(frameCount%60==0){
    colorIndex++;
  }
  stroke(colorlist[colorIndex%7]);

  text("Replit", mouseX, mouseY);

  //and now a nwe one to flip between black and white twice a second

  if(frameCount%30==0){
    bAndWIndex++;
  }
  stroke(newColors[bAndWIndex%2]);

  text("Rocks", mouseX+150, mouseY);


}
```

</details>

### Choose your own Colors

There are two ways you can specify your colors:

1. [SVG colors link](https://www.december.com/html/spec/colorsvg.html): this is what is used in this repl and looks like `background('lightskyblue)`
2. [RGB picker link](https://www.w3schools.com/colors/colors_picker.asp): the color light sky blue would look like `background(102,204,255)`