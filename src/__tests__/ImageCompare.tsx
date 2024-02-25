import React from 'react';
import {render} from '@testing-library/react-native';
import ImageCompare from '../ImageCompare';

describe('<ImageSlider />', () => {
  it('renders two images', () => {
    const imageLeftSrc = {uri: 'imageLeftSrc.jpg'};
    const imageRightSrc = {uri: 'imageRightSrc.jpg'};

    const {getAllByTestId} = render(
      <ImageCompare imageLeft={imageLeftSrc} imageRight={imageRightSrc} />,
    );
    const images = getAllByTestId('image-component');
    expect(images.length).toBe(2);
  });
});
