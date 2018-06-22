import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import PopupWindow from '../components/popupWindow';
import Card from '../components/card';
import beers from '../static/beers.json'

const windowStory = storiesOf('PopupWindow', module);

windowStory.add('shown window', () => (
	<PopupWindow tooltip='Hello World!'>
		<div>
			<span>
				Hello World
			</span>
		</div>
	</PopupWindow>
));

windowStory.add('hidden window', () => (
	<div></div>
));

windowStory.add('popup with close handler', () => {
	const window = <PopupWindow tooltip='Hello World!' onClose={action("close popup")}>
		<div>
			<span>
				Hello World
			</span>
		</div>
	</PopupWindow>


	return(
		<div>
			{window}
		</div>
	)
});

windowStory.add('shown window with content', () => {
    const cards = beers.map(beer => 
        <Card 
            key={beer.id}
            imgUrl={beer.image_url} 
            name={beer.name} 
            tagline={beer.tagline}>
        </Card>
    )

	return(
	<PopupWindow tooltip='Hello World!'>
		<div>
			<span>
				{cards}
			</span>
		</div>
	</PopupWindow>
	)
});