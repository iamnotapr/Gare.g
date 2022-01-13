let headerM ='';
headerM += `<header class="header">
<a href="#">
    <span class="garehtml"></span>
</a>
<h2><img src="https://github.com/iamnotapr/pictures/blob/main/gg.jpg?raw=true" width="60px" height="40px"/>Gare.g</h2>

<!--find-->
<div>
    <form class="find_ads" action="">
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
  <!--  <a href="kvalSeller.html" class="plusword">
        <span class="plusSpan"></span>
        <p>Gare.g plus</p>
    </a>
</div>
<a href="kvalSeller.html">
    <div class="plusmain">
        <img src="https://github.com/iamnotapr/pictures/blob/main/plus.png?raw=true" id="plusmain" />
    </div>
</a>-->
</header>
</div>`;
const headerHtml = headerM;
function headerMain() {
    document.getElementById("headerMain").innerHTML = headerHtml;
}
headerMain();