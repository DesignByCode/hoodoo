import React from 'react'
import Row from '../Grid/Row'
import Column from '../Grid/Column'

const TablesPage = () => {
    return  (
        <Row>
            <Column className="md-col-12">
                <div className='panel'>
                    <div className='panel__body'>
                        <table>
                            <thead>
                            <tr>
                                <th >First Name</th>
                                <th>Last Name</th>
                                <th>Points</th>
                            </tr>
                            </thead>
                            <tbody>
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
                            </tbody>
                        </table>
                    </div>

                </div>
            </Column>
        </Row>
    )
}

export default TablesPage