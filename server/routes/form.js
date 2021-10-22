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
    const {id, name, picture, type, bio, favGenre, favArtist, artistBio, artistName, myGenre, city } = req.user;
    res.status(201).send({id, name, picture, type, bio, favGenre, favArtist, artistBio, artistName, myGenre, city });

  } catch (err) {
    console.log('get err', err);
  }
});


form.put('/createListener', (req, res) => {
  const { bio, favGenre, favArtist, city } = req.body;
  const id = 1;
  //const {id} = req.user;
  User.findByPk(id)
    .then(user => {
      user.update({
        bio: bio,
        favGenre: favGenre,
        favArtist: favArtist,
        city: city
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

form.put('/createArtist', (req, res) => {
  const { artistBio, myGenre, artistName, city } = req.body;
  const id = 2;
  //const {id} = req.user;
  User.findByPk(id)
    .then(user => {
      user.update({
        artistBio: artistBio,
        myGenre: myGenre,
        artistName: artistName,
        city: city
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