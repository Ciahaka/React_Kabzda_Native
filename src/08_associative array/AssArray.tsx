import React from 'react';


export const usersArray = ['Doc', 'Grumpy', 'Happy', 'Bashful', 'Sleepy', 'Sneezy', 'Dopey']

export const usersObj = {
  '0': 'Doc',
  '1': 'Grumpy',
  '2': 'Happy',
  '3': 'Bashful',
  '4': 'Sleepy',
  '5': 'Sneezy',
  '6': 'Dopey'
}
/**
 * ассоциативный массив
 */
export type UsersType={
  [key:string]:{id: number, name: string}
}
export const users:UsersType = {
  '35': {id: 35, name: 'Doc'},
  '1245': {id: 1245, name: 'Grumpy'},
  '101': {id: 101, name: 'Happy'},
  '3': {id: 3, name: 'Bashful'},
  '276': {id: 276, name: 'Sleepy'},
  '5': {id: 5, name: 'Sneezy'},
  '29': {id: 29, name: 'Dopey'},
}
const newUser = {id: 345, name: 'Alla'}
users[newUser.id]=newUser
delete users[newUser.id]
console.log(users['29'].name) //Сложность алгоритма O(1)
console.log(users)

/**
 * обычный массив
 */
export const newUsersArray = [
    {id: 35, name: 'Doc'},
    {id: 1245, name: 'Grumpy'},
    {id: 101, name: 'Happy'},
    {id: 3, name: 'Bashful'},
    {id: 276, name: 'Sleepy'},
    {id: 5, name: 'Sneezy'},
    {id: 29, name: 'Dopey'},
  ]
console.log(newUsersArray.find((us)=>us.id===29))  //Сложность алгоритма O(n)