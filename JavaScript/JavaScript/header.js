class Header {
    handleOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container" onclick="headerPage.handleOpenShoppingPage();">
                <div class="header-counter" >
                    ${count}
                </div>
            </div>
            `;

        RHEADER.innerHTML = html;
    }
}

const headerPage = new Header();


