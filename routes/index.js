import {Router} from "express"

const router = Router()

router.get('/test', async (req, res) => {

    if(req.session.viewCount){
        req.session.viewCount++
    }
    else{
        req.session.viewCount = 1
    }
    
    res.send(`Hello World v2 ${req.session.viewCount}`)
    // res.send('Hello World v2')
})

router.get('/test_dwa', async (req, res) => {
    res.send('Hello World v4')
})

export default router