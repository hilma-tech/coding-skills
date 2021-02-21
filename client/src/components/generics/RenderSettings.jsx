import React from 'react';
import { useParams } from 'react-router-dom';
import { resetFetch } from '../../common/fakeFetches';
import './Settings.scss';

import { RenderAdminSettingsOptions, SettingOption } from './GenericSettingsOption'


export const SettingsList = ({ isAdmin }) => {

    const { history } = useParams();

    const handleLogout = () => history.push(window.location.pathname)

    const hanleLanguage = async () => {
        let msg = await resetFetch();
        console.log("msg: ", msg);
    }

    const handleClick = () => {
        console.log("new category")
    }

    const handleEditUser = () => {
        console.log("edit user info")
    }

    const handleResetPWClick = () => {
        history.push('reset-password?b=h')
    }

    return (
        <div id="admin-settings-container">
            <div className="admin-settings-title">הגדרות</div>

            <div id="admin-settings-white-box" className="admin-table-container">
                <div id="settings-content-container">

                    <div className="setting-container">
                        <div className="setting-title-container">
                            <div className="setting-title">עריכת פרטים אישיים</div>
                        </div>

                        <div className="setting-content">
                            <div onClick={handleEditUser} className="setting-button">עריכה</div>
                            <div className="setting-text">לעריכת שם, גיל ועיר מגורים</div>
                        </div>
                    </div>

                    <div className="setting-container">
                        <div className="setting-title-container">
                            <div className="setting-title">שינוי סיסמא</div>
                        </div>

                        <div className="setting-content">
                            <div onClick={handleResetPWClick} className="setting-button"> שנה סיסמא </div>
                            <div className="setting-text"></div>
                        </div>
                    </div>
                    {!isAdmin ? null
                        : <>
                            <div className="setting-container">
                                <div className="setting-title-container">
                                    <div className="setting-title">הוספת קטגוריה</div>
                                </div>

                                <div className="setting-content">
                                    <div onClick={handleClick} className="setting-button" >הוסף קטגוריה</div>
                                    <div className="setting-text" >הוספת קטגוריה שתופיע לכל המורים הרשומים לארגון שלך</div>
                                </div>
                            </div>

                            <div className="setting-container">
                                <div className="setting-title-container">
                                    <div className="setting-title">שינוי שפת ארגון</div>
                                </div>

                                <div className="setting-content">
                                    <div onClick={hanleLanguage} className="setting-button" >שנה שפה</div>
                                    <div className="setting-text" >שימי לב כי שינוי השפה ישנה את שפת האתר עבור כל האירגון</div>
                                </div>
                            </div>
                        </>
                    }

                    <div className="setting-container">
                        <div onClick={handleLogout} id="logout">התנתק</div>
                    </div>

                </div>
            </div>
        </div>
    );
}