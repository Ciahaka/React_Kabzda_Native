import React from 'react';

export type UserType={
  name:string
  hair:number
  address:{title:string}
}
export type LaptopType = {
  title:string
}
export type LaptopUserType= UserType & {
  laptop:LaptopType
}
/**
 Ниже приведён пример чистой функции.Не мутирует приходящие данные, создаёт копию и работает с ней. Ретурнит результат обработкию Не создаёт внешних сайд эффектов
 */
// export const hairDresser = (us: UserType, power: number) => ({...us, hair: us.hair / power})

// export const relocateUser = (us: UserType,newTitle:string)=>({...us, address: {...us.address,title:newTitle}})