import React from 'react';
import {Animated, Image} from 'react-native';
import {global} from 'core-js';

const KayakAnimateIn = props => {
  let spinValue = new Animated.Value(0);
  let growValue = new Animated.Value(0.7);

  let cardHeightBottomValue = new Animated.Value(global.height * 0.3);
  let cardHeightTopValue = new Animated.Value(global.height * 0.4);

  Animated.timing(cardHeightTopValue, {
    toValue: global.height * 0.3,
    duration: 900,
  }).start();

  Animated.timing(cardHeightBottomValue, {
    toValue: global.height * 0.65,
    duration: 900,
  }).start();

  Animated.timing(growValue, {
    toValue: 1.23,
    duration: 900,
    // easing: Easing.linear,
  }).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['-50deg', '0deg'],
  });
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 900,
    // easing: Easing.linear,
  }).start();

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          top: cardHeightTopValue,
          left: global.width * 0.08,
          width: global.width * 0.85,
          height: cardHeightBottomValue,
          borderRadius: 25,
          backgroundColor: '#2549f3',
        }}>
        {props.children}
      </Animated.View>
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
    </>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default KayakAnimateIn;
