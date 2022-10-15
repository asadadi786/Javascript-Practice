let sandwichItemsList = ['white bread','brown bread','cheese','chicken','olives','mint leaves','onion','butter','coriander leaves','Lettuce','mustard sauce','teriyaki sauce', 'pepper sauce']

function sandwichItemsMethod(...argsSandwichItems)
{
    // return argsSandwichItems.reduce(function(acc,curr){
    //     return console.log('Ordered Sandawich Items Summary: ' +acc+ ','+curr)
    // })
    console.log('Ordered Sandawich Items Summary is as follow:' )
    console.log(argsSandwichItems)
    
}

sandwichItemsMethod(sandwichItemsList[0],sandwichItemsList[2],sandwichItemsList[3],sandwichItemsList[4],sandwichItemsList[5])
sandwichItemsMethod(sandwichItemsList[1],sandwichItemsList[2],sandwichItemsList[4],sandwichItemsList[5],sandwichItemsList[6],sandwichItemsList[9])
sandwichItemsMethod(sandwichItemsList[1],sandwichItemsList[2],sandwichItemsList[3],sandwichItemsList[5],sandwichItemsList[8],sandwichItemsList[10],sandwichItemsList[11])