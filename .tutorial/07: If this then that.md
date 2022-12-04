# 7. If this then that

In this chapter you will learn how to use *if statement* to slow down the flashing colors

![](https://youtu.be/Lb5ytyX-tVo)



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

  if(frameCount%60==0){
    stroke(colorlist[colorIndex%7]);
    colorIndex++;
  }

  text("Replit", mouseX, mouseY);


}
```

</details>

## Let's summarize:

- *if statements* control the flow of the code by running the code or NOT based on a set condition.
- Your condition goes in `()`
  and the code within the `{ }` will only run if the condition inside `()` is met.
- `frameCount` counts the frames elapsed since loading and `%` operator is used to identify a specific frame.

##  👉 Your turn

### Add this `framecount` code

```javascript
frameCount%60==0
```
(*If you want the code to change faster, choose a smaller number. To make it slower, choose a larger number.*)

as the condition inside the `( )` in the *if* statement:
```javascript
if(){

}
```



This means: 
- We're finding the remainder of dividing `frameCount` by 60.
- If it's 0 that means it's been one full second since the last time the code ran. (1 second is a good amount of time to change the color).

### Move that color changing line of code (that we added in module 6) into the curly braces.



```javascript
if(frameCount%60==0){
  stroke(colorlist[colorIndex%7]);
  colorIndex++;
}
```

### Wahey! It's updating once per second now! 