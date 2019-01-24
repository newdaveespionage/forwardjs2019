# Four Semesters of CS in Six Hours 

[Part 1](https://btholt.github.io/four-semesters-of-cs/)

[Part 2](https://btholt.github.io/four-semesters-of-cs-part-two/)

## Brian Holt 

* brian dot holt at microsoft dot com
* took some CS, dropped out
* currently working with Microsoft 
* recommended learning Scheme - Book "The Little Schemer"
* "Corman's Algorithms"
* "The Imposter's Handbook"


## Course

* Not expected to finish everything in one sitting
* Functional programming based 

## Big O

* Find the biggest contributer (in this case biggest exponent)
* Look for the largest exponent 

## Linear and Exponential

* with code containing a loop, the iterations are most likely the biggest component of adding code execution weight 
* if there's a linear iteration, it's O(n), exponential O(n to the power of 2)
* the worst-case scenario needs to be considered when examining the Big O 
* tuples (not a type in JS, but a type in Python)
  * Array of pairs of numbers
* each loop wrapping (loop within a loop) results in additional exponents 

## Recursion and Logarithmic

* in recursion Big O ends up with log n
* logarithmic due to the methodology of recursion, each recursive call has (potentially) different parameters
* With recursion, figure out the "Base Case" (when do I stop executing?) first, else stack overflows happen
* Base case needs to capture worst-case scenarios as well to prevent unexpected consequences
* Pure Functions: functions that do no modify state around them
* Memoize: remember results of pure functions to expedite execution and reduce stack and memory impact
* Try not to change the shape of your objects (initialize everything as potential vs. actual)
* Reasoning: Javascript engines build a C++ object in the background and reference it if it matches, if it does not, then it has to create a new object


## Recursion Exercise 

* Jasmine ignores x prefixed, f for focused (only runs f prefixed items)
* Base case: if n is 1, return 1
* Exception, if less than 1, throw error, bad input 

## Sorting Algorithms

### Bubble Sort

* Bubble sort, find largest, bubble up to top
* inefficient as it requires multiple iterations 
* no need to track previously sorted items (at top descending)
* While vs Do - Do executes once then checks, while executes only if check passes initially 
* worst case: inverse sorted data

### Insertion Sort

* Keep track of sorted side of list, unsorted side of list 
* Start with completely unsorted, move sorted indicator 
* check if item is smaller or larger when compared to sorted items, place accordingly on "sorted" side
* One loop to evaluate each item in list
* internal loop to evaluate sorted against item, in reverse (i--)
* Heuristic: bias in an algorithm
* the heuristic here is the sorted threshold, anything below that does not need to be evaluated

### Merge Sort 

* has recursion and multiple array comparisons so O(nlogn)
* avoids unnecessary comparisons through destructuring source material
* compares the same way every time (predictable performance)
* best case scenario is same as worst case

### Quicksort 

* one large array, break down into smaller
* smaller arrays are purposely not equal
* many variations of types of quicksort
* take last number in array
* use it as pivot
* assume returned arrays are sorted
* concat left list, pivot, right list (left = less, right = greater)
* base case is list of 1 or 0
* worst case is still nlogn
* variant to avoid overhead with sorted lists is quicksort 3


## Interfaces 

* the black box level of abstraction
* does not describe implementation

### Set 

* A collection 
* Storage and retrieval 
* Good for caches, deduping 
* Can be created in Javascript

### Map

* Keys are unique
* Values can be duplicated 
* Weakmap and Weakset exist but are not highly used

### Stacks 

* Ordered
* LIFO (Last In First Out)
* Push and Pop are derived from Stacks 
* Peek used to look at top value 
* Useful for languages 

### Queue

* Ordered 
* FIFO (First In First Out)
* Peek used to look at next value 
* Can have priorities 
* Priority allows item to move up the queue until it is behind something higher priority 
* Also called heaps

## Implementation 

* The inner workings under the hood of interfaces 

### Array List 

* Uses pointers locate data in an array 
* When accessing an index of an array, it's actually moving the pointer to the appropriate spot in memory and retrieving that information 
* When removing items from an array, it causes a full operation just to move indexes (very expensive)
* Requires definition of length outright rather than on the fly in C 

### Linked List 

* Every item points to the next one until null, memory used does not have to be sequential
* Can allocate memory on the fly instead of having to predefine
* Lookups are time consuming as every item prior to the desired item must be inspected for the link to the next item
* Adding and removing is easy, take links for remaining or new items and adjust

### Binary Search Tree 

* Has a root node
* Everything in the left subtree is smaller
* Everything in the right subtree is larger 
* Every subtree is a Binary Search Tree 
* To Remove find the largest left or smallest right child
* Not a real-life execution tool

### AVL Tree 

* (See Red-Black trees for more optimal Tree type)
* Same structure as BST, but with additional constraints 
* No more than a difference of one height between sub nodes on the tree 
* After add or delete, do balancing which involves rotating extended side of tree until subtrees are balanced within 1 depth
* Can incur overhead in rotations when certain tree structures trigger imbalance after rotation 


