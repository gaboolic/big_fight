(function () {
  var map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  var bulletList = new BulletList();

  var playerList = new PlayerList();
  var myself = new Player("myself", map, 0, 0);
  myself.setColor("#ff0000")
  playerList.pushPlayer(myself);

  var p2 = new Player("biubiubiu", map, 6, 6);
  p2.setColor("#00ff00");
  playerList.pushPlayer(p2);


  var paint = new Paint(map, playerList, bulletList);
  paint.start();

  var canvas = document.getElementById("myCanvas");
  canvas.onkeydown = function (e) {
    if (e.keyCode == 37) {
      myself.left();
    } else if (e.keyCode == 39) {
      myself.right();
    } else if (e.keyCode == 38) {
      myself.up();
    } else if (e.keyCode == 40) {
      myself.down();
    }
    if (e.keyCode == 13) {//32空格 13回车
      //发射
      var bu = new Bullet(myself, map);
      bulletList.pushBullet(bu);
    }

    if (e.keyCode == 65) {//a
      p2.left();
    } else if (e.keyCode == 68) {//d
      p2.right();
    } else if (e.keyCode == 87) {//w
      p2.up();
    } else if (e.keyCode == 83) {//s
      p2.down();
    }
    if (e.keyCode == 74) {//j
      //发射
      var bu2 = new Bullet(p2, map);
      bulletList.pushBullet(bu2);
    }
  };
  canvas.onkeyup = function (e) {
    if (e.keyCode == 37) {
      myself.stop();
    } else if (e.keyCode == 39) {
      myself.stop();
    } else if (e.keyCode == 38) {
      myself.stop();
    } else if (e.keyCode == 40) {
      myself.stop();
    }


    if (e.keyCode == 65) {//a
      p2.stop();
    } else if (e.keyCode == 68) {//d
      p2.stop();
    } else if (e.keyCode == 87) {//w
      p2.stop();
    } else if (e.keyCode == 83) {//s
      p2.stop();
    }
  };

  document.getElementById("myCanvas").focus();
  document.getElementById("myCanvas").click();
})();
