const {Router} = require('express');
const {User} = require('../../db/index.js');
const form = Router();

form.put('/:type', async (req, res) => {
  try {
    const {id} = req.user;
    const {type} = req.params;
    const currentUser = await User.findByPk(id);
    await currentUser.update({type: type});
    //console.log('updating type,', type)
    

  } catch (err) {
    console.log('put err', err);
  }
});

form.get('/user', async (req, res) => {
  try {
    const {id, name, picture, type} = req.user;
    res.status(201).send({id, name, picture, type});

  } catch (err) {
    console.log('get err', err);
  }
});

module.exports = {form};