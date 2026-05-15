import React from "react";


class StudentProfile extends React.Component {
    render(){
        return(
            <div style={{backgroundColor : "blue", width : 1000 ,margin : 25, padding : 25}}>
                <h1>Student Name : {this.props.name}</h1>
                <h1>Age : {this.props.age}</h1>
                <h1>City : {this.props.city}</h1>
                <h1>Is Student : {this.props.isStudent?"Yes" : "No"}</h1>
            </div>
        )
    }
}

export default StudentProfile