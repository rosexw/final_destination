const cycle = (curr, imove, start, end) => {
    const length = end - start + 1;
    const range = Array.from({ length }, (_, i) => start + i);
    if(curr>=start && curr<=end){
        newCurr = curr + imove;
        while(newCurr > end){
           newCurr = newCurr-length;            
        }
        while(newCurr < start){
            newCurr = newCurr+length;
        }
        return newCurr;
    } else {
        throw new Error("Error! This number is out of range!");
    }
}

console.log(cycle(3,1,3,7)); //[3,4,5,6,7] result is 4
console.log(cycle(3,1,1,5)); // [1,2,3,4,5] , result is 4
console.log(cycle(7,-2,3,7)); // [3,4,5,6,7] , result is 5
console.log(cycle(3,-3,1,5)); // [1,2,3,4,5] , result is 5
console.log(cycle(3,3,1,5)); // [1,2,3,4,5] , result is 1
console.log(cycle(3,10,1,6)); // [1,2,3,4,5,6] , result is 1
console.log(cycle(3,-10,1,6)); // [1,2,3,4,5,6] , result is 5
console.log(cycle(8,-10,1,3)); // [1,2,3] , result is ERROR, number out of range