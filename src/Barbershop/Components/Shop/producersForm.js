// import React from 'react'
// import Context from '../Context'

// class producersForm extends React.Component {
   

//     render() {
//         return (
//             <Context.Consumer>
//                 {
//                     (Context) => {

//                         // 

//                         return (

//                             <div>
//                                 <h3>Производители:</h3>

//                                 <form className="col-3 producers border "
//                                     id="producersForm"
//                                     onChange={() => {
//                                         const form = document.getElementById('producersForm')
//                                         var radios = form.querySelectorAll('.filterFormInput:checked');
//                                     }}>

//                                     {Context.data.producer.map((item, index) => {
//                                         return (
//                                             <div>
//                                                 <input value={index} className="filterFormInput" name="radio" type="checkbox" />
//                                                 <label>{item}</label>
//                                             </div>
//                                         )
//                                     })}
//                                 </form>
//                             </div>

//                         )



//                         // 
//                     }
//                 }
//             </Context.Consumer >
//         )
//     }

// }
// export default producersForm;