import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/roundIconButton.js');
  require('../stories/hyperlinkButton.js');
  require('../stories/card.js');
  require('../stories/header.js');
  require('../stories/navigation.js')
}

configure(loadStories, module);