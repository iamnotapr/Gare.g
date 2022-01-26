let headerM ='';
headerM += `<header class="header">
<div class="div-button-location-div js-btn-location">
        <a class="div-button-location">Местоположение</a>
    </div>
    <div class="div-popup-hide js-popup-location">
        <div class="overlay-location"></div>
        <div class="popup-form">
            <div class="span-location">
                
                <div class="location-word">Напишите свой город</div>
            </div>
            <div class="input-div-location">
                <input placeholder="Напишите город..." name="city" class="input-1">
                <input placeholder="Область..." name="city-input" class="input-2">
                <select class="select-location" name="select">
                    <option>Армения</option>
                    <option>Казахстан</option>
                    <option>Российская Федирация</option>
                    <option>США</option>
                </select>
                <button type="submit" class="button-location js-close-location">Готово</button>
            </div>
        </div>
    </div>
    <div class="seller-div-link">
        <a href="#" class="seller-link-div">Стать поставщиком</a>
    </div>
<a href="#">
    <span class="garehtml"></span>
</a>
<h2><img src="https://github.com/iamnotapr/pictures/blob/main/gg.jpg?raw=true" width="60px" height="40px"/>Gare.g</h2>

<!--find-->
<div>
    <form class="find_ads" action="" method="post">
        <input class="find_word" id="find_word" name="s" type="search" maxlength="200">
        <a href="#product">    
            <button class="find" id="find" type="button"></button>
        </a>
    </form>
</div>
<!--<textarea class="int" placeholder="add" rows="2" style=" resize: vertical;"></textarea>-->
<!--select-->
<div>
    <div>
        <select class="select">
            <option value="#" >Все</option>
            <option value="https://gareg.ru/book.html" >Книги</option>
            <option value="#" >Подарочные карты</option>
        </select>
    </div>
</div>
<div>
</div>


           <!--cartShopping-->
<div>
  <div id="shopping"></div>             
  <span class="curcl">
      <div class="cartOne"></div>
      <div class="cartBottom"></div>
      <div class="cartLeft"></div>
      <div class="top"></div>
      <div class="topTwo"></div>
      <div class="sirclOne"></div>
      <div class="sirclTwo"></div>
  </span>
</div>

                  <!--sugesstions-->

<div class="suggestions">
    <a href="#" class="suggestionsWord">
        <span class="suggestionsspan"></span>
        <p>Предложения</p>
    </a>
    <a href="#" class="giftcards">
        <span class="giftcardsSpan"></span>
        <p class="giftcardsWord">Подарочные карты</p>
    </a>
 <!--   <main> -->
        <div class="js-button-campaign"><span class="slider"></span>
        <span class="sliderShow"></span>
        <span class="sliderShowTwo"></span>
        <span class="sliderNone"></span>
        </div>
<!--    </main> -->
    <div class="overlay js-overlay-campaign">
        <div class="popup js-popup-campaign">
            <div class="gareshop">
              <span class="garegshop"></span>
              <h1 class="h1" id="shopWord">Gare.g</h1>
            </div>
            <a href="#" class="main-span">Главная</a>
            <a href="#" class="partner-span">Книги</a>
            <div class="support-div">
                <a href="https://gareg.ru/support.html"с class="supportSwi">Помощь</a>
            </div>
            <div class="close-popup js-close-campaign"></div>
            <div class="hideSlider js-close-campaign"></div>
        </div>
    </div>
</header>
</div>`;
const headerHtml = headerM;
function headerMain() {
    document.getElementById("headerMain").innerHTML = headerHtml;
}
headerMain();