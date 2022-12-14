const user = {
    name: 'Alex',
    age: 2,
    address: {
        city: {
            title: 'Polotsk'
        }
    }
}

const dotNotation = user.address.city.title    //точечная запись, обращение к свойству объекта через точку
console.log(dotNotation)
const squareNotation = user['address']['city']['title']  //индексная запись, обращение к свойству через квадратные скобки
console.log(squareNotation)

const user_1 = {                         //все ключи в объекте - строки
    'name': 'Alex',
    'age': 2,
    'address': {
        'city': {
            'title': 'Polotsk'
        }
    }
}
const squareNotation_1 = user_1['address']['city']['title']
console.log(squareNotation_1)

// let cityN = {}
// cityN.name = 'minsk'

let users = ['Doc','Grumpy','Happy','Bashful','Sleepy','Sneezy','Dopey'] //обычный массив
console.log(users)

const usersObj = {            //создали массив в объекте
    '0':'Doc',
    '1':'Grumpy',
    '2':'Happy',
    '3':'Bashful',
    '4':'Sleepy',
    '5':'Sneezy',
    '6':'Dopey'
}
console.log(usersObj['2'])

const newUsers= users['0']='SuperDoc'
console.log(users)
const usersObj_1= usersObj['table']='jjjjj'
console.log(usersObj_1)
console.log(usersObj)

const usersObj_2= usersObj['vvvv  ffff  kkk ']='Хрен обратишься к такому свойству'
console.log(usersObj_2)
console.log(usersObj)
usersObj['vvvv  ffff  kkk'] = 'Да уж'
console.log(usersObj)
/**
Передавая таким образом ключи новых свойств в массив/объект, нужно помнить, что независимо от того, передали мы их строкой или нет, они запишутся именно строкой
 */

usersObj[2] = 'число превратилось в строку'
usersObj[null] = 'null превратился в строку'
usersObj[{}] = 'объект  превратился в свойство [object Object]'
console.log(usersObj)

const users_1 = {
    '0':'Doc',
    '1':'Grumpy',
    '2':'Happy',
    '3':'Bashful',
    '4':'Sleepy',
    '5':'Sneezy',
    '6':'Dopey'
}

console.log(Object.keys(users_1))
/**
 * Получили массив ключей исходного массива. Полезно, в случае, когда не знаешь колличество элементов массива
 */
console.log(Object.values(users_1))
/**
 * Получили массив значений свойств исходного массива. Полезно, в случае, когда не знаешь колличество элементов массива
 */