import React from 'react';
import {usersObj} from './AssArray';

beforeEach(()=>{

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