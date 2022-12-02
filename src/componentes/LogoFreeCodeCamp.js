import React from "react";

const LogoFreeCodeCamp = (props) =>(
    <div className='freecodecamp-logo-contenedor'>
        <img
          src={props.src}
          className={props.class}
          alt={props.alt}/>
      </div>
);
  
  export default LogoFreeCodeCamp;