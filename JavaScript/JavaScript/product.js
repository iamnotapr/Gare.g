class product {
    constructor() {
        this.classNameActive = 'btn_product_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }
    handleSetLocationStorage(element, id){
       const {pushProduct,  products} = localStorageUtill.putProducts(id);

       if (pushProduct) {
        element.classList.add(this.classNameActive);
        element.innerHTML =  this.labelRemove;
       } else{
        element.classList.remove(this.classNameActive);
        element.innerHTML =  this.labelAdd;         //addCart
        }
        headerPage.render(products.length);
    }
    render() {
        const productsStore = localStorageUtill.getProducts();
        let htmlCatalog = '';


        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }

        	htmlCatalog += `
        	<li class='product-element'>
        		<span class="name_product">${name}</span>
        		<a href=""><img class="img_product" src="${img}"id="img_product"/></a>
        		<span class="price_product">${price} ₽</span>
        		<button class="btn_product${activeClass}" id="btn_product"  onclick="productPage.handleSetLocationStorage(this, '${id}');">
                ${activeText}
                </button>
        	</li>
        	`;
        });
        const html = `
        	<ul class ='product-conteiner'>
        		${htmlCatalog}
        	</ul>
        `;

        RPRODUCTS.innerHTML=html;
      }
};
const productPage = new product();
