import React from 'react';



const old =[15,45,38,80,99,120,1345]

export const DrumOfLuckFilter = (age:number) => {
    return age >= 80
  }
;

const oldestMen= old.filter(DrumOfLuckFilter)
console.log(oldestMen)




