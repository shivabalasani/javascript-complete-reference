//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

/*
Sameness Comparisons
x	            y	            ==	        ===	            Object.is	    SameValueZero
undefined	undefined	        true	    true	        true	        true
null	    null	            true	    true	        true	        true
true	    true	            true	    true	        true	        true
false	    false	            true	    true	        true	        true
'foo'	    'foo'	            true	    true	        true	        true
0	        0	                true	    true	        true	        true
+0	        -0	                true	    true	        false	        true
+0	        0	                true	    true	        true	        true
-0	        0	                true	    true	        false	        true
0	        false	            true	    false	        false	        false
""	        false	            true	    false	        false	        false
""	        0	                true	    false	        false	        false
'0'	        0	                true	    false	        false	        false
'17'	    17	                true	    false	        false	        false
[1, 2]	    '1,2'	            true	    false	        false	        false
new String('foo')	'foo'	    true	    false	        false	        false
null	    undefined	        true	    false	        false	        false
null	    false	            false	    false	        false	        false
undefined	false	            false	    false	        false	        false
{foo:'bar'}	{foo:'bar'}	        false	    false	        false	        false
new String('foo')	new String('foo')	false	false	    false	        false
0	        null	            false	    false	        false	        false
0	        NaN	                false	    false	        false	        false
'foo'	    NaN	                false	    false	        false	        false
NaN	        NaN	                false	    false	        true	        true

*/
console.log(null == undefined ); //true 
console.log(null === undefined ); //false 
console.log(Object.is(null,undefined) ); //false 