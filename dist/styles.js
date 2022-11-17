'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.withImageStyle =
  exports.withTextStyle =
  exports.withViewStyle =
  exports.useImageStyle =
  exports.useTextStyle =
  exports.useViewStyle =
    void 0;
const lodash_1 = require('lodash');
const react_1 = require('react');
const react_native_1 = require('react-native');
const ReactNativeStyleAttributes_1 = __importDefault(
  require('react-native/Libraries/Components/View/ReactNativeStyleAttributes'),
);
const REACT_NATIVE_STYLE_ATTRIBUTES = Object.keys(
  ReactNativeStyleAttributes_1.default,
);
const pickReactNativeStyleAttributes = props =>
  (0, lodash_1.pick)(props, REACT_NATIVE_STYLE_ATTRIBUTES);
const pickFlexStyleAliases = props => {
  var _a, _b;
  return {
    margin: (_a = props.m) !== null && _a !== void 0 ? _a : props.margin,
    padding: (_b = props.p) !== null && _b !== void 0 ? _b : props.padding,
    paddingTop: props.pt,
    paddingRight: props.pr,
    paddingBottom: props.pb,
    paddingLeft: props.pl,
    marginTop: props.mt,
    marginRight: props.mr,
    marginBottom: props.mb,
    marginLeft: props.ml,
  };
};
const pickViewStyleAliases = props => {
  var _a;
  return {
    backgroundColor:
      (_a = props.backgroundColor) !== null && _a !== void 0
        ? _a
        : props.bgColor,
  };
};
const useViewStyle = props =>
  (0, lodash_1.omitBy)(
    Object.assign(
      Object.assign(
        Object.assign({}, pickReactNativeStyleAttributes(props)),
        pickFlexStyleAliases(props),
      ),
      pickViewStyleAliases(props),
    ),
    lodash_1.isUndefined,
  );
exports.useViewStyle = useViewStyle;
const useTextStyle = props =>
  (0, lodash_1.omitBy)(
    pickReactNativeStyleAttributes(props),
    lodash_1.isUndefined,
  );
exports.useTextStyle = useTextStyle;
const useImageStyle = props =>
  (0, lodash_1.omitBy)(
    Object.assign(
      Object.assign({}, pickReactNativeStyleAttributes(props)),
      pickFlexStyleAliases(props),
    ),
    lodash_1.isUndefined,
  );
exports.useImageStyle = useImageStyle;
const withViewStyle = Component =>
  (0, react_1.forwardRef)((props, ref) => {
    const viewStyle = (0, exports.useViewStyle)(props);
    return (
      <Component
        {...props}
        ref={ref}
        style={react_native_1.StyleSheet.compose(viewStyle, props.style)}
      />
    );
  });
exports.withViewStyle = withViewStyle;
const withTextStyle = Component =>
  (0, react_1.forwardRef)((props, ref) => {
    const textStyle = (0, exports.useTextStyle)(props);
    return (
      <Component
        {...props}
        ref={ref}
        style={react_native_1.StyleSheet.compose(textStyle, props.style)}
      />
    );
  });
exports.withTextStyle = withTextStyle;
const withImageStyle = Component =>
  (0, react_1.forwardRef)((props, ref) => {
    const imageStyle = (0, exports.useImageStyle)(props);
    return (
      <Component
        {...props}
        ref={ref}
        style={react_native_1.StyleSheet.compose(imageStyle, props.style)}
      />
    );
  });
exports.withImageStyle = withImageStyle;
//# sourceMappingURL=styles.js.map
