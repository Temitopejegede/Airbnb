import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';

const Post = (props) => {
    return (
        <View style={styles.container}>
            

            <Image 
                style={styles.image}
                source={{url: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}
            />

            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

            <Text style={styles.descriptions} numberOfLines={2}>
                Entire Flat. Puerto de la cruz Consequat occaecat anim minim nisi aute non nulla id sint aliqua ut adipisicing. 
                Nostrud cupidatat Lorem proident non et anim. Ut culpa et et sunt cupidatat id Lorem. Laboris proident officia culpa ea. 
                Reprehenderit eiusmod voluptate ad commodo elit minim minim amet quis cillum occaecat.
            </Text>
            
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.price}>  $30</Text>
            </Text>

            <Text style={styles.totalPrice}>$250 total</Text>

        </View>
    );
};

export default Post;
