import React from 'react';
import spinner from './../../spinner.svg';

function Spinner() {
  return (
    <div>
      <img src={spinner} style={{width: '10rem', display: 'block', margin: 'auto' }} alt="Loading…" />
    </div>
  )
}

export default Spinner;