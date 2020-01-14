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
import { Text, StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';

declare var global: { HermesInternal: null | {} };
const { width: screenWidth } = Dimensions.get('window');
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#085061', '#092853']} style={styles.container}>
        <MyCarousel entries={['One', 'Two', 'Three']} />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
export default App;

function MyCarousel({ entries }: any) {
  const [activeSlide, setActiveSlide] = useState(0);

  const _renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );

  const Pages = () => (
    <Pagination
      dotsLength={entries.length}
      activeDotIndex={activeSlide}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white',
      }}
    />
  );

  return (
    <View style={styles.container}>
      <Carousel
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        data={entries}
        renderItem={_renderItem}
        onSnapToItem={setActiveSlide}
      />
      <Pages />
    </View>
  );
}
