"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var PropTypes = require("prop-types");
var getStyle = function (props, context) {
    var numbersStyle = {
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'block',
        boxSizing: 'border-box',
        borderRadius: '2px',
        backgroundColor: context.muiTheme.appBar.color,
        boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
        transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    };
    return {
        root: tslib_1.__assign({ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }, (props.style ? props.style : {})),
        wrapper: {
            position: 'relative',
            left: 0,
            top: 0,
            width: '340px',
            height: '240px',
            margin: '0 auto',
        },
        text: {
            position: 'absolute',
            top: '200px',
            left: 0,
            width: '340px',
            height: '40px',
            padding: '0 1rem',
            fontSize: '1.5rem',
            fontWeight: 'normal',
            textAlign: 'center',
            color: context.muiTheme.palette.primary1Color,
        },
        /*4*/
        number1Stripe1: tslib_1.__assign({}, numbersStyle, { left: '5px', width: '20px', height: '100px' }),
        number1Stripe2: tslib_1.__assign({}, numbersStyle, { top: '75px', width: '110px', height: '20px' }),
        number1Stripe3: tslib_1.__assign({}, numbersStyle, { left: '80px', width: '20px', height: '200px' }),
        /*0*/
        number2Stripe1: tslib_1.__assign({}, numbersStyle, { left: '125px', width: '20px', height: '200px' }),
        number2Stripe2: tslib_1.__assign({}, numbersStyle, { top: '5px', left: '120px', width: '105px', height: '20px' }),
        number2Stripe3: tslib_1.__assign({}, numbersStyle, { top: '175px', left: '120px', width: '105px', height: '20px' }),
        number2Stripe4: tslib_1.__assign({}, numbersStyle, { left: '200px', width: '20px', height: '200px' }),
        /*4*/
        number3Stripe1: tslib_1.__assign({}, numbersStyle, { left: '245px', width: '20px', height: '100px' }),
        number3Stripe2: tslib_1.__assign({}, numbersStyle, { top: '75px', left: '240px', width: '110px', height: '20px' }),
        number3Stripe3: tslib_1.__assign({}, numbersStyle, { left: '320px', width: '20px', height: '200px' }),
    };
};
var NotFound = /** @class */ (function (_super) {
    tslib_1.__extends(NotFound, _super);
    function NotFound() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayName = 'NotFound';
        return _this;
    }
    NotFound.prototype.render = function () {
        var style = getStyle(this.props, this.context);
        return (React.createElement("div", { className: this.props.className ? this.props.className : '', style: style.root },
            React.createElement("div", { style: style.wrapper },
                React.createElement("div", { style: style.number1Stripe1 }),
                React.createElement("div", { style: style.number1Stripe2 }),
                React.createElement("div", { style: style.number1Stripe3 }),
                React.createElement("div", { style: style.number2Stripe1 }),
                React.createElement("div", { style: style.number2Stripe2 }),
                React.createElement("div", { style: style.number2Stripe3 }),
                React.createElement("div", { style: style.number2Stripe4 }),
                React.createElement("div", { style: style.number3Stripe1 }),
                React.createElement("div", { style: style.number3Stripe2 }),
                React.createElement("div", { style: style.number3Stripe3 }),
                React.createElement("p", { style: style.text }, this.props.text))));
    };
    NotFound.defaultProps = {
        className: '',
        style: {},
        text: 'Page was not found.',
    };
    NotFound.contextTypes = {
        muiTheme: PropTypes.object,
    };
    return NotFound;
}(React.PureComponent));
exports.NotFound = NotFound;
