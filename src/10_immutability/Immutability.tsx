import React from 'react';

export type UserType = {
  name: string
  hair: number
  address: { title: string, house: number }
}
export type LaptopType = {
  title: string
}
export type LaptopUserType = UserType & {
  laptop: LaptopType
}
export type ReaderDevUserType = UserType & {
  book: string[]
}
export type CompanyType={
  companies:{id:number,title:string} []
}

/**
 Ниже приведён пример чистой функции.Не мутирует приходящие данные, создаёт копию и работает с ней. Ретурнит результат обработкию Не создаёт внешних сайд эффектов
 */
// export const hairDresser = (us: UserType, power: number) => ({...us, hair: us.hair / power})

// export const relocateUser = (us: UserType,newTitle:string)=>({...us, address: {...us.address,title:newTitle}})