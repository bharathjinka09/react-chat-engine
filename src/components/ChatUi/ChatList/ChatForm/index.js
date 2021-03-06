import React from 'react';

import { newChat } from 'react-chat-engine'

import { Button } from '../../components/Button'
import { TextInput } from '../../components/Input'

export default class ChatForm extends React.Component {
    state = {
        value: ''
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();

        if (this.state.value.trim().length > 0) {
          newChat(
            this.props.creds, 
            { title: this.state.value },
            () => {}
          )
        }

        this.setState({ value: '' })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>

          <div style={{ width: 'calc(100% - 26px)' }}>
            
            <div style={{ height: '1px' }}>
              <TextInput 
                label='New Chat'
                value={this.state.value}
                style={{ width: 'calc(100% - 48px)' }}
                handleChange={(e) => this.handleChange(e)}
              />
            </div>

            <div style={{ width: '100%', textAlign: 'right' }}>
              <Button 
                icon='plus'
                type="submit" 
              />
            </div>
          
          </div>

        </form>
      );
    }
}