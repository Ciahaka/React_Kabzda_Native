import React from "react";

type LocationType = {
  country: string
  address: AddressType
}

type AddressType = {
  city: string
  streetName: string
}

type SkillsType = {
  id: number
  breathHold: string
}
type FreeDiverType = {
  id: number
  name: string
  age: number
  beFins: true
  location: LocationType
  skills: Array<SkillsType>
}

export const freeDiver: FreeDiverType = {
  id: 1,
  name: 'Молчанов',
  age: 36,
  beFins: true,
  location: {
    country: 'Russia',
    address: {
      city: 'Moscow',
      streetName: 'Underwater'
    }
  },

  skills: [
    {
      id: 1,
      breathHold: 'Two pools'
    },
    {
      id: 2,
      breathHold: 'One pools'
    },
    {
      id: 3,
      breathHold: 'Three seconds'
    },
  ]
}
console.log(freeDiver.name)
console.log(freeDiver.location.address.city)
console.log(freeDiver.beFins)
console.log(freeDiver.skills[1].breathHold)

export type StreetType = {
  title: string
}

export type NewAddressType = {
  number?: number
  street: StreetType
}
export type HousesType = {
  builtIn: number
  repaired: false
  address: NewAddressType

}
export type officialBuildingsType={
  type:string // или можно прописать "HOSPITAL" | "FIRE-STATION"
  budget:number
  staffCount:number
  address:NewAddressType
}

export type LocalAddressType = {
  city: string
  buildings: Array<HousesType>
  officialBuildings: Array<officialBuildingsType>
  numberOfCitizens: number
}

