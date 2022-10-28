import Sessions from '../models/Sessions.js';
import Deliverers from '../models/Deliverers.js';
import DiscountCodes from '../models/DiscountCodes.js';
import Products from '../models/Products.js';

import insertDummyProdutcs from '../src/database/insertDummyProducts.js'


const createTables = async () => {
    await Sessions.sync()
    await DiscountCodes.sync()
    await Products.sync()

    insertDummyProdutcs()
}

export default createTables