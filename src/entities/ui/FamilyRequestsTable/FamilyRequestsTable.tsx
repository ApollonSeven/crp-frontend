import React from 'react'
import { FamilyRequestsTableProps } from './FamilyRequestsTable.typings'
import styles from './FamilyRequestsTable.module.css'
import CheckBox from 'widgets/ui/CheckBox/CheckBox'

const FamilyRequestsTable: React.FC<FamilyRequestsTableProps> = ({ familyMembers }) => {
    return (
        <div className={styles.container}>
            {familyMembers.map((member, index) => (
                <div key={index} className={styles.member}>
                    <div className={styles.fullName}>{member.fullName}</div>
                    <div className={styles.age}>{member.age}</div>
                    <div className={styles.role}>{member.role}</div>
                    <CheckBox
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                
                    />
                </div>
            ))}
        </div>
    )
}

export default FamilyRequestsTable
