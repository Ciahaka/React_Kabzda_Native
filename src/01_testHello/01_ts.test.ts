import {multiply, splitIntoWords, sum} from "./01_ts";
//вынесли данные за пределы теста, протипизировали
let a: number;
let b: number;
let c: number;
//функция beforeEach() вызывается перед каждым тестом и иницилизирует или обнуляет данные. Так мы получаем всегда один набор данных для тестов, независимо от того, пытались ли мы их перезатереть в тестах!
beforeEach(() => {
  a = 1;
  b = 2;
  c = 3
})
//Глобальная сущность test ('имя теста',вызываем ()=> {функцию теста, прописываем его логику})

test('sum is correct', () => {

  //Data добавляем данные для логики теста
  //Для исключения дублирования кода, выносим данные за пределы теста
  // let a = 1
  // let b = 2
  // let c = 3

  //action выполняемое действие

  const result_1 = sum(a, b);
  const result_2 = sum(b, c);

  //Expect ожидаемый результат
  //'Ожидаем, что результат будет равен 3'
  expect(result_1).toBe(3)
  expect(result_2).toBe(5)

})

test('multiply is correct', () => {

  //Data добавляем данные для логики теста
  // let a = 1
  // let b = 2
  // let c = 3

  //action выполняемое действие

  const result_1 = multiply(a, b);
  const result_2 = multiply(b, c);

  //Expect ожидаемый результат
  //'Ожидаем, что результат будет равен 3'
  expect(result_1).toBe(2)
  expect(result_2).toBe(6)
})

test('splitIntoWords correct', () => {

  //Data добавляем данные для логики теста
  let getIt_1 = 'Привет мой юный друх!'
  let getIt_2 = 'Ехал грека  через реку, цап!'

  //action выполняемое действие

  const result_1 = splitIntoWords(getIt_1);
  const result_2 = splitIntoWords(getIt_2);

  //Expect ожидаемый результат
  //'Ожидаем, что длина массива 1 будет равна 4
  // Ожидаем что первый элемент массива(слово) будет 'привет', и с маленькой буквы. и так и далее...
  expect(result_1.length).toBe(4)
  expect(result_1[0]).toBe('привет')
  expect(result_1[1]).toBe('мой')
  expect(result_1[2]).toBe('юный')
  expect(result_1[3]).toBe('друх')
  //ожидаем, что длина массива 2 будет равна 5
  // Ожидаем что первый элемент массива(слово) будет 'ехал', и с маленькой буквы. и так и далее... В строке есть знаки ! и лишние пробелы
  expect(result_2.length).toBe(5)
  expect(result_2[0]).toBe('ехал')
  expect(result_2[1]).toBe('грека')
  expect(result_2[2]).toBe('через')
  expect(result_2[3]).toBe('реку')
  expect(result_2[4]).toBe('цап')

})