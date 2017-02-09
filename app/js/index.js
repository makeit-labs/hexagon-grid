import paper, { Point } from 'paper';
import Hexagon from './hexagon';

const canvas = document.querySelector('canvas');
paper.setup(canvas);

const size = 50;
const dimensions = { x: 12, y: 12 };

function pointFor({x, y}, radius) {
  const countOfEvenRows = Math.floor(y / 2);
  const countOfOddRows = y - countOfEvenRows;
  let yPoint = 2 * radius * countOfOddRows + radius * countOfEvenRows;
  let xPoint = (radius * 2 * Math.sqrt(3/4)) * x;
  if (!!(y % 2)) {
    xPoint += size * Math.sqrt(3/4);
    yPoint -= size / 2;
  }
  return new Point(xPoint + 50, yPoint + 50);
}

for (let x = 0; x < dimensions.x; x++) {
  for (let y = 0; y < dimensions.y; y++) {
    let center = pointFor({x, y}, size);
    const hexagon = new Hexagon(center, size);
    hexagon.rotate(360 / 6 * Math.floor(Math.random() * 6));
  }
}

paper.view.draw();
