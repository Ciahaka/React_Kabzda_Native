import React from 'react';
import {usersObj} from './AssArray';
import {UsersType} from './AssArray';

let users:UsersType

beforeEach(()=>{
  users={
    '35': {id: 35, name: 'Doc'},
    '1245': {id: 1245, name: 'Grumpy'},
    '101': {id: 101, name: 'Happy'},
    '3': {id: 3, name: 'Bashful'},
    '276': {id: 276, name: 'Sleepy'},
    '5': {id: 5, name: 'Sneezy'},
    '29': {id: 29, name: 'Dopey'},
  }
})
test('must update the status of the users properties', ()=>{
  users['5'].name='Sneeze'
  expect(users['5'].name).toBe('Sneeze')
  expect(users['5']).toEqual({id: 5, name: 'Sneeze'})

})
test('must delete users', ()=>{
  delete users['5']
  expect(users['5']).toBeUndefined()

})

test('ddd', ()=>{
  expect(usersObj[0]).toBe('Doc')
  expect(usersObj[1]).toBe('Grumpy')
  expect(usersObj[2]).toBe('Happy')
  expect(usersObj[3]).toBe('Bashful')
  expect(usersObj[4]).toBe('Sleepy')
  expect(usersObj[5]).toBe('Sneezy')
  expect(usersObj[6]).toBe('Dopey')
})