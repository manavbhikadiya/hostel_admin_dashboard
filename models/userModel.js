const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  favHostels: [
    {
      boys: {
        type: Boolean,
      },
      girls: {
        type: Boolean,
      },
      hostel_name: {
        type: String,
      },
      manager_name: {
        type: String,
      },
      helpline_no: {
        type: Number,
      },
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
      latitudeDelta: {
        type: Number,
      },
      longitudeDelta: {
        type: Number,
      },
      kms: {
        type: Number,
      },
      rooms_available: {
        type: Number,
      },
      room_price: {
        type: Number,
      },
      location: {
        type: String,
      },
      description: {
        type: String,
      },
      hostel_image: {
        type: String,
      },
    },
  ],
  profile: {
    type: String,
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

userSchema.methods.addFavouriteHostel = async function (favHostels) {
  try {
    this.favHostels = this.favHostels.concat(favHostels);
    await this.save();
    return this.favHostels;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
