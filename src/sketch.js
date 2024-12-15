/// <reference path="../node_modules/@types/p5/global.d.ts" />

const params = {
}

function setup() {
createCanvas(800, 800);

  noLoop();
  select("canvas").position(
    windowWidth / 2 - width / 2,
    windowHeight / 2 - height / 2
  );
}

function draw() {
  const c = color(random(0, 255), random(0, 255), random(0, 255))
  background(c);
}
