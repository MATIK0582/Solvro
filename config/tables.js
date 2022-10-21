import sessions from '../models/sessions.js';

const createTables = async () => {
    await sessions.sync()
}

export default createTables