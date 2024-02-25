# React Native Image Compare

React Native Image Compare is a React Native component that enables users to visually compare two images by sliding a divider to reveal more or less of each image.

![ScreenRecording2024-02-25at23 59 20-ezgif com-optimize](https://github.com/SuperBesse/react-native-image-compare/assets/10027577/8b2dc37d-04a8-4741-80a5-d09709b13c71)

## Features

- **Chose two images**: A slide allows you to see the differences between these two images

## Coming soon

- [Remove react native slider dependencies](https://github.com/SuperBesse/react-native-image-compare/issues/6)
- [Slide by gesture](https://github.com/SuperBesse/react-native-image-compare/issues/5)
- [Display an optionnal vertical separator](https://github.com/SuperBesse/react-native-image-compare/issues/2)

## Installation

To install the React Native Image Comparison Slider, run the following command in your React Native project:

```bash
yarn add react-native-image-comparison-slider @react-native-community/slider
```
Or, if you prefer using npm:
```
npm install react-native-image-comparison-slider @react-native-community/slider --save
```

## Usage

Here's a basic example of how to use the Image Comparison Slider in your React Native application:

```jsx
import React from 'react';
import { View } from 'react-native';
import ImageComparisonSlider from 'react-native-image-comparison-slider';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ImageComparisonSlider
      imageLeft={{ uri: 'https://example.com/image1.jpg' }}
      imageRight={{ uri: 'https://example.com/image2.jpg' }}
    />
  </View>
);



export default App;
```

## Props

| Prop            | Type     | Description                                        | Default |
|-----------------|----------|----------------------------------------------------|---------|
| `imageLeft`     | [ImageSource](https://reactnative.dev/docs/image#imagesource)   | Source for the left image.                  | None    |
| `imageRight`    | [ImageSource](https://reactnative.dev/docs/image#imagesource)   | Source for the right image.                 | None    |

## Contributing

We welcome contributions to the React Native Image Comparison Slider! Whether it's reporting bugs, discussing new features, or submitting pull requests, all contributions are appreciated.

To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes.
4. Push to your branch.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.