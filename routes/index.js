import {Router} from "express"

import changeItemQuantity from "../src/components/basket/changeItemQuantity.js"
import createBasket from "../src/components/basket/createBasket.js"
import removeItem from "../src/components/basket/removeItem.js"
import displayBasketInfo from "../src/components/basket/displayBasketInfo.js"

import copyBasket from "../src/components/database/copyBasket.js"
import getBasketLink from "../src/components/database/getBasketLink.js"
import getDiscountInfo from "../src/components/database/getDiscountInfo.js"
import getDelivererInfo from "../src/components/database/getDeliveryInfo.js"
import getProductInfo from "../src/components/database/getProductInfo.js"

const router = Router()

router.get('/test', async (req, res) => {

    req.session.basket = {
        products: [
            { id: 1, name: 'a', price: 1, quantity: 1 },
            { id: 2, name: 'b', price: 2, quantity: 2 },
            { id: 3, name: 'c', price: 3, quantity: 3 },
            { id: 4, name: 'd', price: 4, quantity: 4 }
        ],
        discountCode: {
            id: '',
            name: '',
            value: '',
            type: ''
        },
        delivery: {
            id: '',
            name: '',
            price: ''
        }
    }

    res.send(req.session.basket)
})

// 1. Dodawanie przedmiotu do koszyka
// @FIXME: dodanie tego samego produktu nie sumuje obiektów
router.post('/basket', async (req, res) => {

    const {productId, productQuantity} = req.body
    req.session.basket = await createBasket(req.session.basket)
    req.session.basket.products = [...req.session.basket.products, {...await getProductInfo(productId), "quantity": Number(productQuantity)}]

    res.send(req.session.basket)
})

// 2. Usuwanie przedmiotu z koszyka
router.delete('/basket', async (req, res) => {

    const {productId} = req.body
    req.session.basket.products = removeItem(req.session.basket.products, productId)

    res.send(req.session.basket)
})

// 3. Zmiana ilości przedmiotu
router.put('/basket', async (req, res) => {

    const {productId, productQuantity} = req.body
    req.session.basket.products = changeItemQuantity(req.session.basket.products, productId, productQuantity)

    res.send(req.session.basket)
})

// 4. Dodawanie kodu rabatowego
router.post('/discount', async (req, res) => {

    const {discountCode} = req.body
    req.session.basket = await getDiscountInfo(req.session.basket, discountCode)

    res.send(req.session.basket)
})

router.delete('/discount', async (req, res) => {

    req.session.basket.discountCode = {
        id: '',
        name: '',
        value: '',
        type: ''
    }

    res.send(req.session.basket)
})

// 5. Zmiana typu dostawy 
router.post('/delivery', async (req, res) => {

    const {delivererId} = req.body
    req.session.basket = await getDelivererInfo(req.session.basket, delivererId)

    res.send(req.session.basket)
})

router.delete('/delivery', async (req, res) => {

    req.session.basket.delivery = {
        id: '',
        name: '',
        price: ''
    }

    res.send(req.session.basket)
})

// 6. Wyświetlanie informacji o koszyku
router.get('/basket', async (req, res) => {

    res.send(displayBasketInfo(req.session.basket))
})

// 7. Dzielenie się koszykiem
router.get('/share', async (req, res) => {

    console.log(req.session.basket);

    res.send('?link=' + await getBasketLink(req.session.basket))
})

router.post('/share', async (req, res) => {

    const {link} = req.query
    req.session.basket = await copyBasket(link)

    res.send(req.session.basket)
})


export default router