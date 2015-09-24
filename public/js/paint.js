function Paint(map, playerList, bulletList) {
  var starting = true;

  var xOffset = 20;
  var yOffset = 20;
  var gridSize = 40;

  var c = document.getElementById("myCanvas");
  var cxt = c.getContext("2d");
  cxt.fillStyle = "#FF0000";

  function paintMap() {
    cxt.fillStyle = "#eeeeee";
    cxt.fillRect(0, 0, 500, 500);
    cxt.fillStyle = "#000000";
    var i = 0;
    for (i = 0; i <= map.length; i++) {
      cxt.moveTo(xOffset, yOffset + i * gridSize);
      cxt.lineTo(xOffset + gridSize * map.length, yOffset + i * gridSize);
    }
    for (i = 0; i <= map.length; i++) {
      cxt.moveTo(xOffset + i * gridSize, yOffset);
      cxt.lineTo(xOffset + i * gridSize, yOffset + gridSize * map.length);
    }
    cxt.stroke();

    for (var h = 0; h < map.length; h++) {
      for (var w = 0; w < map[h].length; w++) {
        //console.log(h + "," + w + ":" + map[h][w]);
        if (map[h][w] == 1) {
          cxt.fillRect(xOffset + w * gridSize + 1, yOffset + h * gridSize + 1, gridSize - 2, gridSize - 2);
        }
      }
    }
  }

  function paintPlayer() {
    var i;
    for (i = 0; i < playerList.length; i++) {
      var p = playerList[i];
      cxt.fillStyle = p.getColor();
      cxt.fillRect(xOffset + p.x * gridSize + 1, yOffset + p.y * gridSize + 1, gridSize - 2, gridSize - 2);
    }
  }

  function paintBullet() {
    var i;
    for (i = 0; i < bulletList.length; i++) {
      var p = bulletList[i];
      cxt.fillStyle = p.owner.getColor();
      cxt.fillRect(xOffset + p.x * gridSize + 1, yOffset + p.y * gridSize + 1, gridSize - 2, gridSize - 2);
    }
  }

  function check() {
    //检查子弹
  }


  function start() {
    if (!starting) {
      return;
    }
    //do paint
    paintMap();
    paintPlayer();
    paintBullet();
    check();
    setTimeout(start, 50);
  }

  function stop() {
    starting = false;
  }

  return {
    start: start,
    stop: stop
  };
}

