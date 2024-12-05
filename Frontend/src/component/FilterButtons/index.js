import React, {useState, useRef, useEffect} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {useTranslation} from 'react-i18next';

const FiterButtons = ({onPress, title, isSelected}) => {
  const {t} = useTranslation();
  const [buttonWidth, setButtonWidth] = useState(null);
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      const textWidth = measureTextWidth(title);
      setButtonWidth(textWidth + 40);
    }
  }, [title]);

  const measureTextWidth = text => {
    if (textRef.current) {
      const {width} = textRef.current.measure(width => {
        return {width};
      });
      return width;
    }
    return 0;
  };

  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
          {width: buttonWidth},
          isSelected ? styles.selectedButton : null,
        ]}
        onPress={onPress}>
        <Text style={styles.buttonText}>{t(title)}</Text>
      </TouchableOpacity>
    </>
  );
};

export default FiterButtons;
