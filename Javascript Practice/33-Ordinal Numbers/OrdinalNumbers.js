const ordinalNumbers = [1,2,3,4,5,6,7,8,9]

ordinalNumbers.forEach(printOrdinalEnding)

function printOrdinalEnding(value,index,array)
{
    if(value ===1)
    {
        console.log(value+'st')
    }
    else if(value ===2)
    {
        console.log(value+'nd')
    }
    else if(value ===3)
    {
        console.log(value+'rd')
    }
    else if(value > 3 && value < 10)
    {
        console.log(value+'th')
    }
}