import React from "react";

type locationType = {
  country: string
  address: addressType
}

type addressType = {
  city: string
  streetName: string
}

type skillsType = {
  id: number
  breathHold: string
}
type freediverType = {
  id:number
  name: string
  age: number
  beFins: true
  location: locationType
  skills: Array<skillsType>
}

export const freediver:freediverType = {
  id:1,
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
console.log(freediver.name)
console.log(freediver.location.address.city)
console.log(freediver.beFins)
console.log(freediver.skills[1].breathHold)
