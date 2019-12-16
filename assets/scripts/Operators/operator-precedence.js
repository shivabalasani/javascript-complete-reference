//Operator precedence determines the way in which operators are parsed with respect to each other. Operators with higher precedence become the operands of operators with 
//lower precedence.

/*Associativity :Associativity determines the way in which operators of the same precedence are parsed. For example, consider an expression:
a OP b OP c
Left-associativity (left-to-right) means that it is processed as (a OP b) OP c, while right-associativity (right-to-left) means it is interpreted as a OP (b OP c). 
Assignment operators are right-associative, so you can write:

a = b = 5;
with the expected result that a and b get the value 5. This is because the assignment operator returns the value that is assigned. First, b is set to 5. Then the a is 
also set to 5, the return value of b = 5, aka right operand of the assignment.

The following table is ordered from highest (21) to lowest (1) precedence.

Precedence	        Operator type	                    Associativity	        Individual operators
21	                Grouping	                        n/a	                    ( … )
20              	Member Access	                    left-to-right	        … . …
                    Computed Member Access	            left-to-right	        … [ … ]
                    new (with argument list)	        n/a	                    new … ( … )
                    Function Call	                    left-to-right	        … ( … )
                    Optional chaining	                left-to-right	        ?.

19	                new (without argument list)	        right-to-left	        new …

18	                Postfix Increment	                n/a	                    … ++
                    Postfix Decrement	                                        … --

17	                Logical NOT	                        right-to-left	        ! …
                    Bitwise NOT	                                                ~ …
                    Unary Plus	                                                + …
                    Unary Negation	                                            - …
                    Prefix Increment	                                        ++ …
                    Prefix Decrement	                                        -- …
                    typeof                                                  	typeof …
                    void	                                                    void …
                    delete	                                                    delete …
                    await	                                                    await …

16	                Exponentiation	                    right-to-left	        … ** …

15	                Multiplication	                    left-to-right	        … * …
                    Division	                                                … / …
                    Remainder	                                                … % …

14	                Addition	                        left-to-right	        … + …
                    Subtraction	                                                … - …

13	                Bitwise Left Shift	                left-to-right	        … << …
                    Bitwise Right Shift	                                        … >> …
                    Bitwise Unsigned Right Shift	                            … >>> …

12	                Less Than	                        left-to-right	        … < …
                    Less Than Or Equal  	                                    … <= …
                    Greater Than	                                            … > …
                    Greater Than Or Equal	                                    … >= …
                    in	                                                        … in …
                    instanceof	                                                … instanceof …

11	                Equality	                        left-to-right	        … == …
                    Inequality	                                                … != …
                    Strict Equality	                                            … === …
                    Strict Inequality	                                        … !== …

10	                Bitwise AND	                        left-to-right	        … & …
9	                Bitwise XOR	                        left-to-right	        … ^ …
8	                Bitwise OR	                        left-to-right	        … | …
7	                Nullish coalescing operator	        left-to-right	        … ?? …
6	                Logical AND	                        left-to-right	        … && …
5	                Logical OR	                        left-to-right	        … || …

4	                Conditional	                        right-to-left	        … ? … : …

3	                Assignment	                        right-to-left	        … = …
                                                                                … += …
                                                                                … -= …
                                                                                … **= …
                                                                                … *= …
                                                                                … /= …
                                                                                … %= …
                                                                                … <<= …
                                                                                … >>= …
                                                                                … >>>= …
                                                                                … &= …
                                                                                … ^= …
                                                                                … |= …

2	                yield	                            right-to-left	        yield …
                    yield*	                                                    yield* …

1	                Comma / Sequence	                left-to-right	        … , … 
*/


var a = 2, b = 3, c = 4;
a = b = c;
console.log(a); //4 //Assignment Associativity is from right to left
console.log(b); //4
console.log(c); //4



console.log(1 < 2 < 3); // true - 1 < 2 is true and true < 3  wil be converted to 1 < 3 which is true.
console.log(3 < 2 < 1); //true - 3 < 2 is false and false < 1  will be converted to 0 < 1 which will be true.