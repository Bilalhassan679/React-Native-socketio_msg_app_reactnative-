import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
const ChatScreen = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const socket = io('http://192.168.10.16:3000');
  // socket.on('Chat Message', msg => {
  //   setChatMessages([...chatMessages, msg]);
  // });

  socket.on('Chat Message', msg => {
    setChatMessages(msg);
  });
  useEffect(() => {
    socket;
  }, []);
  const submitting = () => {
    socket.emit('Chat Message', chatMessage);
    setChatMessage('');
  };
  return (
    <View style={styles.container}>
      {console.log(200000, chatMessage, 2005454, chatMessages)}
      <Text style={{backgroundColor: 'red'}}>ChatScreen</Text>
      <TextInput
        style={{height: 40, borderWidth: 2}}
        onChangeText={chatMessage => {
          setChatMessage(chatMessage);
        }}
        value={chatMessage}
        autoCorrect={false}
        onSubmitEditing={() => submitting()}
      />
      <Text>{chatMessages}</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
