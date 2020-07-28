import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';


class HomeScreen extends Component {

    render(){
        return (
            <View style={styles.container}>
              <Text>HomeScreen</Text>
            </View>
          );
    }

}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});