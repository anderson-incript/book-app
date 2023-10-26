import React from 'react';
import {StatusBar} from 'react-native';
import {SvgUri} from 'react-native-svg';

import RouteNavigation from './src/router/router';

import {ContainerSafeAreaView} from './src/assets/styles/global';

export default function App() {
  return (
    <ContainerSafeAreaView>
      <StatusBar backgroundColor="transparent" translucent />

      <RouteNavigation />
    </ContainerSafeAreaView>
  );
}
