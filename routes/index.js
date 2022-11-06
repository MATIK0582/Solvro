import {Router} from 'express'

import changeItemQuantity from '../src/components/basket/changeItemQuantity.js'
import copyBasket from '../src/components/basket/copyBasket.js'
import createBasket from '../src/components/basket/createBasket.js'
import displayBasketInfo from '../src/components/basket/displayBasketInfo.js'
import doesObjectExists from '../src/components/basket/validation/doesObjectExists.js'
import getBasketLink from '../src/components/basket/getBasketLink.js'
import removeItem from '../src/components/basket/removeItem.js'

import getDelivererInfo from '../src/components/database/getDeliveryInfo.js'
import getDiscountInfo from '../src/components/database/getDiscountInfo.js'

import addProduct from '../src/components/basket/adds/addProduct.js'

const router = Router()

router.get('/test', async (req, res) => {

    req.session.basket = {
        products: [
            { id: 1, quantity: 1 },
            { id: 2, quantity: 2 },
            { id: 3, quantity: 3 },
            { id: 4, quantity: 4 }
        ],
        discountCode: {
            name: ''
        },
        delivery: {
            id: ''
        }
    }

    res.send(req.session.basket)
})

// 1. Dodawanie przedmiotu do koszyka
router.post('/basket', async (req, res) => {

    const {productId, productQuantity} = req.body
    req.session.basket = await createBasket(req.session.basket)
    req.session.basket.products = await addProduct(req.session.basket.products, productId, productQuantity)

    res.send(req.session.basket)
})

// 2. Usuwanie przedmiotu z koszyka
router.delete('/basket', async (req, res) => {

    const {productId} = req.body
    if(!doesObjectExists(req.session.basket)){
        req.session.basket = createBasket(req.session.basket)
    }

    req.session.basket.products = removeItem(req.session.basket.products, productId)

    res.send(req.session.basket)
})

// 3. Zmiana ilości przedmiotu
router.put('/basket', async (req, res) => {

    const {productId, productQuantity} = req.body
    if(!doesObjectExists(req.session.basket)){
        req.session.basket = createBasket(req.session.basket)
    }

    req.session.basket.products = changeItemQuantity(req.session.basket.products, productId, productQuantity)

    res.send(req.session.basket)
})

// 4. Dodawanie kodu rabatowego
router.post('/discount', async (req, res) => {

    const {discountCode} = req.body
    const discountInfo = await getDiscountInfo(discountCode)
    req.session.basket.discountCode.name = discountInfo.name

    res.send(req.session.basket)
})

router.delete('/discount', async (req, res) => {

    req.session.basket.discountCode = {
        name: '',
    }

    res.send(req.session.basket)
})

// 5. Zmiana typu dostawy 
router.post('/delivery', async (req, res) => {

    const {delivererId} = req.body
    const deliveryInfo = await getDelivererInfo( delivererId)
    req.session.basket.delivery.id = deliveryInfo.id

    res.send(req.session.basket)
})

router.delete('/delivery', async (req, res) => {

    req.session.basket.delivery = {
        id: ''
    }

    res.send(req.session.basket)
})

// 6. Wyświetlanie informacji o koszyku
router.get('/basket', async (req, res) => {
    res.send(await displayBasketInfo(req.session.basket))
})

// 7. Dzielenie się koszykiem
router.get('/share', (req, res) => {

    res.send('/share?link=' + getBasketLink(req.session.basket))
})

router.post('/share', async (req, res) => {

    const {link} = req.query
    req.session.basket = await copyBasket(link)

    res.send(req.session.basket)
})


export default router