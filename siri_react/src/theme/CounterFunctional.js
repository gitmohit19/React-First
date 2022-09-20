import React, {useState} from 'react';


const CounterFunctional= (props) => {
    const playerName=props.playerName;
    const [count, setCount]= useState(0);

    const increaseFunction=() =>{
        setCount(count => count+1);
    }
    const decreaseFunction=() =>{
        setCount(count => count-1);
    }
    const resetFunction=() => {
        setCount(0);
    }


       return(
            <>
         <div className="row bg-warning bg-opacity-50 ">

         <div className="col-12">
            <div> Count-  {count}
             Player Name={playerName}
            </div>

            <button className='btn btn-primary' onClick={increaseFunction}>Increase</button>
            <button className='btn btn-warning' onClick={decreaseFunction}>Decrease</button>
            <button className='btn btn-danger' onClick={resetFunction}>Reset</button>
         </div>
        </div>
            </>

       )

}
export default CounterFunctional;