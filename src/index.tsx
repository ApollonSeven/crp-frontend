import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from 'app'
import reportWebVitals from 'reportWebVitals'
import ArmyCard from 'shared/ui/ArmyCard/ArmyCard'
import BoaterCard from 'shared/ui/BoaterCard/BoaterCard'
import FlyingCard from 'shared/ui/FlyingCard/FlyingCard'
import VehiclePassport from 'shared/ui/VehiclePassport/VehiclePassport'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
        <ArmyCard number='№9891833' status='Active Duty' firstName='KEVIN' lastName='JOHN ADAMS' pavGrade='E-6' rank='SSG' issueDate='2014 DEC 18' expirationDate='2021 DEC 18'/>
        <BoaterCard sex='M' eyes='BLUE' hair='BRN' dateOfBirth='23/09/1997' dateOfIssue='24/10/2022' boaterIdCard='002549741' />
        <FlyingCard name='WEAZY B. PILOT' nationality='american' dob='23 SEP 1999' sex='M' height={67} weight={200} hair='brown' eyes='green' certNumber={2549741} dateOfIssue='24 OCT 2022' />
        <VehiclePassport ID={43441241244} VEHICLE_ID_NUMBER='3xwdjf143543fjefjw' MODEL='Mercedes-Benz' MAKE='huracan' PLATE_NUMBER='6mbv006' BODY_TYPE_MODEL='AT' FUEL='G' BUY_DATE='06/30/2005' FEES_PAID='$21' REG_DATE='06/30/2005' YR_1ST_SOLD='2003' MO='JU' ISSUE_DATE='07/09/2005' />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
