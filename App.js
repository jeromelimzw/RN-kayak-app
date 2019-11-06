import React from 'react';
import {Dimensions} from 'react-native';
import KayakSelectionScreen from './src/screens/KayakSelectionScreen';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
global.width = viewportWidth;
global.height = viewportHeight;

function App() {
  return <KayakSelectionScreen />;
}

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//   },
// });

export default App;
