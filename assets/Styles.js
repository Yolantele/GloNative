import { Dimensions } from 'react-native';
import { isIphoneX } from "react-native-iphone-x-helper";


const COLOURS = {
  primary: "#FB5268",
  secondary: "#FF94AA",
  complimentary: "#CCF6F1",
  neutral: "#FFD7CF",
  accent: "#C97698",
  highlight: "#D6283B",
  black: "#2D3134",
  white: "#FFFFFF",
  informative: "#718CFB",

  lightestText: "#FFFFFF",
  lighterText: "#E7A7A7",
  lightText: "#9B9B9B",
  darkText: "#94578D",
  
  backgroundLight: "#FFF8F6",
  backgroundDark: "#FFC2B3",
  backgroundDarkest: "#E7A7A7",
  background: "#FBE8E5",

  lightGrey: "#F8F8F8",
  lighterGrey: "#EAEAEA",
  lightestGrey: "#FAFBFB",
  darkGrey: "#A5A5A5",
  
  invisible: "rgba(0, 0, 0, 0)",
  darkTransparency: "rgba(0,0,0,0.2)",
  darkestTransparency: "rgba(0,0,0,0.7)",
  greyTransparent: "rgba(127,127,127,0.2)",
  whiteTransparent: "rgba(255,255,255,0.7)",
  lightWhiteTransparent: "rgba(255,255,255,0.3)",

  set: {
    green: "#0DD12F",
    amber: "#FAA733",
    red: "#EF430F"
  },
};

const SHAPE = {
  roundCorner: 30,
  bluntCorner: 10,
  sharpCorner: 2,
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const LAYOUT = {
  isSmallDevice: WIDTH < 375,
  isIphoneX : isIphoneX(),

  centered: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: "center",
  }
}

const EFFECTS = {
};

module.exports = {
  colours: COLOURS,
  shape: SHAPE,
  layout: LAYOUT,
  width: WIDTH,
  height: HEIGHT,
  effects: EFFECTS
};