import React from 'react';

type ManType = {
  name: string
  age: number
  classes: Array<{ title: string }>
  address: {
    street: string
  }
}

let man: ManType

beforeEach(() => {
  man = {
    name: 'Alex',
    age: 41,
    classes: [{title: '1'}, {title: '2'}],
    address: {
      street: 'Uskova'
    }
  }
})

test('', () => {

  const {name, age, classes, address} = man
  const {street} = man.address
  // const[title_1, title_2]=man.classes


  expect(name).toBe('Alex')
  expect(age).toBe(41)
  // expect(classes.title_1).toBe('1')
  expect(street).toBe('Uskova')
  // expect(title_2).toBe('2')

})
