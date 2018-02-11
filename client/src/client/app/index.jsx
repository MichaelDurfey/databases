import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import PropTypes from 'prop-types';
import UserNameInputView from './components/UserNameInputView';
import UserInputView from './components/UserInputView';
import RoomSearchView from './components/RoomSearchView';
import ChatContainerView from './components/ChatContainerView';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      messages: [],
      userInput: '',
      currentRoom: 'lobby',
    };
    this.handleUserInputClick = this.handleUserInputClick.bind(this);
    this.handleUsernameClick = this.handleUsernameClick.bind(this);
    this.handleRoomSelect = this.handleRoomSelect.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.postUserMessage = this.postUserMessage.bind(this);
  }

  componentDidMount() {
    this.getUserMessages(this.updateMessages);
    setInterval(() => this.getUserMessages(this.updateMessages), 4000);
  }

  /*
  handleClick(variable, value) {
    this.setState({variable: value})
  }
  */
  getUserMessages(callBack) {
    $.ajax({
      type: 'GET',
      ContentType: 'application/json',
      url: '/classes/messages',
      success(data) {
        data = JSON.parse(data);
        callBack(data);
      },
      error(data) {
        console.log('failure', data);
      },
    });
  }

  handleRoomSelect(room) {
    this.setState({ currentRoom: room });
  }

  handleUsernameClick(name) {
    this.setState({ username: name });
  }

  handleUserInputClick(message) {
    this.setState({ userInput: message }, this.postUserMessage);
  }

  postUserMessage() {
    const message = {
      username: this.state.username,
      message: this.state.userInput,
      roomname: this.state.currentRoom,
    };
    $.ajax({
      type: 'POST',
      url: '/classes/messages',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(message),
      success() {
      },
      error(data) {
        console.log('failure', data);
      },
    });
  }

  updateMessages(data) {
    this.setState({ messages: data });
  }


  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="UNIV-container">
            {this.state.username }
            { this.state.username === '' ? <UserNameInputView userNameClick={this.handleUsernameClick} /> : null }
          </div>
          <div className="UIV-container">
            <UserInputView userInputClick={this.handleUserInputClick} />
          </div>
          <div className="RSV-container">
            Room Search
            {this.state.currentRoom}
            <RoomSearchView handleRoomSelect={this.handleRoomSelect} />
          </div>
        </div>
        <div className="CCV-container">
          <h1 className="chatViewHeader">Chat View</h1>
            <ChatContainerView
              messages={this.state.messages}
            />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
