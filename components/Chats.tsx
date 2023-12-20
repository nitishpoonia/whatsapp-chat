import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import React from 'react';

export default function Chats() {
  return (
    <ScrollView>
      <View style={styles.chatContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.profilePhoto}
        />
        <View style={styles.messageContainer}>
          <Text style={styles.userName}>Nitish Poonia</Text>
          <Text style={styles.message}>Sampel text message received</Text>
        </View>
        <View style={styles.lastContainer}>
          <Text>04:57 PM</Text>
          <Text>Tick</Text>
        </View>
      </View>
      <View style={styles.chatContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.profilePhoto}
        />
        <View style={styles.messageContainer}>
          <Text style={styles.userName}>Nitish Poonia</Text>
          <Text style={styles.message}>Sampel text message received</Text>
        </View>
        <View style={styles.lastContainer}>
          <Text>04:57 PM</Text>
          <Text>Tick</Text>
        </View>
      </View>
      <View style={styles.chatContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.profilePhoto}
        />
        <View style={styles.messageContainer}>
          <Text style={styles.userName}>Nitish Poonia</Text>
          <Text style={styles.message}>Sampel text message received</Text>
        </View>
        <View style={styles.lastContainer}>
          <Text>04:57 PM</Text>
          <Text>Tick</Text>
        </View>
      </View>
      <View style={styles.chatContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.profilePhoto}
        />
        <View style={styles.messageContainer}>
          <Text style={styles.userName}>Nitish Poonia</Text>
          <Text style={styles.message}>Sampel text message received</Text>
        </View>
        <View style={styles.lastContainer}>
          <Text>04:57 PM</Text>
          <Text>Tick</Text>
        </View>
      </View>
      <View style={styles.chatContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.profilePhoto}
        />
        <View style={styles.messageContainer}>
          <Text style={styles.userName}>Nitish Poonia</Text>
          <Text style={styles.message}>Sampel text message received</Text>
        </View>
        <View style={styles.lastContainer}>
          <Text>04:57 PM</Text>
          <Text>Tick</Text>
        </View>
      </View>
      <View style={styles.chatContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.profilePhoto}
        />
        <View style={styles.messageContainer}>
          <Text style={styles.userName}>Nitish Poonia</Text>
          <Text style={styles.message}>Sampel text message received</Text>
        </View>
        <View style={styles.lastContainer}>
          <Text>04:57 PM</Text>
          <Text>Tick</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    height: 70,
    marginVertical: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {},
  messageContainer: {
    flex: 1,
    justifyContent: 'space-around',
    height: 50,
  },
  lastContainer: {},
  profilePhoto: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginRight: 10,
  },
});
