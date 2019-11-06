import React from 'react';
import {Animated, Image, TouchableOpacity} from 'react-native';
import {global} from 'core-js';

// const styles = StyleSheet.create({
//   cardTitle: {
//     color: 'white',
//     fontSize: 25,
//     top: 170,
//     left: 30,
//   },
// });

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const KayakAnimation = props => {
  let spinValue = new Animated.Value(0);
  let growValue = new Animated.Value(1.23);
  let cardHeightBottomValue = new Animated.Value(global.height * 0.65);
  let cardHeightTopValue = new Animated.Value(global.height * 0.3);
  let cardContentOpacityValue = new Animated.Value(0);
  Animated.timing(cardContentOpacityValue, {
    toValue: 1,
    duration: 900,
  }).start();

  Animated.timing(cardHeightTopValue, {
    toValue: global.height * 0.4,
    duration: 900,
  }).start();

  Animated.timing(cardHeightBottomValue, {
    toValue: global.height * 0.25,
    duration: 900,
  }).start();

  Animated.timing(growValue, {
    toValue: 0.7,
    duration: 900,
    // easing: Easing.linear,
  }).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-50deg'],
  });
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 900,
    // easing: Easing.linear,
  }).start();

  return (
    <Animated.View>
      <AnimatedTouchable
        onPress={props.handlePress}
        style={{
          position: 'absolute',
          zIndex: 1,
          top: cardHeightTopValue,
          left: global.width * 0.08,
          width: global.width * 0.85,
          height: cardHeightBottomValue,
          borderRadius: 25,
          backgroundColor: '#2549f3',
        }}>
        <Animated.View
          style={{
            opacity: cardContentOpacityValue,
          }}>
          {props.children}
        </Animated.View>
      </AnimatedTouchable>
      <Animated.View // Special animatable View
        style={{
          position: 'absolute',
          top: global.height * 0.2,
          left: global.width * 0.1,
          transform: [{rotate: spin}, {scale: growValue}],
        }}>
        <Image
          style={{
            width: global.width * 0.8,
            height: global.width * 0.88,
          }}
          source={require('../../assets/img/kayak-red.png')}
        />
      </Animated.View>
    </Animated.View>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default KayakAnimation;
