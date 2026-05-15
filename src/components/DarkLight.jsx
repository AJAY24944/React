import { Component } from "react";
import "../App"

class DarkLight extends Component{
    state = {isLight:true}
    render(){
        return(
            <div className={this.state.isLight?"bg-light":"bg-dark"}>
                <h1>
                    {this.state.isLight?"This is Light Mode":"This is Pink mode"}
                    </h1>
                <button onClick={()=>this.setState({isLight:!this.state.isLight})}>
                    {this.state.isLight?"Pink" : "Light"}
                    </button>
                    
            </div>
        )
    }
}
export default DarkLight