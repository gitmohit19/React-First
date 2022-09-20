import React from 'react';
import Root from './theme/Root';

const Home=() =>{
    const a=10;
    const b=20;
    let num1=50;
  let num2=100;
  let sum=num1+num2;
   return(
   
    <>
    <Root/>
    <h2>Home Page</h2>
     <div>My first react page.</div>
    <div>Sum={a+b}</div>
    <h1>Newton School</h1>
      <h4>No. of student in Siri={sum}</h4>
    </>
   
   )

}

export default Home;