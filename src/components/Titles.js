import React, {Component} from 'react';

// class Titles extends React.Component {
//     render(){
//       return (
//         <div>
//           <h1>Weather Finder</h1>
//           <p>Finde out temperature, consitions and more</p>
//         </div>      
//       )
//     }
//   }
  
//   export default Titles;


const Titles = () => (
  <div>
    <h1 className="title-container__title">Weather Finder</h1>
    <p className="title-container__subtitle">Finde out temperature, consitions and more</p>
  </div>   
)

export default Titles;