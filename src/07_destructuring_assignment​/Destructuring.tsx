import React from 'react';

export type ManType = {
  name: string
  age: number
  classes: Array<{ title: string }>
  address: {
    street: string
  }
}
type PropsType = {
  title: string
  man: ManType
}

export const MansComponent: React.FC<PropsType> = ({title, man}) => {
  // const {title, man} = boom

  return (
    <div>
      <h1>{title}</h1>
      <hr/>
      <div>{man.name}</div>
    </div>
  );
};

