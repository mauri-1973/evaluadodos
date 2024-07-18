;
(d => {
    d.addEventListener('DOMContentLoaded', e => {
        // Para actualizacion de año automática en la leyenda de Copyright
        const copy = d.querySelector('.Footer small')

        copy.innerHTML = `&copy; ${new Date().getFullYear()} - Oscar Zambrano`

        // Para que se cierre el menú al pulsar un enlace en modo mobile
        $('.navbar-nav>li>a').on('click', () => {
            $('.navbar-collapse').collapse('hide')
        })

        // Para inicializar plugin de smooth scroll (https://github.com/cferdinandi/smooth-scroll)
        const scroll = new SmoothScroll('a[href*="#"]', {
            offset: 70,
            speed: 1200,
            easing: 'easeInOutQuint',
            selectorHeader: '.navbar'
        });
    })

})(document);