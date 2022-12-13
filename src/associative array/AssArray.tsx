import React from 'react';

const user={
  name:'Alex',
  age:2,
  address:{
    city:{
      title:'Polotsk'
    }
  }
}

const dotNotation = user.address.city.title
console.log(dotNotation)
const squareNotation = user['address']['city']['title']
console.log(squareNotation)


const AssArray = () => {
  return (
    <div>

    </div>
  );
};

export default AssArray;