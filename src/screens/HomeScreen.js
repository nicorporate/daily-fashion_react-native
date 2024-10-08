import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import { categoryList } from '../data/Data';
// import { SliderBox } from 'react-native-image-slider-box';



const HomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            {/* <SliderBox
                images={imageSlider}
                autoplay={true}
                circleLoop={true}
                sliderBoxHeight={250}
            /> */}
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
        fontSize: 18,
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
        height: 130,
        justifyContent: 'center',
        alignItems: 'center'
     },
    icon: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    itemName: {
        color: 'black'
    }
});
  
  export default HomeScreen;