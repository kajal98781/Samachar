import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class NewsDetailScene extends PureComponent {
	constructor(props) {
		super(props);
	}
	static tabbarOptions = {
		hide: true
	};

	render() {
		const { navigation } = this.props;
		index = navigation.getParam('index', 0);
		return (
			<ParallaxScrollView
				backgroundColor="blue"
				contentBackgroundColor="pink"
				parallaxHeaderHeight={200}
				renderForeground={() => (
					<View style={{ height: 200, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						<Text>Hello World!</Text>
					</View>
				)}
			>
				<View style={{ height: 400 }}>
					<Text>{this.props.articles[index].title}</Text>
					<Image style={{ width: 100, height: 100 }} source={{ uri: this.props.articles[index].urlToImage }} />
				</View>
			</ParallaxScrollView>
		);
	}
}

NewsDetailScene.defaultProps = {
	index: PropTypes.number.isRequired
};

function mapStateToProps(state) {
	return {
		articles: state.new_reducer.articles
	};
}
export default connect(mapStateToProps, actions)(NewsDetailScene);
