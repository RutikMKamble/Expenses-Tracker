const userModel = require("./../modules/userModules");

exports.createUser = async (req, res) => {
  try {
    const savaData = await new userModel(req.body).save();
    res.json(savaData);
  }
  catch (err) {
    res.json({ err });
  }
}

exports.getUsers = async (req, res) => {
  try {
    const getUser = await userModel.find();
    res.json(getUser);
  }
  catch (err) {
    res.json({ err })
  }
}


exports.deleteUser = (req, res) => {
  userModel.findOneAndDelete({ _id: req.params.userID }, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
}


// to get specific user
exports.getUser = async (req, res) => {
  try {
    const users = await userModel.find({ _id: req.params.userID });
    res.json(users);
  } catch (err) {
    res.json({ err });
  }
}

// to update user
exports.updateUser = (req, res) => {
  userModel.findByIdAndUpdate({ _id: req.params.userID }, req.body, { new: true }, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
}