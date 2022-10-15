let userNames = ["admin", "ali","elon", "morgan","zeeshan"];

userNames.forEach(LoginGreeting)

function LoginGreeting(value,index,array)
{
    if(value == 'admin')
    {
        console.log('Hello ' +value+', would you like to see a status report?')
    }
    else
    {
        console.log('Hello ' +value+', thank you for logging in again.')
    }
}