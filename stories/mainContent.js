import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Header from '../components/header'
import MainContent from '../components/mainContent';
import Card from '../components/card';
import beers from '../static/beers.json'
import Navigation from '../components/navigation';
import Footer from '../components/footer'
import { BrowserRouter } from 'react-router-dom'

const contentStory = storiesOf('Main Content', module);

contentStory.add('main content', () => (
    <MainContent>
        <span>Main Content</span>
    </MainContent>
));

contentStory.add('main content with header', () => (
    <div>
        <Header></Header>
        <MainContent>
            <span>Main Content</span>
        </MainContent>
    </div>
));

contentStory.add('main content with content', () =>{
    
    const cards = beers.map(beer => 
        <Card 
            key={beer.id}
            imgUrl={beer.image_url} 
            name={beer.name} 
            tagline={beer.tagline}>
        </Card>
    )    
    
    return (
    <MainContent>
        {cards}    
    </MainContent>
    )
});

contentStory.add("main content with header, navigation and footer", () =>{
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
        <Header title="Hello World" showLogo="true"></Header>
        
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