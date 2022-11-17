import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 200,
  },
  text: {
    fontSize: 30
  },
  button: {
    marginTop: 60,
    paddingHorizontal: 60,
    paddingVertical: 20,
    backgroundColor: '#4c51f7',
  },
  buttonText: {
    fontSize: 20
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coffee Talk</Text>
      <Text style={styles.text}>GraphQL</Text>
      <Pressable style={styles.button} onPress={() =>
        navigation.navigate('Books')
      }>
        <Text style={styles.buttonText}>Start</Text>
      </Pressable>

    </View>

  );
};

export default HomeScreen