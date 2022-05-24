'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var react = require('@emotion/react');
var React = require('react');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Button$1 = require('reakit/Button');
var _taggedTemplateLiteral = require('@babel/runtime/helpers/taggedTemplateLiteral');
require('fast-json-stable-stringify');
var md = require('react-icons/md');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _taggedTemplateLiteral__default = /*#__PURE__*/_interopDefaultLegacy(_taggedTemplateLiteral);

var themeVariables = {
  name: 'light',
  dense: true,
  primary: '#1ea7fd',
  linkColor: '#1393D8',
  fontSize: '15px',
  background: '#f1f5f8',
  paperBackground: '#ffffff',
  paperBorderColor: '#e5ebed',
  color: '#162d3d',
  darkTheme: false,
  fontFamily: '"Helvetica Neue", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica", "Arial", sans-serif',
  borderRadius: 3,
  drawerZIndex: 1000
};

// https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#micro-functions-version-4
var shadeHexColor = function shadeHexColor(color, percent) {
  var f = parseInt(color.slice(1), 16),
      t = percent < 0 ? 0 : 255,
      p = percent < 0 ? percent * -1 : percent,
      R = f >> 16,
      G = f >> 8 & 0x00FF,
      B = f & 0x0000FF;
  return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
};
function shadeBlend(p, c0, c1) {
  var n = p < 0 ? p * -1 : p,
      u = Math.round,
      w = parseInt;

  if (c0.length > 7) {
    var f = c0.split(","),
        t = (c1 ? c1 : p < 0 ? "rgb(0,0,0)" : "rgb(255,255,255)").split(","),
        R = w(f[0].slice(4)),
        G = w(f[1]),
        B = w(f[2]);
    return "rgb(" + (u((w(t[0].slice(4)) - R) * n) + R) + "," + (u((w(t[1]) - G) * n) + G) + "," + (u((w(t[2]) - B) * n) + B) + ")";
  } else {
    var f = w(c0.slice(1), 16),
        t = w((c1 ? c1 : p < 0 ? "#000000" : "#FFFFFF").slice(1), 16),
        R1 = f >> 16,
        G1 = f >> 8 & 0x00FF,
        B1 = f & 0x0000FF;
    return "#" + (0x1000000 + (u(((t >> 16) - R1) * n) + R1) * 0x10000 + (u(((t >> 8 & 0x00FF) - G1) * n) + G1) * 0x100 + (u(((t & 0x0000FF) - B1) * n) + B1)).toString(16).slice(1);
  }
}

