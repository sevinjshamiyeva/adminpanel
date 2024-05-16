import React from 'react'
import "./section2.scss"
import Tables from '../../components/table'

function Section2() {
  return (
    <section className='section2'>
<div className="container">
    <h3>
        Top Customers
    </h3>
   <div className="table" style={{marginTop:"20px"}}>
    <Tables/>
   </div>
    

</div>
    </section>
  )
}

export default Section2