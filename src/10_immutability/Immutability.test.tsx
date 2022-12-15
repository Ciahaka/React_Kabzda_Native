import {LaptopUserType, UserType} from './Immutability';

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
export const relocateUser = (us: LaptopUserType, newTitle: string) => ({
  ...us,
  address: {...us.address, title: newTitle}
})

test('change address', () => {

  let devUser: LaptopUserType = {
    name: 'Alex',
    hair: 32,
    address: {
      title: 'Minsk'
    },
    laptop: {
      title: 'Dell'
    }
  }
  const devNewLocation = relocateUser(devUser, 'Kiev')
  expect(devNewLocation.address.title).toBe('Kiev')
  expect(devUser).not.toBe(devNewLocation)
  expect(devUser.address).not.toBe(devNewLocation.address)
  expect(devUser.laptop).toBe(devNewLocation.laptop)

})


export const updateLaptop= (us: LaptopUserType, newTitle: string) => ({
  ...us,
  address: {...us.address, title: newTitle},
  laptop:{...us.laptop,title:newTitle}
})

test('update laptop title', () => {

  let devUser: LaptopUserType = {
    name: 'Alex',
    hair: 32,
    address: {
      title: 'Minsk'
    },
    laptop: {
      title: 'Dell'
    }
  }
  const devNewLocation = updateLaptop(devUser, 'Macbook')
  expect(devNewLocation.laptop.title).toBe('Macbook')
  expect(devUser.laptop.title).toBe('Dell')
  expect(devUser.laptop).not.toBe(devNewLocation.laptop)
  expect(devUser.laptop.title).not.toBe(devNewLocation.laptop.title)
  expect(devUser.address.title).toBe('Minsk')

})