var darkTheme = {
  name: 'dark',
  dense: true,
  primary: '#39af5d',
  //green
  fontSize: '14px',
  background: '#151515',
  paperBackground: '#2d2d2d',
  // paperBackground: '#161927',
  paperBackgroundElevated: '#3e3e3e',
  // background: '#181919',
  // paperBackground: '#2c2c2d',
  // paperBackgroundElevated: '#363638',
  paperBorderColor: '#0b0d13',
  color: '#e3e5ea',
  darkTheme: true,
  fontFamily: 'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  borderRadius: 3
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var build = function build(theme) {
  var fullTheme = _objectSpread(_objectSpread({}, themeVariables), theme);

  var direction = fullTheme.darkTheme ? -1 : 1;
  fullTheme.borderRadiusPx = theme.borderRadius + 'px';
  fullTheme.primary500 = theme.primary;
  fullTheme.primary600 = shadeHexColor(fullTheme.primary, -0.05);
  fullTheme.primary700 = shadeHexColor(fullTheme.primary, -0.1);
  fullTheme.primary400 = shadeHexColor(fullTheme.primary, 0.05);
  fullTheme.primary300 = shadeHexColor(fullTheme.primary, 0.1);
  fullTheme.transparentInk40 = "".concat(fullTheme.color, "40");
  fullTheme.transparentInk60 = "".concat(fullTheme.color, "60");
  fullTheme.transparentInk20 = "".concat(fullTheme.color, "20");
  fullTheme.transparentInk80 = "".concat(fullTheme.color, "80");
  fullTheme.transparentInk50 = "".concat(fullTheme.color, "50");
  [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function (x) {
    fullTheme["color".concat(10 - x, "00")] = shadeBlend(-1 * direction * x * 0.075, fullTheme.color, fullTheme.paperBackground);
  });
  fullTheme.linkColor = theme.linkColor || theme.primary;
  fullTheme.headerFontFamily = theme.headerFontFamily || theme.fontFamily; // GENERATE PAPER BACKGROUNDS
  // lighter paper colors are used to indicate elevation/focus
  // 500 is considered neutral standard color, 400 is darker and indicate secondary content
  // 600 is brighter and indicate elevation (used for dark themes)

  [1, 2, 3, 4].forEach(function (x) {
    //darken
    fullTheme["paperBackground".concat(5 + x, "00")] = shadeBlend(-x * 0.25, fullTheme.paperBackground, fullTheme.background); //lighten
    // paper colors below 500 might be capped if there are no diff to paperBackgroundElevated (e.g. is already white)

    fullTheme["paperBackground".concat(5 - x, "00")] = shadeBlend(x * 0.25, fullTheme.paperBackground, fullTheme.paperBackgroundElevated); // neutral

    fullTheme["paperBackground500"] = fullTheme.paperBackground;
  });
  fullTheme.darkPaperBackground = fullTheme.darkTheme ? '#000010' : '#4e4e52';
  var brightMapColors = ["#fed976", "#fd8d3c", "#fd8d3c", "#f03b20", "#bd0026"];
  var darkMapColors = brightMapColors; //['#ffd300', '#f4b456', '#e9928a', '#d96cc1', '#b93bff'];

  if (!fullTheme.mapDensityColors) {
    fullTheme.mapDensityColors = fullTheme.darkTheme ? darkMapColors : brightMapColors;
  }

  var cssVariables = {};

  for (var _i = 0, _Object$entries = Object.entries(fullTheme); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray__default["default"](_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (!(value instanceof Object)) {
      cssVariables["--".concat(key)] = value;
    }
  }

  fullTheme.cssVariables = cssVariables;
  return fullTheme;
};

var themeBuilder = {
  build: build,
  extend: function extend(_ref) {
    var _ref$baseTheme = _ref.baseTheme,
        baseTheme = _ref$baseTheme === void 0 ? themeVariables : _ref$baseTheme,
        extendWith = _ref.extendWith;
    var theme = baseTheme;

    if (typeof baseTheme === 'string') {
      if (baseTheme === 'dark') {
        theme = darkTheme;
      } else {
        theme = themeVariables;
      }
    }

    var variables = Object.assign({}, theme, extendWith);
    return build(variables);
  }
};

var theme = themeBuilder.build(themeVariables); // A context to share state for the full app/component

var ThemeContext = /*#__PURE__*/React__default["default"].createContext(theme);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  requireFactoryWithThrowingShims()();
}

var helper = {
  noUserSelect: "\n    -webkit-touch-callout: none;\n    user-select: none;\n  "
};

var _templateObject;
var button = function button(theme) {
  return /*#__PURE__*/react.css(helper.noUserSelect, " appearance:none;text-decoration:none;display:inline-flex;align-items:center;justify-content:flex-start;text-align:center;border:1px solid transparent;border-radius:", theme.borderRadius, "px;box-shadow:none;font-size:1em;padding-top:0.5em;padding-bottom:0.5em;line-height:calc(1.5em - 6px);position:relative;margin:0;background-color:white;color:", theme.color, ";cursor:pointer;justify-content:center;padding-left:", theme.dense ? 0.5 : 1, "em;padding-right:", theme.dense ? 0.5 : 1, "em;&:focus{outline:none;box-shadow:0 0 0 0.125em rgba(50, 115, 220, 0.25);}&[aria-disabled=\"true\"]{opacity:0.5;cursor:auto;}::-moz-focus-inner{border-style:none;}" + ("" ), "" );
};

var _ref5 = {
  name: "2ry9pw",
  styles: "padding:0;border:none;height:auto;color:inherit;line-height:inherit;font-weight:inherit;background:none;border-radius:0"
} ;

var text = function text(theme) {
  return _ref5;
};
var primary = function primary(theme) {
  return /*#__PURE__*/react.css("background-color:", theme.primary500, ";border-color:", theme.primary600, ";color:white;&:not([aria-disabled=\"true\"]){&:hover{color:white;border-color:", theme.primary500, ";background-color:", theme.primary600, ";}&:active,&[aria-expanded=\"true\"]{color:white;border-color:", theme.primary600, ";background-color:", theme.primary700, ";}}" + ("" ), "" );
};
var primaryOutline = function primaryOutline(theme) {
  return /*#__PURE__*/react.css("border-color:", theme.primary600, ";background:none;color:", theme.primary700, ";" + ("" ), "" );
};
var outline = function outline(theme) {
  return /*#__PURE__*/react.css("border-color:", theme.transparentInk40, ";background:none;" + ("" ), "" );
};

var _ref4 = {
  name: "8muanc",
  styles: "border-color:#808080;color:#808080;background:none"
} ;

var ghost = function ghost(theme) {
  return _ref4;
};

var _ref3 = {
  name: "mpmwmh",
  styles: "background:tomato;color:white"
} ;

var danger = function danger(theme) {
  return _ref3;
};

var _ref2 = {
  name: "1rbowyl",
  styles: "border-color:transparent;background:none"
} ;

var link = function link(theme) {
  return _ref2;
};

var _ref = {
  name: "7whenc",
  styles: "display:flex;width:100%"
} ;

var isFullWidth = function isFullWidth(theme) {
  return _ref;
};
var spinAround = react.keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral__default["default"](["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n"])));
var loading = function loading(theme) {
  return /*#__PURE__*/react.css("&:after{animation:", spinAround, " 500ms infinite linear;border:2px solid #dbdbdb;border-radius:0.5em;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;width:1em;left:calc(50% - (1em / 2));top:calc(50% - (1em / 2));position:absolute!important;}color:transparent!important;pointer-events:none;" + ("" ), "" );
};
var group = function group(_ref6) {
  var theme = _ref6.theme;
  return /*#__PURE__*/react.css("display:inline-flex;max-width:100%;>button{overflow:hidden;border-radius:0;margin:0;margin-right:-1px;}>button:first-of-type{border-top-left-radius:", theme.borderRadius, "px;border-bottom-left-radius:", theme.borderRadius, "px;flex:1 1 auto;}>button:last-of-type{border-top-right-radius:", theme.borderRadius, "px;border-bottom-right-radius:", theme.borderRadius, "px;}" + ("" ), "" );
};
var styles = {
  button: button,
  primary: primary,
  primaryOutline: primaryOutline,
  outline: outline,
  ghost: ghost,
  danger: danger,
  link: link,
  loading: loading,
  isFullWidth: isFullWidth,
  text: text,
  group: group
};

