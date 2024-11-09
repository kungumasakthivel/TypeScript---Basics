var My = /** @class */ (function () {
    function My() {
        this.pi = 3.14;
    }
    My.prototype.privateConst = function () {
        console.log(this.pi);
    };
    return My;
}());
var c = new My();
c.privateConst();
