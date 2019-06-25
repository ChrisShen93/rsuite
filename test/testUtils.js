import React from 'react';
import { findDOMNode } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import _ from 'lodash';

/**
 * https://stackoverflow.com/questions/36682241/testing-functional-components-with-renderintodocument
 */
export class TestWrapper extends React.Component {
  render() {
    return this.props.children;
  }
}

export function getInstance(children) {
  if (_.get(children, 'type.displayName')) {
    return ReactTestUtils.renderIntoDocument(<TestWrapper>{children}</TestWrapper>);
  }

  return ReactTestUtils.renderIntoDocument(children);
}

export function getDOMNode(children) {
  if (ReactTestUtils.isCompositeComponent(children)) {
    return findDOMNode(children);
  }

  return findDOMNode(getInstance(children));
}

export function innerText(node) {
  if (window.navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
    return node.textContent;
  }
  return node.innerText;
}