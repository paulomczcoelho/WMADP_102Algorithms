 function reverse(str, len) {
            if (len == str.length) {
                return;
            }
            reverse(str, len + 1);
 
            console.log(str[len]);
 
        }
 
        /* Driver program to test above function */
 
        let a = "Paulo Coelho";
 
        reverse(a, 0);
        
        
//var a = 3;   
//var b = 4;    
 
a = a + b;  // 7
b = a - b;  // 3
a = a - b;  // 4

//a = a1 + b2 = 3 | a = 3
//b = a3 - b2 = 1 | b = 1
//a = a3 - b1 = 2 | a = 2