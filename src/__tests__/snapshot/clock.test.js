'use strict';

import React from "react";
import Clock from "../../examples/snapshot/Clock";
import renderer from 'react-test-renderer';

jest.useFakeTimers();
Date.now = jest.fn(() => 1482363367071);

test('renders correctly', () => {
    const tree = renderer.create(<Clock/>).toJSON();
    expect(tree).toMatchSnapshot();
});