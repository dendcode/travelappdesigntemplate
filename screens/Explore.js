import React, { Component }  from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons' // 아이콘 npm 설치
import Category from './components/Explorez/Category'
import Home from './components/Explorez/Home'
import Tag from './components/Explorez/Tag'

const { height, width } = Dimensions.get('window')

class Explore extends Component {

    // 윌마운트
    componentWillMount(){

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 80
        this.endHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 60 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })

    }

    // 렌더
    render() {
        return (
            <SafeAreaView style={{ flex:1 }}>
                <View style={{ flex: 1 }}>
                    <Animated.View style={{ 
                        height:this.animatedHeaderHeight, 
                        backgroundColor: 'white',
                        borderBottomWidth:1, 
                        borderBottomColor: '#dddddd' }}>
                            <View style={{
                                flexDirection: 'row', padding: 10,
                                backgroundColor: 'white', marginHorizontal: 20,
                                shadowOffset: { width: 0, height: 0 },
                                shadowColor: 'black',
                                shadowOpacity: 0.2,
                                elevation: 1,
                                marginTop: Platform.OS == 'android' ? 30 : null }}>
                                    <Icon name="ios-search" size={20} style={{ marginRight: 20, marginTop: 5 }} />
                                    <TextInput 
                                        underlineColorAndroid="transparent"
                                        placeholder="런던을 경험해보세요"
                                        placeholderTextColor="grey"
                                        style={{ flex: 1, fontWeight: '700', backgroundColor: 'white'}} />
                            </View>
                            <View style={{ 
                                flexDirection: 'row', 
                                marginHorizontal: 20, 
                                position:'relative', 
                                top: 10,
                                // opacity: this.animatedOpacity 이거 키면 오류;
                                }}>
                                <Tag name="게스트"/>
                                <Tag name="세미나 홀리데이"/>
                                <Tag name="전용기"/>
                                <Tag name='요트렌트' />
                                <Tag name='에스코트' />

                                
                            </View>
                    </Animated.View>

                    <ScrollView style={{ backgroundColor: 'white' }}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                {nativeEvent:{ contentOffset:{ y:this.scrollY } }}
                            ]
                        )}>
                        <View style={{ flex:1, backgroundColor: 'white', paddingTop: 20}}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, color: '#525252' }}>
                                어디론가 떠나고 싶으시죠?
                            </Text>
                        </View>
                        
                        <View style={{ height: 130, marginTop: 20}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <Category imageUri={require('../assets/home.jpg')}
                                    name="휴식"/>
                                <Category imageUri={require('../assets/experiences.jpg')}
                                    name="새로운 경험"/>
                                <Category imageUri={require('../assets/restaurant.jpg')}
                                    name="음식의 발견"/>                                                                        
                            </ScrollView>
                        </View>
                        <View style={{marginTop:20, paddingHorizontal:20}}>
                            <Text style={{fontSize: 24, fontWeight: '700', color: '#525252'}}>
                                덴드 프리미어를 소개합니다
                            </Text>
                            <Text style={{fontWeight: '100', marginTop: 10, color: '#525252'}}>
                                검증된 새로운 장소를 찾으시고 편안함을 누리세요 
                            </Text>
                            <View style={{width: width-40, height:200, marginTop:20}}>
                                <Image
                                    style={{ flex:1, height:null, width:null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                    source={require('../assets/premium.jpg')}
                                />
                            </View>
                            <Text style={{marginTop:30, fontSize: 24, fontWeight: '700', color: '#525252'}}>
                                이런 호텔은 한번 쯤 가봐야죠
                            </Text>
                            <Text style={{fontWeight: '100', marginTop: 10, color: '#525252'}}>
                                빛나는 피라미드 아래, 7성급 카이로 최고의 럭셔리 호텔에서 진정한 이집트를 만나 보내보세요 
                            </Text>                            
                            <View style={{width: width-40, height:200, marginTop:20}}>
                                <Image
                                    style={{ flex:1, height:null, width:null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                    source={require('../assets/hotel.jpg')}
                                />
                            </View>                            
                        </View>
                        <View style={{ marginTop:40 }}>
                                <Text style={{fontSize:24, fontWeight: '700', paddingHorizontal:20, color: '#525252'}}>
                                    전 세계 럭셔리 시그니처 룸
                                </Text>
                                <View style={{paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                                    <Home width={width} name="완벽한 보안과 편안함" type="프라이빗 2베드 룸" price='666,000' rating='4.5'/>
                                    <Home width={width} name="격식과 품격" type="프라이빗 스위트 룸" price='2,274,000' rating='4.5'/>
                                    <Home width={width} name="중요한 고객을 위한" type="VIP 마스터 룸" price='3,200,000' rating='4.5'/>
                                    <Home width={width} name="전 세계 1% 엄선" type="프라이빗 풀빌라" price='5,760,000' rating='5'/>

                                </View>
                            <View style={{marginTop:10, marginBottom: 60, paddingHorizontal:20}}>
                                <Text style={{marginTop:10, fontSize: 24, fontWeight: '700', color: '#525252'}}>
                                    1%의 삶을 누리세요
                                </Text>
                                <Text style={{fontWeight: '100', marginTop: 10, color: '#525252'}}>
                                    코로나 바이러스를 피해 최고의 보안시설과 의료시설을 갖춘 시설에서 휴가를 보내세요 
                                </Text>                            
                                <View style={{width: width-40, height:200, marginTop:20}}>
                                    <Image
                                        style={{ flex:1, height:null, width:null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/summer.jpg')}
                                    />
                                </View>  
                            </View>                                   
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    } // 렌더()
} // 클래스 Explore 

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});