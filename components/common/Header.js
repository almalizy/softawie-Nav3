import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle} >
            <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 60,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 18
    },
    textStyle: {
       color: 'black',
       fontSize: 17,
       fontWeight: 'bold'
    }
});

export { Header };
