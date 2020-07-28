import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import StartRating from 'react-native-star-rating'
import StarRating from 'react-native-star-rating';


class Home extends Component {

    render(){
        return (
            <View style={{width: this.props.width / 2 -30 , height: this.props.width /2 -30, borderWidth: 0.5, borderColor: '#ddd', marginBottom: 20}}>
                <View style={{ flex:1 }}>
                    <Image 
                    style={{flex:1,width:null,height:null, resizeMode: 'cover'}}
                    source={require('../../../assets/Luxury.jpg')} />
                </View>
                <View style={{ flex:1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft:10 }}>
                    <Text style={{fontSize: 10, color: '#d1922e'}}>{this.props.type}</Text>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>{this.props.name}</Text>
                    <Text style={{fontSize: 10}}>{this.props.price}원 부터</Text>
                    <StarRating disable={true} maxStars={5} rating={this.props.rating} starSize={10} ratingColor='#d1922e' />
                </View>
            </View>
          );
    }

}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});