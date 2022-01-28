//COOKIE TIME
//COOKIE TIME/DATE CUSTOMER
app.use(connect.cookieParser());
app.use(connect.session({ secret: '7634570983222678997'} ));

//function

function cookie ( cookie_name ){
    let cookie_date = new Date ( );                 //DATE COOKIE
    cookie_date.setTime( cookie_date.getTime() -1);
    document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}
document.cookie = cookie();
cookie();
//console.log(cookie)