import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class Button extends React.Component 
{
	render() 
	{
		const isSmall = this.props.isSmall !== undefined;
		const classes = [styles.button, isSmall ? styles.small : undefined];

		const button = (
			<input onClick={this.props.onClick} className={classes.join(' ')} disabled={this.props.disabled} type='button' value={this.props.children} />
		) 

		return button
  	}
}

Button.propTypes = {
	text: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};
