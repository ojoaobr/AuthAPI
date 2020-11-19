const UsuarioModel = require ('../database')
const jwt = require('jsonwebtoken');
const secret = 'keyword-secret'

module.exports = {

  me = (req, res) =>{
    const auth = req.header('Authorization')
    if(auth && auth.includes("Bearer ")){
      try{
        const token = auth.split('Bearer ')[1]
      const data = jwt.verify(token, secret)
      res.send(data)
    }catch(error){
      res.sendStatus(403)
    }
  }else{
    res.sendStatus(401)
  }
},

  login = (req, res) =>{
    const {email, senha} = req.body
    UsuarioModel.findOne({ where: {email, senha} })
    .then(usuario => {
      res.send(jwt.sign(usuario.toJSON(), secret))
    })
  },

  criarUsuario = (req, res) =>{
    const usuario = req.body
    UsuarioModel.create(usuario)
    .then(usuarioCriado => {
      res.status(201).send(jwt.sign(usuarioCriado.toJSON(), secret))
    })
  }

}
