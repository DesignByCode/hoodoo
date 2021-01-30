import React from 'react'
import Row from '../Grid/Row'
import Column from '../Grid/Column'


const HomePage = () => {

    return  (
        <div>
            <Row>
                <Column className="md-col-12">
                    <div className="panel panel__body bg--black-light text--white">
                        Hello world
                    </div>
                </Column>
            </Row>
        </div>
    )
}

export default HomePage