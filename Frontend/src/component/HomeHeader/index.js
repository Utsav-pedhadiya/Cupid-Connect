import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import SearchBar from 'react-native-dynamic-search-bar';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeHeader = ({
  title,
  RightIcon,
  RightText,
  bigheader,
  LeftIcon,
  heading,
  onPressRightText,
  onPressLeftIcon,
  onPressRightIcon,
}) => {
  //   const [isSearchActive] = useState(false);
  return (
    <View>
      {bigheader ? (
        <View style={styles.container}>
          <View style={styles.main}>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity onPress={onPressRightIcon}>
              <Icon
                name={RightIcon}
                size={40}
                color="black"
                style={styles.image2}
              />
            </TouchableOpacity>
          </View>
          <SearchBar
            style={{
              height: 44,
              width: 360,
              top: 30,
              backgroundColor: '#EBEBEB',
            }}
            fontColor="#c6c6c6"
            iconColor="#c6c6c6"
            shadowColor="#282828"
            backgroundColor="#EBEBEB"
            placeholder="Search here"
            showCancel={false}
            onSearchPress={() => console.log('Search Icon is pressed')}
            // onChangeText={text => this.filterList(text)}
            // onClearPress={() => this.filterList('')}
            // onPress={() => alert('onPress')}
          />
        </View>
      ) : (
        <View style={styles.container2}>
          <TouchableOpacity onPress={onPressLeftIcon}>
            {/* <Image source={LeftIcon} style={styles.image} /> */}
            <Icon
              name={RightIcon}
              size={30}
              color="black"
              style={styles.image2}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>{heading}</Text>
          {/* <PrimaryText title={heading}/> */}
          <TouchableOpacity onPress={onPressRightText}>
            <Text style={styles.righttext}>{RightText}</Text>
          </TouchableOpacity>
          {/* <Image source={RightIcon} style={styles.image} /> */}
        </View>
      )}
    </View>
  );
};

export default HomeHeader;
