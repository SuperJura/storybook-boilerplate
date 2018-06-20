import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Button from '../components/button';

const buttonStory = storiesOf('Button', module);

buttonStory.add('with text', () => (
  <Button>Hello World!</Button>
));


buttonStory.add('disabled', () => (
  <Button disabled={true}>Can't Press me!</Button>
));

buttonStory.add('with on click handler', () => (
  <Button onClick={action('clicked')}>Press me!</Button>
));
