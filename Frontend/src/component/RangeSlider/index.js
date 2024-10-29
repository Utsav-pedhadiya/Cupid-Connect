import React from 'react';
import {Text, View} from 'react-native';
import styles from './style'; 
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import InputText from '../InputText';
import HeadingText from '../HeadingText';

const RangeSlider = ({
  values,
  sliderLength,
  min,
  max,
  step,
  onValuesChange,
  onChangeText1,
  value1,
  onChangeText2,
  value2,
  title,
}) => {
  return (
    <>
      <View style={styles.heading}>
        {/* <HeadingText title={title} /> */}
        <Text style={styles.name}>{title}</Text>
      </View>
      <View style={styles.container}>
        <MultiSlider
          values={values}
          sliderLength={sliderLength}
          min={min}
          max={max}
          step={step}
          onValuesChange={onValuesChange}
          allowOverlap={false}
          snapped
          trackStyle={{
            height: 5,
            backgroundColor: constant.colors.underLine,
          }}
          markerStyle={{
            backgroundColor: '#FC3876',
            height: 15,
            width: 15,
            top: 2,
            borderRadius: 10,
          }}
          selectedStyle={{
            backgroundColor: '#FC3876',
          }}
        />
        <View style={styles.inputRow}>
          <InputText
            onChangeText={onChangeText1}
            value={value1}
            keyboardType="numeric"
            placeholder="Min Age"
            RangerStyle={true}
          />
          <InputText
            value={value2}
            onChangeText={onChangeText2}
            keyboardType="numeric"
            placeholder="Max Age"
            RangerStyle={true}
          />
        </View>
        <View style={styles.horizontalLine} />
      </View>
    </>
  );
};

export default RangeSlider;
