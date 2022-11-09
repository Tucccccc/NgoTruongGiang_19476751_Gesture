import React, { useState } from 'react'
import { Animated, View, StyleSheet, TouchableOpacity } from 'react-native'
import MouseIcon from '../assets/mouse.png'

export default function Screen2() {
    var ix_1 = Math.floor(Math.random() * 300);
    var iy_1 = Math.floor(Math.random() * 600);

    var ix_2 = Math.floor(Math.random() * 301);
    var iy_2 = Math.floor(Math.random() * 601);

    var ix_3 = Math.floor(Math.random() * 302);
    var iy_3 = Math.floor(Math.random() * 601);

    var ix_4 = Math.floor(Math.random() * 302);
    var iy_4 = Math.floor(Math.random() * 601);

    var ix_5 = Math.floor(Math.random() * 302);
    var iy_5 = Math.floor(Math.random() * 601);

    var ix_6 = Math.floor(Math.random() * 302);
    var iy_6 = Math.floor(Math.random() * 601);

    const [location, setLocation] = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(ix_1),
        marginTop: new Animated.Value(iy_1)

    });

    const [location1, setLocation1] = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(ix_2),
        marginTop: new Animated.Value(iy_2)

    });

    const [location2, setLocation2] = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(ix_3),
        marginTop: new Animated.Value(iy_3)

    });

    function onPress1(evt) {
        console.log('====================================');
        var x = evt.nativeEvent.locationX;
        console.log('====================================');
        console.log(x);
        console.log('====================================');
        var y = evt.nativeEvent.locationY;
        console.log('====================================');
        setLocation({
            x: ix_4,
            y: iy_4,
            marginLeft: ix_4,
            marginTop: iy_4

        })
    }

    function onPress2(evt) {
        console.log('====================================');
        var x = evt.nativeEvent.locationX;
        console.log('====================================');
        console.log(x);
        console.log('====================================');
        var y = evt.nativeEvent.locationY;
        console.log('====================================');
        setLocation({
            x: ix_5,
            y: iy_5,
            marginLeft: ix_5,
            marginTop: iy_5

        })
    }

    function onPress3(evt) {
        console.log('====================================');
        var x = evt.nativeEvent.locationX;
        console.log('====================================');
        console.log(x);
        console.log('====================================');
        var y = evt.nativeEvent.locationY;
        console.log('====================================');
        setLocation({
            x: ix_6,
            y: iy_6,
            marginLeft: ix_6,
            marginTop: iy_6

        })
    }

    const { marginTop, marginLeft } = location;
    const { marginTop1, marginLeft1 } = location1;
    const { marginTop2, marginLeft2 } = location2;

    return (
        <View style={styles.container}>
            <View style={styles.mouse1}>
                <TouchableOpacity onPress={onPress1}>
                    <Animated.Image
                        source={MouseIcon}
                        style={{ marginLeft: marginLeft, marginTop: marginTop, width: "20%", height: "18%" }}
                    >
                    </Animated.Image>
                </TouchableOpacity>
            </View>

            <View style={styles.mouse2}>
                <TouchableOpacity onPress={onPress2}>
                    <Animated.Image
                        source={MouseIcon}
                        style={{ marginLeft: marginLeft1, marginTop: marginTop1, width: "20%", height: "18%" }}
                    >
                    </Animated.Image>
                </TouchableOpacity>
            </View>

            <View style={styles.mouse3}>
                <TouchableOpacity onPress={onPress3}>
                    <Animated.Image
                        source={MouseIcon}
                        style={{ marginLeft: marginLeft2, marginTop: marginTop2, width: "20%", height: "18%" }}
                    >
                    </Animated.Image>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    mouse1: {
        display: 'flex',
    },

    mouse2: {
        display: 'flex',
    },

    mouse3: {
        display: 'flex',
    }
});