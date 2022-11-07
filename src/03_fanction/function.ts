import React from "react";
import {freeDiver, FreeDiverType} from '../02_test/object'

export const sum = (a: number, b: number) => {
  return a + b
}
// // const result_1= sum(3,5)
// // const result_2= sum(8,3)
//
// const result_3=sum(sum(3,5),sum(8,3))


export const addSkills= (freeDiver: FreeDiverType, skill: string)=> {
  freeDiver.skills.push({id:new Date().getTime(), title:skill,

  })
}
