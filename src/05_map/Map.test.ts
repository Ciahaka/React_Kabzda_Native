import React from 'react';
import {creatingWelcomeMessages, PeopleType} from './Map'


let people: PeopleType[] = []

beforeEach(() => {
  people = [
    {name: 'Balbes Ivan', age: 21},
    {name: 'Trus Georgiy', age: 32},
    {name: 'Bivaliy Innokenty', age: 85},
  ]
})

test('проверить приветственное сообщение', () => {
  const welcomeMessages = creatingWelcomeMessages(people)

  expect(welcomeMessages.length).toBe(3)
  expect(welcomeMessages[0]).toBe('Welcome Balbes to IT')
  expect(welcomeMessages[1]).toBe('Welcome Trus to IT')
  expect(welcomeMessages[2]).toBe('Welcome Bivaliy to IT')

})


