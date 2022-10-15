var guestList = ['Quaid-e-Azam', 'Imran Khan', 'Shoaib Akhtar', 'Elon Mask', 'Edhi Sattar']
var guestListlength = guestList.length
console.log('Exercise 14-Number of people invited to dinner = '+guestListlength)


guestList[2] = 'Muhammad Rizwan'
guestListlength = guestList.length
console.log('Exercise 15-Number of people invited to dinner = '+guestListlength)

//adding guest at the beginning of the list
guestList.unshift('Junaid Jamshed')
//adding guest in the middle of the list
let start = 3;
let deleteCount = 0;
guestList.splice(start, deleteCount, 'Hasnain');
//adding guest at the end of the list using append
guestList.push('Ali')
guestListlength = guestList.length
console.log('Exercise 16-Number of people invited to dinner = '+guestListlength)



while(guestList.length > 2)
{
    var removedGuest=''
        removedGuest = guestList.pop()
       
}

while(guestList.length > 0)
{
    var removedGuest=''
        removedGuest = guestList.pop()

}
guestListlength = guestList.length
console.log('Exercise 17-Number of people invited to dinner = '+guestListlength)
