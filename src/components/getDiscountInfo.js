import DiscountCodes from "../../models/data/DiscountCodes.js";

const getDiscountInfo = async (array, discountCode) => {
    const discountInfo = await DiscountCodes.findOne({
        where: {
            name: discountCode
        }
    })

    if(discountInfo !== null){
        const {id, name, value, type} = discountInfo.dataValues
        array.discountCode = {id, name, value, type}
    }

    return array
}

export default getDiscountInfo