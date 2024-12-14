/// <reference path="node_modules/@types/p5/global.d.ts" />

const debug = {
  
}

function setup() {
  createCanvas(400, 400);

  select("canvas").position(
    windowWidth / 2 - width / 2,
    windowHeight / 2 - height / 2
  );
}

function draw() {
  background(255);
}
