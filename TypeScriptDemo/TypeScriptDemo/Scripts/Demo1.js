var Sayings;
(function (Sayings) {
    var Greeter = (function () {
        function Greeter(greeting) {
            this.greeting = greeting;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    })();
    Sayings.Greeter = Greeter;
})(Sayings || (Sayings = {}));

var greeter = new Sayings.Greeter("module fun!");

var button = document.getElementById('btn');
button.onclick = function () {
    alert(greeter.greet());
};
//@ sourceMappingURL=Demo1.js.map
