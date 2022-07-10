import React from 'react';
import { useViewStyle, ViewStyleProps } from 'lib/styles';
import {
  StyleSheet,
  ScrollView as RNScrollView,
  ScrollViewProps,
} from 'react-native';

type Props = ScrollViewProps & ViewStyleProps;

export const ScrollViwe = React.memo(({ style, ...rest }: Props) => {
  const viewStyle = useViewStyle(rest);
  return (
    <RNScrollView style={StyleSheet.compose(viewStyle, style)} {...rest} />
  );
});
