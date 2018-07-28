import React from 'react';

// class Form extends React.Component {
//     render(){
//       return (
//         <div>
//           <form onSubmit={this.props.getWeather}>
//             <input type="text" name='city' placeholder='City...'/>
//             <input type="text" name='country' placeholder='Country...'/>
//             <button>Get weather</button>
//           </form>
//         </div>      
//       )
//     }
//   }
  
//   export default Form;


// const Form = (props) => {
//   return (
//     <div>
//       <form onSubmit={this.props.getWeather}>
//         <input type="text" name='city' placeholder='City...'/>
//         <input type="text" name='country' placeholder='Country...'/>
//         <button>Get weather</button>
//       </form>
//     </div> 
//   )
// }

// export default Form;

const Form = (props) => (
    <form onSubmit={props.getWeather}>
      <input type="text" name='city' placeholder='City...'/>
      <input type="text" name='country' placeholder='Country...'/>
      <button>Get weather</button>
    </form>
  )

export default Form;