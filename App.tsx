import {ScrollView} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Status from './components/Status';
import Chats from './components/Chats';

export default function App() {
  return (
    <ScrollView>
      <Header />
      <Status />
      <Chats />
    </ScrollView>
  );
}

// const styles = StyleSheet.create({});
