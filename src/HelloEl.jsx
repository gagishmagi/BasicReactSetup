import React from 'react'
import MyStuff from './MyStuff'

// Stateless component
// function HelloEl() {
//     return <div className="hello">Hello World!!</div>
// }

//Statefull component
class HelloEl extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            firstName : null,
            lastName: "",
            age: 0
        }

        console.log(this.props) 
    }

    componentDidMount(){
        this.setState({firstName: "Yuri", age: 50, puppy: "Rexxy"})
    }

    showName(name){
        this.setState({firstName: name, age: 50, puppy: "Rexxy"})
    }

    render(){
       console.log(this.state)
       return <div className="hello">
           <img src={this.props.logoSrc} width="100" />
           <h1>Props:</h1>
           {this.props.headerProp}
           <br/>
           {this.props.contentProp}
           <MyStuff data={this.props.headerProp}/>
           <hr/>
           Hello World!! {this.state.firstName} {this.state.lastName} 
           Your age is: {this.state.age} and your puppy is {this.state.puppy}
           <button onClick={() => this.showName("Rexxy")} >Show my data!!!</button>
           </div>
    }

}


export default HelloEl