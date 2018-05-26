import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/label.js');
}

configure(loadStories, module);