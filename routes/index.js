import {Router} from "express"

const router = Router()

router.get('/test', async (req, res) => {
    res.send('Hello World v2')
})

router.get('/test_dwa', async (req, res) => {
    res.send('Hello World v4')
})

export default router