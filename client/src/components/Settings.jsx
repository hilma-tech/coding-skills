import React from 'react';






import './Settings.scss';
import { resetFetch } from '../common/fakeFetches';

export const Settings = ({ isAdmin }) => {

    const handleLogout = () => console.log(`history.push(window.location.pathname)`)

    const hanleLanguage = async () => {
        let msg = await resetFetch();
        console.log("msg: ", msg);
    }

    const handleClick = () => {
        console.log("new category")
    }

    const handleEditUser = () => {
        console.log("edit user info")
        console.log("d")
        console.log("o")
        console.log("n")
        console.log("e")
    }

    const handleResetPWClick = () => {
        console.log(`history.push('reset-password?b=h')`)
    }

    return (
        <div id="admin-settings-container">
            <div className="admin-settings-title">הגדרות</div>

            <div id="admin-settings-white-box" className="admin-table-container">
                <div id="settings-content-container">

                    <div className="setting-container">
                        <div className="setting-title-container">
                            <div className="setting-title">שינוי סיסמא</div>
                        </div>

                        <div className="setting-content">
                            <div onClick={() => { handleResetPWClick() }} className="setting-button"> שנה סיסמא </div>
                            <div className="setting-text"></div>
                        </div>
                    </div>
                    {isAdmin ? <>
                        <div className="setting-container">
                            <div className="setting-title-container">
                                <div className="setting-title">הוספת קטגוריה</div>
                            </div>

                            <div className="setting-content">
                                <div onClick={(e) => handleClick} className="setting-button" >הוסף קטגוריה</div>
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
                        : null
                    }

                    <div className="setting-container">
                        <div onClick={() => { handleLogout() }} id="button">התנתק</div>
                    </div>

                </div>
            </div>
        </div >
    );
}