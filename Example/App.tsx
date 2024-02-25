/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import ImageCompare from 'RNImageCompare';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ImageCompare
        imageLeft={{
          uri: 'https://www.iphon.fr/app/uploads/2023/10/shore-wide-s23.jpg',
        }}
        imageRight={{
          uri: 'https://www.iphon.fr/app/uploads/2023/10/shore-night-wide-iphone.jpg',
        }}
      />
      <ImageCompare
        imageLeft={require('./img/original.jpg')}
        imageRight={require('./img/restored.jpg')}
      />
    </SafeAreaView>
  );
}

export default App;
