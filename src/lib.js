export function createGrid(
  gridX,
  gridY,
  gridWidth,
  gridHeight,
  numberOfRows,
  numberOfColumns
) {
  const gridStepX = Math.floor(gridWidth / numberOfRows);
  const gridStepY = Math.floor(gridHeight / numberOfColumns);
  let intersections = [];

  for (let x = gridX; x <= gridX + gridWidth; x += gridStepX) {
    for (let y = gridY; y <= gridY + gridHeight; y += gridStepY) {
      const intersection = { x: x, y: y };
      intersections.push(intersection);
    }
  }
  return intersections;
}
