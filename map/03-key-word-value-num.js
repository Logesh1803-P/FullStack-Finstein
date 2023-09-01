
function check(e){
    b=[]

    for( i = 0 ; i < e.length;i++){

        if(e[i].name === String || e[i].name === Number || e[i].age === String || e[i].age === Number ){
            b[i] = e[i].name
            b[i] = e[i].age
         }   
        
        }
        return b  
}



arr = [{'name':'logesh','age': 30},{'name':'ayyu',"age":true}]

newarr = arr.map(e => check(e))
console.log(newarr)