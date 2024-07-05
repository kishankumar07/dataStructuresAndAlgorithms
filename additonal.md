Deterministic and non-deterministic : Deterministic means for a specific input the output will always be same and there wont be any randomness in it.


Stack overflow : Stack has a fixed limit and if the program tries to push more elements into it, then it leads to this condition.
Causes : 1)Recursive function calls without a base case
2) Deeply nested function calls.
3) Adding large local variables, like adding large arrays and object can consume the stack space quickly

So when stack overflow happens the program crashes or throws an error.

Stack Underflow: when there is no element in the stack and trying to pop elements from it , 
causes: logical error,improper stack management.
Resulting in error.