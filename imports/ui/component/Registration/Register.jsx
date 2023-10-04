import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to submit the form data (e.g., using Axios or fetch)
    console.log('Form submitted:', this.state.name, this.state.email);
  };

  render() {
    return (
      <div>
        <h2>Registration Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
          <br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
