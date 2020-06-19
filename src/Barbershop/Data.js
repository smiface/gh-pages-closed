import React from 'react'
import Context from './Components/Context'

export const data = {}

data.basket = []

data.news = [
    {
        id:1,
        title: "Это заголовок новости №1",
        date: 11.01,
        text: "Это текст новости №1."
    },
    {
        id:2,
        title: "Это заголовок новости №2",
        date: 12.01,
        text: "Это текст новости №2. "
    },
    {
        id:3,
        title: "Это заголовок новости №3",
        date: 13.01,
        text: "Это текст новости №3. "
    },
    {
        id:4,
        title: "Это заголовок новости №4",
        date: 14.01,
        text: "Это текст новости №4. "
    },
    {
        id:5,
        title: "Это заголовок новости №5",
        date: 15.01,
        text: "Это текст новости №5. "
    },
    {
        id:6,
        title: "Это заголовок новости №6",
        date: 16.01,
        text: "Это текст новости №6. "
    },
    {
        id:7,
        title: "Это заголовок новости №7",
        date: 17.01,
        text: "Это текст новости №7. "
    },
    {
        id:8,
        title: "Это заголовок новости №8",
        date: 18.01,
        text: "Это текст новости №8. "
    },
    {
        id:9,
        title: "Это заголовок новости №9",
        date: 19.01,
        text: "Это текст новости №9. "
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
    
]

data.numbers = [
    7, 
    8, 
    9
]

data.basket = []