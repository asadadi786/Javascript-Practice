var guestList = ['Junaid Jamshed','Quaid-e-Azam', 'Imran Khan','Hasnain', 'Muhammad Rizwan', 'Elon Mask', 'Edhi Sattar','Ali']

console.log('Hi eeryone, a bad news due to unseen circumstances. We can invite only two people for dinner. \nHope you all can understand.')



while(guestList.length > 2)
{
    var removedGuest=''
    

        removedGuest = guestList.pop()
        console.log('Good Day!' +removedGuest+ 'we are very sorry to tell you that we cant invite you to the dinner.')
}

guestList.forEach(guestDinnerInvitation)
function guestDinnerInvitation(value,index,array)
{
    console.log('Hi, ' +value+ '. We are glad to tell you that you are still on the dinner list. \nPlease join us this weekend as we plan to arrange a delicious dinner party.')
}

console.log(guestList.length)


while(guestList.length > 0)
{
    var removedGuest=''
    

        removedGuest = guestList.pop()
        console.log('Good Day!' +removedGuest+ 'we are very sorry to tell you that we cant invite you to the dinner.')

}

console.log("Dinner Guest List contain " +guestList.length + ' Guests')

guestList.forEach(guestDinnerInvitation)
function guestDinnerInvitation(value,index,array){
    console.log('The list contain, ' +value+ '. guests.')
    
}
