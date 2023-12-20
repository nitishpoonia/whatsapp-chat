import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

export default function Status() {
  return (
    <ScrollView horizontal>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.imageStyle}
        />
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.profilePhoto}
        />
        <Text style={styles.statusText}>John Doe</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.imageStyle}
        />
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.profilePhoto}
        />
        <Text style={styles.statusText}>John Doe</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.imageStyle}
        />
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.profilePhoto}
        />
        <Text style={styles.statusText}>John Doe</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.imageStyle}
        />
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.profilePhoto}
        />
        <Text style={styles.statusText}>John Doe</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.imageStyle}
        />
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.profilePhoto}
        />
        <Text style={styles.statusText}>John Doe</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 230,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  imageStyle: {
    height: 150,
    borderRadius: 10,
    zIndex: -1,
    opacity: 0.7,
  },
  profilePhoto: {
    height: 40,
    width: 40,
    borderRadius: 50,
    position: 'relative',
    left: 28,
    bottom: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  statusText: {
    position: 'relative',
    left: 15,
    width: 60,
    textAlign: 'center',
    bottom: 20,
  },
});
