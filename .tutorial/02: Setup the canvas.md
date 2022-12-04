# 2. Setting up the canvas

In this chapter you will learn how to change and customize the background

![](https://youtu.be/iCD6OelBHks)

**Would you rather just see the code? Click `tl;dr` ("too long; didn't read") above to get straight to the code each time.**
<details>
<summary>tl;dr</summary>

```javascript

colorlist =   ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('lightskyblue');
}

function draw() {
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 25, 25);
}

```

</details>



## Let's summarize:
- The `setup method` is everything inside the curly braces `{}` and is only done once when the `run` button is pressed for the first time.
- `createCanvas` builds our canvas *(our background)* that fills the entire page.
- `background` sets the color 
 



##  👉 Your turn
- Set your canvas:
```javascript
createCanvas(windowWidth, windowHeight);
```
- Replace the `255` with any color of your choice from [this list](https://www.december.com/html/spec/colorsvg.html). 
```javascript
background(255);
```
- I'm going for `'lightskyblue'` - and don't forget those quotes - we need 'em!

```javascript
background('lightskyblue');
```
Click that **Run** button again. Voila!

### Good job! Next, let's change your artist tools and draw something else 🎨🖌
