/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './IDCard.css';

interface IDCardProps {
  state: string;
  id: string;
  expireDate: string;
  familyName: string;
  lastName: string;
  street: string;
  dateofBirth: string;
  photoURL: string;
  donor: boolean;
  sex?: 'M' | 'F';
  height: string;
  hair?: 'BRN' | 'BLD' | 'GNG' | 'WHT' | 'BLK';
  weight: number;
  eyes?: 'BRN' | 'BLK' | 'WHT' | 'GRN' | 'GRY' | 'BLU';
  issued: string;
  documentD11r: string;
  signature: string;
}

const IdentificationCard: React.FC<IDCardProps> = ({ 
  expireDate, lastName, dateofBirth, photoURL, familyName, id, street, sex, height, hair, weight, eyes, 
  issued, documentD11r, signature, state 
}) => {
  return (
    <div className="identification-card">
       <div className="photoURL">
         <img src={photoURL} /> 
      </div>
      <div className="bwPhoto">
          <img src={photoURL} />
      </div>
      <div className="info">
        <div className="state">{`${state}`}</div>
        <div className="idGraph">{`ID:`}</div>
        <div className="id">{`${id}`}</div>
        <div className="expireGraph">{`EXP:`}</div>
        <div className="expireDate">{`${expireDate}`}</div>
        <div className="nameGraph">{`LN:`}</div>
        <div className="lastName">{`${lastName}`}</div>
        <div className="familyGraph">{`FN:`}</div>
        <div className="familyName">{`${familyName}`}</div>
        <div className="street">{`${street}`}</div>
        <div className="ageGraph">{`DOB:`}</div>
        <div className="dateofBirth">{`${dateofBirth}`}</div>
        <div className="sexGraph">{`SEX:`}</div>
        <div className="sex">{`${sex}`}</div>
        <div className="heightGraph">{`HGT:`}</div>
        <div className="height">{`${height}`}</div>
        <div className="hairGraph">{`HAIR:`}</div>
        <div className="hair">{`${hair}`}</div>
        <div className="weightGraph">{`WGT:`}</div>
        <div className="weight">{`${weight}`}</div>
        <div className="eyesGraph">{`EYES:`}</div>
        <div className="eyes">{`${eyes}`}</div>
        <div className="issuedGraph">{`ISS:`}</div>
        <div className="issued">{`${issued}`}</div>
        <div className="d11rGraph">{`DD:`}</div>
        <div className="documentD11r">{`${documentD11r}`}</div>
        <div className="signature">
          <img src={signature} />
        </div>
      </div>
    </div>
  );
};

export default IdentificationCard;