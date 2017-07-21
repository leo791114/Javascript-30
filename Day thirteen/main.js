    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            // console.log(context);
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    const sliderImages = document.querySelectorAll('.slide-in');

    function checkSlide() {
        sliderImages.forEach(sliderImage => {
            // half way through the image
            const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
            // bottom of the image
            const sliderBottom = sliderImage.offsetTop + sliderImage.height;
            const isHalfShown = slideInAt > sliderImage.offsetTop;
            const isNotScrollPast = window.scrollY < sliderBottom;

            if (isHalfShown && isNotScrollPast) {
                sliderImage.classList.add('active');
                console.log(123);
            } else {
                sliderImage.classList.remove('active');
            }
        });

    }

    window.addEventListener('scroll', debounce(checkSlide));