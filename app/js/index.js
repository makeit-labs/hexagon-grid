import paper, { Point, Size, Color, Path, Group } from 'paper';

const { RegularPolygon, Rectangle } = Path;

const canvas = document.querySelector('canvas');
paper.setup(canvas);

const size = 30;
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
    const leftTop = center.subtract({x: Math.sqrt(3/4) * size, y: 1/2 * size });
    const rightBottom = center.add({x: Math.sqrt(3/4) * size, y: size });

    const hexagon = new RegularPolygon(center, 6, size);
    hexagon.style = {
      strokeWidth: 1,
      strokeColor: 'black',
      fillColor: '#fffccc'
    };

    const rect = new Rectangle(leftTop, rightBottom);
    rect.fillColor = '#222';

    const mask = new RegularPolygon(center, 6, size);
    const group = new Group(mask, rect);
    group.clipped = true;
  }
}

paper.view.draw();
