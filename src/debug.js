import GUI from "lil-gui"

const debug = {
    numberOfSavedImages: 10,
    mouseXcoord: 0,
    mouseYcoord: 0
} 

const gui = new GUI();
const canvasFolder = gui.addFolder("Canvas");
const drawingFolder = gui.addFolder("Drawing");

debug.redrawCanvas = () => {
  window.draw();
}
debug.saveImage = () => {
  saveCanvas("image", "png");
}
debug.saveMultipleImage = async () => {
  try {
    for (let i = 1; i <= debug.numberOfSavedImages; i++) {
      debug.redrawCanvas();
      saveCanvas(`painting_${i}`, "png");
      // Wait between each save to avoid race condition.
      await sleep(100);
    }
  } catch (error) {
    console.log(error);
  }
}

canvasFolder.add(debug, "mouseXcoord").name("Mouse X:").listen().disable();
canvasFolder.add(debug, "mouseYcoord").name("Mouse Y:").listen().disable();
canvasFolder.add(debug, "redrawCanvas").name("Redraw canvas");
canvasFolder.add(debug, "saveImage").name("Save single image");
canvasFolder.add(debug, "saveMultipleImage").name("Save multiple images");
canvasFolder.add(debug, "numberOfSavedImages", 1).name("Number of images to save");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

addEventListener("mousemove", (event) => {
  debug.mouseXcoord = mouseX;
  debug.mouseYcoord = mouseY;
});