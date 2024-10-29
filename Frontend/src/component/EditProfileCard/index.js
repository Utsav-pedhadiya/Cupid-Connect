import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';

const EditProfileCard = ({ data, onPress }) => {
  return (
    <View style={styles.card}>
      {data.map((item, index) => (
        <View key={index}>
          <View style={styles.row}>
            {item.content && item.content.split && item.content.split(' ').length > 3 ? (
              <View>
                <TouchableOpacity key={index} onPress={() => onPress(item)}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.content}>{item.content}</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => onPress(item)}
                style={styles.rightContent}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.contentContainer}>
                  <Text style={styles.content}>{item.content}</Text>
                  <Icon
                    name="chevron-right"
                    size={25}
                    color="black"
                    style={styles.Icon}
                  />
                </View>
              </TouchableOpacity>
            )}
          </View>
          {index < data.length - 1 && <View style={styles.horizontalLine} />}
        </View>
      ))}
    </View>
  );
};


export default EditProfileCard;
