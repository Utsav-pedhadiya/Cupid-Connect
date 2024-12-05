import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const Searchbar = ({
  placeholder,
  value,
  onChangeText,
  onSearchPress,
  containerStyle,
}) => {
  const {t} = useTranslation();
  const isRTL = i18next.language === 'ar';
  return (
    <>
      <View style={[styles.searchSection, containerStyle]}>
        {isRTL ? (
          <>
            {value ? (
              <TouchableOpacity
                onPress={() => onChangeText('')}
                style={[styles.clearIcon, {borderRadius: 15}]}>
                <AntDesign name="closecircle" size={17} color={'black'} />
              </TouchableOpacity>
            ) : null}
            <TextInput
              style={[styles.input, {textAlign: 'right', borderRadius: 15}]}
              onChangeText={onChangeText}
              value={value}
              underlineColorAndroid="transparent"
              placeholder={t(placeholder)}
              placeholderTextColor={'black'}
            />
            <TouchableOpacity
              onPress={onSearchPress}
              style={[styles.searchIcon, {borderRadius: 15}]}>
              <AntDesign name="search1" size={17} color={'black'} />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={onSearchPress}
              style={[styles.searchIcon, {borderRadius: 15}]}>
              <AntDesign name="search1" size={17} color={'black'} />
            </TouchableOpacity>
            <TextInput
              style={[styles.input, {borderRadius: 15}]}
              onChangeText={onChangeText}
              value={value}
              underlineColorAndroid="transparent"
              placeholder={t(placeholder)}
              placeholderTextColor={'black'}
            />

            {value ? (
              <TouchableOpacity
                onPress={() => onChangeText('')}
                style={[styles.clearIcon, {borderRadius: 15}]}>
                <AntDesign name="closecircle" size={17} color={'black'} />
              </TouchableOpacity>
            ) : null}
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    backgroundColor: '#EBEBEB',
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#424242',

    flex: 1,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#000',
    borderRadius: 15,
    height: 40,
    backgroundColor: '#EBEBEB',
    margin: 5,
  },
  searchIcon: {
    padding: 10,
    // borderBottomLeftRadius: 15,

    backgroundColor: '#EBEBEB',
  },
  clearIcon: {
    padding: 10,

    backgroundColor: '#EBEBEB',
  },
});

export default Searchbar;
