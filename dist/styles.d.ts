import {
  FlexStyle,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
declare type FlexStyleAliases = {
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
declare type ViewStyleAliases = {
  bgColor?: ViewStyle['backgroundColor'];
};
export declare type ViewStyleProps = ViewStyle &
  FlexStyleAliases &
  ViewStyleAliases;
export declare type TextStyleProps = TextStyle;
export declare type ImageStyleProps = ImageStyle & FlexStyleAliases;
declare type StyleProps = ViewStyleProps | TextStyleProps | ImageStyleProps;
export declare type StylePropsFactory = <Theme extends object>(
  theme: Theme,
) => StyleProps;
export declare const useViewStyle: (props: ViewStyleProps) => ViewStyle;
export declare const useTextStyle: (props: TextStyleProps) => TextStyle;
export declare const useImageStyle: (props: ImageStyleProps) => ImageStyle;
export declare const withViewStyle: <
  Props extends {
    style?: StyleProp<ViewStyle>;
  },
>(
  Component: import('react').ComponentType<Props>,
) => import('react').ForwardRefExoticComponent<
  import('react').PropsWithoutRef<
    Props & ViewStyle & FlexStyleAliases & ViewStyleAliases
  > &
    import('react').RefAttributes<unknown>
>;
export declare const withTextStyle: <
  Props extends {
    style?: StyleProp<TextStyle>;
  },
>(
  Component: import('react').ComponentType<Props>,
) => import('react').ForwardRefExoticComponent<
  import('react').PropsWithoutRef<Props & TextStyle> &
    import('react').RefAttributes<unknown>
>;
export declare const withImageStyle: <
  Props extends {
    style?: StyleProp<ImageStyle>;
  },
>(
  Component: import('react').ComponentType<Props>,
) => import('react').ForwardRefExoticComponent<
  import('react').PropsWithoutRef<Props & ImageStyle & FlexStyleAliases> &
    import('react').RefAttributes<unknown>
>;
export {};
