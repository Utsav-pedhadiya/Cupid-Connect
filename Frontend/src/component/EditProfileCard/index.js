import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const EditProfileCard = ({data, onPress, quality, disabled}) => {
  const {t} = useTranslation();
  const isRTL = i18next.language === 'ar';
  return (
    <View style={styles.card}>
      {data.map((item, index) => (
        <View key={index}>
          <View style={styles.row}>
            {item.content &&
            item.content.split &&
            (item.content.split(' ').length >= 3 ||
              item.content.split('').length > 30) ? (
              <View>
                {/* <View style={{backgroundColor:'red'}}> */}
                {item.unpressable ? (
                  <View>
                    <Text style={styles.title}>{t(item.title)}</Text>
                    <Text style={styles.content}>{t(item.content)}</Text>
                  </View>
                ) : (
                  <TouchableOpacity
                    disabled={false}
                    key={index}
                    style={{
                      flexDirection: isRTL ? 'row-reverse' : 'row',
                      justifyContent: 'space-between',
                    }}
                    onPress={() => onPress(item)}>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={[
                          styles.title,
                          {
                            textAlign: isRTL ? 'right' : 'left',
                          },
                        ]}>
                        {t(item.title)}
                      </Text>
                      <Text
                        style={[
                          styles.contentt,
                          {
                            textAlign: isRTL ? 'right' : 'left',
                          },
                        ]}>
                        {t(item.content)}
                      </Text>
                    </View>
                    <View>
                      {!item.unpressable && (
                        <Icon
                          name="chevron-right"
                          size={25}
                          color="black"
                          style={styles.Icon}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            ) : (
              <View>
                {quality ? (
                  <TouchableOpacity
                    onPress={() => onPress(item)}
                    disabled={disabled}
                    style={{
                      flexDirection: isRTL ? 'row-reverse' : 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={styles.title}>{t(item.title)}</Text>
                      <Text style={[styles.content]}>{t(item.content)}</Text>
                    </View>
                    <View>
                      {!item.unpressable && (
                        <Icon
                          name="chevron-right"
                          size={25}
                          color="black"
                          style={styles.Icon}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => onPress(item)}
                    style={[
                      styles.rightContent,
                      {
                        flexDirection: isRTL ? 'row-reverse' : 'row',
                      },
                    ]}
                    disabled={item.unpressable}>
                    <Text style={styles.title}>{t(item.title)}</Text>
                    <View
                      style={[
                        styles.contentContainer,
                        {flexDirection: isRTL ? 'row-reverse' : 'row'},
                      ]}>
                      <Text style={styles.content}>{t(item.content)}</Text>
                      {!item.unpressable && (
                        <Icon name="chevron-right" size={25} color="black" />
                      )}
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
          {index < data.length - 1 && <View style={styles.horizontalLine} />}
        </View>
      ))}
    </View>
  );
};

export default EditProfileCard;
