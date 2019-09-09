import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      val : ''
    };
  }
  onInputChange=(e)=>{
    console.log(e.target.value);
    this.setState({val: e.target.value});
    return this.state.val;
  }
  render(){
    return (
      <div className="App">
       <h1>Hello CodeSandbox</h1>
      <input type="text" value={this.state.val==='' ? "test@gmail.com" : this.state.val} onChange={this.onInputChange} />
     </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <input type="text" value="test@gmail.com" />
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
