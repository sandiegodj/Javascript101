//Finds the largest prime factor of the number 600851475143 or any number
primeFactor = [];
function isPrime(n) {

   var Prime = true;
   
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          Prime = false;     
      }
   }
   return Prime;
}

function largestPrimeFactor(n){
    
    for (i = 2; i < n; i++) {   
        while (n % i === 0) {
            if(isPrime(i)) {
                primeFactor.push(i);
    		    n /= i;
            }
        }
    }
    if (isPrime(n)){
        primeFactor.push(n); 
        return primeFactor[primeFactor.length - 1];
    }
    return primeFactor[primeFactor.length - 1];
}
largestPrimeFactor(600851475143);