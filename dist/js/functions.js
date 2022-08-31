// #region / LazyLoad
//   _                     _                     _
//  | |                   | |                   | |
//  | |     __ _ _____   _| |     ___   __ _  __| |
//  | |    / _` |_  / | | | |    / _ \ / _` |/ _` |
//  | |___| (_| |/ /| |_| | |___| (_) | (_| | (_| |
//  |______\__,_/___|\__, |______\___/ \__,_|\__,_|
//                    __/ |
//                   |___/
//
document.addEventListener('DOMContentLoaded', () => {
	function logElementEvent(eventName, element) {
		console.log(Date.now(), eventName, element.getAttribute('data-src'));
	}

	var callback_error = function (element) {
		logElementEvent('💀 ERROR', element);
		element.src = 'https://via.placeholder.com/440x560/?text=Error+Placeholder';
	};

	window.lazyLoadOptions = {
		threshold: 0,
		// Assign the callbacks defined above
		callback_error: callback_error,
	};
});
// #endregion

// Main navbar
document.addEventListener('DOMContentLoaded', () => {
	feather.replace();
});

// #region / Main navbar
//   __  __       _                           _
//  |  \/  |     (_)                         | |
//  | \  / | __ _ _ _ __    _ __   __ ___   _| |__   __ _ _ __
//  | |\/| |/ _` | | '_ \  | '_ \ / _` \ \ / / '_ \ / _` | '__|
//  | |  | | (_| | | | | | | | | | (_| |\ V /| |_) | (_| | |
//  |_|  |_|\__,_|_|_| |_| |_| |_|\__,_| \_/ |_.__/ \__,_|_|
//
//
$(function () {
	let siteMenuClone = function () {
		$('.js-clone-nav').each(function () {
			let $this = $(this);
			$this
				.clone()
				.attr('class', 'site-nav-wrap')
				.appendTo('.site-mobile-menu-body');
		});

		setTimeout(function () {
			let counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				let $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-bs-toggle': 'collapse',
					'data-bs-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					class: 'collapse',
					id: 'collapseItem' + counter,
				});

				counter++;
			});
		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			let $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();
		});

		$(window).resize(function () {
			let $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});

		$('body').on('click', '.js-menu-toggle', function (e) {
			let $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		});

		// click outside offcanvas
		$(document).mouseup(function (e) {
			let container = $('.site-mobile-menu');
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();
});
// #endregion

// Swiper
document.addEventListener('DOMContentLoaded', () => {
	var swiper = new Swiper('.hero-slider .swiper', {
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});
