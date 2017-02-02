require.config({
    paths: {
        'jQuery': 'vendor/jquery',
        'underscore': 'vendor/underscore'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        }
    }
});
require(['module1', 'path/to/module2', 'jQuery'], function (module1ref, module2ref, $) {
    var module1 = new module1ref();
    var module2 = new module2ref();
    console.log("nome: " + module1.getEmail());
    console.log("e-mail: " + module1.getName());
});