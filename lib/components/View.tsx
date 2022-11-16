import React from 'react';
import { useViewStyle, ViewStyleProps } from '../styles';
import { StyleSheet, View as RNView, ViewProps } from 'react-native';

type Props = ViewProps & ViewStyleProps;

export const View = React.memo(({ style, ...rest }: Props) => {
  const viewStyle = useViewStyle(rest);
  return <RNView style={StyleSheet.compose(viewStyle, style)} {...rest} />;
});
