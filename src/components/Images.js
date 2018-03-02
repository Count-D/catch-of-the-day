import React from 'react';
import fish1 from '../img/fish1.jpeg';
import fish2 from '../img/fish2.jpeg';

const Images = () => {
    return(
        <div className="images">
     <img src={fish1} className="img1" alt="fish1" />
     <img src={fish2} className="img2" alt="fish2" />
     </div>
    );
}
export default Images;