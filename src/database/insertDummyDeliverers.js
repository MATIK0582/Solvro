import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

import Deliverers from '../../models/data/Deliverers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const insertDummyDeliverers = async () => {
    const rawData = fs.readFileSync(path.join(__dirname, '../../dummyData/deliverers.json'))
    const data = JSON.parse(rawData)
    
    if(Object.keys(await Deliverers.findAll()).length === 0){
        data.deliverers.forEach(async (element) => {
            const {id, name, price} = element
            await Deliverers.create({
                id: id,
                name: name,
                price: Number(price)
            })
        })
    }
}

export default insertDummyDeliverers