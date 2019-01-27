
function cycle (curr, imove, start, end) {
    const length = end - start + 1;
    const range = Array.from({ length }, (_, i) => start + i);
    if (curr >= start && curr <= end) {
        let newCurr = curr + imove;
        while (newCurr > end) {
           newCurr = newCurr-length;            
        }
        while (newCurr < start) {
            newCurr = newCurr+length;
        }
        return newCurr;
    } else {
        throw new Error("Error! This number is out of range!");
    }
};

export default cycle;