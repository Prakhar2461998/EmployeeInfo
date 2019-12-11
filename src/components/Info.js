import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { fetchInfo } from '../actions/infoAction'

class Info extends Component
{
     UNSAFE_componentWillMount()
     {
         this.props.fetchInfo();
     }

    render()
    {
        const infoList = this.props.info.map( detail => (
           
            
            <div key={detail.id}>
            <br />
         
            <h2>NAME : {detail.employee_name}</h2>
           
           
         <p>Salary: {detail.employee_salary}</p>
         
            <p>Age: {detail.employee_age} </p>

            <button>EDIT</button>
            <button>DELETE</button>
            <button>INFO</button>
            </div>

        ));
            
        return(

        <div>
         
        
        <form >
        
        <h1>DETAILS OF EMPLOYEE</h1> 
       {infoList}
        </form>

      
        </div>
        )
    }

}
const mapstateToprops = state => (
    {
        info:state.info.details
    }
)

export default connect(mapstateToprops, { fetchInfo })(Info);
