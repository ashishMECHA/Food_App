import React from "react";
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    render(){
        return(
            <>
            <h1>This is a react class component, Count : {this.state.count}</h1>
            <button onClick={()=>{
                this.setState({
                    count: 1,
                })
            }}>SetCount</button>
            </>
            
        )
    }
}
export default Profile;