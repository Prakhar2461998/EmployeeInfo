import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { fetchinfo } from '../Actions/infoAction'
class Info extends Component
{
     componentWillMount()
     {
         this.props.fetchinfo();
     }

    render()
    {
        const infoList = this.props.info.map( detail => (
           
            <div key={detail.id}>
            <h1>{detail.employee_name}</h1>
            <h2> {detail.employee_salary}</h2>
            <h3> {detail.employee_age} </h3>
            </div>

        ));
        return(

        <div>
         
        <p>Fetch the information</p>
        <form >
        <button type="Submit" >Click</button>
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

export default connect(mapstateToprops, { fetchinfo })(Info);
