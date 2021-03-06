import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import { create } from "react-test-renderer"
import Adapter from 'enzyme-adapter-react-16';
import Image from '../components/Image.jsx';

configure({ adapter: new Adapter() });

const baseProps = {
  handleImageClick: () => {},
  handleImageHover: () => {},
  'listingData': [
    {
      "id": 1,
      "image_url": "test",
      "sequence_id": 1,
      "caption": "test",
      "listing_id": 1
    },
    {
      "id": 2,
      "image_url": "test",
      "sequence_id": 2,
      "caption": "test",
      "listing_id": 1
    },
    {
      "id": 3,
      "image_url": "test",
      "sequence_id": 3,
      "caption": "test",
      "listing_id": 1
    },
    {
      "id": 4,
      "image_url": "test",
      "sequence_id": 4,
      "caption": "test",
      "listing_id": 1
    },
    {
      "id": 5,
      "image_url": "test",
      "sequence_id": 5,
      "caption": "test",
      "listing_id": 1
    }
  ]
};

const wrapper = shallow(<Image {...baseProps}/>);

it('State has clickedImageUrl prop', () => {
  expect(wrapper.state()).toHaveProperty('clickedImageUrl');
});

describe('Should display styled component divs', () => {
  it('Displays the Wrapper div', () => {
    expect(wrapper.exists('image-styles__Wrapper')).toEqual(true);
  });

  it('Displays the LeftHalf div', () => {
    expect(wrapper.exists('image-styles__LeftHalf')).toEqual(true);
  });

  it('Displays the RightHalf div', () => {
    expect(wrapper.exists('image-styles__RightHalf')).toEqual(true);
  });
});

it('Should display at least 1 image', () => {
  expect(wrapper.find('image-styles__RightHalf').children.length).toBeGreaterThan(0);
});
