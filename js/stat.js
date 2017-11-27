window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time * -1;
    };
  };

  var redColor = 'rgba(255, 0, 0, 1)';
  var blueColor = 'rgba(0, 0, 255, 1)';

  var getColor = function (colors) {
    if (names[i] === 'Вы') {
      return redColor;
    }
      return blueColor;
  }

  var histogramHeight = 90;
  var step = histogramHeight / (max - 0);

  for (var i = 0; i < times.length; i++) {
    var lineHeight = 15;
    var initialX = 150;
    var initialY = 250;
    var initialTextX = initialX + indent*i;
    var initialTextY = initialY + lineHeight;
    var indent = 90;
    var barWidth = 40;

    ctx.fillStyle = getColor();
    ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);
    ctx.fillText(names[i], initialTextX, initialTextY);
    ctx.fillText(times[i].toFixed(0), initialTextX, initialY + times[i] * step - lineHeight);
  }
}
