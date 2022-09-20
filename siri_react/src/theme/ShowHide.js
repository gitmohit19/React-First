import React, {useState} from 'react';


const ShowHide=() =>{
  const [showHide,setShowHide] = useState(true);

        const showFn=()=>{
            setShowHide(true);
        }
        const hideFn=()=>{
            setShowHide(false);
        }
return (

    <>
             <div className="row bg-warning bg-opacity-50 ">
                <div classNmae='col-12'>
                    <button className='btn btn-primary' onClick={showFn}>Show</button>
                    <button className='btn btn-danger' onClick={hideFn}>Hide</button>
                    {
                      showHide && (<div>This content is not shown when i clicked on hide button</div>)
                    }

                </div>

                </div>

    </>


)
         
}
export default ShowHide;