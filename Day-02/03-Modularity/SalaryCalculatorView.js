define(['jquery'], function($){
    function SalaryCalculatorView(calculator){
        this.init = function(){
            $("#btnCalculate").click(function(){
                calculator.basic = $("#txtBasic").val().toInt();
                calculator.hra = $("#txtHra").val().toInt();
                calculator.da = $("#txtDa").val().toInt();
                calculator.tax = $("#rangeTax").val().toInt();

                calculator.calculate();
                $("#divResult").html(calculator.salary);
            });
            $("#rangeTax").change(function(){
                $("#spanTax").html(this.value);
            });
        }
    }
    return SalaryCalculatorView;
});
