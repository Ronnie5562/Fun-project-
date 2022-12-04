# 3. Drawing with… draw()

In this chapter you will understand how the `draw()` function works and use it to create display your name instead of circles!

![](https://youtu.be/v_8_4F5G1GE)





<details>
<summary>tl;dr</summary>

```javascript
colorlist =   ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('lightskyblue');
}

function draw() {

  fill('white');
  textFont("sans-serif");
  textSize(100);
  textAlign(CENTER);
  textStyle(BOLD);
  stroke('deepskyblue');
  strokeWeight(5);
  text("Replit", 200, 150);

}
```

</details>

## Let's summarize:
- All code related to styling the text must be written *before* `text`, but still within the `draw()` curly braces to tell the text what to do *before* you draw.
- To reset the default font, size, and style, use `fill`, `textFont`, and `textSize`.
- Add other style with `textAlign` and `stroke`.

##  👉 Your turn
- Remove the following code:
```javascript
noStroke();
fill(random(colorlist));
ellipse(mouseX, mouseY, 25, 25);
```

- Replace it with your name:

```javascript
  text("Replit", 200, 150);
```




- Add this code to change the text, the font style, and font size:
```javascript
fill('white');
textFont("sans-serif");
textSize(100);
```

- Add this code to align the text and make it bold:

```javascript
textAlign(CENTER);
textStyle(BOLD);
```
- Style the border:

```javascript
stroke('deepskyblue');
strokeWeight(5);
```

Ooooh! We're getting there. 

### Up for a quick challenge next? 💪