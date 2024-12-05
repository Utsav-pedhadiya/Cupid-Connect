import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const ViewProfileCard = ({data, quality}) => {
  const {t} = useTranslation();
  const isRTL = i18next.language === 'ar';
  return (
    <View style={styles.card}>
      {data.map((item, index) => (
        <View key={index}>
          <View style={styles.row}>
            {item.content &&
            item.content.split &&
            (item.content.split(' ').length > 3 ||
              item.content.split('').length > 18) ? (
              <View
                key={index}
                style={{
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={styles.title}>{t(item.title)}</Text>
                  <Text style={styles.content}>{t(item.content)}</Text>
                </View>
              </View>
            ) : (
              <View
                style={[
                  styles.rightContent,
                  {
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                  },
                ]}>
                <Text style={styles.title}>{t(item.title)}</Text>
                <View
                  style={[
                    styles.contentContainer,
                    {flexDirection: isRTL ? 'row-reverse' : 'row'},
                  ]}>
                  <Text style={styles.content}>{t(item.content)}</Text>
                </View>
              </View>
            )}
          </View>
          {index < data.length - 1 && <View style={styles.horizontalLine} />}
        </View>
      ))}
    </View>
  );
};

export default ViewProfileCard;
