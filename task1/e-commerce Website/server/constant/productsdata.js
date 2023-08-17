const products = [
    { 
        id: 'product1',
        url: 'https://m.media-amazon.com/images/I/31na34LxwmL._SX300_SY300_QL70_FMwebp_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/31na34LxwmL._SX300_SY300_QL70_FMwebp_.jpg',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        url: 'https://m.media-amazon.com/images/I/41uLA2dSeIL._SX300_SY300_QL70_FMwebp_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/41uLA2dSeIL._SX300_SY300_QL70_FMwebp_.jpg',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
        id: 'product3',
        url: 'https://m.media-amazon.com/images/I/61duikCYaLL._SY300_SX300_QL70_FMwebp_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/61duikCYaLL._SY300_SX300_QL70_FMwebp_.jpg', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url: 'https://m.media-amazon.com/images/I/61M29HYRMUL._SX679_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/61M29HYRMUL._SX679_.jpg',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: ' 2000 Watts hair dryer with Powerful AC Motor creates ideal airflow & temperature for Professional salon-like results 2 Speed and 3 Temperature settings for convenient styling, Includes Cool & Hot Air Includes Cool Shot Button that provides a burst of cold air to help set the desired hairstyle Comes with diffuser which helps to evenly and gently maximize volume whilst keeping it frizz-free Concentrator Nozzle focuses air flow for precise styling & touch-ups Includes: Main Unit, Concentrator Nozzle, diffuser 2 Years warranty',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more' 
    },
    { 
        id: 'product6',
        url: 'https://m.media-amazon.com/images/I/41xpKAOOIjL._SX425_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/41xpKAOOIjL._SX425_.jpg', 
        title: {
            shortTitle: 'BLUETOOTH HEADSET',
            longTitle: 'BH-2000 WIRELESS BLUETOOTH HEADSET BUILT IN MIC'
        }, 
        price: {
            mrp: 1500,
            cost: 1300,
            discount: '-13%'
        },
        description: ' Wireless, light weight and comfortable headphone to enjoy music and make phone calls For music and phone calls, bluetooth range 10M, Rechargeable Build in Microphone, foldable design, comfortable earpads and adjustable headband Build in Microphone, foldable design, comfortable earpads and adjustable headband 5 hours playtime',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more' 
    }
]

module.exports = products;
