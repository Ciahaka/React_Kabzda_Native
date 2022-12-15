import {CompanyType, LaptopUserType, ReaderDevUserType, UserType} from './Immutability';

/**
 Ниже приведён пример чистой функции.Не мутирует приходящие данные, создаёт копию и работает с ней. Ретурнит результат обработкию Не создаёт внешних сайд эффектов
 */

const hairDresser = (us: UserType, power: number) => ({...us, hair: us.hair / power})

test('there is less hair', () => {

  let shaggyUser: UserType = {
    name: 'Alex',
    hair: 32,
    address: {
      title: 'Minsk',
      house: 15
    }
  }
  const trimmedUser = hairDresser(shaggyUser, 2)
  expect(trimmedUser.hair).toBe(16)
  expect(shaggyUser.hair).toBe(32)
  expect(trimmedUser.address).toBe(shaggyUser.address) //свойства вложенных объектов равны.


})
const relocateUser = (us: LaptopUserType, newTitle: string) => ({
  ...us,
  address: {...us.address, title: newTitle}
})

test('change address', () => {

  let devUser: LaptopUserType = {
    name: 'Alex',
    hair: 32,
    address: {
      title: 'Minsk',
      house: 15
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


const updateLaptop = (us: LaptopUserType, newTitle: string) => ({
  ...us,
  address: {...us.address, title: newTitle},
  laptop: {...us.laptop, title: newTitle}
})

test('update laptop title', () => {

  let devUser: LaptopUserType = {
    name: 'Alex',
    hair: 32,
    address: {
      title: 'Minsk',
      house: 15
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

const changeHouseNumber = (us: LaptopUserType & ReaderDevUserType, newHouse: number) => ({
  ...us,
  address: {...us.address, house: newHouse},

})


test('work with a nested array', () => {

  let devReaderUser: LaptopUserType & ReaderDevUserType = {
    name: 'Alex',
    hair: 32,
    address: {
      title: 'Minsk',
      house: 15
    },
    laptop: {
      title: 'Dell'
    },
    book: ['Грозовой перевал',
      'Собор Парижской Богоматери',
      'Унесенные ветром',
      'Ромео и Джульетта',
      'Великий Гэтсби',
      'Три мушкетера',
      'Граф Монте-Кристо',]
  }
  const newHouseNumber = changeHouseNumber(devReaderUser, 29)
  expect(devReaderUser.book).toBe(newHouseNumber.book)
  expect(devReaderUser.address).not.toBe(newHouseNumber.address)
  expect(devReaderUser.address.house).toBe(15)
  expect(newHouseNumber.address.house).toBe(29)


})

const addNewBook = (us: LaptopUserType & ReaderDevUserType, newBook: string) => ({
  ...us,
  book: [...us.book, newBook]

})
test('add new book to array', () => {

  let devReaderUser: LaptopUserType & ReaderDevUserType = {
    name: 'Alex',
    hair: 32,
    address: {
      title: 'Minsk',
      house: 15
    },
    laptop: {
      title: 'Dell'
    },
    book: ['Грозовой перевал',
      'Собор Парижской Богоматери',
      'Унесенные ветром',
      'Ромео и Джульетта',
      'Великий Гэтсби',
      'Три мушкетера',
      'Граф Монте-Кристо',]
  }
  const newBookRead = addNewBook(devReaderUser, 'Typescript - это просто')
  expect(devReaderUser.book).not.toBe(newBookRead.book)
  expect(newBookRead.book).toEqual(['Грозовой перевал',
    'Собор Парижской Богоматери',
    'Унесенные ветром',
    'Ромео и Джульетта',
    'Великий Гэтсби',
    'Три мушкетера',
    'Граф Монте-Кристо', 'Typescript - это просто'])
  expect(devReaderUser.book).toEqual(['Грозовой перевал',
    'Собор Парижской Богоматери',
    'Унесенные ветром',
    'Ромео и Джульетта',
    'Великий Гэтсби',
    'Три мушкетера',
    'Граф Монте-Кристо'])
  expect(devReaderUser.book.length).toBe(7)
  expect(newBookRead.book.length).toBe(8)

})

const updateTSBook = (us: LaptopUserType & ReaderDevUserType, oldBook: string, newBook: string) => ({
  ...us,
  book: us.book.map(b => b === oldBook ? newBook : b)
})
test('update book set', () => {

  let devReaderUser: LaptopUserType & ReaderDevUserType = {
    name: 'Alex',
    hair: 32,
    address: {
      title: 'Minsk',
      house: 15
    },
    laptop: {
      title: 'Dell'
    },
    book: ['Грозовой перевал',
      'Собор Парижской Богоматери',
      'Унесенные ветром',
      'Ромео и Джульетта',
      'Великий Гэтсби',
      'Три мушкетера',
      'Граф Монте-Кристо',]
  }

  const changeSetBook = updateTSBook(devReaderUser, 'Три мушкетера', 'JS для детей')
  expect(devReaderUser.book).not.toBe(changeSetBook.book)
  expect(devReaderUser.book.length).toBe(7)
  expect(changeSetBook.book.length).toBe(7)
  expect(devReaderUser.book).toEqual(['Грозовой перевал',
    'Собор Парижской Богоматери',
    'Унесенные ветром',
    'Ромео и Джульетта',
    'Великий Гэтсби',
    'Три мушкетера',
    'Граф Монте-Кристо'])

  expect(changeSetBook.book).toEqual(['Грозовой перевал',
    'Собор Парижской Богоматери',
    'Унесенные ветром',
    'Ромео и Джульетта',
    'Великий Гэтсби',
    'JS для детей',
    'Граф Монте-Кристо',])
})

const deleteBook = (us: LaptopUserType & ReaderDevUserType, book: string) => ({
  ...us,
  book: us.book.filter(b => b !== book ? b : '')
})
test('delete Великий Гэтсби book', () => {

  let devReaderUser: LaptopUserType & ReaderDevUserType = {
    name: 'Alex',
    hair: 32,
    address: {
      title: 'Minsk',
      house: 15
    },
    laptop: {
      title: 'Dell'
    },
    book: ['Грозовой перевал',
      'Собор Парижской Богоматери',
      'Унесенные ветром',
      'Ромео и Джульетта',
      'Великий Гэтсби',
      'Три мушкетера',
      'Граф Монте-Кристо',]
  }

  const withoutBook = deleteBook(devReaderUser, 'Великий Гэтсби')
  expect(devReaderUser).not.toBe(withoutBook)
  expect(devReaderUser.book).toEqual(['Грозовой перевал',
    'Собор Парижской Богоматери',
    'Унесенные ветром',
    'Ромео и Джульетта',
    'Великий Гэтсби',
    'Три мушкетера',
    'Граф Монте-Кристо'])

  expect(withoutBook.book).toEqual(['Грозовой перевал',
    'Собор Парижской Богоматери',
    'Унесенные ветром',
    'Ромео и Джульетта',
    'Три мушкетера',
    'Граф Монте-Кристо',])
  expect(devReaderUser.book.length).toBe(7)
  expect(withoutBook.book.length).toBe(6)
})


const addNewJob = (us: LaptopUserType & CompanyType,el:{}) => ({
  ...us,
  companies: [...us.companies,el]

})

test('add new company', () => {

  let devJobUser: LaptopUserType & CompanyType = {
    name: 'Alex',
    hair: 32,
    address: {
      title: 'Minsk',
      house: 15
    },
    laptop: {
      title: 'Dell'
    },
    companies:[
      {id:1, title:'Epam'},
      {id:2, title:'Home'},
    ]
  }

  const newJobState = addNewJob(devJobUser, { id:3,title:'Freelance'} )
  expect(devJobUser).not.toBe(newJobState)
  expect(devJobUser.companies.length).toBe(2)
  expect(newJobState.companies.length).toBe(3)
})