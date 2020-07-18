const portfolio = {};

// TODO: Refactor it. Move to portfolio.selectors
// portfolio.scrollIndicator = $('.scroll-indicator');
portfolio.scrollIndicator = $('.scroll-type1');
portfolio.scrollHint = $('.scroll__hint--left');
portfolio.offCanvas = $('.offcanvas__wrap');
portfolio.inputEmail = $('.input__email');
portfolio.btnContact = $('.btn__contact');
portfolio.inputName = $('.input__name');
portfolio.btnCircle = $('.btn__circle');
portfolio.buttonMenu = $('.btn__menu');
portfolio.btnAbout = $('.btn__about');
portfolio.navList = $('.nav__list');
portfolio.btnSend = $('.btn__send');
portfolio.header = $('.header');
portfolio.footer = $('.footer');
portfolio.active = $('#about');
portfolio.form = $('.form');
portfolio.html = $('html');


/**
 * Store event listeners
 */
portfolio.addClickEventListeners = function () {
    this.buttonMenu.on('click', (e) => {
        e.preventDefault();
        this.navList.toggleClass('opacity');
    });

    this.btnCircle.on('click', () => {
        this.closeContactFormHandler();
    });

    this.btnContact.on('click', () => {
        if ($(window).scrollTop() < 50) {
            this.openContactFormHandler();
        } else {
            this.html.animate({ scrollTop: 0 }, "slow", () => {
                this.openContactFormHandler();
            });
        }
    });
}

/**
 * Adds all necessary classes when modal closes
 */
portfolio.openContactFormHandler = function () {
    this.footer.addClass('offcanvas__visible');
    this.offCanvas.addClass('offcanvas__wrap--right');
    this.buttonMenu.addClass('hide');
    this.header.addClass('flex--start');
    this.scrollIndicator.addClass('scroll-type1--left');
}

/**
 * Removes all necessary classes when closing contact form
 */
portfolio.closeContactFormHandler = function () {
    this.offCanvas.removeClass('offcanvas__wrap--right');
    this.footer.removeClass('offcanvas__visible');
    this.buttonMenu.removeClass('hide');
    this.header.removeClass('flex--start');
    this.scrollIndicator.removeClass('scroll-type1--left');

    // Hide successful message
    $('.form__success').hide();
}


/**
 * Handles page navigation
 */
portfolio.handleButtonAbout = function () {
    this.btnAbout.on('click', () => {
        this.scrollHint.text(this.active.data('letter'));
        if (this.active.length > 0) {
            this.html.animate({
                scrollTop: this.active.offset().top,
            },
                'slow',
                () => {
                    this.active = this.active.next();
                })
        } else {
            this.html.animate({
                scrollTop: 0,
            }, "fast", () => {
                this.active = $('#about');
                this.scrollHint.text('About');
            })
        }
    })
}

portfolio.closeOnScroll = function () {
    $(window).on('scroll', () => {
        const scroll = $(window).scrollTop();
        const footerHasClass = this.footer.hasClass('offcanvas__visible');

        if (scroll >= 100 && footerHasClass) {
            this.closeContactFormHandler();
        }
    })
}

portfolio.submitForm = function () {
    this.form.on('submit', (e) => {
        e.preventDefault();

        const form = this.form;
        $.post(form.attr("action"), form.serialize()).then(function () {
            form.trigger("reset");
            $('.form__success').fadeIn(500);
        });
    })
}

portfolio.particles = function() {
    particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 2000
            }
          },
          color: {
            value: ["#2b3c51", "#00A496", "#FF2000", "#FFCF00"]
          },
          shape: {
            type: ["circle"],
            stroke: {
              width: 0,
              color: "#fff"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 10,
              size_min: 10,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#808080",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });      
}


portfolio.init = function () {
    this.addClickEventListeners();
    this.handleButtonAbout();
    this.closeOnScroll();
    this.submitForm();
    this.particles();
  }
  
  
  $(function () {
    portfolio.init();
    AOS.init();
});