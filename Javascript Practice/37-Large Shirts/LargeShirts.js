const defaultSize = 'large'
const defaultMessage = 'I love JavaScript'
const otherMessage = 'I am learning Metaverse'

function make_shirt(size,message)
{
    if(size === 'medium' || size === 'large')
    {
        console.log('The size of the shirt is '+size+' and the message printed on it is ' +message+'.')
    }
    else
    {
        console.log('The size of the shirt is '+size+' and the message printed on it is ' +message+'.')

    }
}

make_shirt('medium',defaultMessage)
make_shirt('large',defaultMessage)
make_shirt('small',otherMessage)