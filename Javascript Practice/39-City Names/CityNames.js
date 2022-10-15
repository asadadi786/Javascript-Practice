const cityCountryList =[
    {
         city:'Lahore',country:'Pakistan'
    },
    { 
        city:'Karachi',country:'Pakistan'
    }
    ,
    { 
        city:'London',country:'United Kingdom'
    }
]

function city_country(city,country )
{
    let str = ('"'+city +',' +country+'"')
    return str;
}


for(let i=0;i<cityCountryList.length;i++)
{ 
    let returnedStr =city_country(cityCountryList[i].city,cityCountryList[i].country)
    console.log(+returnedStr)
    
}