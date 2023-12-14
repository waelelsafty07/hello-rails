import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomMessage } from '../redux/actions/messageActions';
import Message from './Message';

const App = ({ message, fetchRandomMessage }) => {
  useEffect(() => {
    fetchRandomMessage();
  }, [fetchRandomMessage]);

  return (
    <div>
      <h1>Hello Rails React!</h1>
      <Message message={message} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: state.message.message,
});

export default connect(mapStateToProps, { fetchRandomMessage })(App);
