/**
 *  Inspired by Filipe Kiss
 *  Original Codepen: -> https://codepen.io/filipekiss/pen/yJxFo
 */

import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './HorizontalBubbles.module.scss';

class HorizontalBubbles extends React.Component {
  render() {
    const initObject = prepareComponent(this.context);

    return (
      <div className={ styles.loader }>
        <div className={ styles.loadingBubbles }>
          <div className={ styles.bubbleContainer }>
            <div className={ initObject.bubbleClasses }></div>
          </div>
          <div className={ styles.bubbleContainer }>
            <div className={ initObject.bubbleClasses }></div>
          </div>
          <div className={ styles.bubbleContainer }>
            <div className={ initObject.bubbleClasses }></div>
          </div>
        </div>
      </div>
    );
  }
}

const prepareComponent = (context) => {
  const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
  const bubbleClasses = ClassNames(styles.bubble, themeClass);

  return { bubbleClasses };
};

HorizontalBubbles.contextType = ThemeContext;
export default HorizontalBubbles;
