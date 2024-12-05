import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import styles from './style';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import InputText from '../InputText';
import HeadingText from '../HeadingText';
import {useTranslation} from 'react-i18next';

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
  placeholder1,
  placeholder2,
}) => {
  const updateSliderValues = (minValue, maxValue) => {
    if (minValue <= maxValue) {
      onValuesChange([minValue, maxValue]);
    }
  };
  const {t, i18n} = useTranslation();

  const screenWidth = Dimensions.get('window').width;
  return (
    <>
      <View style={styles.heading}>
        <Text style={styles.name}>{t(title)}</Text>
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
            onChangeText={text => {
              const sanitizedText = text.slice(0, 3);
              onChangeText1(sanitizedText);
              updateSliderValues(parseInt(sanitizedText), parseInt(value2));
            }}
            value={value1}
            keyboardType="numeric"
            placeholder={t(placeholder1)}
            RangerStyle={true}
          />
          <InputText
            onChangeText={text => {
              const sanitizedText = text.slice(0, 3); 
              onChangeText2(sanitizedText);
              updateSliderValues(parseInt(value1), parseInt(sanitizedText));
            }}
            value={value2}
            keyboardType="numeric"
            placeholder={t(placeholder2)}
            RangerStyle={true}
          />
        </View>
        <View style={[styles.horizontalLine, {width: screenWidth * 0.9}]} />
      </View>
    </>
  );
};

export default RangeSlider;
