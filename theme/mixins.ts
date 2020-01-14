import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

type numOrString = string | number; //e.g. "10%" or 10

function dimensions({
  top,
  right = top,
  bottom = top,
  left = right,
  property,
}: {
  top: numOrString;
  right: numOrString;
  bottom: numOrString;
  left: numOrString;
  property: any;
}) {
  let styles: any = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin({top, right, bottom, left}: any) {
  return dimensions({top, right, bottom, left, property: 'margin'});
}

export function padding({top, right, bottom, left}: any) {
  return dimensions({top, right, bottom, left, property: 'padding'});
}

export function boxShadow({
  color,
  offset = {height: 2, width: 2},
  radius = 8,
  opacity = 0.2,
}: {
  color: string;
  offset: any;
  radius: number;
  opacity: number;
}) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
