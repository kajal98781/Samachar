import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class NewsDetailScene extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imageLoader: false
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({ imageLoader: true });
		}, 200);
	}
	static tabbarOptions = {
		hide: true
	};

	render() {
		const { navigation } = this.props;
		var uri = this.props.articles[index].urlToImage;
		index = navigation.getParam('index', 0);
		return (
			<ParallaxScrollView
				backgroundColor="grey"
				contentBackgroundColor="white"
				parallaxHeaderHeight={200}
				renderForeground={() => (
					<View style={{ height: 200, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						{this.state.imageLoader && (
							<Image
								style={{ resizeMode: 'cover', width: '100%', height: 200 }}
								source={{ uri: this.props.articles[index].urlToImage }}
							/>
						)}
					</View>
				)}
			>
				<View style={{ height: 400 }}>
					<Text>{this.props.articles[index].title}</Text>
					<Text>{this.props.articles[index].description}</Text>
					<Text>{this.props.articles[index].publishedAt}</Text>
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
export default connect(mapStateToProps)(NewsDetailScene);
