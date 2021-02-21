import React from 'react';


export const SettingOption = ({ title = "", onClick = undefined, text = "", buttonText = "" }) => {
    return (
        <div className="setting-container">
            <div className="setting-title">{title}</div>
            <div className="setting-text">{text}</div>
            <button onClick={onClick} className="setting-button" >{buttonText}</button>
        </div>
    );
}


// connect to what Reut said about .map() in render:
export const RenderAdminSettingsOptions = ({ options }) => {
    return options.map(op =>
        <SettingOption
            key={op.buttonText}
            title={op.title}
            onClick={op.onClick}
            buttonText={op.buttonText}
            text={op.text}
            htmlFor={op.htmlFor}
        />)
}