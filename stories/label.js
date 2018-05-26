import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Label from '../components/Label';

const labelStory = storiesOf('Label', module);

labelStory.add('font size 1', () =>(
    <Label fontSize={1}>asASDASDd</Label>
));

labelStory.add('font size 2', () =>(
    <Label fontSize={2}>asASDASDd</Label>
));

labelStory.add('font size 3', () =>(
    <Label fontSize={3}>asASDASDd</Label>
));