import React, { Component } from 'react';
import { connect } from 'react-redux';
import './add-todo.css';
import { mapStateToProps, mapDispatchToProps } from '../../mapDispatch';

class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: '',
      textareaText: '',
      addTask: {
        name: '',
        text: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const text = target.text;

    this.setState({
      [name]: value,
      [text]: value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { inputName, textareaText } = this.state;

    console.log(this.props);
    console.log(inputName, textareaText);

    const { addTask } = this.props;
    addTask(inputName, textareaText);

    this.setState({
      inputName: '',
      textareaText: '',
      addTask: {
        name: '',
        text: '',
      },
    });
  };

  render() {
    return (
      <div>
        <h2 className="subtitle">Your comment:</h2>
        <div className="container">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form__comment">
              <input
                className="form__inputName"
                placeholder="Enter your name"
                required
                value={this.state.inputName}
                name="inputName"
                type="text"
                onChange={this.handleChange}
              ></input>
              <button className="btn__submit" type="submit">
                Add comment
              </button>
            </div>
            <textarea
              className="form__inputText"
              placeholder="Enter your comment"
              required
              value={this.state.textareaText}
              name="textareaText"
              type="text"
              onChange={this.handleChange}
            ></textarea>
          </form>
          <img className="img__react" src="./../logo192.png" alt="logo-react" />
        </div>
      </div>
    );
  }
}

AddToDo = connect(mapStateToProps, mapDispatchToProps)(AddToDo);

export default AddToDo;
