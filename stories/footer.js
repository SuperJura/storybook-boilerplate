import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Footer from '../components/footer'
import Header from '../components/header'

import { BrowserRouter } from 'react-router-dom'

const contentStory = storiesOf('Footer', module);

contentStory.add("with text", () =>(
    <Footer>Footer</Footer>
))

contentStory.add("Header and Footer", () =>(
    <div>
        <Header title="Hello Footers"></Header>
        <Footer>Footer</Footer>
    </div>
))