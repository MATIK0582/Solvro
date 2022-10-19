import {Router} from "express"

const router = Router()

router.get('/test', async (req, res) => {
    res.send('Hello World v2')
})

export default router