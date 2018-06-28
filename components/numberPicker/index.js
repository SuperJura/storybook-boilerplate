import React from 'react'
import style from './index.css'
import Button from '../button'

export default class NumberPicker extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            controlValue: 0
        }
    }

    render()
    {
        const controlInput = (
            <input type="number" placeholder="0" value={this.state.controlValue} onChange={(event) =>
                {
                    this.setState({
                        controlValue: event.target.value
                    })
                }}
            />
        )

        const control = (
            <div>
                {controlInput}    
                <Button isSmall onClick={() => {
                    this.props.onControlClick(+this.state.controlValue)
                }}>Change</Button>
            </div>
        )

        return control
    }
}