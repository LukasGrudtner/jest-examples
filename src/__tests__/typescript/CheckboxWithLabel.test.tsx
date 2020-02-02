import * as React from "react";
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';

const CheckboxWithLabel = require('../../examples/typescript/CheckboxWithLabel').default;

test('CheckboxWithLabelInTypeScript changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = TestUtils.renderIntoDocument(
        <CheckboxWithLabel labelOn="On" labelOff="Off"/>
    );

    // @ts-ignore
    const checkboxNode = ReactDOM.findDOMNode(checkbox);

    // Verify that it is Off by default
    expect(checkboxNode.textContent).toEqual("Off");

    // Simulate a click and verify that it is now On
    TestUtils.Simulate.change(
        TestUtils.findRenderedDOMComponentWithTag(checkbox, "input")
    );

    expect(checkboxNode.textContent).toEqual("On");
});