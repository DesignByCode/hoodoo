import React from 'react'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import { FaEye } from 'react-icons/fa'

const FormPage = () => {
    return (
        <>

            <div>
                <Row>
                    <Column className="md-col-12">
                        <h1>Form</h1>
                    </Column>
                </Row>
                <Row>
                    <Column className="md-col-6">
                        <div className='form__group'>
                                <label htmlFor='name' className='form__label'>NAME</label>
                            <div className='flex flex--row'>
                                <div className='form__wrap'>
                                    <input id="name" type='text' placeholder="Add name" className='form__item' />
                                    <button className='btn btn--primary'>Button</button>
                                </div>
                            </div>
                        </div>
                        <div className='form__group'>
                            <label htmlFor='email' className='form__label'>EMAIL</label>
                            <div className='form__wrap'>
                                <input id="email" type='text' placeholder="Add name" className='form__item' />
                            </div>
                        </div>
                        <div className='form__group'>
                            <label htmlFor='password' className='form__label'>PASSWORD</label>
                            <div className='form__wrap'>
                                <input id="password" type='text' placeholder="Add name" className='form__item' />
                                <div className='btn'>
                                    <FaEye size={20}/>
                                </div>
                            </div>
                        </div>
                        <div className='form__group'>
                            <label htmlFor='message' className='form__label'>MESSAGE</label>
                            <div className='form__wrap'>
                                <textarea name='message' id='message' cols='30' rows='10' className='form__item'></textarea>
                            </div>
                        </div>

                        <div className='form__group'>
                            <button className='btn btn--primary'>SEND</button>
                        </div>
                    </Column>
                </Row>
            </div>

        </>
    )
}

export default FormPage