import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import RoundIconButton from '../components/roundIconButton';

const buttonStory = storiesOf('Round Icon Button', module);

buttonStory.add('all buttons', () => (
  <div>
    <RoundIconButton type='info'></RoundIconButton>
    <RoundIconButton type='plus'></RoundIconButton>
    <RoundIconButton type='starEmpty'></RoundIconButton>
    <RoundIconButton type='starFull'></RoundIconButton>
  </div>
));

buttonStory.add('disabled buttons', () => (
  <div>
    <RoundIconButton disabled={true} type='info'></RoundIconButton>
    <RoundIconButton disabled={true} type='plus'></RoundIconButton>
    <RoundIconButton disabled={true} type='starEmpty'></RoundIconButton>
    <RoundIconButton disabled={true} type='starFull'></RoundIconButton>
  </div>
));

buttonStory.add('with on click handler', () => (
  <div>
    <RoundIconButton onClick={action('clicked plus')} type='info'></RoundIconButton>
    <RoundIconButton onClick={action('clicked info')} type='plus'></RoundIconButton>
    <RoundIconButton onClick={action('clicked empty')} type='starEmpty'></RoundIconButton>
    <RoundIconButton onClick={action('clicked full')} type='starFull'></RoundIconButton>
  </div>
));
