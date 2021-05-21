// import React, { Component } from 'react'


// class TestComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isGoing: true,
//         numberOfGuests: 2
//       };
  
//       this.handleInputChange = this.handleInputChange.bind(this);
//     }
  
//     handleInputChange(event) {
//       const target = event.target;
//       const value = target.type === 'checkbox' ? target.checked : target.value;
//       const name = target.name;
  
//       this.setState({
//         [name]: value
//       });
//     }
  
//     render() {
//       return (
//         <form>
//           <label>
//             Is going:
//             <input
//               name="isGoing"
//               type="checkbox"
//               checked={this.state.isGoing}
//               onChange={this.handleInputChange} />
//           </label>
//           <br />
//           <label>
//             Number of guests:
//             <input
//               name="numberOfGuests"
//               type="number"
//               value={this.state.numberOfGuests}
//               onChange={this.handleInputChange} />
//           </label>
//         </form>
//       );
//     }
//   }
// export default TestComponent;





// import React, { Component } from 'react'

// class TestComponent extends Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             value: '',
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//      handleChange(event){
//          this.setState({value :event.target.value})

//      }
//      handleSubmit(event){
//          alert(this.state.value)
//         event.preventDefault();
//      }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}> 
//             <label>
//                 Name:
                
//                 <input type={"text"} value={this.state.value} onChange={this.handleChange} />
//             </label>
//             <input type='submit' value='Submit' />
//             </form>
//         )
//     }
// }
// export default TestComponent;







// import React from 'react'
// const numberList = [1,2,3,4,5,6,7,8]
// function TestComponent() {
//     return (
//         <div>
//             {
//                numberList.map((num)=>
//                <li key={num.toString()}>{num}</li>
//                )

//             }
//         </div>
//     )
// }

// export default TestComponent





















// import React, { Component } from 'react'
// let num = 1;
// export default class TestComponent extends Component {
  
//     constructor(props){ 
//         super(props); 
        
//         this.state = {
//             count:num,
//         }
//     }
//     componentDidMount(){ 
   
//         this.timerID = setInterval(
//             () => this.counter(),1000
//         )
//     }
//     componentWillUnmount(){
//         clearInterval(this.timerID)
//     }
//     counter(){  
//      num = num + 1
//         this.setState(
//             {count:num}
//         )
//     }

//     render() {
//         return (
//             <div>
//                 <span>
//                     {this.state.count}
//                 </span>
//             </div>
//         )
//     }
// }
