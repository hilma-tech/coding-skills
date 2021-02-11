import React from 'react';
import { SettingOption } from './SettingOption';


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