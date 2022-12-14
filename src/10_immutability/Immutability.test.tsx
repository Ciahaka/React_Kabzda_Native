import {UserType} from './Immutability';

export const hairDresser = (us: UserType, power: number) => {
  us.hair = us.hair / power
}
test('there is less hair', ()=>{

})