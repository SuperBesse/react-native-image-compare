import React, {useState} from 'react';
import {
  View,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';

//TODO:
// option for bottom slider (!dependency from slider)
// props current value
// automatic animation
// deploy to npm
// reduce code and create folder for example
// create a vertical bar to scroll

type Props = {
  leftImage: ImageSourcePropType;
  rightImage: ImageSourcePropType;
};

const ImageSlider = (props: Props) => {
  const {leftImage, rightImage} = props;
  const [sliderValue, setSliderValue] = useState(0.5);
  const fullWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <Image
          style={[styles.imageLeft, {width: fullWidth}]}
          source={leftImage}
          testID="image-component"
        />
        <View
          style={[
            styles.overlayContainer,
            {width: fullWidth * (1 - sliderValue)},
          ]}>
          <Image
            source={rightImage}
            style={[styles.imageRight, {width: fullWidth}]}
            testID="image-component"
          />
        </View>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={sliderValue}
        onValueChange={setSliderValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  imageLeft: {
    top: 0,
    left: 0,
    height: 300,
    resizeMode: 'contain',
  },
  imageRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 300,
    resizeMode: 'contain',
  },
  slider: {
    height: 40,
  },
  imagesContainer: {
    position: 'relative',
    height: 300,
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 300,
    overflow: 'hidden',
  },
});
export default ImageSlider;
