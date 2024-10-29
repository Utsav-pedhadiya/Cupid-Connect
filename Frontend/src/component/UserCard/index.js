import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import constant from '../../constants/constant';
import Icon from 'react-native-vector-icons/EvilIcons';

const UserCard = ({Name, City, Num, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} >
        <View style={styles.maincontainer}>
          <Icon name={'user'} size={50} color="black" />
          <View style={styles.datacontainer}>
            <View style={styles.maindata}>
              <Text style={styles.name}>{Name}</Text>
            </View>

            <View style={styles.data}>
              <View style={styles.main}>
                <Icon name={'location'} size={25} color="black" />

                <Text style={styles.request}>{City}</Text>

                <View style={styles.requestcontainer}>
                  <Image
                    source={constant.imagePath.SUser}
                    style={styles.icon}
                  />

                  <Text style={styles.request}>{Num}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.horizontalLine} />
    </View>
  );
};

export default UserCard;
