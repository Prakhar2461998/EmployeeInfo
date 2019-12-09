import React,{ Component } from 'react'

class Info extends Component
{
    constructor(props)
    {
      super(props)
      this.state ={
          info:[]
      }  
   
     
    }
   UNSAFE_componentWillMount()
    {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(data => this.setState({info: data}))
        
    }
          

    render()
    {
        const infoList = this.state.info.map( detail => (
           
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
export default Info;
