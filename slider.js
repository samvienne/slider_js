'use strict';

    $(document).ready(function () {
        $('#next_button').hover(function () {
            $(this).addClass('fas fa-arrow-alt-circle-right');
        }, function () {
            $(this).removeClass('fas fa-arrow-alt-circle-right').addClass('far fa-arrow-alt-circle-right');
        });

        $('#prev_button').hover(function () {
            $(this).addClass('fas fa-arrow-alt-circle-left');
        }, function () {
            $(this).removeClass('fas fa-arrow-alt-circle-left').addClass('far fa-arrow-alt-circle-left');
        });

        var s = new slider("#container");
    });

    var slider = function(id) {
    	var self= this;
    	this.div = $(id);
    	this.slider = this.div.find(".slider");
    	this.largeurCache = this.div.width();
    	this.largeur = 3800;

    	this.prev = this.div.find("#prev_button");
    	this.next = this.div.find("#next_button");
    	this.saut = this.largeurCache/2;
    	this.nbSauts = Math.ceil(this.largeur/this.saut);
    	this.courant=0;    	

    	this.next.click(function(){
    		if(self.courant<=self.nbSauts){
    			self.courant++;
    			self.slider.animate({
    				left:-self.courant*self.saut
    			},1000);
    		}
    		
    	});

    	this.prev.click(function(){
    		if(self.courant>0){
    			self.courant--;
    			self.slider.animate({
    				left:-self.courant*self.saut
    			},1000);
    		}
    		
    	});
    }
