import React from 'react'
import style from './index.css'
import NumberPicker from '../numberPicker'

export default class Table extends React.Component
{
    render()
    {
        const table = (
            <div>
                <table className={style.table}>
                    <tr>
                        {
                            this.props.headers.map((header) =>(
                            <th>{header}</th>
                        ))
                        }
                        {this.props.onControlClick !== undefined ? <th></th> : undefined}
                    </tr>
                    {
                        this.props.values.map((value) =>(
                        <tr>
                            {
                                value.map((row) =>(
                                    <td>{row}</td>
                            ))
                            }
                            {
                                this.props.onControlClick !== undefined ? <NumberPicker onControlClick={this.props.onControlClick}/> : undefined
                            }
                        </tr>
                    ))
                    }
                </table>
            </div>
        )

        return table;
    }
}