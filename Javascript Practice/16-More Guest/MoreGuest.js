var guestList = ['Quaid-e-Azam', 'Imran Khan', 'Muhammad Rizwan', 'Elon Mask', 'Edhi Sattar']


console.log('Hi everyone, Good New!. We got a bigger table for our upcoming exciting dinner party. \nSo we can invite more firends of ours.')

//adding guest at the beginning of the list
guestList.unshift('Junaid Jamshed')


//adding guest in the middle of the list
let start = 3;
let deleteCount = 0;
guestList.splice(start, deleteCount, 'Hasnain');


//adding guest at the end of the list using append
guestList.push('Ali')

guestList.forEach(guestDinnerInvitation)
function guestDinnerInvitation(value,index,array){
    console.log('Hi, ' +value+ '. We are gladly inviting you to join us this weekend as we plan to arrange a delicious dinner party.')
}

