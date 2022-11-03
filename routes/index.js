import {Router} from "express"

import changeItemQuantity from "../src/components/changeItemQuantity.js"
import createBasket from "../src/components/createBasket.js"
import getDiscountInfo from "../src/components/getDiscountInfo.js"
import getDelivererInfo from "../src/components/getDeliveryInfo.js"
import removeItem from "../src/components/removeItem.js"

const router = Router()

router.get('/test', async (req, res) => {

    let basket = req.session.basket
    basket = {
        products: [
            { productId: 1, productQuantity: 1 },
            { productId: 2, productQuantity: 2 },
            { productId: 3, productQuantity: 3 },
            { productId: 4, productQuantity: 4 }
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

    req.session.basket = basket
    res.send(req.session.basket)
})

// 1. Dodawanie przedmiotu do koszyka
router.post('/basket', async (req, res) => {

    const {productId, productQuantity} = req.body
    let basket = req.session.basket

    basket = await createBasket(basket)
    basket.products = [...basket.products, { "productId": Number(productId), "productQuantity": Number(productQuantity)}]

    req.session.basket = basket
    res.send(req.session.basket)
})

// 2. Usuwanie przedmiotu z koszyka
router.delete('/basket', async (req, res) => {

    const {productId} = req.body
    let basket = req.session.basket

    basket.products = removeItem(basket.products, productId)

    req.session.basket = basket
    res.send(req.session.basket)
})

// 3. Zmiana ilości przedmiotu
router.put('/basket', async (req, res) => {

    const {productId, productQuantity} = req.body
    let basket = req.session.basket

    basket.products = changeItemQuantity(basket.products, productId, productQuantity)

    req.session.basket = basket
    res.send(req.session.basket)
})

// 4. Dodawanie kodu rabatowego
router.post('/discount', async (req, res) => {

    const {discountCode} = req.body
    let basket = req.session.basket

    basket = await getDiscountInfo(basket, discountCode)

    req.session.basket = basket
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
    let basket = req.session.basket

    basket = await getDelivererInfo(basket, delivererId)

    req.session.basket = basket
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

export default router