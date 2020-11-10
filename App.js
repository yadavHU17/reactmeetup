/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Config from 'react-native-config';
import {Text} from 'react-native'
const App = () => {
  return (
    <>
<Text>{Config.DATA}</Text>
    </>
  );
};

export default App;
