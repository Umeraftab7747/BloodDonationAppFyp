import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import {DrawerScreen} from '../screens/DrawerScreen';
import {Bottomtab} from './Bottomtab';

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      openByDefault={false}
      drawerContent={(props) => <DrawerScreen {...props} />}>
      <Drawer.Screen name="Bottomtab" component={Bottomtab} />
    </Drawer.Navigator>
  );
};