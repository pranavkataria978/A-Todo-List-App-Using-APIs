
const counter = (function () {
    // Write the logic here
    
  
       
       
     var count = 0;
    
  
        
    function increase(){
        
        
        	count = count +1;
            return count;
      }
    
    
    function initialize(start){
        
        count = parseInt(start);
        return count;
    }
    
    
    return {
        
        
        count : count,
        initialize : initialize,
        increase : increase
        
    }
        

    
})()