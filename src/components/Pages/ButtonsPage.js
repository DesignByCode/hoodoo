import React from 'react'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import CodeExample from '../CodeExample'
import { BsInfoCircle } from 'react-icons/bs'


const ButtonsPage = () => (
    <Row>
        <Column className="md-col-12">
            <h1>Buttons</h1>
            <div id='default-buttons' className="mb-8">
                <div className='mb-5'>
                    <h3>Default Buttons</h3>
                    <p>Hoodoo has 4 default button colors to start with </p>
                </div>
                <div>
                    <button className='btn'>Plain</button>
                    <button className='btn btn--default'>Default</button>
                    <button className='btn btn--white'>White</button>
                    <button className='btn btn--black'>Black</button>

                </div>

                <CodeExample>
                    &lt;button class='btn'&gt;Plain&lt;/button&gt; <br/>
                    &lt;button class='btn btn--default'&gt;Default&lt;/button&gt; <br/>
                    &lt;button class='btn btn--white'&gt;White&lt;/button&gt; <br/>
                    &lt;button class='btn btn--black'&gt;Black&lt;/button&gt; <br/>
                </CodeExample>
            </div>

            <div id='custom-buttons' className="mb-8">
                <div className='mb-5'>
                    <h3>Custom Colors Buttons</h3>
                    <p>Custom colored button can be added by adding your colors in the colors array in the <code>_theme.sass</code> file. </p>
                </div>
                <div>
                    <button className='btn btn--primary'>Primary Color</button>
                    <button className='btn btn--secondary'>Secondary Color</button>
                    <button className='btn btn--mute'>Mute Color</button>
                    <button className='btn btn--dark'>Dark Color</button>
                </div>

                <CodeExample lang="sass">
                    $colors: (primary: #1f7a8c, secondary: #bfdbf7, dark: #022b3a, mute: #e1e5f2)
                </CodeExample>

                <CodeExample>
                    &lt;button class='btn btn--primary'&gt;Primary Color&lt;/button&gt; <br/>
                    &lt;button class='btn btn--secondary'&gt;Secondary Color&lt;/button&gt; <br/>
                    &lt;button class='btn btn--mute'&gt;Mute Color&lt;/button&gt; <br/>
                    &lt;button class='btn btn--dark'&gt;Dark Color&lt;/button&gt; <br/>
                </CodeExample>
            </div>

            <div id='outline-buttons' className="mb-8">
                <div className='mb-5'>
                    <h3>Outline Buttons</h3>
                    <p>Custom colored button can be added by adding your colors in the colors array in the <code>_theme.sass</code> file. </p>
                </div>
                <div>
                    <button className='btn btn--primary-outline'>Primary Color</button>
                    <button className='btn btn--secondary-outline'>Secondary Color</button>
                    <button className='btn btn--dark-outline'>Dark Color</button>
                </div>

                <CodeExample>
                    &lt;button class='btn btn--primary-outline'&gt;Primary Color&lt;/button&gt; <br/>
                    &lt;button class='btn btn--secondary-outline'&gt;Secondary Color&lt;/button&gt; <br/>
                    &lt;button class='btn btn--dark-outline'&gt;Dark Color&lt;/button&gt; <br/>
                </CodeExample>
            </div>

            <div id='gradient-buttons' className="mb-8">
                <div className='mb-5'>
                    <h3>Gradient Buttons</h3>
                    <p>Custom colored button can be added by adding your colors in the colors array in the <code>_theme.sass</code> file. </p>
                </div>
                <div>
                    <button className='btn btn--primary-gradient'>Primary Color</button>
                    <button className='btn btn--secondary-gradient'>Secondary Color</button>
                    <button className='btn btn--default-gradient'>Dark Color</button>
                    <button className='btn btn--mute-gradient'>Dark Color</button>
                    <button className='btn btn--dark-gradient'>Dark Color</button>
                </div>

                <CodeExample>
                    &lt;button class='btn btn--primary-gradient'&gt;Primary Color&lt;/button&gt; <br/>
                    &lt;button class='btn btn--secondary-gradient'&gt;Secondary Color&lt;/button&gt; <br/>
                    &lt;button class='btn btn--dark-gradient'&gt;Dark Color&lt;/button&gt; <br/>
                </CodeExample>
            </div>

            <div id='glass-buttons' className="mb-8 ">
                <div className='mb-5'>
                    <h3>Glass Buttons</h3>
                    <p>Custom colored button can be added by adding your colors in the colors array in the <code>_theme.sass</code> file. </p>
                </div>
                <div className="pat2 py-5">
                    <button className='btn btn--glass '>Primary Color</button>
                    <button className='btn btn--glass text--secondary'>Secondary Color</button>
                    <button className='btn btn--glass text--dark'>Dark Color</button>
                </div>

                <CodeExample>
                    &lt;button class='btn btn--glass'&gt;Primary Color&lt;/button&gt; <br/>
                    &lt;button class='btn btn--glass'&gt;Secondary Color&lt;/button&gt; <br/>
                    &lt;button class='btn btn--glass'&gt;Dark Color&lt;/button&gt; <br/>
                </CodeExample>
            </div>

            <div id='rounded-buttons' className="mb-8">
                <div className='mb-5'>
                    <h3>Rounded Buttons</h3>
                    <p>Make your buttons corners rounded by simply adding a class of <code>btn--rounded</code></p>
                </div>

                <div className="mb-5">
                    <button className='btn btn--rounded btn--primary'>Primary Color</button>
                    <button className='btn btn--rounded btn--secondary'>Secondary Color</button>
                    <button className='btn btn--rounded btn--dark'>Dark Color</button>
                </div>

                <div className="mb-5">
                    <button className='btn btn--rounded btn--primary-outline'>Primary Color</button>
                    <button className='btn btn--rounded btn--secondary-outline'>Secondary Color</button>
                    <button className='btn btn--rounded btn--dark-outline'>Dark Color</button>
                </div>

                <CodeExample>
                    &lt;button class='btn btn--rounded btn--primary'&gt;Primary Color&lt;/button&gt; <br/>
                    &lt;button class='btn btn--rounded btn--secondary-outline'&gt;Secondary Color&lt;/button&gt; <br/>
                </CodeExample>

                <blockquote className="p-6 my-8 bg--dark text--white r-5 shadow--7 flex flex--row flex--align-center">
                    <div style={{width: '40px'}}>
                        <BsInfoCircle style={{marginRight: '10px'}} size={20}/>
                    </div>
                    <p>Note that the background-color, text-color, border-radius and more... can be use to alter the look of the button.</p>

                </blockquote>

                <div className="mb-5">
                    <button className='btn bg--dark text--secondary border--secondary r-7'>Primary Color</button>
                    <button className='btn border--primary border--primary text--secondary'>Secondary Color</button>
                </div>

                <CodeExample>
                    &lt;button class='btn btn--rounded btn--primary'&gt;Primary Color&lt;/button&gt; <br/>
                    &lt;button class='btn btn--rounded btn--secondary'&gt;Secondary Color&lt;/button&gt; <br/>
                </CodeExample>
            </div>

        </Column>
    </Row>
)
export default ButtonsPage