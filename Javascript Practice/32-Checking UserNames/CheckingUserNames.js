const current_users =['hassan','ali','semih','jhon','husnu'] 

const new_users= ['ALI','saqib','HUSNU','kate','ilyas','ash','Semih']

new_users.forEach(CheckUniqueUsers)

 function CheckUniqueUsers(value,index,array)
 {

    if(  current_users.some((c) => c.toLowerCase() === value.toLowerCase() ))
    {
        console.log('the person ' +value+ ' will need to enter a new username as username is already taken.')
    }
    else
    {
        console.log('The username ' +value+' is available.')
    }
}

