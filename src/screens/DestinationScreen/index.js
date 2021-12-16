import React, {useState} from 'react';
import {
    View,
    TextInput, 
    FlatList
} from 'react-native';
import styles from './styles';
import searchResults from '../../../assests/data/search';
import {Entypo} from '@expo/vector-icons';

const DestinationSearchScreen = props => {
{/*const [inputText, setInputText] = useState({initialState: ''});*/}
const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      <FlatList
        data={searchResults}
        renderItems={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} color="black" />
            </View>

            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
