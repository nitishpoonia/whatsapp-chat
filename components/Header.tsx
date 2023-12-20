import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <Text style={styles.textHeading}>Edit</Text>
          <Text style={styles.textHeading}>Home</Text>
          <Text style={styles.textHeading}>+</Text>
        </View>
        <View style={styles.bottomHeader}>
          <Text style={styles.textHeading}>Chats</Text>
          <Text style={styles.textHeading}>Groups</Text>
          <Text style={styles.textHeading}>Calls</Text>
          <Text style={styles.textHeading}>Active</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    backgroundColor: '#0fba46',
    paddingHorizontal: 8,
    paddingTop: 12,
    height: 130,
  },
  topHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textHeading: {
    fontSize: 20,
    color: '#fff',
  },
  bottomHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
