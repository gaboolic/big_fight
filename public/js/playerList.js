function PlayerList() {
}
PlayerList.prototype = [];
PlayerList.prototype.pushPlayer = function (obj) {
  this.push(obj);
  obj.playerList = this;
};
PlayerList.prototype.remove = function (obj) {
  var index = this.indexOf(obj);
  if (index != -1) {
    this.splice(index, 1);
  }
};