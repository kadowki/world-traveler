'use strict';

var Vacation = require('../models/vacation'),
	moment = require('moment');

exports.init = function(req, res){
  res.render('vacations/init');
};

exports.create = function(req, res){
  var v = new Vacation(req.body);
		Vacation.create(v, function(){
			res.redirect('/vacations');
		});
};

exports.index = function(req, res){
	Vacation.all(function(err, vacations){
		res.render('vacations/index', {vacations: vacations, moment:moment});
	});
};