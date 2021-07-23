import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Button } from './components/Button';

export default function App() {
  const [ firstNumber, setFirstNumber ] = useState(0);
  const [ secondNumber, setSecondNumber ] = useState(0);
  const [ operation, setOperation ] = useState('');

  const [ calculatedResult, setCalculatedResult ] = useState('0');

  var numbers = [];

  for( var i = 1; i <= 9; i++ ) {
    numbers.push(i);
    numbers.lastItem = 0;
  }
  numbers.push(numbers.lastItem);

  function handleCalculator(n) {
    if( operation == "" ) {
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
      setCalculatedResult(parseInt(firstNumber.toString() + n.toString()));
    }

    if( (n == '+' || n == '-' || n == '*' || n == '/') && secondNumber == 0 ) {
      setCalculatedResult(firstNumber.toString() + n);
      setOperation(n);
    }

    if( operation != "" ) {
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
      setCalculatedResult(firstNumber + operation + parseInt(secondNumber.toString() + n.toString()));
    }

    if( n == "=" ) {
      let result = 0;
      if( operation == '+' ) {
        result = firstNumber + secondNumber;

      } else if( operation == '-' ) {
        result = firstNumber - secondNumber;

      } else if( operation == '/' ) {
        result = firstNumber / secondNumber;

      } else if( operation == '*' ) {
        result = firstNumber * secondNumber;

      }

      setCalculatedResult(result);
      setOperation("");
      setFirstNumber(result);
      setSecondNumber(0);

    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.result}>
        <Text style={styles.resultText}>{calculatedResult}</Text>
      </View>
      <View style={styles.containerOperation}>
        <View style={styles.button}>
            {
              numbers.map(function(e, k){
                return(<Button handleCalculator={handleCalculator} key={k} number={e}>{e}</Button>)
              })
            }
        </View>

        <View style={styles.operations}>
          <TouchableOpacity onPress={()=>handleCalculator('+')} style={styles.operationsButton} >
            <Text style={styles.operationsText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleCalculator('-')} style={styles.operationsButton} >
            <Text style={styles.operationsText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleCalculator('/')} style={styles.operationsButton} >
            <Text style={styles.operationsText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleCalculator('*')} style={styles.operationsButton} >
            <Text style={styles.operationsText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleCalculator('=')} style={styles.operationsButton} >
            <Text style={styles.operationsText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  containerOperation: {
    flexDirection: 'row',
    flex: 1,
  },
  result: {
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#222',
  },
  resultText: {
    fontSize: 24,
    color: '#FFF',
  },
  operations: {
    width: '25%',
  },
  operationsButton: {
    backgroundColor: '#737373',
    borderColor: '#FFF',
    borderWidth: 2,
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  operationsText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    width: '75%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
