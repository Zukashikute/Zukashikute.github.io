const pics = document.querySelectorAll(".home-Img");

function preloadPicture(picture) {
    const imageSource = picture.querySelectorAll('[data-src]');
    const imageSourceSet = picture.querySelectorAll('[data-srcset]')

    imageSource.forEach(img => {
        preloadImage(img);
    })

    imageSourceSet.forEach(source => {
        preloadSourceImg(source);
    })
}

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
    img.removeAttribute("data-src");
}

function preloadSourceImg(source) {
    const srcset = source.getAttribute("data-srcset");
    if (!srcset) {
        return;
    }
    source.srcset = srcset;
    source.removeAttribute("data-srcset");
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 750px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadPicture(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

pics.forEach(image => {
    imgObserver.observe(image);
});