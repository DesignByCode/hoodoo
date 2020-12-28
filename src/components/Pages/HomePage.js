import React from 'react'
import Row from '../Grid/Row'
import Column from '../Grid/Column'


const HomePage = () => {

    return  (
        <div>
            <Row>
                <Column className="md-col-12">
                    <h1>Home</h1>
                    <a href='#home'>HOME PAGE LINK</a>
                </Column>
            </Row>
        </div>
    )
}

export default HomePage