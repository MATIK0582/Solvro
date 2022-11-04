import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

import DiscountCodes from '../../models/data/DiscountCodes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const insertDummyDiscountCodes = async () => {
    const rawData = fs.readFileSync(path.join(__dirname, '../../dummyData/discountCodes.json'))
    const data = JSON.parse(rawData)
    
    if(Object.keys(await DiscountCodes.findAll()).length === 0){
        data.discountCodes.forEach(async (element) => {
            const {id, name, value, type} = element
            await DiscountCodes.create({
                id: id,
                name: name,
                value: Number(value),
                type: type
            })
        })
    }
}

export default insertDummyDiscountCodes