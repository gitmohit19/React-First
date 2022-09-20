import React from 'react';
import products from "./ProductList";


const loop=() =>{
 const array=['Tata','BMW','Ferrari','toyota']

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
                    <div>----------------------------------------------</div>

                    <ul>
                        {
                            products.map(item => (
                                <li key={item.title}>{item.title}</li>
                            ))
                        }
                      
                    </ul>
            </div>

          </div>
        </>

)

}
export default loop;