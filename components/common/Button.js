import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={props.onPress}
        >
            <Text style={styles.textStyle}>{props.children}
                </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: 
    {
        marginTop: 20,
        flex:1,
        padding: 30,
        width: '100%',
        backgroundColor: '#e67e22',
        borderRadius: 4,
        alignItems: 'center',
        marginVertical: 20
      }
    ,
    textStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export { Button };
