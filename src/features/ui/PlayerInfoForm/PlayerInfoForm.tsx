import React from 'react'
import styles from './PlayerInfoForm.module.scss'
import Select from 'shared/ui/Input/Select/Select'
import { InputButton } from 'shared/ui/InputButton/InputButton'
import { Cubes } from 'shared/icons/generated'

export const PlayerInfoForm: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div>
                    <div className={styles.title}>Имя</div>
                    <Select
                        options={[
                            { label: 'Label1', value: 'value1' },
                            { label: 'Label2', value: 'value2' },
                            { label: 'Label3', value: 'value3' },
                            { label: 'Label4', value: 'value4' },
                            { label: 'Label5', value: 'value5' },
                            { label: 'Label6', value: 'value6' },
                            { label: 'Label7', value: 'value7' },
                            { label: 'Label8', value: 'value8' },
                        ]}
                        value={'value1'}
                        onChange={() => {
                            console.log('nothing')
                        }}
                    />
                </div>
                <div>
                    <div className={styles.title}>Фамилия</div>
                    <div className={styles.row}>
                        <Select
                            options={[
                                { label: 'Label1', value: 'value1' },
                                { label: 'Label2', value: 'value2' },
                                { label: 'Label3', value: 'value3' },
                                { label: 'Label4', value: 'value4' },
                                { label: 'Label5', value: 'value5' },
                                { label: 'Label6', value: 'value6' },
                                { label: 'Label7', value: 'value7' },
                                { label: 'Label8', value: 'value8' },
                            ]}
                            value={'value1'}
                            onChange={() => {
                                console.log('nothing')
                            }}
                        />
                        <InputButton Icon={Cubes} />
                    </div>
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.title}>Имя</div>
            </div>
        </div>
    )
}
