import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Table from '../components/table';

const tableStory = storiesOf('Table', module);

tableStory.add('with content', () => (
  <Table headers={["Id", "Name", "Other Data"]} values={[["1", "Hello", "Please"], ["2", "World", "Work"]]}> </Table>
));

tableStory.add('with controls', () => (
  <Table headers={["Id", "Name", "Other Data"]} values={[["1", "Hello", "Please"], ["2", "World", "Work"]]} onControlClick={action()}> </Table>
));