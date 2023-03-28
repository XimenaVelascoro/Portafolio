import React from 'react';
import hv from '../../assets/Ximena_Velasco_Dev_Hv.pdf';


const CTA = () => {
  return (
    <div className='CTA'>
      <a href={hv} download className='btn btn-primary'>Download HV</a>
      
    </div>
  )
}
export default CTA