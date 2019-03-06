import React, { Component } from 'react';
import '../css/NewGameForm.css';

class NewGameForm extends Component {
  state = {
    name: '',
    price: '',
    image: '',
    console: '',
    description: '',
    release_date: ''
  };

  render() {
    return (
      <div className='ngf-container'>
        {!this.props.loggedInUser ? (
          <h1>Please log in to post a game!</h1>
        ) : (
          <div className='new-game'>
            <h1>NEW GAME FORM</h1>
            <form onSubmit={e => this.props.handleSubmit(e)}>
              <br />
              <label>Name:</label>
              <input
                name='name'
                value={this.props.name}
                onChange={this.props.handleChange}
                className='ngf-input'
                required
              />
              <br />
              <label>Price:</label>
              <input
                name='price'
                value={this.props.price}
                onChange={this.props.handleChange}
                className='ngf-input'
                required
              />
              <br />
              <label>Image:</label>
              <input
                name='image'
                value={this.props.image}
                onChange={this.props.handleChange}
                className='ngf-input'
                required
              />
              <br />
              <label>Console:</label>
              <input
                name='console'
                value={this.props.console}
                onChange={this.props.handleChange}
                className='ngf-input'
                required
              />
              <br />
              <label>Description:</label>
              <input
                type='textarea'
                name='description'
                value={this.props.description}
                onChange={this.props.handleChange}
                className='ngf-input'
                required
              />
              <br />
              <label>Release Date:</label>
              <input
                type='date'
                name='release_date'
                value={this.props.release_date}
                onChange={this.props.handleChange}
                className='ngf-input'
                max='1999-12-31'
                required
              />
              <br />
              <input type='submit' value='submit' className='ngf-submit' />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default NewGameForm;
