import _extends from '@babel/runtime/helpers/extends';
import { keyframes, jsx } from '@emotion/react';
import React, { useContext } from 'react';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
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

var ThemeContext = /*#__PURE__*/React.createContext(theme);

var _templateObject;
keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    background-color: #88888830;\n  }\n  50% {\n    background-color: #88888830;\n  }\n  75% {\n    background-color: #afafaf30;\n  }\n  to {\n    background-color: #88888830;\n  }\n"])));

var Input = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var props = _extends({}, _ref);

  useContext(ThemeContext); // return <button ref={ref} {...props} css={styles.input({theme})} />

  return jsx("button", _extends({
    ref: ref
  }, props));
});
Input.displayName = 'Input'; // export const FilterInput2 = React.forwardRef(({
//   suffix,
//   ...props
// }, ref) => {
//   const theme = useContext(ThemeContext);
//   return <Input {...props} 
//     style={{flex: '1 1 auto'}}
//     addonAfter={<Button appearance="outline" style={{ flex: '0 0 auto' }} >
//       <MdClose style={{ verticalAlign: 'middle' }} />
//     </Button>}
//     />
// });
// export const FilterInput = React.forwardRef(({
//   isApplied,
//   onClearRequest = () => { },
//   ...props
// }, ref) => {
//   const theme = useContext(ThemeContext);
//   return <div css={styles.inputGroup({theme})}>
//     <Input {...props} style={{flex: '1 1 auto'}} css={styles.inputGroupChild({theme})}/>
//     {/* <select {...props} style={{flex: '1 1 auto'}} css={{...styles.inputGroupChild({theme}), ...styles.input({theme})}}>
//       <option>sdf</option>
//       <option>sdf</option>
//       <option>sdf</option>
//       <option>sdf</option>
//     </select> */}
//     {/* <Example {...props} style={{flex: '1 1 auto'}}/> */}
//     <Button appearance="outline" style={{ flex: '0 0 auto' }} css={styles.inputGroupChild({theme})}>
//       <MdClose style={{ verticalAlign: 'middle' }} />
//     </Button>
//   </div>
// });

export { Input };
