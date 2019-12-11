import React, { Component } from 'react'

 class InfoForm extends Component {
           
    constructor()
    {
        super();
        this.state ={
          
            name :' ',
            salary:' ',
            age: ' '
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
    }

    onChange(e)
    {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e)
    {
         e.preventDefault();
         const detail = {
             name:this.state.name,
             salary:this.state.salary,
             age:this.state.age
         };
          fetch('http://dummy.restapiexample.com/api/v1/create',{
                       method:'POST',
                       headers:{
                           'content-type':'application/json'
                       },
                       body: JSON.stringify(detail)
                       })
                       .then(res =>res.json())
                       .then(data => console.log(data))
                    }

    render() {
        return (
            <div>
                <h1> Add Details</h1>
                <form onSubmit={this.onSubmit}>
                <label>Name: </label>
                <input type="text"  name="name"  value={this.state.name} onChange={this.onChange} />
                <label>Salary: </label>
                <input type="text" name="salary"   value={this.state.salary}  onChange={this.onChange}/>
                <label>Age :</label>
                <input type="text"  name="age"  value={this.state.age} onChange={this.onChange} />
        
                <button tyoe="Submit"> ADD </button>
                <hr />
                </form>
            </div>
        )
    }
}

export default InfoForm;