import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

import Products from '../../models/products.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const insertDummyProducts = async () => {
    const rawData = fs.readFileSync(path.join(__dirname, '../../dummyData/products.json'))
    const data = JSON.parse(rawData)
    
    if(Object.keys(await Products.findAll()).length === 0){
        data.products.forEach(async (element) => {
            const {id, name, price} = element
            await Products.create({
                id: id,
                name: name,
                price: Number(price)
            })
        })
    }
}

export default insertDummyProducts