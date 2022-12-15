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


