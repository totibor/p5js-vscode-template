/// <reference path="node_modules/@types/p5/global.d.ts" />
/* TypeScript Triple-slash directive. It adds type and function descriptions for p5.js*/

function setup() {
  // put setup code here
  createCanvas(400, 400);

  // position the canvas in the middle of the window
  select("canvas").position(
    windowWidth / 2 - width / 2,
    windowHeight / 2 - height / 2
  );
}

function draw() {
  // put drawing code here
  background(255);
}
