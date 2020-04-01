const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

import NumberBaseball from './NumberBaseball';
import NumberBaseballHooks from './NumberBaseballHooks';
import RenderTest from './RenderTest';
import ResponseCheck from './ResponseCheck';
import ResponseCheckHooks from './ResponseCheckHooks';
import RSP from './RSP';
import RSPHooks from './RSPHooks';
import Lotto from './Lotto';
import LottoHooks from './LottoHooks';

const Hot = hot(LottoHooks);

ReactDom.render(<Hot />, document.querySelector('#root'));
