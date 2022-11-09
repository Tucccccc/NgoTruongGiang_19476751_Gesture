import React, { useState } from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import icon from '../assets/cat.png'


export default function Screen1({ navigation }) {

    const [location, setLocation] = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(10),
        marginTop: new Animated.Value(10)

    });

    function onPress(evt) {


        console.log('====================================');
        var x = evt.nativeEvent.locationX;
        console.log('====================================');
        console.log(x);
        console.log('====================================');
        var y = evt.nativeEvent.locationY;
        console.log('====================================');
        setLocation({
            x: x,
            y: y,
            marginLeft: x,
            marginTop: y

        })


    }
    function onMove(evt) {



        console.log('====================================');
        console.log(location);
        console.log('====================================');
        //setLocation({marginLeft: x, marginTop: y })
    }
    function onRelease() {
        console.log("Release!");
    }
    const { marginTop, marginLeft } = location;

    return (
        <View
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
            onResponderGrant={onPress}
            onResponderMove={onMove}
            onResponderRelease={onRelease}
            style={styles.container}>

            <TouchableOpacity style={{ width: 100, height: 30, marginLeft: 'auto', marginRight: 'auto', marginTop: '5%', alignItems: 'center', backgroundColor: '#dcdcdc' }}
                onPress={() => navigation.navigate('Screen3')}>
                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Screen 3</Text>
            </TouchableOpacity>

            <Animated.Image
                source={icon}
                style={{ marginLeft: marginLeft, marginTop: marginTop, width: "20%", height: "10%" }}
            >
            </Animated.Image>

            <TouchableOpacity style={{ width: 100, height: 30, marginLeft: 'auto', marginRight: 'auto', marginTop: '100%', alignItems: 'center', backgroundColor: '#dcdcdc' }}
                onPress={() => navigation.navigate('Option')}>
                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Screen 2</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
});

