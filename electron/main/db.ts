import Store from 'nedb'


const db = new Store({ filename: 'messages.db', autoload: true })

const initDbRecord = () => {
  const time = new Date()
  db.insert({ time: time.getTime(), content: `init at ${time.toLocaleString()}` })
}

initDbRecord()


export default db;