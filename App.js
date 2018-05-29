/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { View } from 'react-native';
import SplashScreenScene from './src/Components/SplashScreenScene';
import NewsDetailScene from './src/Components/NewsDetailScene';
import { createDrawerNavigator } from 'react-navigation';

const AppDrawer = createDrawerNavigator({
	Home: { screen: SplashScreenScene },
	NewsDetailScene: { screen: NewsDetailScene }
});

export default class App extends PureComponent {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<AppDrawer />
			</View>
		);
	}
}
