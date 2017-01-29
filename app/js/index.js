import paper, { Point, Size, Rectangle, Color, Path } from 'paper';

window.onload = () => {
  const canvas = document.querySelector('canvas');
  paper.setup(canvas);

  var topLeft = new Point(10, 20);
  var rectSize = new Size(200, 100);
  var rect = new Rectangle(topLeft, rectSize);



  var renderedRect = new Path.Rectangle(rect);

  renderedRect.style = {
    fillColor: 'black',
    strokeColor: 'red'
  }


  // var myCircle = new Path.Circle(new Point(100, 70), 50);
  // myCircle.fillColor = 'black';



  paper.view.draw();

  console.log(paper.view);
}
