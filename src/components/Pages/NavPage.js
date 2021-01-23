import React from 'react'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import CodeExample from '../CodeExample'


const NavPage = () => {

    return  (
        <div>
            <Row>
                <Column className="md-col-12">

                    <h1>Navigation</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores aspernatur, commodi cum delectus
                        distinctio doloribus dolorum ea eum laudantium, maiores modi molestias mollitia natus nisi</p>
                    <nav className="nav second-nav">
                        <div className="nav__wrapper">
                            <div className="nav__container">
                                <div className="nav__brand mr-6">
                                    <a href="#@">Hoodoo</a>
                                </div>
                                <div className="nav__trigger">
                                    \\
                                </div>
                            </div>
                            <div className="nav__responsive">
                                <ul className="nav__links">
                                    <li className="nav__link">
                                        <a href="#@">Home</a>
                                    </li>
                                    <li className="nav__link">
                                        <a href="#@">About</a>
                                    </li>
                                    <li className="nav__link">
                                        <a href="#@">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                   <CodeExample>
                       &lt;nav class=&quot;nav&quot;&gt; <br/>
                       &nbsp; &lt;div class=&quot;nav__wrapper&quot;&gt; <br/>
                       &nbsp; &nbsp; /** Contains the logo and navigation trigger button **/ <br/>
                       &nbsp; &nbsp; &lt;div class=&quot;nav__container&quot;&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &lt;div class=&quot;nav__brand&quot;&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &nbsp; &lt;a href=&quot;#&quot;&gt;Hoodoo&lt;/a&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &lt;/div&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &lt;div class=&quot;nav__trigger&quot;&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &nbsp; /** Add your own image, emoji, icon or custom element **/ <br/>
                       &nbsp; &nbsp; &nbsp; &lt;/div&gt; <br/>
                       &nbsp; &nbsp; &lt;/div&gt; <br/>
                       &nbsp; &nbsp; /** elements in the responsive div will conform to the mobile view **/ <br/>
                       &nbsp; &nbsp; &lt;div class=&quot;nav__responsive&quot;&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &lt;ul class=&quot;nav__links&quot;&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &nbsp; &lt;li class=&quot;nav__link&quot;&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &nbsp; &lt;/li&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &nbsp; &lt;li class=&quot;nav__link&quot;&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;a href=&quot;#&quot;&gt;About&lt;/a&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &nbsp; &lt;/li&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &nbsp; &lt;li class=&quot;nav__link&quot;&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;a href=&quot;#&quot;&gt;Contact Us&lt;/a&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &nbsp; &lt;/li&gt; <br/>
                       &nbsp; &nbsp; &nbsp; &lt;/ul&gt; <br/>
                       &nbsp; &nbsp; &lt;/div&gt; <br/>
                       &nbsp; &lt;/div&gt; <br/>
                       &lt;/nav&gt;
                   </CodeExample>
                </Column>
            </Row>


        </div>
    )
}

export default NavPage