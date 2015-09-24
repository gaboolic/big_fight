function BulletList() {
}
BulletList.prototype = [];
BulletList.prototype.pushBullet = function (obj) {
  this.push(obj);
  obj.bulletList = this;
};
BulletList.prototype.remove = function (obj) {
  var index = this.indexOf(obj);
  if (index != -1) {
    this.splice(index, 1);
  }
};