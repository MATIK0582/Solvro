import Sessions from '../models/data/Sessions.js';
import Deliverers from '../models/data/Deliverers.js';
import DiscountCodes from '../models/data/DiscountCodes.js';
import Products from '../models/data/Products.js';

import Baskets from '../models/users/Baskets.js';
import Deliveries from '../models/users/Deliveries.js';
import Discounts from '../models/users/Discounts.js';
import Shared from '../models/users/Shared.js';


import insertDummyProdutcs from '../src/database/insertDummyProducts.js'
import insertDummyDiscountCodes from '../src/database/insertDummyDiscountCodes.js'
import insertDummyDeliverers from '../src/database/insertDummyDeliverers.js';

const createTables = async () => {

    Sessions.hasOne(Deliveries, {
        foreignKey: 'userId',
        sourceKey: 'sid'
    })

    Sessions.hasOne(Discounts, {
        foreignKey: 'userId',
        sourceKey: 'sid'
    })

    Sessions.hasMany(Baskets, {
        foreignKey: 'userId',
        sourceKey: 'sid'
    })

    Sessions.hasMany(Shared, {
        foreignKey: 'userId',
        sourceKey: 'sid'
    })
    
    Deliverers.hasMany(Deliveries, {
        foreignKey: 'delivererId',
        sourceKey: 'id'
    })

    DiscountCodes.hasMany(Discounts, {
        foreignKey: 'discountId',
        sourceKey: 'id'
    })

    Products.hasMany(Baskets, {
        foreignKey: 'productId',
        sourceKey: 'id'
    })

    await Sessions.sync()
    await Deliverers.sync()
    await DiscountCodes.sync()
    await Products.sync()

    await Baskets.sync()
    await Deliveries.sync()
    await Discounts.sync()
    await Shared.sync()

    insertDummyDeliverers()
    insertDummyDiscountCodes()
    insertDummyProdutcs()
}

export default createTables