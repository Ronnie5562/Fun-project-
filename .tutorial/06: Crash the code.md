# 6. Let's crash the code

Experience your first code error and learn how to fix it
![](https://youtu.be/PLuYGF52M3c)

*(review "Fixing Code Errors" module to learn the common bugs before you begin).*



##  👉 Your turn
### Experience your first code error:
1. Copy the code below into your `script.js` before you start.

<details>
<summary>Show me the code</summary>

```javascript
colorlist =   ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

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
}

function draw() {

  image(bgImg, 0, 0, width, height);

  stroke(colorlist[colorIndex%7]);
  colorIndex++;

  text("Replit", mouseX, mouseY);


}
```

</details>



 

2. Next, add this to the `setup` method:

```javascript
colorIndex = 0;
```

*`colorIndex` will decide what color we want to use and computers like to start at 0.*



3. Then add the following to the `draw` method:

```javascript
stroke(colorlist[colorIndex]);
colorIndex++;
```

- `[colorIndex]` refers to our current color list (remember the colors you chose in module 1?)
- `++` is adding one more color to the index.

Hit `run`.

### Discover what may be wrong:

The code crashes! Why? What's your guess?

<details> <summary>The code crashes because...</summary>
Our list of colors has 7 items in it. When the index goes above that we end up with an error as there are no more colors to display.</details>



### Learn how to fix it:
- `%` operator: a way of dividing two numbers and giving the remainder (not percent in this case).
- If we use `%7` then the number will always be increasing by one and less than 7. 


Your code should look something like this:

```javascript
stroke(colorlist[colorIndex%7]);
colorIndex++;
```

### But argh - what is this new nightmare?! 😱