/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, Image, Icon, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SplashScreenScene from './src/Components/SplashScreenScene';
import NewsDetailScene from './src/Components/NewsDetailScene';
import NewsDetail from './src/Components/NewsDetail';

import { createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Images } from './src/images/Images';
import HamburgerIcon from './src/Components/HamburgerIcon';
const disableDrawerGesture = { drawerLockMode: 'locked-closed' };

const SplashScreenStack = createStackNavigator({
	News: {
		screen: SplashScreenScene,
		navigationOptions: {
			header: null
		}
	},
	NewsDetailScene: {
		screen: NewsDetailScene,
		navigationOptions: disableDrawerGesture
	}
});

const isTabBarVisible = routes => {
	var isVisible = true;
	const screenNames = ['NewsDetailScene'];
	if (routes.length > 0) {
		for (let i = 0; i < routes.length; i++) {
			if (screenNames[0] == routes[i].routeName) {
				isVisible = false;
			}
		}
	}

	return isVisible;
};
const AppTabBar = createMaterialTopTabNavigator(
	{
		tab1: SplashScreenStack,
		tab2: { screen: NewsDetail }
	},
	{
		navigationOptions: ({ navigation }) => ({
			//navigation.state.routeName
			tabBarVisible: navigation.state.routes == undefined ? true : isTabBarVisible(navigation.state.routes),
			header: null,
			tabBarOptions: {
				activeTintColor: 'rgb(255,87,34)',
				inactiveTintColor: 'white',
				upperCaseLabel: true,
				style: {
					backgroundColor: 'rgb(2,136,141)'
				},
				labelStyle: {
					fontSize: 15,
					fontStyle: 'bold'
				},
				tabBarLabel: {
					title: 'Splash'
				},

				indicatorStyle: {
					backgroundColor: 'rgb(255,87,34)',
					height: 3
				}
			}
		})
	}
);

const AppDrawer = createDrawerNavigator(
	{
		Home: { screen: AppTabBar },
		NewsDetailScene: { screen: NewsDetailScene }
	},
	{
		navigationOptions: ({ navigation }) => ({
			drawerLockMode: 'locked-closed'
		})
	}
);

export default class App extends PureComponent {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View
					style={{
						height: 50,
						backgroundColor: 'rgb(2,136,141)',
						flexDirection: 'row',
						alignItems: 'center'
					}}
				>
					<TouchableOpacity>
						<Image
							source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
							style={{ width: 25, height: 25, marginLeft: 5 }}
						/>
					</TouchableOpacity>
					<Text style={{ textSize: 15, color: 'white', marginLeft: 20 }}>Samachar</Text>
				</View>
				<AppDrawer />
			</View>
		);
	}
}
