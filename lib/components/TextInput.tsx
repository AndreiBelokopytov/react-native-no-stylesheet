import React from 'react';
import { TextStyleProps, useTextStyle } from '../styles';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
} from 'react-native';

type Props = TextInputProps & TextStyleProps;

export const TextInput = React.memo(({ style, ...rest }: Props) => {
  const textStyle = useTextStyle(rest);
  return <RNTextInput {...rest} style={StyleSheet.compose(textStyle, style)} />;
});
