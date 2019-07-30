// This file is used to register all your cloud functions in GCP.
// DO NOT EDIT/DELETE THIS, UNLESS YOU KNOW WHAT YOU ARE DOING.

exports.hiru307gcpsmokefunction = require("./hiru307gcpsmoke/function.js").handler;
exports.hiru307gcpsmokedependancy = require("./hiru307gcpsmoke/dependancy.js").handler;