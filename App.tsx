/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import Animated from 'react-native-reanimated';
import { scaleSize } from './theme/mixins';
declare var global: { HermesInternal: null | {} };
const xOffSet = new Animated.Value(0);
const SCREEN_WIDTH = Dimensions.get('window').width;
// <LinearGradient colors={['#085061', '#092853']} style={styles.container}></LinearGradient>

const App = () => {
  const [offSet, setOffSet] = useState(0);
  const Pages = [
    <Animated.View style={styles.scrollPage}>
      <Text>First page with offset: {offSet}</Text>
    </Animated.View>,
    <Animated.View style={styles.scrollPage}>
      <Text>Second page with offset: {offSet}</Text>
    </Animated.View>,
    <Animated.View style={styles.scrollPage}>
      <Text>Third page with offset: {offSet}</Text>
    </Animated.View>,
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        horizontal
        pagingEnabled
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        // onScroll={Animated.event(
        //   [{ nativeEvent: { contentOffset: { x: xOffSet } } }],
        //   { useNativeDriver: true },
        // )}
        onMomentumScrollEnd={({ nativeEvent: { contentOffset } }) =>
          setOffSet(contentOffset.x)
        }>
        {Pages}
      </Animated.ScrollView>
      <Text>Current Page: {Math.round(offSet / SCREEN_WIDTH) + 1}</Text>
      <Dots number={Pages.length} />
    </SafeAreaView>
  );
};
function Dots({ number, activeIndex }: any) {
  return (
    <View>
      {Array(number).fill(
        <View>
          <Text style={styles.textDot}>{'\u2B24'}</Text>
        </View>,
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  button: {
    width: '40%',
    borderRadius: 10,
  },
  scrollView: {
    flexDirection: 'row',
    backgroundColor: 'lightyellow',
  },
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: scaleSize(20),
  },
  dotsContainer: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  textDot: {
    backgroundColor: 'red',
    flexGrow: 0,
    color: 'black',
  },
});

export default App;
