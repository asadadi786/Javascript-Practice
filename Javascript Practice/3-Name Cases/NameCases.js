var personName= 'hAssan Ali'

console.log('name in lower case')

personName = personName.toLowerCase()
console.log(personName)
console.log('')

personName = personName.toUpperCase()

console.log('name in upper case')
console.log(personName)
console.log('')




function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  
  personName = titleCase("hAssaN AlI asad ilYas");
  console.log('name in title case')
  console.log(personName)
