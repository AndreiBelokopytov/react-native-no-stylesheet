import React from 'react';
import { TextStyleProps, useTextStyle } from 'lib/styles';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';

type Props = TextProps & TextStyleProps;

export const Text = React.memo(({ style, ...rest }: Props) => {
  const textStyle = useTextStyle(rest);
  return <RNText {...rest} style={StyleSheet.compose(textStyle, style)} />;
});
