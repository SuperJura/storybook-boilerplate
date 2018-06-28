import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Header from '../components/header';
import logo from '../static/duff.png'

const headerStory = storiesOf('Header', module);

headerStory.add('with title', () => (
  <Header title='Hello World!'></Header>
));

headerStory.add('with image', () => (
  <Header logo={logo}></Header>
));

headerStory.add('with image and title', () => (
  <Header logo={logo} title="Hello World!"></Header>
));