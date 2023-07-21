const Stripe = require('stripe');
const products = require('./products');


const stripe = Stripe
('sk_test_51NW9L7BWfTVzBxTbU1Jjv4tABzC8qduMxVwSIp5AIcf8dREVu1yvKxlGvsaSNofeohI7zcy6g2Mm6fQfigi8iDwC008Form6ua');


(async () => {
    for (const product of products) {
         const stripeProduct = await stripe.products.create({
            name: product.name,
            default_price_data: {
                currency: product.currency,
                unit_amount_decimal: product.price
            },
            images: [product.image],
        });
        console.log(stripeProduct.name, ":", stripeProduct.id);
    }
})();