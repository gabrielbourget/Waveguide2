// - Component partially inspired by https://github.com/tplusrex/react-soundcloud-component

import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import jsonp from 'jsonp';

import styles from './SoundcloudEmbed.module.scss';

class SoundcloudEmbed extends React.Component {

	state = {
		__html: null
	};

	static propTypes = {
		height: PropTypes.string.isRequired,
		width: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired
	};

	handleFetchSuccess = (res) => this.setState({ __html: res.html });
	handleFetchFailure = () => this.setState({ __html: null });

	fetchEmbed = async (queryParams) => {
		// let payload;
		// //console.log(queryParams);
		// try {
		// 	payload = await fetch(`https://soundcloud.com/oembed?${queryParams}`);
		// 	console.log(payload.html);
		// } catch (err) {
		// 	console.log(`Error -> ${ err }`);
		// 	this.handleFetchFailure();
		// }

		// this.handleFetchSuccess(payload);

    const payload = new Promise((resolve, reject) => {
      jsonp(`https://soundcloud.com/oembed?${queryParams}`, null, (err, data) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(data);
        }
      });
    });

    payload.then(this.handleFetchSuccess).catch(this.handleFetchFailure);
	};

	getQueryParams = ({ url, height, width }) => {
		return qs.stringify({
			url,
			format: 'js',
			maxHeight: height,
			maxWidth: width,
		});
	};

	componentDidMount() {
		const fetchParams = this.getQueryParams(this.props);
		this.fetchEmbed(fetchParams);
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
		
		const renderTimeStyle = {
			width: this.props.width,
			height: this.props.height
		}

		return (
			<div
				dangerouslySetInnerHTML={ { __html: this.state.__html } }
			/>
		);
	}
}

const prepareComponent = () => {

}

export default SoundcloudEmbed;








