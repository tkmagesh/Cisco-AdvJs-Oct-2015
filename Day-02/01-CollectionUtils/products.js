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
sum
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

print("Filter", function(){

    function filter(list, criteriaFn){
        var result = [];
        for(var i=0; i<list.length; i++)
            if (criteriaFn(list[i]))
                result.push(list[i]);
        return result;
    }
    var costlyProductCriteria = function(product){ return product.cost > 50; };

    function negate(criteriaFn){
        return function(){ return !criteriaFn.apply(this, arguments); };
    }

    print("Costly products", function(){
        var costlyProducts = filter(products, costlyProductCriteria);
        console.table(costlyProducts);
    });
    print("Affordable products", function(){
        var affordableProductCriteria = negate(costlyProductCriteria);
        var affordableProducts = filter(products, affordableProductCriteria);
        console.table(affordableProducts);
    });

    var category1ProductCriteria = function(product){ return product.category === 1; };
    print("Category1 products", function(){
        var category1Products = filter(products, category1ProductCriteria);
        console.table(category1Products);
    });

    print("Non Category1 products", function(){
        //var nonCategory1ProductCriteria = function(product){ return !category1ProductCriteria(product) };
        var nonCategory1ProductCriteria = negate(category1ProductCriteria);
        var nonCategory1Products = filter(products, nonCategory1ProductCriteria);
        console.table(nonCategory1Products);
    });
});

print("Some", function(){
    function some(list, criteriaFn){
        for(var i=0; i<list.length; i++)
            if (criteriaFn(list[i])) return true;
        return false;
    }
    print("Are there any costly products?", function(){
        var costlyProductCriteria = function(product){ return product.cost > 50; };
        console.log(some(products, costlyProductCriteria));
    });
});
print("All", function(){
    function all(list, criteriaFn){
        for(var i=0; i<list.length; i++)
            if (!criteriaFn(list[i])) return false;
        return true;
    }
    print("Are all the products costly?", function(){
        var costlyProductCriteria = function(product){ return product.cost > 50; };
        console.log(all(products, costlyProductCriteria));
    });
});

