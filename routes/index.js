import {Router} from "express"

const router = Router()

router.get('/test', async (req, res) => {
    res.send('Hello World v2')
})

router.get('/test_dwa', async (req, res) => {
    res.send('Hello World v3')
})

export default router