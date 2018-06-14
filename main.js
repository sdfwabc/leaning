$(function () {
  var pos = []
  function Start (time) {
    Start.time = time
  };
  Start.prototype.map = function () {
    var ctx = $('.canvas')[0].getContext('2d')
    var w = ctx.canvas.width
    var h = ctx.canvas.height
    var numx = 4
    var numy = 3
    for (var i = 0; i < numx; i++) {
      for (var j = 0; j < numy; j++) {
        var x = i * w / numx + w / numx / 2
        var y = j * h / numy + h / numy
        ctx.scale(numx / numy, numy / numx)
        ctx.beginPath()
        pos.push([x, y])
        ctx.arc(x, y, (w + h) / 20, 0, 2 * Math.PI)
        ctx.strokeStyle = 'red'
        ctx.stroke()
        ctx.scale(numy / numx, numx / numy)
      }
    }
    console.log(pos)
  }
  var start = new Start()
  start.map()
})
