"use strict";
var ShoppingCartItem = (function () {
    function ShoppingCartItem(id, name, price, quantity, imgUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.imgUrl = imgUrl;
    }
    return ShoppingCartItem;
}());
exports.ShoppingCartItem = ShoppingCartItem;
//# sourceMappingURL=shopping-cart-item.js.map