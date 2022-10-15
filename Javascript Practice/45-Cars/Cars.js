function carDetails(carManufacturer,carModel,...argsKeyword)
{
    const car = {
        manufacturer: carManufacturer,
        model: carModel,
        keywords:argsKeyword
    }
    
    return car;
}

const car1 = carDetails('Honda','Civic Sedan',{color:'Red'},{Engine:'1.5CVT'})
const car2 = carDetails('Toyota','Grande X 2020',{color:'Black'},{Engine:'CVT-i 1.8'})
const car3 = carDetails('Audi','Audi Q7 3.0 TFSI',{color:'Manhattan Grey'},{Engine:'CVT-2995 cc'})


printCar(car1)
printCar(car2)
printCar(car3)

function printCar(car){
    console.log('\nCar Details is as follow:')
    console.log('Manufacturer: ' +car.manufacturer+ '\nModel: ' +car.model)
    console.log('Car Keywords:')
    for(let i =0;i<car.keywords.length;i++)
    {
        console.log(car.keywords[i])
    }

}


