requirejs.config({
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});
require(['backbone', 'jquery', 'SalaryCalculator', 'SalaryCalculatorView', 'utils'], function(Backbone, $, SalaryCalculator, SalaryCalculatorView){
    console.log(Backbone);
    $(function(){
        var calculator = new SalaryCalculator();
        var calculatorView = new SalaryCalculatorView(calculator);
        calculatorView.init();
    });
});
