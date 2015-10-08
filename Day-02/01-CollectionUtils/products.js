var products = [
    {id :5, name : "Pen", cost : 60, units: 50, category : 1},
    {id :9, name : "Hen", cost : 40, units: 80, category : 2},
    {id :7, name : "Ten", cost : 80, units: 60, category : 1},
    {id :2, name : "Den", cost : 70, units: 90, category : 2},
    {id :4, name : "Zen", cost : 90, units: 30, category : 1}
]

/*
sort
filter
some
all
min
max
avg
groupBy
*/

function print(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}

print("Default List", function(){
    console.table(products);
});

print("Sorting", function(){

});

