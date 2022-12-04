# 12. Animate with Math

Learn how to use math to create fun animations

![](https://youtu.be/Im59gxJ9xbo)

<details>
<summary>Show me the final code</summary>

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
    //x = mouseX;
    x = width / 2 + 50 * sin(frameCount / 15 + i*1/50)
    y = height/2*i*1/50;
    stroke(colorlist[(colorIndex+i)%7]);
    push();
    translate(x,y);
    scale(i*1/50);
    text("Replit", 0, 0);
    pop();
   }
  colorIndex++;


}
```

</details>

## Let's summarize:
- Switch out the `x=mouseX` code to make it swarm, wiggle, or dance (the choice is yours!).

##  👉 Your turn
- Switch out your `x=mouseX` code for this to make the image **swarm** ∿∿∿∿∿∿
```javascript
x = width / 2 + 50 * sin(frameCount / 15 + i)
```



- Change the `x` code a bit more if you prefer the image to **wiggle**

```javascript
x = width / 2 + 50 * sin(frameCount / 15 + i*1/50)
```




- Add the value to the `stroke(colorlist[i%7]);` code like this:


```javascript
stroke(colorlist[(i+colorIndex)%7]);
```
- And as the last thing in the `draw` method (after the `for` loop) add this to make your rainbow **dance**.

```javascript
colorIndex++;
```


### Groovy!!🌈
### Let's share your work with Replit community 👯‍♀️ 
