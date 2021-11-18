class Shopping {
	handleCartHide (){
		RSHOPPING.innerHTML = '';
	}

	render() {
        const productsStore = localStorageUtill.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;


        CATALOG.forEach(({ id, name, price, }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping_element_name">${name}</td>
                        <td class="shopping_element_price">${price} ₽</td>
                    </tr>
                `;
                	 sumCatalog += price;
            }
        });

        const html = `
        <div class="shopping_cart">
        	<div class="shoppingClose" onclick="shoppingPage.handleCartHide();">
            	<span class="hideCartjs"></span>
           		<span class="hideCartjsTwo"></span>
            	<span class="hideCartNoneJs"></span>
            </div>
        <form method="POST" action="http://localhost:3001/gareg">
            <table name="catalog">
                ${htmlCatalog}
                    <tr>
                        <td class="shopping_element_name">Полная сумма:</td>
                        <td class="shopping_element_price" name="allprice">${sumCatalog} ₽</td>
                    </tr>
            </table>
            <input class="mailClient" name="mail" type="mail" placeholder="Введите свою почту..." required/>
            <input class="adress" name="adres" placeholder="Введите адрес доставки..." required/>
            <div>
                <button class="buyProduct" type="submit">Оформить</button>
            </div>
        </form>    
        </div>
        `;
        RSHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();