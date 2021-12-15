/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assests/data/feed'
import SearchResultsScreen from './src/screens/SearchResults';

const post1 = feed[0];
const post2 = feed[1];


const App: () => Node = () => {

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        {/*<HomeScreen />*/}

        {/*<Post post={post1} >*/}
        {/*<Post post={post2}> */}

        <SearchResultsScreen/>

        
      </SafeAreaView>
    </>
    
  );
};



export default App;
