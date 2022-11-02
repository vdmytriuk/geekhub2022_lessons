//3.1. Створити об'єкт який описує ширину і висоту прямокутника, а також вираховує площу фігури

const rectangle = {
    width: 20,
    height: 10,
    getSquare() {
        return this.width * this.height;
    },
}

console.log('3.1:', rectangle.getSquare());



//3.2. Створити об'єкт у якого буде ціна товара і два метода: для отримання ціни і для отримання ціни з урахуванням знижки

const price = {
    price: 10,
    discount: '15%',
    getPrice() {
        return this.price;
    },
    getPriceWithDiscount() {
        return this.price - (this.price * (parseInt(this.discount) / 100));
    },
};

console.log('3.2:', price.getPrice(), price.getPriceWithDiscount());



//3.3. Створити об'єкт 'чисельник' у якого є числове значення і методи 'подвоїти', 'додати один', 'відняти один'. Методи можна викликати через крапку щоб був ланцюг виклику

const numerator = {
    value: 1,
    double() {
        this.value *= 2;
        return this;
    },
    plusOne() {
        this.value++;
        return this;
    },
    minusOne() {
        this.value--;
        return this;
    },
}

numerator.double().plusOne().plusOne().minusOne();

console.log('3.3:', numerator.value);



//3.4. Змінити функції getElementHeight таким способом щоб можна було викликати getElementHeight і отримати 25

const element = {
    height: 25,
    getHeight: function() {
        return this.height;
    },
};

const getElementHeight = element.getHeight.bind(element);

console.log('3.4:', getElementHeight());
