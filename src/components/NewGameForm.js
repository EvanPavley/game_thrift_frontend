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
      <div className='container ngf-container'>
        {!this.props.loggedInUser ? (
          <h1>Please log in to post a game!</h1>
        ) : (
          <div className='new-game'>
            <h1 id='ngf-title'>SELL A GAME</h1>
            <form className='ngf-form'onSubmit={e => this.props.handleSubmit(e)}>
              <br />
              <label>Name:</label><br/>
              <input
                name='name'
                value={this.props.name}
                onChange={this.props.handleChange}
                className='ngf-input'
                required
              />
              <br />
              <label>Price:</label><br/>
              <input
                name='price'
                value={this.props.price}
                onChange={this.props.handleChange}
                className='ngf-input'
                required
              />
              <br />
              <label>Image:</label><br/>
              <input
                name='image'
                value={this.props.image}
                onChange={this.props.handleChange}
                className='ngf-input'
                required
              />
              <br />
              <label>Console:</label><br/>
              <input
                name='console'
                value={this.props.console}
                onChange={this.props.handleChange}
                className='ngf-input'
                required
              />
              <br />
              <label>Description:</label><br/>
              <textarea
                id='des'
                type='text'
                name='description'
                value={this.props.description}
                onChange={this.props.handleChange}
                className='ngf-input'
                required
              />
              <br />
              <label>Release Date:</label><br/>
              <input
                id='date'
                type='date'
                name='release_date'
                value={this.props.release_date}
                onChange={this.props.handleChange}
                className='ngf-input'
                max='1999-12-31'
                required
              />
              <br />
              <div className='button-holder'>
                <input type='submit' value='submit' className='ngf-submit' />
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default NewGameForm;
