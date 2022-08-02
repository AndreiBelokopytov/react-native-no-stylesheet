import { isUndefined, omitBy, pick } from 'lodash';
import { FlexStyle, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import ReactNativeStyleAttributes from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useTheme } from './Theme';

const REACT_NATIVE_STYLE_ATTRIBUTES = Object.keys(ReactNativeStyleAttributes);

type FlexStyleAliases = {
  p?: FlexStyle['padding'];
  pt?: FlexStyle['paddingTop'];
  pr?: FlexStyle['paddingRight'];
  pb?: FlexStyle['paddingBottom'];
  pl?: FlexStyle['paddingLeft'];
  mt?: FlexStyle['marginTop'];
  mr?: FlexStyle['marginRight'];
  mb?: FlexStyle['marginBottom'];
  ml?: FlexStyle['marginLeft'];
  m?: FlexStyle['margin'];
};

type ViewStyleAliases = {
  bgColor?: ViewStyle['backgroundColor'];
};

type FlexStyleProps = FlexStyle & FlexStyleAliases;

export type ViewStyleProps = ViewStyle & FlexStyleAliases & ViewStyleAliases;

export type TextStyleProps = TextStyle;

export type ImageStyleProps = ImageStyle & FlexStyleAliases;

type StyleProps = ViewStyleProps | TextStyleProps | ImageStyleProps;

export type StylePropsFactory = <Theme extends object>(
  theme: Theme,
) => StyleProps;

const pickReactNativeStyleAttributes = (props: object) =>
  pick(props, REACT_NATIVE_STYLE_ATTRIBUTES);

const pickFlexStyleAliases = (props: FlexStyleProps): FlexStyle => ({
  margin: props.m ?? props.margin,
  padding: props.p ?? props.padding,
  paddingTop: props.pt,
  paddingRight: props.pr,
  paddingBottom: props.pb,
  paddingLeft: props.pl,
  marginTop: props.mt,
  marginRight: props.mr,
  marginBottom: props.mb,
  marginLeft: props.ml,
});

const pickViewStyleAliases = (props: ViewStyleProps): ViewStyle => ({
  backgroundColor: props.backgroundColor ?? props.bgColor,
});

const useStylePropsFactory = (
  props: StyleProps | StylePropsFactory,
): StyleProps => {
  const theme = useTheme();
  if (typeof props === 'function') {
    return props(theme);
  } else {
    return props;
  }
};

export const useViewStyle = (
  props: ViewStyleProps | StylePropsFactory,
): ViewStyle => {
  const _props = useStylePropsFactory(props);

  return omitBy(
    {
      ...pickReactNativeStyleAttributes(_props),
      ...pickFlexStyleAliases(_props),
      ...pickViewStyleAliases(_props),
    },
    isUndefined,
  );
};

export const useTextStyle = (props: TextStyleProps): TextStyle => {
  const _props = useStylePropsFactory(props);

  return omitBy(pickReactNativeStyleAttributes(_props), isUndefined);
};

export const useImageStyle = (props: ImageStyleProps): ImageStyle => {
  const _props = useStylePropsFactory(props);

  return omitBy(
    {
      ...pickReactNativeStyleAttributes(_props),
      ...pickFlexStyleAliases(_props),
    },
    isUndefined,
  );
};
