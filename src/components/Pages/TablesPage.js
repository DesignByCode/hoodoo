import React from 'react'
import Row from '../Grid/Row'
import Column from '../Grid/Column'

const TablesPage = () => {
    return  (
        <Row>
            <Column className="md-col-12">
                <table className="shadow--1">
                    <tr>
                        <th >First Name</th>
                        <th>Last Name</th>
                        <th>Points</th>
                    </tr>
                    <tr >
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                    <tr>
                        <td>Adam</td>
                        <td>Johnson</td>
                        <td>67</td>
                    </tr>
                </table>

            </Column>
        </Row>
    )
}

export default TablesPage