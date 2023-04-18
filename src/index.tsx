import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from 'app'
import reportWebVitals from 'reportWebVitals'
import ArmyCard from 'shared/ui/ArmyCard/ArmyCard'
import BoaterCard from 'shared/ui/BoaterCard/BoaterCard'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
        <ArmyCard number='№9891833' status='Active Duty' firstName='KEVIN' lastName='JOHN ADAMS' pavGrade='E-6' rank='SSG' issueDate='2014 DEC 18' expirationDate='2021 DEC 18'/>
        <BoaterCard/>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
