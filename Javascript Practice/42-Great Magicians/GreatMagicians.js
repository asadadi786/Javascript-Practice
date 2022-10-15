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
    for(let i=0;i<magicianList.length;i++)
    {
        magicianListArray[i] += ' the Great.'

    }
}
make_great(magicianList)
show_magicians(magicianList)