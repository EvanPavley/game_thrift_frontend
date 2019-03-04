import React, { Component } from 'react';
import '../css/NewGameForm.css';

class NewGameForm extends Component {
  state = {
    isGame: true,
    name: '',
    price: '',
    image: '',
    console: '',
    description: '',
    releasedDate: '',
  }

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
      })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state);
    // this.sendFormDataSomewhere(this.state)
  }

  render() {
    return (
      <div className='ngf-container'>
        <h1>NEW GAME FORM</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Is Game?:</label>
          <input
            name= 'isGame'
            value={this.state.isGame}
            onChange={this.handleChange}
            type="checkbox"
            checked={this.state.isGame}
            className='ngf-input'
            /><br/>
          <label>Name:</label>
          <input
            name= 'name'
            value={this.state.name}
            onChange={this.handleChange}
            className='ngf-input'
            /><br/>
          <label>Price:</label>
          <input
            name= 'price'
            value={this.state.price}
            onChange={this.handleChange}
            className='ngf-input'
            /><br/>
          <label>Image:</label>
          <input
            name= 'image'
            value={this.state.image}
            onChange={this.handleChange}
            className='ngf-input'
            /><br/>
          <label>Console:</label>
          <input
            name= 'console'
            value={this.state.console}
            onChange={this.handleChange}
            className='ngf-input'
            /><br/>
          <label>Description:</label>
          <input
            type='textarea'
            name= 'description'
            value={this.state.description}
            onChange={this.handleChange}
            className='ngf-input'
            /><br/>
          <label>released date:</label>
          <input
            type="date"
            name= 'releasedDate'
            value={this.state.releasedDate}
            onChange={this.handleChange}
            className='ngf-input'
            /><br/>
          <input
            type="submit"
            value="submit"
            className='ngf-submit'
            />
        </form>
      </div>
    );
  }
}

export default NewGameForm;
