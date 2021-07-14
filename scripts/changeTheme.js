let lightThemeNow = true;

// LIGHT THEME
const lightTheme = {
    lightColor1: 'rgb(242,242,242)',
    lightColor2: 'rgb(255, 255, 255)',
    principalTextColor: 'rgb(79,79,79)',
    secondaryTextColor: 'rgb(130,130,130)',
    softBackground: 'rgba(255, 255, 255, .8)'
}
// DARK THEME
const darkTheme = {
    lightColor1: '#0E1623',
    lightColor2: '#192732',
    principalTextColor: '#EBF3F6',
    secondaryTextColor: '#B8D1E2',
    softBackground: 'rgba(25, 39, 50, .8)'
}


let changeTheme = document.getElementById("changeTheme");
changeTheme.addEventListener('click', () => {
    if(lightThemeNow){
        for(color in darkTheme){
            document.documentElement.style.setProperty(`--${color}`, darkTheme[color]);    
        }
        // document.documentElement.style.setProperty('--lightColor1', darkColor1);
        // document.documentElement.style.setProperty('--lightColor2', darkColor2);
        lightThemeNow = false
    } else{
        for(color in lightTheme){
            document.documentElement.style.setProperty(`--${color}`, lightTheme[color]);    
        }
        // document.documentElement.style.setProperty('--lightColor1', lightColor1);
        // document.documentElement.style.setProperty('--lightColor2', lightColor2);
        lightThemeNow = true
    }

});