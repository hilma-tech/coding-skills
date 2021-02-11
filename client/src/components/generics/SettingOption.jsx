import React from 'react';


export const SettingOption = ({ title = "", onClick = undefined, text = "", buttonText = "", htmlFor = undefined }) => {
    return (
        <div className="setting-container">
            <div className="setting-title">{title}</div>
            <div className="setting-text">{text}</div>
            <button onClick={onClick} className="setting-button" >{buttonText}</button>
        </div>
    );
}