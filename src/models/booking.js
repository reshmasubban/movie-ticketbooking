const mongoose = require('mongoose');
var BookingSchema = new mongoose.Schema({
    theatername: {
      type: String,
      required: true
    },
    ticketsneeded:{
        type: String,
        required: true,
        unique:true
    },
    moviename:{
        type: String,
        required: true
    }

});

  module.exports = mongoose.model("Bookings", BookingSchema);