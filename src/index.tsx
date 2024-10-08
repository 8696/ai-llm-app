import React from 'react'

import { createRoot } from 'react-dom/client'

import reportWebVitals from './reportWebVitals'

import './index.less'

const root = createRoot(document.getElementById('root') as HTMLElement)

const App = React.lazy(async () => import('./App'))

root.render(<React.Suspense fallback={<></>}><App /></React.Suspense>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
