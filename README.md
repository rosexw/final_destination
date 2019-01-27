# Exercise 
Write a `function` to return the final position after increasing or decreasing an `int` with a min (starting point) and max (ending point) number.
 
## Method explanation:
The first parameter is the current position.
The 2nd parameter is the # of moves (negative means going backwards or left)
The 3rd parameter is the first number of the array, 4th is the last.
If end / start of array is reached, loop from the other end again.
 
## Method Interface:
```
public int cycle( int current , int imove , int start , int end ) {
 // function details 
}
```

## Examples to test code with:
```
console.log(cycle(3,1,3,7)); //[3,4,5,6,7] result is 4
console.log(cycle(3,1,1,5)); // [1,2,3,4,5] result is 4
console.log(cycle(7,-2,3,7)); // [3,4,5,6,7] result is 5
console.log(cycle(3,-3,1,5)); // [1,2,3,4,5] result is 5
console.log(cycle(3,3,1,5)); // [1,2,3,4,5] result is 1
console.log(cycle(3,10,1,6)); // [1,2,3,4,5,6] result is 1
console.log(cycle(3,-10,1,6)); // [1,2,3,4,5,6] result is 5
console.log(cycle(8,-10,1,3)); // [1,2,3] result is ERROR, number out of range
```

## My plan:
MVP: Write this function in any language, but preferably JavaScript or any JavaScript framework

Bonus: Complete this with UI/UX using HTML5 & CSS.

My additional features:
- Use React framework to display UI/UX on screen and to make it interactive on a webpage
- Display it as a form that takes user input and displays the final number
- Deploy to a GitHub page
