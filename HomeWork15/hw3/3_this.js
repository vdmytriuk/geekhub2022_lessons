//3.1. Створити об'єкт який описує ширину і висоту прямокутника, а також вираховує площу фігури
var rectangle = {
    width: 20,
    height: 10,
    getSquare: function () {
        return this.width * this.height;
    }
};
console.log('3.1:', rectangle.getSquare());
var price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        return this.price - (this.price * (parseInt(this.discount) / 100));
    }
};
console.log('3.2:', price.getPrice(), price.getPriceWithDiscount());
var numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function () {
        this.value++;
        return this;
    },
    minusOne: function () {
        this.value--;
        return this;
    }
};
numerator.double().plusOne().plusOne().minusOne();
console.log('3.3:', numerator.value);
//3.4. Змінити функції getElementHeight таким способом щоб можна було викликати getElementHeight і отримати 25
var element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};
var getElementHeight = element.getHeight.bind(element);
console.log('3.4:', getElementHeight());
