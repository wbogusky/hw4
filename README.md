# hw4

Homework #4 for Computational Practices

How many lines are drawn each frame? In other words, how often does the for loop run?
39 lines are drawn each frame. The for loop runs once per frame or once per draw function.

What do the first, second, and third appearances of the number 10 do in the code?
first - sets the variable x, the starting position of the lines, to 10
second - the second part of a for loop is the condition, and in this case the condition can be described as: when the x-position of the line to be drawn is less than the width of the canvas minus 10.
third - every time the for loop ends, add 10 to the line start x-position (x)


How many times does the loop body run each frame, once the x and y arrays are full?
6

What are two ways of increasing the spacing between rings?
Increasing the amount added to i each loop.
Or by adding a multiplication to the third ellipse argument:  1 + 2 * (x.length - i)

How can you make the ellipse trail longer?
Increase the number of pieces of information that are retained by the array each draw loop.
