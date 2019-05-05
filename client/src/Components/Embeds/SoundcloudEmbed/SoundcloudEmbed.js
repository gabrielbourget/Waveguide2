import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import qs from 'qs';
import { ThemeContext } from '../../../ThemeContext';

class SoundcloudEmbed extends React.Component {

	state = {
		__html: null
	};

	propTypes = {
		height: PropTypes.string.isRequired,
		width: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired
	};

	handleFetchSuccess = (res) => this.setState({ __html: res.html });
	handleFetchFailure = () => this.setState({ __html: null });

	fetchEmbed = async (queryParams) => {
		try {
			const payload = await fetch(`https://soundcloud.com/oembed?${queryParams}`);
		} catch (err) {
			console.log(`Error -> ${ err }`);
			handleFetchFailure();
		}

		handleFetchSuccess(payload);
	};

	getQueryParams = ({ url, height, width }) => {
		return qs.stringify({
			url,
			format: 'js',
			maxHeight: height,
			maxWidth: width 
		});
	};

	componentDidMount() {
		const fetchParams = getQueryParams(this.props);
		fetchEmbed(fetchParams);
	};

	shouldComponentUpdate(nextState, nextProps) {
		const { url } = this.props;
		const { __html } = this.state;
		if (nextProps.url !== url || nextState.__html !== __html) {
			return true;
		}
		return false;
	};

	render() {
		return <div dangerouslySetInnerHTML={ { __html: this.state.__html } }/>;
	}
}

export default SoundcloudEmbed;
