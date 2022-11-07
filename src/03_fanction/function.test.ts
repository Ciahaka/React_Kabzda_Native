import React from "react";
import {FreeDiverType} from '../02_test/object'

let freeDiver:FreeDiverType;

beforeEach(()=>{
  freeDiver={
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
})

test('new skills for freeDiver',()=>{

})