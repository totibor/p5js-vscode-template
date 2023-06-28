/**
 * Utility functions.
 */

// HTML elements
 const saveBtn = document.querySelector("#save");
 const redrawBtn = document.querySelector("#redraw");
 const saveMultipleBtn = document.querySelector("#save_multiple");
 const numberOfPainings = document.querySelector("#numberOfPrints");
 const mouseXcoordinate = document.querySelector("#x_coordinate");
 const mouseYcoordinate = document.querySelector("#y_coordinate");

 // Event listeners fos buttons
 saveBtn.addEventListener("click", () => saveCanvas("painting", "png"));
 redrawBtn.addEventListener("click", () => setup());
 saveMultipleBtn.addEventListener("click", () => printMultiple());
 
 // Event listener for keypress
 window.addEventListener("keypress", async function (ev) {
   if (ev.key === "r") {
     setup();
   } else if (ev.key === "s") {
     saveCanvas("painting", "png");
   } else if (ev.key === "l") {
     printMultiple();
   }
 });

 // Event listener for mouse
 window.addEventListener("mousemove", () => {
   mouseXcoordinate.textContent = `X: ${Math.ceil(mouseX)}`;
   mouseYcoordinate.textContent = `Y: ${Math.ceil(mouseY)}`;
 })
 
 // Generate multiple outputs by calling setup() and save each output.
 async function printMultiple() {
   let printsNumber;
   try {
     printsNumber = Number(numberOfPainings.value);
     for (let i = 1; i <= printsNumber; i++) {
       setup();
       saveCanvas(`painting_${i}`, "png");
       // ms to wait between each save to avoid race condition.
       await sleep(300);
     }
   } catch (error) {
     console.log(error);
   }
 }
 
 /**
  * Return an array of [x, y] values corresponds to the intersections
  * of the grid lines. There is always one less intersection on a given
  * axis then the specified number of row / axis.
  * For example: For a 5x5 grid there are 4x4 intersection.
  * @param {Number} numberOfRows Number of rows.
  * @param {Number} numberOfColumns Number of columns.
  * @returns Array of [x, y] coordinates.
  */
 function gridIntersections(numberOfRows, numberOfColumns) {
   const gridStepX = width / numberOfRows;
   const gridStepY = height / numberOfColumns;
   let intersections = [];
 
   for (let x = gridStepX; x < width; x += gridStepX) {
     for (let y = gridStepY; y < height; y += gridStepY) {
       const intersection = [x, y];
       intersections.push(intersection);
     }
   }
   return intersections;
 }
 
 function sleep(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
 }
 