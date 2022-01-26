//COOKIE TIME
//COOKIE TIME/DATE CUSTOMER
function cookie ( cookie_name ){
    let cookie_date = new Date ( );                 //DATE COOKIE
    cookie_date.setTime( cookie_date.getTime() -1);
    document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}
cookie();
console.log(cookie)