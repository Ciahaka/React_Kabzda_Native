export function sum(a: number, b: number) {
  return a + b
}

export function multiply(a: number, b: number) {
  return a * b
}


export function splitIntoWords(render: string) {
  //верни слова из массива, каждое слово с маленькой буквы (toLowerCase), разбей по пробелу (split), отфильтруй слова не являющиеся пробелом и отправь их в map,map_ом пройдись по масиву и replace_ом замени знаки препинания на пустоту
  return render.toLowerCase().split(' ')
    .filter(word => word !== '')
    .map(word => word.replace('!', '')
      .replace('.', '')
      .replace(',', ''))


}
