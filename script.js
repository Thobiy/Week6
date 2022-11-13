$(function() {
    new Section({
        images: '.one img',
        btnPrev: '.one .buttons .prev',
        btnNext: '.one .buttons .next',
        auto: false
    });
});


function Section(obj) {
	this.images = $(obj.images);
	this.auto = obj.auto;
	this.btnPrev = obj.btnPrev;
	this.btnNext = obj.btnNext;
     this.rate = obj.rate || 1000;

	var i = 0;
     var section = this;

    // The "Previous" button: to remove the class .shown, to show the previous image and to add the .shown class
	this.prev = function () {
		section.images.eq(i).removeClass('shown');
		i--;

		if (i < 0) {
			i = section.images.length - 1;
		}

		section.images.eq(i).addClass('shown');
	}

    // The "Next" button: to remove the class .shown, to show the next image and to add the .shown class
	this.next = function () {
		section.images.eq(i).removeClass('shown');
		i++;

		if (i >= section.images.length) {
			i = 0;
		}

		section.images.eq(i).addClass('shown');
	}

    // To add next and prev functions when clicking on the corresponding buttons
    $(section.btnPrev).on('click', function(){ section.prev();});
    $(section.btnNext).on('click', function(){ section.next();});

};