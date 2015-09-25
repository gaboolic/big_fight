function Player(name, map, x, y) {
  var $this = this;
  this.name = name;
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.direct = "right";
  this.isDie = false;
  function run() {
    if($this.isDie) {
      return;
    }
    //check map
    if (($this.y + $this.vy >= 0 && $this.y + $this.vy < map.length)
      && ($this.x + $this.vx >= 0 && $this.x + $this.vx < map[0].length)) {
      if (!map[$this.y + $this.vy][$this.x + $this.vx]) {
        $this.x += $this.vx;
        $this.y += $this.vy;
      }
    }
    //console.log($this.x+" "+$this.vx);
    //console.log($this.y+" "+$this.vy);
    setTimeout(run, 50);
  }
  setTimeout(run, 50);
}

Player.prototype.setX = function (x) {
  this.x = x;
};

Player.prototype.setY = function (y) {
  this.y = y;
};

Player.prototype.left = function () {
  this.vx = -1;
  this.direct = "left";
};

Player.prototype.right = function () {
  this.vx = 1;
  this.direct = "right";
};

Player.prototype.up = function () {
  this.vy = -1;
  this.direct = "up";
};

Player.prototype.down = function () {
  this.vy = 1;
  this.direct = "down";
};

Player.prototype.stop = function () {
  this.vx = 0;
  this.vy = 0;
};

Player.prototype.setAllPlayer = function (playerList) {
  this.playerList = playerList;
};

Player.prototype.setColor = function (color) {
  this.color = color;
};
Player.prototype.getColor = function () {
  return this.color;
};
Player.prototype.die = function () {
  this.isDie = true;
  console.log(this.name + " die!");
  this.playerList.remove(this);
};