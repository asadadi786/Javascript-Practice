let userNames = ["admin", "ali","elon", "morgan","zeeshan"];
let removedUser;


while(userNames.length > 0)
{   console.log('User list is not empty. Num of users in List = '+userNames.length)
    removedUser= userNames.pop()
    console.log(removedUser+' is removed from user list.')
}
if(userNames.length === 0)
    {
        console.log('We need to find some users!')
    }