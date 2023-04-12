import React from 'react'
import { FamilyTableProps } from './FamilyTable.typings'
import styles from './FamilyTable.module.scss'

const FamilyTable: React.FC<FamilyTableProps> = ({ familyMembers }) => {
    return (
        <div className={styles.container}>
            {familyMembers.map((member, index) => (
                <div key={index} className={styles.member}>
                    <div className={styles.fullName}>{member.fullName}</div>
                    <div className={styles.age}>{member.age}</div>
                    <div className={styles.role}>{member.role}</div>
                </div>
            ))}
        </div>
    )
}

export default FamilyTable
