export const data = {}

data.basket = []

data.news = [
    {
        id:1,
        title: "Это заголовок новости №1",
        date: 11.01,
        text: "№1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla hic quaerat saepe necessitatibus. Fugit, atque consequatur? Ullam ipsam at illum sunt! Saepe odio voluptatibus, rerum nostrum doloremque velit minima."
    },
    {
        id:2,
        title: "Это заголовок новости №2",
        date: 12.01,
        text: "№2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla hic quaerat saepe necessitatibus. Fugit, atque consequatur? Ullam ipsam at illum sunt! Saepe odio voluptatibus, rerum nostrum doloremque velit minima."
    },
    {
        id:3,
        title: "Это заголовок новости №3",
        date: 13.01,
        text: "№3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla hic quaerat saepe necessitatibus. Fugit, atque consequatur? Ullam ipsam at illum sunt! Saepe odio voluptatibus, rerum nostrum doloremque velit minima."
    },
    {
        id:4,
        title: "Это заголовок новости №4",
        date: 14.01,
        text: "№4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla hic quaerat saepe necessitatibus. Fugit, atque consequatur? Ullam ipsam at illum sunt! Saepe odio voluptatibus, rerum nostrum doloremque velit minima."
    },
    {
        id:5,
        title: "Это заголовок новости №5",
        date: 15.01,
        text: "№5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla hic quaerat saepe necessitatibus. Fugit, atque consequatur? Ullam ipsam at illum sunt! Saepe odio voluptatibus, rerum nostrum doloremque velit minima."
    },
    {
        id:6,
        title: "Это заголовок новости №6",
        date: 16.01,
        text: "№6. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla hic quaerat saepe necessitatibus. Fugit, atque consequatur? Ullam ipsam at illum sunt! Saepe odio voluptatibus, rerum nostrum doloremque velit minima."
    },
    {
        id:7,
        title: "Это заголовок новости №7",
        date: 17.01,
        text: "№7. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla hic quaerat saepe necessitatibus. Fugit, atque consequatur? Ullam ipsam at illum sunt! Saepe odio voluptatibus, rerum nostrum doloremque velit minima."
    },
    {
        id:8,
        title: "Это заголовок новости №8",
        date: 18.01,
        text: "№8. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla hic quaerat saepe necessitatibus. Fugit, atque consequatur? Ullam ipsam at illum sunt! Saepe odio voluptatibus, rerum nostrum doloremque velit minima."
    },
    {
        id:9,
        title: "Это заголовок новости №9",
        date: 19.01,
        text: "№9. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nulla hic quaerat saepe necessitatibus. Fugit, atque consequatur? Ullam ipsam at illum sunt! Saepe odio voluptatibus, rerum nostrum doloremque velit minima."
    }
]

data.itemGroup = [
    "Средства для ухода",
    "Бритвенные принадлежности",
    "Аксессуары",
    "Демонстрация без товаров"
]

data.producer = [
        'Baxter of California', 
        'Mr Natty',
        'Suavecito',
        'Malin+Goetz',
        'Murray’s',
        'American Crew'
]

data.items = [
    {
        id: 1,
        code: 101,
        price: 2900,
        title: "Набор для путешествий «Baxter of California» ",
        about: "Travel Kit – необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха: средство для умывания, увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор также может стать отличным подарком.",
        group: data.itemGroup[0],
        stock: 1,
        producer: data.producer[0]
    },
    {
        id: 2,
        code: 102,
        price: 750,
        title: "Увлажняющий кондиционер «Baxter of California» ",
        about: "Это описание",
        group: data.itemGroup[0],
        stock: 1,
        producer: data.producer[0]
    },
    {
        id: 3,
        code: 103,
        price: 290,
        title: "Гель для волос «SUAVECITO»» ",
        about: "Это описание",
        group: data.itemGroup[0],
        stock: 1,
        producer: data.producer[2]
    },
    {
        id: 4,
        code: 104,
        price: 500,
        title: "Глина для укладки волос «American crew» ",
        about: "Это описание",
        group: data.itemGroup[1],
        stock: 1,
        producer: data.producer[5]
    },
    {
        id: 5,
        code: 105,
        price: 300,
        title: "Гель для волос «AMERICAN CREW» ",
        about: "Это описание",
        group: data.itemGroup[2],
        stock: 1,
        producer: data.producer[5]
    },
    {
        id: 6,
        code: 106,
        price: 3900,
        title: "Набор для бритья «Baxter of California» ",
        about: "Это описание",
        group: data.itemGroup[0],
        stock: 1,
        producer: data.producer[0]
    },
    {
        id: 7,
        code: 106,
        price: 3900,
        title: "Набор для бритья «Baxter of California» ",
        about: "Это описание",
        group: data.itemGroup[0],
        stock: 1,
        producer: data.producer[0]
    },
    {
        id: 8,
        code: 106,
        price: 3900,
        title: "Набор для бритья «Baxter of California» ",
        about: "Это описание",
        group: data.itemGroup[0],
        stock: 1,
        producer: data.producer[0]
    },
    {
        id: 9,
        code: 106,
        price: 3900,
        title: "Набор для бритья «Baxter of California» ",
        about: "Это описание",
        group: data.itemGroup[0],
        stock: 1,
        producer: data.producer[0]
    },
    {
        id: 10,
        code: 106,
        price: 3900,
        title: "Набор для бритья «Baxter of California» ",
        about: "Это описание",
        group: data.itemGroup[0],
        stock: 1,
        producer: data.producer[0]
    },
    {
        id: 11,
        code: 106,
        price: 3900,
        title: "Набор для бритья «Baxter of California» ",
        about: "Это описание",
        group: data.itemGroup[0],
        stock: 1,
        producer: data.producer[0]
    },
    {
        id: 12,
        code: 106,
        price: 3900,
        title: "Набор для бритья «Baxter of California» ",
        about: "Это описание",
        group: data.itemGroup[0],
        stock: 1,
        producer: data.producer[0]
    },
    
]

data.numbers = [
    7, 
    8, 
    9
]

data.basket = []