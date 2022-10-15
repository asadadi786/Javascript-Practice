const person = [
    {
    pName: "",
    pAge: 0,
    pEyeColor: ""
  }
]

  var personList = [
    {
        name:'Quaid-e-Azam',
        age:71,
        eyeColor:'black'
    },
     {
        name:'Imran Khan',
        age: 70,
        eyeColor:'hazel brown'
    }, 
    {
        name:'Shoaib Akhtar',
        age: 48,
        eyeColor:'black'
    },
    {
        name:'Elon Mask',
        age: 51,
        eyeColor: 'green'
    },
    { 
        name:'Edhi Sattar',
        age: 88,
        eyeColor:'black'
    }
]

  personList.forEach(fillPersonObject)

  function fillPersonObject(value,index,array)
  {
    person.pName = value.name
    person.pAge = value.age
    person.pEyeColor = value.eyeColor

    console.log('Name = ' +person.pName+ ' Age = ' +person.pAge+ " Eye Color = " +person.pEyeColor)
  }


