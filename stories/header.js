import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Header from '../components/header';

const headerStory = storiesOf('Header', module);

headerStory.add('with title', () => (
  <Header title='Hello World!'></Header>
));

headerStory.add('with image', () => (
  <Header showLogo="true"></Header>
));

headerStory.add('with image and title', () => (
  <Header showLogo="true" title="Hello World!"></Header>
));