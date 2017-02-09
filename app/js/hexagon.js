import paper, { Size, Color, Path, Group } from 'paper';

const { RegularPolygon, Rectangle } = Path;

export default function Hexagon(center, size) {
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

  const hexagonGroup = new Group(hexagon, group);
  return hexagonGroup;
}
