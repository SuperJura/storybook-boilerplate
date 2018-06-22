import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Card from '../components/card';
import beers from '../static/beers.json'

const cardStory = storiesOf('Card', module);

cardStory.add('not favourite beer', () => (
  <Card imgUrl="https://images.punkapi.com/v2/keg.png" name="Piiivo" tagline="A Real Bitter Experience."></Card>
));

cardStory.add('favourite beer', () => (
    <Card imgUrl="https://images.punkapi.com/v2/keg.png" isFavourite="true" name="Piiivo" tagline="A Real Bitter Experience."></Card>
));

cardStory.add('beer click handlers', () => (
    <Card 
        imgUrl="https://images.punkapi.com/v2/keg.png"
        isFavourite="true" 
        name="Piiivo" 
        tagline="A Real Bitter Experience."
        onFavourite = {action("favourite")}
        onInfo = {action("info")}
        onPlus = {action("plus")}
        ></Card>
));

cardStory.add('all beers', () => {
    const cards = beers.map(beer => 
        <Card 
            key={beer.id}
            imgUrl={beer.image_url} 
            name={beer.name} 
            tagline={beer.tagline}>
        </Card>
    )

    return <div>{cards}</div>
})