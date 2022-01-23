let footerMain = '';
footerMain += `<div>
<div>
    <a href="#">
        <div class="backTopTringle">
            <span id="trangle" class="trangle_up"></span>
        </div>
        <span class="backTop"></span>
        <p class="backTopWord">Вверх</p>
    </a>
</div>
</div>
<div class="footerZindex">
<footer id="footer">
    <div>
        <p id="private_police"><a class="aboutUs" style="color:#d4d4d4" href="https://gareg.ru/private.html">Политика/конфидециальность.</a></p>
        <a class="aboutUs" id="thankYou" style="color:#d4d4d4" href="https://github.com/iamnotapr/pictures/blob/main/thanks.png?raw=true" target="_blank">Благодарность.</a>
        <p id="help" style="color:#e0e0e0" class="help">Возникла проблема,<a style="color:#d4d4d4" class="aboutUs" href="https://gareg.ru/support.html">напишите нам.</a></p>
      <!--  <a href="kvalSeller.html" style="color:#d4d4d4" class="kvalSaller aboutUs">Gare.g plus.</a>-->
        <a href="https://gareg.ru/referal.html" style="color:#e0e0e0" class="referal aboutUs">Поддержите нас с помощью реферальной программы.</a>
        <a href="https://yoomoney.ru/quickpay/shop-widget?writer=seller&targets=%D0%9D%D0%B0%20%D0%BA%D0%BE%D1%84%D0%B5%20%D0%B4%D0%BB%D1%8F%20Gare&targets-hint=&default-sum=&button-text=11&payment-type-choice=on&mobile-payment-type-choice=on&hint=&successURL=gareg.ru%2Fgr.html&quickpay=shop&account=4100115825522026&" class="oneD">Пожертвуйте 1$ на кофе Gare.</a>
        <span class="bettwenTwo"></span>
        <div class="alpha">
            <a href="#" class="shop">Gare.g</a>
            <p class="internet">Интернет-магазин</p>
            <a href="https://iamnotapr.github.io/alpha/alphasite.html" class="alpha8">Alpha</a>
            <p class="rocket">Ракетная модель</p>
        </div>
    </div>
    <div>
        <p class="inc" style="color:grey">© 2022, Gare.g, Inc. или ее филиалы</p>
    </div>
</footer>
</div>
</div>`;
const footerJsM = footerMain;
function footerJs() {
    document.getElementById('footerJs').innerHTML = footerJsM;
}
footerJs();