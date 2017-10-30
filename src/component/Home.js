import React from 'react';
const api= 'https://reqres.in/api/users/';
class  home extends React.Component {
    constructor (props){
        super(props)
        this.state={
            singleUser: null
        }
        this.getUser = this.getUser.bind(this);
    }
    
    getUser (event) {
    if(event && event.target && event.target.value){
        let data = fetch(api+event.target.value,
        {
            type: 'GET'
        }).then(response => response.json()).then(response => this.setState({singleUser:response.data})).catch((error)=>{
            console.log('eroor', error);
        });;
    }
   };

   render() {
       return (
           <div>
               <h2> Welcome to Home Page</h2>
               search the device <input type="text" onChange={this.getUser} />
               {this.state.singleUser ? <div>
                <li> {this.state.singleUser.first_name}</li>
               <li>  {this.state.singleUser.last_name}</li></div>
               : null}
             

           </div>

       )
   }
}
export default home;
