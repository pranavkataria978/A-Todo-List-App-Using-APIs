function modifyArray(arr) {
    // Write the logic here
    
    
    
    
    var arr1 = arr.filter(function(el){
        
        return el !== undefined;
    })
    
    var arr2 = arr1.filter(function(el){
        
        return el > 0;
    })
    
    var arr3 = arr2.map(function(el){
        
        if(el > 0){
            
            return el*2;
        }
    })
    
    
    arr = arr3;
    return arr3;
}