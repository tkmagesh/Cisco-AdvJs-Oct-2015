/*SalaryCalculator - class

attributes
    basic, hra, da, tax & salary
methods
    calculate()*/


function SalaryCalculator(basic, hra, da, tax){
    this.basic = basic;
    this.hra = hra;
    this.da = da;
    this.tax = tax;
    this.__salary = 0;

}
SalaryCalculator.prototype.getSalary = function(){
    return this.__salary;
}
SalaryCalculator.prototype.calculate = function(){
    var gross = this.basic + this.hra + this.da;
    this.__salary = gross * ((100-this.tax)/100);
}
