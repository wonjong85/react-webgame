const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

import NumberBaseball from './NumberBaseball';
import NumberBaseballHooks from './NumberBaseballHooks';

const Hot = hot(NumberBaseballHooks);

ReactDom.render(<Hot />, document.querySelector('#root'));
