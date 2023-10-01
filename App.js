import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [username, setUsername] = useState(() => "");

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput value={username} onChangeText={(val) => setUsername(val)} style={styles.textInput} placeholder='Please enter your username' />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.textInput} placeholder='Please enter your username' />
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>


      <Text style={{ marginTop: 10, fontSize: 15 }}>
        Forgot your password?
      </Text>


      <Text style={{ marginTop: 10, fontSize: 15 }}>
        Don't have an account? <Text style={{ color: 'blue' }}>Sign Up</Text>
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 30
  },
  label: {
    fontSize: 20,
    textAlign: 'left',
    width: 350,
    marginBottom: 5,
    fontWeight: '500'
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 2,
    width: 350,
    padding: 10,
    fontSize: 18,
    borderRadius: 5
  },
  button: {
    width: 350,
    backgroundColor: 'black',
    color: '#fff',
    marginTop: 50,
    textAlign: 'center',
    padding: 15,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#ccc',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
