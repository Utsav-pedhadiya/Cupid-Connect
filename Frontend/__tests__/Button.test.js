// YourComponent.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/component/Button';

describe(Button, () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button title="Hello, Jest!" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
