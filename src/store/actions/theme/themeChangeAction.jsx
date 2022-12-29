const DARKTHEME = "darktheme";
const LIGHTTHEME = 'lighttheme';

function darkTheme (theme){
  return{
    type : DARKTHEME,
    payload : theme
  }
}

function defaultTheme (theme){
  return{
    type : LIGHTTHEME,
    payload : theme
  }
}

export {
  darkTheme,
  defaultTheme
}