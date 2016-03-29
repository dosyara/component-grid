'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var lightbg = { background: '#EEE' };
exports['default'] = _react2['default'].createElement(
    'div',
    null,
    _react2['default'].createElement(
        'h1',
        null,
        'Grid examples'
    ),
    _react2['default'].createElement(
        'h2',
        null,
        'Using gutters for columns'
    ),
    _react2['default'].createElement(
        'p',
        null,
        'This is using a CSS `column-gap` value of width `var(--grid-gutter-m)`'
    ),
    _react2['default'].createElement(
        'div',
        { className: 'example-1' },
        _react2['default'].createElement(
            'p',
            null,
            'Bacon ipsum dolor amet pork belly ham ball tip strip steak kevin. Pastrami leberkas drumstick pork loin. Strip steak sirloin pig venison drumstick, meatball.'
        ),
        _react2['default'].createElement(
            'p',
            null,
            'Pancetta meatball rump turducken meatloaf leberkas. Ham prosciutto cupim drumstick. Tri-tip shank pastrami pork jowl. Ham beef capicola cow hamburger. Swine fatback cupim cow.'
        ),
        _react2['default'].createElement(
            'p',
            null,
            'Shank sirloin t-bone, tongue kielbasa rump ham short loin chicken cow tenderloin. Boudin salami ground round picanha, bresaola strip steak capicola ham venison. Pork chop meatball flank kielbasa. Bacon beef ribs t-bone.'
        ),
        _react2['default'].createElement(
            'p',
            null,
            'Shankle venison prosciutto picanha alcatra shoulder beef pork loin filet mignon. Boudin short ribs short loin, jowl turducken chicken frankfurter drumstick t-bone leberkas strip steak tongue biltong. Rump salami pig, tri-tip boudin prosciutto swine alcatra ribeye ham hock frankfurter tongue landjaeger kevin. Kevin landjaeger rump prosciutto.'
        ),
        _react2['default'].createElement(
            'p',
            null,
            'Pork loin tail leberkas spare ribs filet mignon beef. Filet mignon sausage bacon, chicken ribeye rump kevin shankle jowl. Capicola cow tri-tip ham bacon meatball salami pancetta shoulder porchetta alcatra sausage venison pastrami biltong. Pork picanha pig ham hock sausage, porchetta venison kielbasa.'
        )
    ),
    _react2['default'].createElement(
        'p',
        null,
        'The below boxes are separated horizontally by the value of `var(--grid-gutter-m)` and vertically by the value of `var(--grid-spacing-sloth)`'
    ),
    _react2['default'].createElement(
        'div',
        { className: 'example-2' },
        _react2['default'].createElement(
            'div',
            { className: 'box1' },
            _react2['default'].createElement(
                'div',
                { style: lightbg },
                'Box 1'
            )
        ),
        _react2['default'].createElement(
            'div',
            { className: 'box2' },
            _react2['default'].createElement(
                'div',
                { style: lightbg },
                'Box 2'
            )
        ),
        _react2['default'].createElement(
            'div',
            { className: 'box3' },
            _react2['default'].createElement(
                'div',
                { style: lightbg },
                'Box 3'
            )
        )
    )
);
module.exports = exports['default'];