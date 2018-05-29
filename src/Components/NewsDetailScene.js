import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, BackHandler } from 'react-native';
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

	render() {
		const { navigation } = this.props;
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
				<View style={{ height: 400, margin: 10 }}>
					<Text style={{ fontSize: 20, color: 'black', fontStyle: 'bold' }}>{this.props.articles[index].title}</Text>
					<Text style={{ fontSize: 15, color: 'rgba(0,0,0,0.8)', marginTop: 10, fontStyle: 'normal' }}>
						{this.props.articles[index].description}
					</Text>
					<Text style={{ fontSize: 15, color: 'rgba(0,0,0,0.8)', marginTop: 10, fontStyle: 'normal' }}>
						{this.props.articles[index].publishedAt}
					</Text>
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
