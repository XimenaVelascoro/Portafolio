import React from 'react';
import hv from '../../assets/HVPortfolio.pdf';


const CTA = () => {
  return (
    <div className='CTA'>
      <a href={hv} download className='btn btn-primary'>Download HV</a>
      
    </div>
  )
}
export default CTA