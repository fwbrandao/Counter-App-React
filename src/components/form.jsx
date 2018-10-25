import React, { Component } from "react";

class Form extends Component {
    state = {
        value: {value: ''}
    }

      handleChange = (event) => {
        this.setState({value: event.target.value});
      }

      handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
