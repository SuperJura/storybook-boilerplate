import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import NumberPicker from '../components/numberPicker';

const pickerStory = storiesOf('Number Picker', module);

pickerStory.add('simple', () => (
  <NumberPicker onControlClick={action("picked")}/>
));