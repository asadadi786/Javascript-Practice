const ownTansport = ['Bicycle','Motor Cycle','Car']

ownTansport.forEach(transportMode);

function transportMode(value,index,array)
{
    console.log('I would like to buy a ' + value+".")
    console.log('I love my ' + value+".")
    console.log('I have now upgraded my ' + value+".")
    console.log('I would sell my ' + value+" and bought latest model.")
    console.log('I bought new ' +value+ " and I'm loving it.")
}