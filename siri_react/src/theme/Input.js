import React, {useState} from 'react';

const Input=()=>{
   const [array,setArray]=useState([]);
   const [text,setText]=useState();

   let addArray=(event)=>{
    setArray([...array, event.target.value]);
   }
   let addText=()=>{
    setText(text, addArray);
   }
    return(
            <>

            <div className='row bg-primary bg-opacity-50'>
                        <div className='col-12'>
                                <ul>
                                    {
                                        array.map(item=>(
                                            <li>{item}</li>
                                        ))

                                    }
                                </ul>
                                Enter your input:- <input type='text' onBlur={addArray}/>
                                  <button type='submit' className='btn btn-primary btn-sm' onClick={addText}>Add Text</button>
                        </div>

                    </div>
            </>

    )


}
export default Input;