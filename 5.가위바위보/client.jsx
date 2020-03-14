const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

import NumberBaseball from './NumberBaseball';
import NumberBaseballHooks from './NumberBaseballHooks';
import RenderTest from './RenderTest';
import ResponseCheck from './ResponseCheck';
import ResponseCheckHooks from './ResponseCheckHooks';
import RSP from './RSP';

const Hot = hot(RSP);

ReactDom.render(<Hot />, document.querySelector('#root'));
