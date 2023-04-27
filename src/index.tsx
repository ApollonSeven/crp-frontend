import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from 'app'
import reportWebVitals from 'reportWebVitals'
import ArmyCard from 'shared/ui/ArmyCard/ArmyCard'
import BoaterCard from 'shared/ui/BoaterCard/BoaterCard'
import FlyingCard from 'shared/ui/FlyingCard/FlyingCard'
import VehiclePassport from 'shared/ui/VehiclePassport/VehiclePassport'
import ATMMainScreen from 'shared/ui/ATM/components/ATMMainScreen'
import ATMHistoryScreen from 'shared/ui/ATM/components/ATMHistoryScreen'
import ATMPinCodeScreen from 'shared/ui/ATM/components/ATMPinCodeScreen'
import ATMBalanceScreen from 'shared/ui/ATM/components/ATMBalanceScreen'
import ATM from 'shared/ui/ATM/ATM'
import ATMAcceptButton from 'shared/ui/ATM/components/ATMAcceptButton'
import ATMAddMoneyScreen from 'shared/ui/ATM/components/ATMAddMoneyScreen'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
        <ArmyCard
            number="№9891833"
            status="Active Duty"
            firstName="KEVIN"
            lastName="JOHN ADAMS"
            pavGrade="E-6"
            rank="SSG"
            issueDate="2014 DEC 18"
            expirationDate="2021 DEC 18"
        />
        <BoaterCard
            sex="M"
            eyes="BLUE"
            hair="BRN"
            dateOfBirth="23/09/1997"
            dateOfIssue="24/10/2022"
            boaterIdCard="002549741"
        />
        <FlyingCard
            name="WEAZY B. PILOT"
            nationality="american"
            dob="23 SEP 1999"
            sex="M"
            height={67}
            weight={200}
            hair="brown"
            eyes="green"
            certNumber={2549741}
            dateOfIssue="24 OCT 2022"
        />
        <VehiclePassport
            id={43441241244}
            vehicleIdNumber="3xwdjf143543fjefjw"
            model="Mercedes-Benz"
            make="huracan"
            plateNumber="6mbv006"
            bodyTypeModel="AT"
            fuel="G"
            buyDate="06/30/2005"
            feesPaid="$21"
            regDate="06/30/2005"
            firstYearSold="2003"
            mo="JU"
            issueDate="07/09/2005"
            owners={[
                {
                    fullName: 'WEAZY BUERO',
                    address: '999 WOODLAND AVE',
                    taxNumber: 'MENLO PARK CA 94025',
                    month: 'JU',
                    year: '2003',
                    regDate: '06/30/2005',
                    id: 'id1',
                },
                {
                    fullName: 'WEAZY BUERO',
                    address: '999 WOODLAND AVE',
                    taxNumber: 'MENLO PARK CA 94025',
                    month: 'JU',
                    year: '2003',
                    regDate: '06/30/2005',
                    id: 'id2',
                },
            ]}
        />
        <ATMMainScreen />
        <ATMPinCodeScreen />
        <ATMHistoryScreen
            history={[
                {
                    date: '12.09.2020',
                    operations: [{
                        shortName: 'Иван Е.',
                        operation: 'Пополнение',
                        value: '+ 4 500 $',
                    },
                    {
                        shortName: 'Иван Е.',
                        operation: 'Перевод',
                        value: '- 4 500 $',
                    }]
                },
                {
                    date: '02.09.2020',
                    operations: [{
                        shortName: 'Иван Е.',
                        operation: 'Перевод',
                        value: '- 4 500 $',
                    },
                    {
                        shortName: 'Иван Е.',
                        operation: 'Пополнение',
                        value: '+ 4 500 $',
                    },
                    {
                        shortName: 'Иван Е.',
                        operation: 'Пополнение',
                        value: '+ 4 500 $',
                    }]
                },
                {
                    date: '02.09.2020',
                    operations: [{
                        shortName: 'Иван Е.',
                        operation: 'Перевод',
                        value: '- 4 500 $',
                    },
                    {
                        shortName: 'Иван Е.',
                        operation: 'Пополнение',
                        value: '+ 4 500 $',
                    },
                    {
                        shortName: 'Иван Е.',
                        operation: 'Пополнение',
                        value: '+ 4 500 $',
                    }]
                }
            ]}
        />
        <ATMBalanceScreen
            balance='50 000 000$'
        />
        <ATMAcceptButton title='Пополнить' />
        <ATMAddMoneyScreen value='50 000 000$' gas='456$' toAdding='50 000 456$'/>
        <ATM/>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
