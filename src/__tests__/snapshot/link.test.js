'use strict';

import React from "react";
import Link from "../../examples/snapshot/Link";
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer
        .create(<Link page="http://www.google.com">Google</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders as an anchor when no page is set', () => {
    const tree = renderer.create(<Link>Google</Link>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('properly escapes quotes', () => {
    const tree = renderer
        .create(<Link>{"\"Facebook\" \\'is \\ 'awesome'"}</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://www.facebook.com">Facebook</Link>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});