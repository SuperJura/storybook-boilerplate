import React from 'react'
import style from './index.css'

export default class PopupWindow extends React.Component
{
	constructor()
	{
		super();

		this.state = 
		{
			modalClasses: [style.modal],
			tooltipClasses: [style.tooltiptext],
			setInitialState: false
		}

		this.closeWindow = this.closeWindow.bind(this);
		this.openWindow = this.openWindow.bind(this);
		this.showTooltip = this.showTooltip.bind(this);
		this.closeTooltip = this.closeTooltip.bind(this);
	}
	
	openWindow()
	{
		this.setState({
			modalClasses: [style.modal]
		})
	}

	closeWindow()
	{
		this.setState({
			modalClasses: [style.modal, style.modal_hide].join(' ')
		})
	}

	showTooltip()
	{
		this.setState({
			tooltipClasses: [style.tooltiptext, style.tooltip_show].join(' ')
		})
	}

	closeTooltip()
	{
		this.setState({
			tooltipClasses: [style.tooltiptext]
		})
	}

	render()
	{
		if(this.props.hidden !== undefined && !this.state.modalClasses.includes(style.modal_hide) && this.state.setInitialState === false)
		{
			this.state.setInitialState = true;
			this.closeWindow();
		}

		const debugButton = (
			<button onClick={this.openWindow}>
				Open window
			</button>
		)

		const popupTooltip = (
			
			<span className={this.state.tooltipClasses} id="myPopup">{this.props.tooltip}</span>
		)

		const div = (
			<div>
				{this.props.debug !== undefined ? debugButton : undefined}
				
				<div id="myModal" className={this.state.modalClasses}>
					<div className={[style.modal_content, style.tooltip].join(' ')} onMouseEnter={this.showTooltip} onMouseLeave={this.closeTooltip}>
					
						{/* <div className={style.tooltip}> */}
							{this.props.tooltip !== undefined ? popupTooltip : undefined}
						{/* </div> */}

						<span className={style.close} onClick={this.closeWindow}>&times;</span>
						{this.props.children}
					</div>
				</div>
			</div>
		)

		return div;
	}
}