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
    print("Products By Id", function(){
        function sort(){
            for(var i=0; i<products.length-1; i++)
                for(var j=i+1; j<products.length; j++){
                    var left = products[i],
                        right = products[j];
                    if (left.id > right.id){
                        products[i] = products[j];
                        products[j] = left;
                    }
                }
        }
        sort();
        console.table(products);
    });
    print("Any collection by any attribute", function(){
        //modify the below function
        function sort(list, attrName){
            for(var i=0; i<list.length-1; i++)
                for(var j=i+1; j<list.length; j++){
                    var left = list[i],
                        right = list[j];
                    if (left[attrName] > right[attrName]){
                        list[i] = list[j];
                        list[j] = left;
                    }
                }
        }
        print("products by cost", function(){
            sort(products, "cost");
            console.table(products);
        })
        print("products by units", function(){
            sort(products, "units");
            console.table(products);
        })
    });
     print("Any collection by any comparer", function(){
        //modify the below function
        function sort(list, compareFn){
            for(var i=0; i<list.length-1; i++)
                for(var j=i+1; j<list.length; j++){
                    var left = list[i],
                        right = list[j];
                    if (compareFn(left, right) > 0){
                        list[i] = list[j];
                        list[j] = left;
                    }
                }
        }
        print("products by value [ units * cost ]", function(){
            var productComparerByValue = function(p1, p2){
                var p1Value = p1.units * p1.cost,
                    p2Value = p2.units * p2.cost;
                if (p1Value < p2Value) return -1;
                if (p1Value === p2Value) return 0;
                return 1;
            }
            sort(products, productComparerByValue);
            console.table(products);
        })
    });
});

