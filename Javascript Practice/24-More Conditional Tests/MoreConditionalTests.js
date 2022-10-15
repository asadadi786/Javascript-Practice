let string1 = 'Apple';
let string2 = "Apple";
let string3 = 'Samsung';

//strings equqlity and inequality tests
if(string1 === string2)
{
    console.log(string1+ ' is equal to ' +string2+ '.Both strings are equal.')
}

if(string1 !== string3)
{
    
    console.log(string1+ ' is not equal to ' +string3+ '.Both strings are not equal.')
}


//LowerCase-strings equqlity and inequality tests
string1 = 'Apple';
string2 = "apple";
string3 = 'Samsung';

if(string1.toLowerCase === string2.toLocaleLowerCase)
{
    console.log(string1+ ' is equal to ' +string2+ '.Both strings are equal.')
}

if(string1.toLowerCase !== string3.toLowerCase)
{
    
    console.log(string1+ ' is not equal to ' +string3+ '.Both strings are not equal.')
}


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 15;
let num3 = 10;

if(num1 == num3)
{
    console.log('num1 and num2 are equal.')
}
if(num1 != num2)
{
    console.log('num1 and num2 are not equal.')
}

if(num2 > num1)
{
    console.log('num2 is greater than num1.')
}

if(num1 < num2)
{
    console.log('num1 is lesser than num2.')
}


if(num1 >= num3)
{
    console.log('num1 is greater than or equal to num3.')
}

if(num1 <= num2)
{
    console.log('num1 is lesser than or equal to num2.')
}

if(num1 == num3 && num1 < num2)
{
    console.log('num1 is equal to num3 AND num1 is lesser than num2.')

}

if(num3 < num2 || num1 == num2)
{
    console.log('num3 is lesser than num2 OR num1 is euqal to num2.')

}


//Test that item is in an array or not
var guestList = ['Quaid-e-Azam', 'Imran Khan', 'Shoaib Akhtar', 'Elon Mask', 'Edhi Sattar']

var resultFindArray =guestList.includes('Imran Khan')
console.log('Imran Khan is in guestList array = ' +resultFindArray )

resultFindArray =guestList.includes('Steve Jobs')
console.log('Steve Jobs is in guestList array = ' +resultFindArray )