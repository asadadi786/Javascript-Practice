var guestList = ['Quaid-e-Azam', 'Imran Khan', 'Shoaib Akhtar', 'Elon Mask', 'Edhi Sattar']

guestList.forEach(guestDinnerInvitation)

function guestDinnerInvitation(value,index,array){
    console.log('Hi, ' +value+ '. We are gladly inviting you to join us this weekend as we plan to arrange a delicious dinner party.')
}

console.log(guestList[2]+' is not able to attend our dinner party.')

guestList[2] = 'Muhammad Rizwan'

guestList.forEach(guestDinnerInvitation2)
function guestDinnerInvitation2(value,index,array){
    console.log('Second Invitation: Hi, ' +value+ '. We are gladly inviting you to join us this weekend as we plan to arrange a delicious dinner party.')
}
