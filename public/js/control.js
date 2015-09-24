(function () {
  var map = [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  var bulletList = new BulletList();

  var playerList = new PlayerList();
  var myself = new Player("myself", map, 0, 0);
  myself.setColor("#ff0000")
  playerList.pushPlayer(myself);

  var p1 = new Player("p1", map, 5, 5);
  p1.setColor("#00ff00");
  playerList.pushPlayer(p1);


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
    if (e.keyCode == 32) {
      //发射
      var bu = new Bullet(myself,map);
      bulletList.pushBullet(bu);
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
  };

  document.getElementById("myCanvas").focus();
  document.getElementById("myCanvas").click();
})();
