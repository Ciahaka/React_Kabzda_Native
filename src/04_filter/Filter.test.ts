import React from "react";
import {FreeDiverType} from '../02_test/object'

test.skip('Show the completed tasks',()=>{
  const tasks=[
    {id:1,title:'help',isDone:true},
    {id:2,title:'help me',isDone:false},
    {id:3,title:'a-a-a-a-a',isDone:true},
    {id:4,title:'a-a-a-a-a-a help!',isDone:false},
  ]
  const  completedTasks= tasks.filter(el=> !el.isDone)
expect(completedTasks.length).toBe(2)
expect(completedTasks[0].id).toBe(1)
expect(completedTasks[1].id).toBe(3)

})


let freeDiver:FreeDiverType

beforeEach(()=>{
freeDiver= {
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


