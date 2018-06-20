import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Footer from '../components/footer'
import Header from '../components/header'
import Navigation from '../components/navigation'
import Card from '../components/card';
import beers from '../static/beers.json'
import MainContent from '../components/mainContent';

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

contentStory.add("All", () =>{
    const cards = beers.map(beer => 
        <Card 
            key={beer.id}
            imgUrl={beer.image_url} 
            name={beer.name} 
            tagline={beer.tagline}>
        </Card>
    )    
    
    return (
    <div>
        <Header title="Hello Footers"></Header>
        
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
            }>
            </Navigation>
        </BrowserRouter>
        
        <MainContent>
            {cards}    
        </MainContent>
        <Footer>Footer</Footer>
    </div>
    )
})