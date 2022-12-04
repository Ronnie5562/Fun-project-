# 10. Return of the rainbow

In this chapter we will use  *lists* and set a differnt rainbow color for each copy. 

![](https://youtu.be/Y9mz4FVjTAg)



<details>
<summary>tl;dr</summary>

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

  for (let i = 0; i < 50; i += 1) {
    x = mouseX;
    y = mouseY*i*1/50;
    stroke(colorlist[i%7]);
    push();
    translate(x,y);
    scale(i*1/50);
    text("Replit", 0, 0);
    pop();
   }

  ellipse(20,20,20);
  ellipse(20,200,20);
  ellipse(400,20,20);
  ellipse(400,200,20)


}
```

</details>

## Let's summarize:
- Change the number of copies (just make sure you change the number everywhere) of the image.
- Clean up the code by replacing `colorIndex` with `i`.

##  👉 Your turn
- Replace every `10` with the number of your choice:

```javascript
  for (let i = 0; i < 50; i += 1) {
    x = mouseX;
    y = mouseY*i*1/50;
    push();
    translate(x,y);
    scale(i*1/50);
    text("Replit", 0, 0);
    pop();
   }
```


 - Add `stroke(colorlist[colorIndex++%7]);` *just below*  where we've been messing with `x` and `y`:

```javascript
  for (let i = 0; i < 50; i += 1) {
    x = mouseX;
    y = mouseY*i*1/50;
    stroke(colorlist[colorIndex++%7]);
    push();
    translate(x,y);
    scale(i*1/50);
    text("Replit", 0, 0);
    pop();
   }
```


- Instead of manually changing the `colorIndex` value each time it loops, use `i` (you are already using this variable anyway)
- Replace `[colorIndex++%7]` with `colorlist[i%7]`

```javascript
image(bgImg, 0, 0, width, height);

  for (let i = 0; i < 50; i += 1) {
    x = mouseX;
    y = mouseY*i*1/50;
    stroke(colorlist[i%7]);
    push();
    translate(x,y);
    scale(i*1/50);
    text("Replit", 0, 0);
    pop();
   }
```
### Happy days! 
Now it's cycling through colors as it goes, and we've got a little rainbow.

### Let's try a lille challenge next OR you can always skip to the next module