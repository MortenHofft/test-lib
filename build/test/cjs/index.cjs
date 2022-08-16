'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
require('react');
var react = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);

var _excluded = ["color"];
var Button = function Button(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties__default["default"](_ref, _excluded);

  // const [state, setState] = useState(5);
  return react.jsx("button", {
    style: {
      background: color || 'pink',
      fontSize: 30
    }
  }, props.children);
}; // Button2.displayName = 'Button2';
// Button2.propTypes = {
//   color: PropTypes.string
// };
// export { Example } from './components/Autocomplete/Example';
// export { Autocomplete } from './components/Autocomplete/Autocomplete';
// export { Button } from './components/Button/Button2';
// export * from './components';
// export { default as OccurrenceSearch } from './search/OccurrenceSearch/Standalone';
// export { default as CollectionSearch } from './search/CollectionSearch/Standalone';
// export { default as InstitutionSearch } from './search/InstitutionSearch/Standalone';
// export { default as LiteratureSearch } from './search/LiteratureSearch/Standalone';
// export { default as DatasetSearch } from './search/DatasetSearch/Standalone';
// export { default as PublisherSearch } from './search/PublisherSearch/Standalone';
// export { default as Collection } from './entities/Collection/Standalone';
// export { default as Institution } from './entities/Institution/Standalone';
// export { default as Dataset } from './entities/Dataset/Standalone';
// export { default as themeBuilder } from './style/themeBuilder';
// export  { Example as Filter } from './widgets/Filter/Filter.stories';
// export  { GlobalNav, Example } from './components/Navigation/GlobalNav/GlobalNav';
// export const Button = props => <h1 style={{background: 'pink', color: 'white'}}>test</h1>

exports.Button = Button;
