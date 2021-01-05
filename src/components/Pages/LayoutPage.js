import React from 'react'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import CodeExample from '../CodeExample'
import { uniqueId } from 'lodash'

const LayoutPage = () => {
    return  (
        <Row>
           <Column className="md-col-12">
               <h1>Column Layout</h1>
               <div id='default-buttons' className="mb-8">
                   <div className='mb-5'>
                       <h3>The Grid</h3>
                       <p>Hoodoo is by default a 12 column grid, but this can be easly changed in the <code>_theme.sass</code> file.</p>
                   </div>
                   <div className="row">
                       {
                           Array(12).fill().map(e => (
                               <div key={uniqueId()} className="sm-col-6 md-col-1">
                                   <div className='border--default bg--default border--black-light text--white r-5 py-4  flex justify--center flex--align-center py-2'>

                                   </div>
                               </div>
                           ))
                       }
                   </div>

                   <div className="row">
                       {
                           Array(6).fill().map(e => (
                               <div key={uniqueId()} className="sm-col-6 md-col-2">
                                   <div className='border--default  bg--default border--black-light text--white r-5 py-4  flex justify--center flex--align-center py-2'>
                                   </div>
                               </div>
                           ))
                       }
                   </div>
                   <div className="row">
                       {
                           Array(4).fill().map(e => (
                               <div key={uniqueId()} className="sm-col-6 md-col-3">
                                   <div className='border--default  bg--default border--black-light text--white r-5 py-4  flex justify--center flex--align-center py-2'>
                                   </div>
                               </div>
                           ))
                       }
                   </div>
                   <div className="row">
                       {
                           Array(3).fill().map(e => (
                               <div key={uniqueId()} className="sm-col-6 md-col-4">
                                   <div className='border--default  bg--default border--black-light text--white r-5 py-4  flex justify--center flex--align-center py-2'>
                                   </div>
                               </div>
                           ))
                       }
                   </div>
                   <div className="row">
                       {
                           Array(2).fill().map(e => (
                               <div key={uniqueId()} className="sm-col-6 md-col-6">
                                   <div className='border--default  bg--default border--black-light text--white r-5 py-4  flex justify--center flex--align-center py-2'>
                                   </div>
                               </div>
                           ))
                       }
                   </div>

                   <div className='row'>
                        <div className='sm-col-6 md-col-12'>
                            <div className='border--default  bg--default border--black-light text--white r-5 py-4  flex justify--center flex--align-center py-2'>
                            </div>
                        </div>
                   </div>

                   <CodeExample>
                       &lt;div className='wrapper'&gt; <br/>
                       &nbsp; &lt;div className='row'&gt; <br/>
                       &nbsp; &nbsp; &lt;div className='sm-col-6 md-col-3'&gt;&lt;/div&gt; <br/>
                       &nbsp; &nbsp; &lt;div className='sm-col-6 md-col-3'&gt;&lt;/div&gt; <br/>
                       &nbsp; &nbsp; &lt;div className='sm-col-6 md-col-3'&gt;&lt;/div&gt; <br/>
                       &nbsp; &nbsp; &lt;div className='sm-col-6 md-col-3'&gt;&lt;/div&gt; <br/>
                       &nbsp; &lt;/div&gt; <br/>
                       &lt;/div&gt;
                   </CodeExample>
               </div>
           </Column>

            <Column className={`md-col-12`}>
                <div className={`row`}>
                    {
                        Array(6).fill().map(e => (
                            <div key={uniqueId()} className="sm-col-6 md-col-2 border--default bg--default border--black-light ">
                            </div>
                        ))
                    }

                </div>

            </Column>
        </Row>
    )
}

export default LayoutPage