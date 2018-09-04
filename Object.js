function fn() {
  this.a = 0;
  this.b = function () {
    console.log(this.a);
  }
}
fn.prototype = {
  b: function () {
    this.a = 20;
    console.log(this.a);
  },
  c: function () {
    this.a = 30;
    console.log(this.a);
  }
}
var myfn = new fn();
myfn.b(); //20
myfn.c(); //30