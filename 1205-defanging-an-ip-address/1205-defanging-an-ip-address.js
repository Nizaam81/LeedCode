/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
   let str=address.split("")
    console.log(str)
    for(let i=0;i<str.length;i++){
        if(str[i]==="."){
            str[i]="[.]"
           
        }
        
    }
     return str.join('')
    
};