import React from 'react';
import Message from '../components/Message';

const Channel = (props) => {
  // extract variables from props object
  const channel = {
    channelName: 'Test Channel',
    users: [
      {
        _id: 1,
        name: 'test'
      }
    ],
    messages: [
      { username: 'test1', textContent: 'Test message', timeStamp: Date.now() },
      { username: 'test2', textContent: 'Test message2', timeStamp: Date.now() }
    ]
  };
  const { channelName, messages, users } = channel;

  return (
    <>
      {/* map through all users to display their names */}
      <div className='channel-head' >
      {/* name of channel */}
      <h1 >{channelName}</h1>
        {users.map((user) => (
          <div key={user._id} >
           <h3>
           {user.name}
             </h3> 
            </div>
        ))}
      </div>
      {/* map through all messages to show their content */}
      <div>
        {messages.map((message) => (
          <div key={message._id}>
            <Message
              username={message.username}
              textContent={message.textContent}
              timeStamp={message.timeStamp}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Channel;