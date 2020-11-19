// const UsuarioModel = require ('./database')
// const jwt = require ('jsonwebtoken')
// const express = require ('express')

// const PORTA = 3000;

// const app = express()
// const router = express.Router()

// const secret = 'keyword-secret'

// const me = (req, res) =>{
//   const auth = req.header('Authorization')
//   if(auth && auth.includes("Bearer ")){
//     try{
//       const token = auth.split('Bearer ')[1]
//       const data = jwt.verify(token, secret)
//       res.send(data)
//     }catch(error){
//       res.sendStatus(403)
//     }
//   }else{
//     res.sendStatus(401)
//   }
// }

// const login = (req, res) =>{
//   const {email, senha} = req.body
//   UsuarioModel.findOne({ where: {email, senha} })
//     .then(usuario => {
//       res.send(jwt.sign(usuario.toJSON(), secret))
//     })
// }

// const criarUsuario = (req, res) =>{
//   const usuario = req.body
//   UsuarioModel.create(usuario)
//     .then(usuarioCriado => {
//       res.status(201).send(jwt.sign(usuarioCriado.toJSON(), secret))
//     })
// }

// const routerAuth = router.get('/me', me)
//                           .post('/login', login)
//                           .post('/criar-usuario', criarUsuario)

// app.use(express.json())
// app.use('/auth', routerAuth)
// app.listen(3000, () => {
//   console.log(`Servidor ouvindo na porta ${PORTA}`)
// })
