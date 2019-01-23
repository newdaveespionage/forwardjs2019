#Four Semesters of CS in Six Hours 

##Brian Holt 

* took some CS, dropped out
* currently working with Microsoft 
* recommended learning Scheme - Book "The Little Schemer"

##Course

* Not expected to finish everything in one sitting
* Functional programming based 

##Big O

* Find the biggest contributer (in this case biggest exponent)
* Look for the largest exponent 

##Linear and Exponential

* with code containing a loop, the iterations are most likely the biggest component of adding code execution weight 
* if there's a linear iteration, it's O(n), exponential O(n to the power of 2)
* the worst-case scenario needs to be considered when examining the Big O 
* tuples (not a type in JS, but a type in Python)
  * Array of pairs of numbers
* each loop wrapping (loop within a loop) results in additional exponents 

##Recursion and Logarithmic

* in recursion Big O ends up with log n
* logarithmic due to the methodology of recursion, each recursive call has (potentially) different parameters
* With recursion, figure out the "Base Case" (when do I stop executing?) first, else stack overflows happen
* Base case needs to capture worst-case scenarios as well to prevent unexpected consequences
* Pure Functions: functions that do no modify state around them
* Memoize: remember results of pure functions to expedite execution and reduce stack and memory impact
* Try not to change the shape of your objects (initialize everything as potential vs. actual)
* Reasoning: Javascript engines build a C++ object in the background and reference it if it matches, if it does not, then it has to create a new object


##Recursion Exercise 

* Jasmine ignores x prefixed, f for focused (only runs f prefixed items)
* Base case: if n is 1, return 1
* Exception, if less than 1, throw error, bad input 

##Sorting Algorithms

* Bubble sort, find largest, bubble up to top
* inefficient as it requires multiple iterations 
* no need to track previously sorted items (at top descending)

