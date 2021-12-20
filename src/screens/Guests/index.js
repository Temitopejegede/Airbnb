import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const GuestsScreen = props => {
  const [Adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={styles.age}>Adults</Text>
          <Text style={styles.askAge}>Ages 13 or above</Text>
        </View>

        <View style={styles.counters}>
          <Pressable
            onPress={() => setAdults(Math.max(0, Adults - 1))}
            style={styles.button}>
            <Text style={styles.signs}>-</Text>
          </Pressable>

          <Text style={styles.numbers}>{Adults}</Text>

          <Pressable
            onPress={() => setAdults(Adults + 1)}
            style={styles.button}>
            <Text style={styles.signs}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.age}>Children</Text>
          <Text style={styles.askAge}>Ages 2 - 12</Text>
        </View>

        <View style={styles.counters}>
          <Pressable
            onPress={() => setChildren(Math.max(0, children - 1))}
            style={styles.button}>
            <Text style={styles.signs}>-</Text>
          </Pressable>

          <Text style={styles.numbers}>{children}</Text>

          <Pressable
            onPress={() => setChildren(children + 1)}
            style={styles.button}>
            <Text style={styles.signs}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.age}>Infants</Text>
          <Text style={styles.askAge}>Under 2</Text>
        </View>

        <View style={styles.counters}>
          <Pressable
            onPress={() => setInfants(Math.max(0, infants - 1))}
            style={styles.button}>
            <Text style={styles.signs}>-</Text>
          </Pressable>

          <Text style={styles.numbers}>{infants}</Text>

          <Pressable
            onPress={() => setInfants(infants + 1)}
            style={styles.button}>
            <Text style={styles.signs}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestsScreen;
