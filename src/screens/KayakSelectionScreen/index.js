import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import KayakAnimateIn from '../../components/KayakAnimateIn';
import KayakAnimateOut from '../../components/KayakAnimateOut';

function KayakSelectionScreen() {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.root}>
      {number === 1 ? (
        <TouchableOpacity
          onPress={() => {
            setNumber(number === 2);
          }}
          style={{
            height: 50,
          }}>
          <Text style={{fontSize: 30}}>Back</Text>
        </TouchableOpacity>
      ) : null}
      {number === 0 ? (
        <TouchableOpacity
          onPress={() => {
            setNumber(1);
          }}
          style={{
            top: global.height * 0.2,
          }}>
          <Image
            style={{
              left: global.width * 0.1,
              width: global.width * 0.8,
              height: global.width * 0.88,
              transform: [{rotate: '-50deg'}, {scale: 0.7}],
            }}
            source={require('../../assets/img/kayak-red.png')}
          />
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Lifetime Youth</Text>
          </View>
        </TouchableOpacity>
      ) : number === 1 ? (
        <KayakAnimateIn />
      ) : (
        <KayakAnimateOut handlePress={() => setNumber(1)}>
          <View style={styles.cardAfter}>
            <Text style={styles.cardTitle}>Lifetime Youth</Text>
          </View>
        </KayakAnimateOut>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  card: {
    position: 'absolute',
    zIndex: -1,
    top: global.height * 0.2,
    left: global.width * 0.08,
    width: global.width * 0.85,
    height: global.height * 0.25,
    borderRadius: 25,
    backgroundColor: '#2549f3',
  },
  cardTitle: {
    color: 'white',
    fontSize: 25,
    top: 140,
    left: 30,
  },
  cardAfter: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    width: global.width * 0.85,
    height: global.height * 0.25,
    borderRadius: 25,
    backgroundColor: '#2549f3',
  },
});

export default KayakSelectionScreen;
