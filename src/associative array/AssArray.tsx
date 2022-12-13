import React from 'react';

const user = {
  name: 'Alex',
  age: 2,
  address: {
    city: {
      title: 'Polotsk'
    }
  }
}

const dotNotation = user.address.city.title
console.log(dotNotation)
const squareNotation = user['address']['city']['title']
console.log(squareNotation)

const user_1 = {
  'name': 'Alex',
  'age': 2,
  'address': {
    'city': {
      'title': 'Polotsk'
    }
  }
}
const squareNotation_1 = user_1['address']['city']['title']
console.log(squareNotation_1)

// let cityN = {}
// cityN.name = 'minsk'

const users = []

// const AssArray = () => {
//   return (
//     <div>
//
//     </div>
//   );
// };
//
// export default AssArray;