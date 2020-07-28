import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';


class RegisterScreen extends Component {

    render(){
        return (
            <View style={styles.container}>
              <Text>RegisterScreen</Text>
            </View>
          );
    }

}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});