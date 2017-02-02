define([], function () {
    var returnedModule = function () {
        var _name = 'module1 name';
        var _email = 'email@exemplo.com'
        this.getName = function () {
            return _name;
        }
        this.getEmail = function (){
            return _email;
        }
    };

    return returnedModule;

});