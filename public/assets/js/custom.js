/* counter js*/
var counted = 0;
$(window).scroll(function () {
    var oTop = $("#counters").offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-count");
            $({
                countNum: $this.text(),
            }).animate(
                {
                    countNum: countTo,
                },
                {
                    duration: 2000,
                    easing: "swing",
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    },
                }
            );
        });
        counted = 1;
    }
});

/* blog slider js*/
$(document).ready(function () {
    $(".blog-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><img src='assets/img/left.png'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><img src='assets/img/right.png'></button>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: "40px",
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    centerPadding: "40px",
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });
});

/* partners slider js*/
$(document).ready(function () {
    $(".partner-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
                },
            },
        ],
    });
});

/* step slider js*/
$(document).ready(function () {
    $(".step-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
	
	$(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });
	
	$(document).on('click', '.countcoins', function(){
		var input = $('input[name=coininput]').val();
		var input = parseInt(input) * 1;
		$('span.dynamicoins').html(input);
	});
	
});

/* animation js*/
var Animation = function ({ offset } = { offset: 10 }) {
    var _elements;

    // Define a dobra superior, inferior e laterais da tela
    var windowTop = (offset * window.innerHeight) / 100;
    var windowBottom = window.innerHeight - windowTop;
    var windowLeft = 0;
    var windowRight = window.innerWidth;

    function start(element) {
        // Seta os atributos customizados
        element.style.animationDelay = element.dataset.animationDelay;
        element.style.animationDuration = element.dataset.animationDuration;
        // Inicia a animacao setando a classe da animacao
        element.classList.add(element.dataset.animation);
        // Seta o elemento como animado
        element.dataset.animated = "true";
    }

    function isElementOnScreen(element) {
        // Obtem o boundingbox do elemento
        var elementRect = element.getBoundingClientRect();
        var elementTop = elementRect.top + parseInt(element.dataset.animationOffset) || elementRect.top;
        var elementBottom = elementRect.bottom - parseInt(element.dataset.animationOffset) || elementRect.bottom;
        var elementLeft = elementRect.left;
        var elementRight = elementRect.right;

        // Verifica se o elemento esta na tela
        return elementTop <= windowBottom && elementBottom >= windowTop && elementLeft <= windowRight && elementRight >= windowLeft;
    }

    // Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
    function checkElementsOnScreen(els = _elements) {
        for (var i = 0, len = els.length; i < len; i++) {
            // Passa para o proximo laço se o elemento ja estiver animado
            if (els[i].dataset.animated) continue;

            isElementOnScreen(els[i]) && start(els[i]);
        }
    }

    // Atualiza a lista de elementos a serem animados
    function update() {
        _elements = document.querySelectorAll("[data-animation]:not([data-animated])");
        checkElementsOnScreen(_elements);
    }

    // Inicia os eventos
    window.addEventListener("load", update, false);
    window.addEventListener("scroll", () => checkElementsOnScreen(_elements), { passive: true });
    window.addEventListener("resize", () => checkElementsOnScreen(_elements), false);

    // Retorna funcoes publicas
    return {
        start,
        isElementOnScreen,
        update,
    };
};

// Initialize
var options = {
    offset: 20, //percentage of window
};
var animation = new Animation(options);

