import config from '../../config/database.js'

const connectToDatabase = async() => {
    try{
        await config.authenticate()
        console.log("Database connected succesfuly")
    }
    catch(err) {
        console.log(err)
    }
}

export default connectToDatabase