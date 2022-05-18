import React from 'react';
import shapeBG1 from '../images/shape-bg-1.png';
import shapeBG2 from '../images/shape-bg-2.png';
import shapeBG3 from '../images/shape-bg-3.png';

function ImagesDetails() {
  return (
    <div>
      <img className="shapes bg1" src={shapeBG1} alt="" />
      <img className="shapes bg2" src={shapeBG2} alt="" />
      <img className="shapes bg3" src={shapeBG3} alt="" />
    </div>
  );
}

export default ImagesDetails;
