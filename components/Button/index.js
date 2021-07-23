import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';

export function Button( props ) {
  return (
    <TouchableOpacity onPress={()=>props.handleCalculator(props.number)} style={styles.container} >
        <Text style={styles.text}>
            {props.number}
        </Text>
    </TouchableOpacity>
  );
}