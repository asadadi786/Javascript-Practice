let magicianList = ['JAY MARSHALL','MAX MAVEN','Rangbaz','Hamoon Jadogar','Muhammad Yaseen']


function show_magicians(magicianListArray)
{
    for(let i=0;i<magicianList.length;i++)
    {
        console.log( magicianListArray[i])
    }
}


function make_great (magicianListArray)
{
    let newMagicianListArray = magicianListArray.slice()
    for(let i=0;i<newMagicianListArray.length;i++)
    {
        newMagicianListArray[i] += ' the Great.'

    }

    return newMagicianListArray;
}

//var newArr = magicianList.slice();

let newMagicianGreatList = make_great(magicianList)

//original array
console.log('Below are the Magicians names from Original array.')
show_magicians(magicianList)
console.log('\nBelow are the Magicians names with the Great phrase from new array.')
show_magicians(newMagicianGreatList)