const Options = [
    {
        title: "עריכת פרטים אישיים",
        onClick: handleEditUser,
        buttonText: "עריכה",
        text: "שימו לב, לחיצה על איפוס תמחק את כל הנקודות טובות בבית לעריכת שם, גיל ועיר מגורים",
    },
    {
        title: "שינוי סיסמא",
        onClick: handleResetPWClick,
        buttonText: "שנה סיסמא",
    },
    {
        title: "הוספת קטגוריה",
        onClick: handleClick,
        buttonText: "הוסף קטגוריה",
        text: "הוספת קטגוריה שתופיע לכל המורים הרשומים לארגון שלך",
    },
    {
        title: "שינוי שפת ארגון",
        onClick: hanleLanguage,
        buttonText: "שנה שפה",
        text: "שימי לב כי שינוי השפה ישנה את שפת האתר עבור כל האירגון",
    }
]
//#green 
/*
{
    Options.map(op => <SettingOption
        key={op.buttonText}
        title={op.title}
        onClick={op.onClick}
        buttonText={op.buttonText}
        text={op.text}
        htmlFor={op.htmlFor}
    />)
}
*/
//# 

//#blue <RenderAdminSettingsOptions options={Options} /> //#
