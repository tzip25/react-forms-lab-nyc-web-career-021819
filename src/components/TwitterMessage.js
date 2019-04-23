import React from "react";

class TwitterMessage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      tweetMessage: '',
    }
  }

  writeTweet = (e) => {
    this.setState({
      tweetMessage: e.target.value,
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(e) => this.writeTweet(e)} value={this.state.tweetMessage}/>
        <p>{this.props.maxChars - this.state.tweetMessage.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