/**
 * generate human readable classnames for easier hacking through css
 * e.g. gbif-button gbif-button-isActive gbif-button-loading
 * @param {string} prefix how to prefix classNames (default 'gbif')
 * @param {string} elementName name of your component e.g. 'button'
 * @param {object} classes what modifiers are applied to this component. An object of booleans and/or strings. booleans will be appended as keys and strings as strings
 * @param {string} className other classnames
 */

function getClasses() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'gbif';
  var elementName = arguments.length > 1 ? arguments[1] : undefined;
  var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var classesToApply = [];
  Object.keys(classes).forEach(function (key) {
    var val = classes[key];

    if (val === true) {
      classesToApply.push(key);
    } else if (typeof val === 'string') {
      classesToApply.push(val);
    }
  });
  var humanClasses = getClassNames(prefix, elementName, classesToApply);
  return {
    classNames: {
      className: "".concat(className, " ").concat(humanClasses)
    },
    classesToApply: classesToApply
  };
}

var getClassNames = function getClassNames(prefix, elementName, classes) {
  var root = "".concat(prefix, "-").concat(elementName);
  return classes.reduce(function (a, c) {
    return "".concat(a, " ").concat(root, "-").concat(c);
  }, "".concat(root));
};

var _excluded = ["className", "loading", "isFullWidth", "isIcon", "appearance", "look", "children", "truncate"],
    _excluded2 = ["isActive", "onClearRequest", "onClick", "loading", "children", "title", "isNegated"];
var truncateStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};
var Button = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$isFullWidth = _ref.isFullWidth,
      isFullWidth = _ref$isFullWidth === void 0 ? false : _ref$isFullWidth;
      _ref.isIcon;
      var appearance = _ref.appearance,
      _ref$look = _ref.look,
      look = _ref$look === void 0 ? 'primary' : _ref$look,
      children = _ref.children,
      truncate = _ref.truncate,
      props = _objectWithoutProperties__default["default"](_ref, _excluded);

  appearance = appearance || look;
  var theme = React.useContext(ThemeContext);

  var _getClasses = getClasses(theme.prefix, 'button', {
    appearance: appearance,
    loading: loading,
    isFullWidth: isFullWidth
  }, className),
      classesToApply = _getClasses.classesToApply,
      classNames = _getClasses.classNames;

  return react.jsx(Button$1.Button, _extends__default["default"]({
    ref: ref
  }, classNames, {
    css: /*#__PURE__*/react.css(styles.button(theme), " ", classesToApply.map(function (x) {
      return styles[x](theme);
    }), ";" + ("" ), "" )
  }, props), truncate ? react.jsx("span", {
    style: truncateStyle
  }, children) : children);
});
Button.displayName = 'Button';
var ButtonGroup = function ButtonGroup(_ref2) {
  var props = _extends__default["default"]({}, _ref2);

  var theme = React.useContext(ThemeContext);
  return react.jsx("div", _extends__default["default"]({
    css: styles.group({
      theme: theme
    })
  }, props));
};
ButtonGroup.displayName = 'ButtonGroup';
var FilterButton = /*#__PURE__*/React__default["default"].forwardRef(function (_ref3, ref) {
  var isActive = _ref3.isActive,
      _ref3$onClearRequest = _ref3.onClearRequest,
      onClearRequest = _ref3$onClearRequest === void 0 ? function () {} : _ref3$onClearRequest,
      onClick = _ref3.onClick,
      loading = _ref3.loading,
      children = _ref3.children,
      title = _ref3.title,
      _ref3$isNegated = _ref3.isNegated,
      isNegated = _ref3$isNegated === void 0 ? false : _ref3$isNegated,
      props = _objectWithoutProperties__default["default"](_ref3, _excluded2);

  if (!isActive) {
    return react.jsx(ButtonGroup, props, react.jsx(Button, _extends__default["default"]({}, props, {
      ref: ref,
      loading: loading,
      appearance: "primaryOutline",
      onClick: onClick
    }), children));
  }

  return react.jsx(ButtonGroup, {
    style: {
      maxWidth: '100%'
    }
  }, isNegated && react.jsx(Button, _extends__default["default"]({}, props, {
    title: "Negated filter",
    appearance: "primary",
    onClick: onClick,
    loading: loading
  }), react.jsx("span", null, "Exclude")), react.jsx(Button, _extends__default["default"]({}, props, {
    style: {
      maxWidth: 400
    },
    title: title,
    truncate: true,
    appearance: "primary",
    ref: ref,
    onClick: onClick,
    loading: loading
  }), children), react.jsx(Button, {
    appearance: "primary",
    onClick: onClearRequest,
    style: {
      flex: '0 0 auto'
    }
  }, react.jsx(md.MdClose, {
    style: {
      verticalAlign: 'middle'
    }
  })));
});

exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.FilterButton = FilterButton;
