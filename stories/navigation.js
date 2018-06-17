import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Navigation from '../components/navigation';
import { BrowserRouter } from 'react-router-dom'

const navigationStory = storiesOf('Navigation', module);

navigationStory.add('no links', () => (
        <Navigation></Navigation>
));

navigationStory.add('with links', () => (
    <BrowserRouter>
        <Navigation
            links =
            {
                [
                    {
                        link: "1",
                        title: "Link 1"
                    },
                    {
                        link: "A",
                        title: "Link A"
                    },
                ]
            }
        ></Navigation>
    </BrowserRouter>
));