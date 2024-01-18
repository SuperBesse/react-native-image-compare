import React from 'react';
import {render} from '@testing-library/react-native';
import ImageCompare from '../ImageCompare';

describe('<ImageSlider />', () => {
  it('renders two images', () => {
    const leftImageSrc = {uri: 'leftImageSrc.jpg'};
    const rightImageSrc = {uri: 'rightImageSrc.jpg'};

    const {getAllByTestId} = render(
      <ImageCompare leftImage={leftImageSrc} rightImage={rightImageSrc} />,
    );
    const images = getAllByTestId('image-component');
    expect(images.length).toBe(2);
  });
});
