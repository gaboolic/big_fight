function Bullet(player, map) {
  var $this = this;
  this.owner = player;
  this.x = player.x;
  this.y = player.y;
  this.isDie = false;

  if (player.direct == "left") {
    this.direction = new Direction(-1, 0);
  } else if (player.direct == "right") {
    this.direction = new Direction(1, 0);
  } else if (player.direct == "up") {
    this.direction = new Direction(0, -1);
  } else if (player.direct == "down") {
    this.direction = new Direction(0, 1);
  }

  function run() {
    if ($this.isDie) {
      return;
    }
    //check map
    var expectX = $this.x + $this.direction.vx;
    var expectY = $this.y + $this.direction.vy;
    //console.log(expectX + "," + expectY);
    //console.log($this.direction.vx + "," + $this.direction.vy);
    if (!(expectY >= 0 && expectY < map.length && expectX >= 0 && expectX < map[0].length)) {
      $this.die();
      return;
    }
    if (!map[expectY][expectX]) {
      $this.x += $this.direction.vx;
      $this.y += $this.direction.vy;
    } else {
      $this.die();
      return;
    }
    //check kill player
    var i;
    for (i = 0; i < player.playerList.length; i++) {
      var p = player.playerList[i];
      if ($this.x == p.x && $this.y == p.y) {
        if ($this.owner != p) {
          console.log($this.owner.name + " kill " + p.name + "!");
          alert($this.owner.name + " kill " + p.name + "!")
          p.die();
          $this.die();
        }
      }
    }
    setTimeout(run, 50);
  }

  setTimeout(run, 50);
}
Bullet.prototype.die = function () {
  this.isDie = true;
  if (this.bulletList != null) {
    this.bulletList.remove(this);
  }
};