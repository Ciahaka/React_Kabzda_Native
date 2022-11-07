import React from 'react';


export type PeopleType = {
  name: string
  age: number
}

const people: PeopleType[] = [
  {name: 'Balbes Ivan', age: 21},
  {name: 'Trus Georgiy', age: 32},
  {name: 'Bivaliy Innokenty', age: 85},
]

export const transformerMap = (man: PeopleType) => {
  return {
    stack: ['CSS', 'REACT', 'TDD', 'JS', 'HTML'],
    firstName: man.name.split(' ')[0],
    secondName: man.name.split(' ')[1],
  };
};


const devs_1 = [
  {
    stack: ['CSS', 'REACT', 'TDD', 'JS', 'HTML'],
    firstName: 'Ivan',
    secondName: 'Balbes',
  },
  {
    stack: ['CSS', 'REACT', 'TDD', 'JS', 'HTML'],
    firstName: 'Georgiy',
    secondName: 'Trus',
  },
  {
    stack: ['CSS', 'REACT', 'TDD', 'JS', 'HTML'],
    firstName: 'Innokenty',
    secondName: 'Bivaliy',
  },
]           //// ниже находяться аналогичные записи
const devs_2 = [
  transformerMap(people[0]),
  transformerMap(people[1]),
  transformerMap(people[2]),

]
const devs_3= people.map(transformerMap)
const dev_4= people.map((man: PeopleType) => {
  return {
    stack: ['CSS', 'REACT', 'TDD', 'JS', 'HTML'],
    firstName: man.name.split(' ')[0],
    secondName: man.name.split(' ')[1],
  };
})

const welcomeMessages= people.map(man=>`Welcome ${man.name.split(' ')[0]} to IT`)
console.log(welcomeMessages)

export const creatingWelcomeMessages=(people:PeopleType[])=>{
  return people.map(man=>`Welcome ${man.name.split(' ')[0]} to IT`)
}

