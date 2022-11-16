import React from 'react';
import { ImageStyleProps, useImageStyle } from '../styles';
import { Image as RNImage, ImageProps, StyleSheet } from 'react-native';

type Props = ImageProps & ImageStyleProps;

export const Image = React.memo(({ style, ...rest }: Props) => {
  const imageStyle = useImageStyle(rest);
  return <RNImage {...rest} style={StyleSheet.compose(imageStyle, style)} />;
});
