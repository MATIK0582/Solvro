import doesObjectExists from './validation/doesObjectExists.js'

const removeItem = (array, itemId) => {

    if(doesObjectExists(array)){

        const items = array.filter(item => {
            return item.id !== Number(itemId)
        })

        return items
    }

    return array
}

export default removeItem