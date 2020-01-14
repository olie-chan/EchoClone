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
import { scaleSize } from './theme/mixins';
import {
  FONT_SIZE_16,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_BOLD,
  FONT_SIZE_24,
} from './theme/typography';

declare var global: { HermesInternal: null | {} };
const { width: screenWidth } = Dimensions.get('window');
function WelcomePage() {
  return (
    <View style={[styles.container, styles.welcomeContainer]}>
      <Text style={[styles.textBase, styles.textHeader]}>Welcome to Echo</Text>
      <Text style={[styles.textBase]}>
        We're the pharmacy that comes to you. Use our service to manage your
        repeate NHS prescriptions, and get your medication delivered for free.
      </Text>
    </View>
  );
}
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#085061', '#092853']} style={styles.container}>
        <MyCarousel
          entries={[<WelcomePage />, <Text>Two</Text>, <Text>Three</Text>]}
        />
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
  welcomeContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  textBase: {
    color: 'white',
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_16,
  },
  textHeader: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_24,
  },
  dots: {
    width: scaleSize(10),
    height: scaleSize(10),
    borderRadius: scaleSize(5),
    backgroundColor: 'white',
  },
});
export default App;

function MyCarousel({ entries }: any) {
  const [activeSlide, setActiveSlide] = useState(0);

  const _renderItem = ({ item }) => (
    <View style={styles.container}>{item}</View>
  );

  const Pages = () => (
    <Pagination
      dotsLength={entries.length}
      activeDotIndex={activeSlide}
      dotStyle={styles.dots}
    />
  );

  return (
    <View style={styles.container}>
      <Carousel
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.8}
        data={entries}
        renderItem={_renderItem}
        onSnapToItem={setActiveSlide}
      />
      <Pages />
    </View>
  );
}
