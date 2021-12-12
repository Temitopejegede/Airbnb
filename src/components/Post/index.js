import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/* Image */}

            <Image 
                style={styles.image}
                source={{url: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}
            />

            
            {/*Bed and bathroom*/}

            {/*type and description*/}

            {/*old price and new price*/}
            
            {/*Total price*/}

        </View>
    );
};

export default Post;
