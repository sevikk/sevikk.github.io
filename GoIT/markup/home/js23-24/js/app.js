requirejs.config({
	paths: {
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
		'tmpl':'tmpl',
		'model': 'model',
		'view':'view',
		'controller':'controller'
	},
	shim: {
	  'tmpl':{},
	  'jquery':{
	    exports: 'jQuery'
	  },
	  'model':{},
	  'view':{},
	  'controller':{
	    deps:[],
	    exports: 'controller'
	  }
	}
});

require(
	[ 'model','view', 'controller', 'jquery', 'tmpl'],
	function ($, tmpl, model, view, controller) {
		$(function(){
	    var firstToDoList = ['learn javascript', 'learn html', 'drink coffee'];
	    var model = new Model(firstToDoList);
	    var view = new View(model);
	    var controller = new Controller(model, view);
		});
	}
);