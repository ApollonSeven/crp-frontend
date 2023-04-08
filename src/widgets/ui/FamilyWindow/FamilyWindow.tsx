import React, { useState } from 'react'
import styles from './FamilyWindow.module.css'
import { FamilyWindowProps } from './FamilyWindow.typings'
import cn from 'classnames'
import Select from 'shared/ui/Input/Select/Select'
import FamilyTable from 'entities/ui/FamilyTable/FamilyTable'
import FamilyRequestsTable from 'entities/ui/FamilyRequestsTable/FamilyRequestsTable'
const FamilyWindow: React.FC<FamilyWindowProps> = () => {
    enum Tab {
        Family = 0,
        Requests = 1,
        Add = 2,
    }
    const [activeTab, setActiveTab] = useState(Tab.Family)
    const [searchInput, setSearchInput] = useState('')
    const handleTabClick = (tabIndex: Tab) => {
        setActiveTab(tabIndex)
    }

    const familyMembers = [
        { fullname: 'Маршал Гаритос', age: 41, role: 'Отец' },
        { fullname: 'Маршал Гаритос', age: 41, role: 'Отец' },
        { fullname: 'Маршал Гаритос', age: 41, role: 'Отец' },
        { fullname: 'Маршал Гаритос', age: 41, role: 'Отец' },
        { fullname: 'Маршал Гаритос', age: 41, role: 'Отец' },
        { fullname: 'Маршал Гаритос', age: 41, role: 'Отец' },
        { fullname: 'Маршал Гаритос', age: 41, role: 'Отец' },
        { fullname: 'Маршал Гаритос', age: 41, role: 'Отец' },
        { fullname: 'Маршал Гаритос', age: 41, role: 'Отец' },
        { fullname: 'Маршал Гаритос', age: 41, role: 'Отец' },
    ]

    const options = [
        { label: 'Доритос', value: 'option-1' },
        { label: 'Швепс', value: 'option-2' },
        { label: 'Булдак', value: 'option-3' },
    ]

    const [selectedValue, setSelectedValue] = useState('')

    const handleChange = (value: string) => {
        setSelectedValue(value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <div
                    className={cn(
                        styles.tabdiv,
                        activeTab === Tab.Family && styles.active
                    )}
                    onClick={() => handleTabClick(Tab.Family)}
                >
                    <span>Родственники</span>
                </div>
                <div
                    className={cn(
                        styles.tabdiv,
                        activeTab === Tab.Requests && styles.active
                    )}
                    onClick={() => handleTabClick(Tab.Requests)}
                >
                    <span className={styles.request}>Заявки</span>
                </div>
                <button
                    className={cn(
                        styles.addbutton,
                        activeTab === Tab.Add && styles.active
                    )}
                    onClick={() => handleTabClick(Tab.Add)}
                >
                    Добавить
                </button>
            </div>
            <div className={styles.border}>
                <div
                    className={cn(
                        styles.border1,
                        activeTab === Tab.Family && styles.active
                    )}
                ></div>
                <div
                    className={cn(
                        styles.border2,
                        activeTab === Tab.Requests && styles.active
                    )}
                ></div>
            </div>
            {activeTab === Tab.Family && (
                <FamilyTable familyMembers={familyMembers} />
            )}
            {activeTab === Tab.Requests && (
                <FamilyRequestsTable familyMembers={familyMembers} />
            )}
            {activeTab === Tab.Add && (
                <div className={styles.addTab}>
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className={styles.searchID}
                        placeholder="Статический ID"
                    />
                    <Select
                        value={selectedValue}
                        onChange={handleChange}
                        options={options}
                        isRounded={true}
                        placeholder="Роль"
                    />
                    <button className={styles.searchButton}>Подтвердить</button>
                </div>
            )}
        </div>
    )
}

export default FamilyWindow
