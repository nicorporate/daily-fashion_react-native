import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions} from 'react-native';
import { categoryList, imageSlider } from '../data/Data';
// import { SliderBox } from 'react-native-image-slider-box';
import Carousel from 'react-native-snap-carousel';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
   } from 'react-native-responsive-screen-hooks';

// const { width: screenWidth } = Dimensions.get('window');
const { width: screenWidth, height: viewportHeight } = Dimensions.get('window');

const HomeScreen = (props) => {
    const {navigation} = props;
    const [entries, setEntries] = useState([
        { id: '1', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
        { id: '2', image: 'https://media.istockphoto.com/photos/tourist-woman-with-backpack-rear-view-picture-id1212702893?b=1&k=20&m=1212702893&s=170667a&w=0&h=0H3fStHp4Cspdyyd0Mrv2P-OT-bVxSh_CPIggBFAWPA=' },
        { id: '3', image: 'https://media.istockphoto.com/photos/portrait-of-a-man-sitting-with-a-suit-with-a-watch-studio-picture-id909869956?b=1&k=20&m=909869956&s=170667a&w=0&h=aCTsGeeDq_aK6__fWA32qPzOcXls9f2fYTEn_cJwCvg=' },
        { id: '4', image: 'https://images.unsplash.com/photo-1598343175492-9e7dc0e63cc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2xpcHBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
        { id: '5', image: 'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
      ]);
      const carouselRef = useRef(null);
    
      const renderItem = ({ item }) => {
        return (
          <View style={styles.slide}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain' />
            
          </View>
        );
      };
    return (
        <View style={styles.mainContainer}>
            {/* <SliderBox
                images={imageSlider}
                autoplay={true}
                circleLoop={true}
                sliderBoxHeight={250}
            /> */}
                <Carousel
                    ref={carouselRef}
                    data={entries}
                    renderItem={renderItem}
                    sliderWidth={screenWidth}
                    sliderHeight={hp('30%')}
                    itemWidth={screenWidth * 0.7}
                    layout={'stack'}
                    layoutCardOffset={18}
                    autoplay={true}
                    loop={true}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.text}>
                        Categories
                    </Text>
                </View>
                <FlatList
                    data={categoryList}
                    numColumns={3}
                    key={3}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContainer}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => navigation.navigate('ShowProduct', { categoryId: item.id })}
                            >
                                <Image
                                    source={{ uri: item.icon }}
                                    style={styles.icon}
                                />
                                <Text style={styles.itemName} >{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
        </View>
    );
  };

  const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1,
        padding: 8
    },
    titleContainer: {
        marginTop: 16,
        alignItems: 'center'
    },
    text: {
        fontSize: hp('5%'),
        fontWeight: 'bold',
        color: 'black'
    },
    flatListContainer: {
        padding: 8
    },
    button: {
        flex: 1,
        margin: 8,
        borderWidth: 1,
        borderColor: '#7CAF58',
        borderRadius: 10,
        height: hp('17%'),
        justifyContent: 'center',
        alignItems: 'center'
     },
    icon: {
        width: wp('20%'),
        height: hp('12%'),
        resizeMode: 'contain'
    },
    itemName: {
        color: 'black'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      slide: {
        backgroundColor: 'white',
        borderRadius: 8,
        height: screenWidth * 0.3,
        padding: 20,
        justifyContent: 'center',
      },
      image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
      },
});
  
  export default HomeScreen;