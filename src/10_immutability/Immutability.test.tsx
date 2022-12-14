import {UserType} from './Immutability';

export const hairDresser = (us: UserType, power: number) => ({...us, hair: us.hair / power})

test('there is less hair', () => {

  let shaggyUser: UserType = {
    name: 'Alex',
    hair: 32,
    address: {
      title: 'Minsk'
    }
  }
  const trimmedUser = hairDresser(shaggyUser, 2)
  expect(trimmedUser.hair).toBe(16)
  expect(shaggyUser.hair).toBe(32)
  expect(trimmedUser.address).toBe(shaggyUser.address) //свойства вложенных объектов равны.


})
export const relocateUser = (us: UserType,newTitle:string)=>({...us, address: {...us.address,title:newTitle}})

test('change address', () => {

  let shaggyUser: UserType = {
    name: 'Alex',
    hair: 32,
    address: {
      title: 'Minsk'
    }
  }
  const newRelocate = relocateUser(shaggyUser, 'Polotck')
  expect(newRelocate.address.title).toBe('Polotck')
  expect(shaggyUser.address.title).toBe('Minsk')

})
