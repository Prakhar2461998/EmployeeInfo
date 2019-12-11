import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createInfo } from '../actions/infoAction'

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
        //call action
        this.props.createInfo(detail);
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


InfoForm.propTypes={
    createInfo: PropTypes.func.isRequired
};



export default connect(null, { createInfo })(InfoForm);