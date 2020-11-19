const express = require ('express')
const router = express.Router()
const app = express()

const PORTA = 3000;

const routers = require('./routes/usuario')

router.use(routers)

app.use(express.json())
app.use('/auth', router)
app.listen(3000, () => {
  console.log(`Servidor ouvindo na porta ${PORTA}`)
})
