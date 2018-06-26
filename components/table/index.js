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
                    <tbody>
                        <tr key="headerRow">
                            {
                                this.props.headers.map((header, headerIndex) =>(
                                <th key={"header" + headerIndex}>{header}</th>
                            ))
                            }
                            {this.props.onControlClick !== undefined ? <th></th> : undefined}
                        </tr>
                        {
                            this.props.values.map((value, rowIndex) =>(
                                <tr key={"row" + rowIndex}>
                                    {
                                        value.map((column, columnIndex) =>(
                                            <td key={"data" + columnIndex  + " " + rowIndex}>{column}</td>
                                        ))
                                    }
                                    {
                                        this.props.onControlClick !== undefined ? <td> <NumberPicker key={"picker" + rowIndex} onControlClick={(amount) => {this.props.onControlClick(amount, rowIndex)}}/> </td>: undefined
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )

        return table;
    }
}