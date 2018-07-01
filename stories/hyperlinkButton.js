import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import HyperlinkButton from '../components/hyperlinkButton';

const buttonStory = storiesOf('Hyperlink Buttons', module);

buttonStory.add('hyperlink with text', () => (
  <HyperlinkButton link="#" linkTitle="Some Title"></HyperlinkButton>
));

buttonStory.add('hyperlink with icon', () => (
  <HyperlinkButton img="http://pngimg.com/uploads/twitter/twitter_PNG34.png" link="#" linkTitle="Twitter"></HyperlinkButton>
));

buttonStory.add('hyperlink group', () => (
  <div>
    <HyperlinkButton img="http://pngimg.com/uploads/twitter/twitter_PNG34.png" link="#" linkTitle="Twitter"></HyperlinkButton>
    <HyperlinkButton img="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19759.png" link="#" linkTitle="Facebook"></HyperlinkButton>
  </div>
));