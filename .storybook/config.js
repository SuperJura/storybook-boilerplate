import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/label.js');
  require('../stories/card.js');
}

configure(loadStories, module);