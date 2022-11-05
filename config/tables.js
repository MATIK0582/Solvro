import Sessions from '../models/Sessions.js';
import Deliverers from '../models/Deliverers.js';
import DiscountCodes from '../models/DiscountCodes.js';
import Products from '../models/Products.js';

import insertDummyProdutcs from '../src/database/insertDummyProducts.js'
import insertDummyDiscountCodes from '../src/database/insertDummyDiscountCodes.js'
import insertDummyDeliverers from '../src/database/insertDummyDeliverers.js';

const createTables = async () => {

    await Sessions.sync()
    await Deliverers.sync()
    await DiscountCodes.sync()
    await Products.sync()

    insertDummyDeliverers()
    insertDummyDiscountCodes()
    insertDummyProdutcs()
}

export default createTables