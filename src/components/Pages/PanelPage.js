import React from 'react'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import Panel from '../Panel/Panel'
import PanelHeader from '../Panel/PanelHeader'
import PanelBody from '../Panel/PanelBody'
import PanelFooter from '../Panel/PanelFooter'
import { uniqueId } from 'lodash'

const PanelPage = () => {
    return  (
        <>
            <Row>
                <Column className={`md-col-12`}>
                    <div className='mb-5'>
                        <h3>Default Panel</h3>
                        <p>Panel building block </p>
                    </div>
                </Column>
            </Row>

            <Row>
                <Column className="sm-col-4">
                    <div className="panel">
                        <div className='panel__body'>
                            <div className='flex flex--row flex--nowrap'>
                                <div className='avatar shadow--3 mr-4'>
                                    <img src='https://www.placecage.com/50/50' alt='' />
                                </div>
                                <div className="flex flex--column justify--evenly truncate">
                                    <div>Nicolas Cage</div>
                                    <small>Born: 7 January 1964 (age 56 years)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </Column>
                <Column className="sm-col-4">
                    <div className="panel">
                        <div className='panel__body'>
                            <div className='flex flex--row flex--nowrap'>
                                <div className='avatar shadow--3 avatar--rounded mr-4'>
                                    <img src='https://www.placecage.com/50/50' alt='' />
                                </div>
                                <div className="flex flex--column justify--evenly truncate">
                                    <div>Nicolas Cage</div>
                                    <small>Born: 7 January 1964 (age 56 years)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </Column>
                <Column className="sm-col-4">
                    <div className="panel">
                        <div className='panel__body'>
                            <div className='flex flex--row flex--nowrap'>
                                <div className='avatar shadow--3 avatar--round mr-4'>
                                    <img src='https://www.placecage.com/50/50' alt='' />
                                </div>
                                <div className="flex flex--column justify--evenly truncate">
                                    <div>Nicolas Cage</div>
                                    <small>Born: 7 January 1964 (age 56 years)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </Column>
            </Row>
            <Row>
                <Column className="sm-col-6 flex">
                    <Panel shadow>
                        <img className='panel__img' src='https://www.placecage.com/640/360' alt='placeholder' />
                        <PanelHeader>Hello Panel</PanelHeader>
                        <PanelBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi corporis ducimus facilis incidunt mollitia natus necessitatibus ratione sapiente.
                        </PanelBody>
                        <PanelFooter>Footer area</PanelFooter>
                    </Panel>
                </Column>
                <Column className="sm-col-6 flex">
                    <Panel shadow>
                        <figure className="panel__figure">
                            <img className="panel__img" src="https://www.placecage.com/640/360" alt="Trulli"/>
                            <figcaption className="panel__caption">Nicolas Cage</figcaption>
                        </figure>
                        <PanelHeader>Hello Panel</PanelHeader>
                        <PanelBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi corporis ducimus facilis incidunt mollitia natus necessitatibus ratione sapiente.
                        </PanelBody>
                        <PanelFooter>Footer area</PanelFooter>
                    </Panel>
                </Column>

            </Row>
            <Row className="flex justify--between">
                {
                    Array(2).fill().map(() => (
                        <Column key={uniqueId('dark_')} className="md-col-6">
                            <Panel mode="dark" shadow>

                                <PanelHeader>Hello Panel</PanelHeader>
                                <PanelBody>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi corporis ducimus facilis incidunt mollitia natus necessitatibus ratione sapiente.
                                </PanelBody>
                                <PanelFooter>Footer area</PanelFooter>
                            </Panel>
                        </Column>
                    ))
                }
            </Row>
            <Row>
                {
                    Array(2).fill().map(() => (
                        <Column key={uniqueId('default_')} className="md-col-6">
                            <Panel mode="primary"  shadow>
                                <PanelHeader>Hello Panel {uniqueId('default_')}</PanelHeader>
                                <PanelBody>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi corporis ducimus facilis incidunt mollitia natus necessitatibus ratione sapiente.
                                </PanelBody>
                                <PanelFooter>
                                    <button className="btn btn--white btn--sm">
                                        Button
                                    </button>
                                    <button className="btn btn--white-outline btn--sm">
                                        Button
                                    </button>
                                </PanelFooter>
                            </Panel>
                        </Column>
                    ))
                }
            </Row>
        </>
    )
}

export default PanelPage