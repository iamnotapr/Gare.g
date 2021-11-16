//Вывод сервира
//каталог товаров
function render(){
    const productStore = localStorageUtill.getProducts();

    headerPage.render(productStore.length);
    productPage.render();
}
let CATALOG =[];

//http://myjson.dit.upm.es/api/bins/3qst                             //Обновлять при каждом добавлении в католог
//server/catalog.json
fetch('http://myjson.dit.upm.es/api/bins/3qst')                                            //Вывод каталога товаров
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    });
