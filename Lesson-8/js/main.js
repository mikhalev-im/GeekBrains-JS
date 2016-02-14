(function () {

  var canvas = this.__canvas = new fabric.Canvas('canvas', {
    containerClass: 'canvas'
  });
  canvas.setHeight(500);
  canvas.setWidth(500);
  
  fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
  fabric.Object.prototype.transparentCorners = false;

  fabric.Sprite.fromURL('img/sprite3.png', createSprite(2, 2));

  function createSprite(i, j) {
    return function(sprite) {
      sprite.set({
        left: i * 100 + 25,
        top: j * 100 + 25,
        angle: fabric.util.getRandomInt(-30, 30)
      });
      canvas.add(sprite);
      setTimeout(function() {
        sprite.play();
      }, fabric.util.getRandomInt(1, 10) * 100);
    };
  }

  (function render() {
    canvas.renderAll();
    fabric.util.requestAnimFrame(render);
  })();

})();