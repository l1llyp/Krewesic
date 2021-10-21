const {Router} = require('express');
const {User} = require('../../db/index.js');
const form = Router();

form.put('/setType/:type', async (req, res) => {
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
    const {id, name, picture, type, bio, favGenre, favArtist } = req.user;
    res.status(201).send({id, name, picture, type, bio, favGenre, favArtist});

  } catch (err) {
    console.log('get err', err);
  }
});


form.put('/createListener', (req, res) => {
  const { bio, favGenre, favArtist } = req.body;
  //const id = 3;
  const {id} = req.user;
  console.log(id, 'NAAAAAAME');
  User.findByPk(id)
    .then(user => {
      user.update({
        bio: bio,
        favGenre: favGenre,
        favArtist: favArtist
      })
        .then(() => {
          console.log('hello');
          res.sendStatus(201);
        });
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = {form};
