var inherits = function (Child, Parent) {
    for (var i in Parent.prototype) {
        if (Child.prototype[i]) {
            continue;
        }
        Child.prototype[i] = Parent.prototype[i];
    }
};