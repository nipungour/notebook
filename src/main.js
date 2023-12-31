/**
 * @format
 * App Main
 */

import * as React from 'react';
import { LogBox } from 'react-native';

import { NoteBookScreen } from '@app/modules/notebook';

LogBox.ignoreLogs(['Warning: ...']);

function MainApp() {
  return <NoteBookScreen />;
}

export { MainApp };
