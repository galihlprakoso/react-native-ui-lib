import React from 'react';
import PropTypes from 'prop-types';
import {View, requireNativeComponent, ViewStyle} from 'react-native';

const NativeSafeAreaSpacerView = requireNativeComponent('SafeAreaSpacerView');

type SafeAreaSpacerViewProps = {
  style: ViewStyle
}

const SafeAreaSpacerView = ({style}: SafeAreaSpacerViewProps) => {
  return (
    // @ts-ignore
    NativeSafeAreaSpacerView ? <NativeSafeAreaSpacerView style={style}/> : <View style={style}/>
  );
};

SafeAreaSpacerView.displayName = 'IGNORE';
export default SafeAreaSpacerView;
