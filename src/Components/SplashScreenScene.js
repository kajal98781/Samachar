import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import NewsDetailScene from './NewsDetailScene';
import NewsDetail from './NewsDetail';
import NewsScene from './NewsScene';
import { Images } from '../images/Images';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

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
		tab1: {
			screen: NewsScene
		},
		tab2: { screen: NewsDetailScene }
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
				indicatorStyle: {
					backgroundColor: 'rgb(255,87,34)',
					height: 3
				}
			}
		})
	}
);

const NewsSceneStack = createStackNavigator({
	TabBar: {
		screen: AppTabBar,
		navigationOptions: {
			header: null
		}
	},
	News: {
		screen: NewsScene,
		navigationOptions: {
			header: null
		}
	},
	NewsDetailScene: {
		screen: NewsDetailScene
	}
});
class SplashScreenScene extends PureComponent {
	state = {
		isShowHeader: true
	};
	static router = NewsSceneStack.router;
	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				{this.state.isShowHeader && (
					<View
						style={{
							height: 50,
							backgroundColor: 'rgb(2,136,141)',
							flexDirection: 'row',
							alignItems: 'center'
						}}
					>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.openDrawer();
							}}
						>
							<Image source={Images.menu.source} style={{ width: 25, height: 25, marginLeft: 5 }} />
						</TouchableOpacity>
						}
						<Text style={{ textSize: 15, color: 'white', marginLeft: 20 }}>Samachar</Text>
					</View>
				)}
				<NewsSceneStack navigation={this.props.navigation} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default SplashScreenScene;
