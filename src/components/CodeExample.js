import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js/lib/core'
import html from 'highlight.js/lib/languages/xml'
import sass from 'highlight.js/lib/languages/scss'
// import 'highlight.js/styles/night-owl.css'
import 'highlight.js/styles/github.css'



const CodeExample = ({ children, lang  }) => {
    const _code  = useRef()

    useEffect(() => {
        switch (lang) {
            case 'sass':
                hljs.registerLanguage('sass', sass)
                break;
            case 'html':
                hljs.registerLanguage('html', html)
                break;
            default:
                hljs.registerLanguage('html', html)
        }
        hljs.highlightBlock(_code.current)

    })


    return (
        <div style={{position: 'relative'}}>
            <div style={{position: 'absolute', zIndex: 2, right: '15px', top: '15px'}} className="btn btn--xs btn--primary-outline">COPY</div>
            <pre className="shadow--1 r-4" ref={_code} style={{ padding: '30px 15px' }}>
                <code>
                    { children }
                </code>
            </pre>
        </div>
    )
}

CodeExample.defaultProps = {
    lang: 'html'
}

export default CodeExample
