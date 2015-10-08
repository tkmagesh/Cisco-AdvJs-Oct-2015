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
        print("products by cost", function(){
            //do the sorting
            console.table(products);
        })
        print("products by units", function(){
            //do the sorting
            console.table(products);
        })
    });
});

