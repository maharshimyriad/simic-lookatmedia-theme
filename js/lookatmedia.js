const openModalBtn = document.querySelectorAll(".open-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");

openModalBtn.forEach((openModal) => {
    openModal.addEventListener("click", () => {
        modal.classList.remove("hide");
        modalContainer.classList.remove("hide");
    });
});

closeModal.addEventListener("click", () => {
    setTimeout(() => {
        modal.classList.add("hide");
    }, 800);
    modalContainer.classList.add("hide");
});

modal.addEventListener("click", () => {
    setTimeout(() => {
        modal.classList.add("hide");
    }, 800);
    modalContainer.classList.add("hide");
});

async function getUserInfo() {
    try {
        const response = await fetch('/lam/user/api/get_user_info');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

getUserInfo();


jQuery(document).ready(function ($) {



    $('.nav-link-images--video').attr('target', '_blank');

    if ($('#pageerror').length) {

        $('.contact-section').hide();
    }

    if ($('#success').length) {

        $('.contact-section').hide();
    }

    var rellax = new Rellax('.rellax');

    $('.toggle-dropdown').click(function () {
        var windowSize = $(window).width();
        if (windowSize <= 991) {
            if ($(this).hasClass('dd-open')) {
                $(this).removeClass('dd-open');
                $(this).siblings('.dropdown-menu').slideUp(200);
            } else {
                $(this).addClass('dd-open');
                $(this).siblings('.dropdown-menu').slideDown(200);
            }
        }
    });

    $(window).resize(function () {
        var windowSize = $(window).width();
        if (windowSize >= 992) {
            $('.toggle-dropdown').removeClass('dd-open');
            $('.dropdown-menu').removeAttr('style');
        }
    });

    $('.nav-link-search').click(function (e) {
        e.preventDefault();
        $('body > .overlay').fadeToggle();
        $('#block-lookatmedia-search').slideToggle();
        if ($(this).hasClass('search-active')) {
            $(this).removeClass('search-active');
            $(this).find('i').removeClass('fa-times').addClass('fa-search');
        } else {
            $(this).addClass('search-active');
            $(this).find('i').removeClass('fa-search').addClass('fa-times');
        }
    });

    var clone = $('.featured-news').find('.featured-news-row').clone();
    $('.featured-news').find('.featured-news-row').remove();
    $('.featured-news').append(clone);
    $('.featured-news').find('.featured-news-row:last-child').after($('.featured-news').find('.featured-news-row').clone());



    if (!$('#toolbar-administration').length)
        infiniteMarquee(2500);

    function infiniteMarquee(offset = 0) {
        var width = $('.featured-news').find('.featured-news-row:first-child').outerWidth();
        var speed = Math.round(width * 10) + offset;
        $('.featured-news').animate({ 'margin-left': - width }, speed, 'linear', function () {
            items = $(this).find('.featured-news-row');
            first = items.filter(':first');
            last = items.filter(':last');
            last.after(first.clone(true));
            first.remove();
            $(this).css({ 'margin-left': 0 });
            infiniteMarquee(2500);
        });
    }

    $('.show-home-search-form').click(function () {
        var windowWidth = $(window).width();
        if (windowWidth > 768) {
            $('.home-search-animation,.home-search-form').fadeOut();
            $('.home-search-form').delay(500).fadeIn();
        }
    });
    $('.hide-home-search-form').click(function () {
        $('.home-search-form,.home-search-animation').fadeOut();
        $('.home-search-animation').delay(500).fadeIn();
    });

    $('select').each(function () {
        var name = capitalize($(this).attr('name'));
        $(this).children('option[value="All"]').text(name + ' - All');
    });

    $('.nes-info,.video-download-btn-mobile').click(function () {
        var popup = $(this).data('popup');
        $(popup).fadeIn(500);
    });
    $('.close-image-popup').click(function () {
        var popup = $(this).data('popup');
        $(popup).fadeOut(500);
    });
    $(document).ready(function () {
        $(".attribution-popup-content").click(function () {
            $(".close-attribution-popup").click();



        });
    });


    $('.close-login-popup').click(function () {
        $('.login-popup').fadeOut(500);
    });
    $('.close-register-popup').click(function () {
        $('.register-popup').fadeOut(500);
    });
    $('.close-attribution-popup').click(function () {
        $('.register-popup').fadeOut(500);
        $('.login-popup').fadeOut(500);
        $('.attribution-popup').fadeOut(500);

    });

    $('.search-toggler').click(function () {
        $('.search-popup').fadeIn(500);
    });
    $('.search-animate > .circle').click(function () {
        var windowWidth = $(window).width();
        if (windowWidth <= 768) {
            $('.search-popup').fadeIn(500);
        }
    });
    $('.close-search-popup').click(function () {
        $('.search-popup').fadeOut(500);
    });

    $(document).scroll(function () {
        var $nav = $(".navbar-brand");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

});

function closeCusModal() {
    jQuery('.alert-cuswrapper').fadeTo(500, 0).slideUp(500, function () {
        $(this).hide();
    });
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

setTimeout(function () {
    if (jQuery('.nav-link-log-out').length) {
        jQuery('.attribution-popup').removeClass('d-none');
        jQuery('.attribution-popup-mobile').removeClass('d-none');
        jQuery('.lam-logged-in').removeClass('d-none');
        jQuery('#login-popup').remove();
    } else
        jQuery('.lam-logged-out').removeClass('d-none');





    jQuery('.return-register-popup').click(function () {
        jQuery('.login-popup').removeClass('d-none');
        jQuery('.register-popup').addClass('d-none');

    });

    jQuery('.open-registration-popup').click(function () {
        jQuery('.register-popup').fadeIn(500);
        jQuery('.login-popup').addClass('d-none');

    });

    if (jQuery('.path-news').length) {
        jQuery('#block-minihomesearchanimation').addClass('desktop-search');
    }

    if (jQuery('.page-taxonomy-term-16').length) {
        jQuery('#block-minihomesearchanimation').removeClass('d-none');
    }

}, 500);

jQuery('.node--type-dnsw .pager-show-more a').click(function () {
    setTimeout(function () {
        if (jQuery('.nav-link-log-out').length)
            jQuery('.attribution-popup').removeClass('d-none');
        else
            jQuery('.lam-logged-out').removeClass('d-none');
    }, 5000);
});


function download(asset_id) {
    jQuery.get('/lam/user/order', { asset_id: asset_id }, function (response) {
        if (response.status == 'ok' && response.url != '') {
            var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

            if (is_safari)
                window.open(response.url);
            else
                window.open(response.url);
        } else if (response.status == 'login') {
            location.href = '/lam/user/login';

        } else {
            alert(response.error_message);

        }
    });
}

jQuery('.js-password-field').on('blur', function () {
    jQuery('.customPassAlert').remove();
    if (this.value.length < 10) {
        jQuery('<div class="alert alert-danger customPassAlert">Password should be at least 10 characters long</div>').insertAfter('.js-password-field');

        setTimeout(function () {
            jQuery('.customPassAlert').remove();
        }, 4000);

        jQuery(this).focus();

        return;
    }
});

jQuery('.add-email,.form-email,input[name=email]').on('blur', function () {
    jQuery('.customPassAlert').remove();
    var email = jQuery(this);
    if (!is_company_email(email.val())) {
        jQuery('<div class="alert alert-danger customPassAlert">Please enter your company email</div>').insertAfter('.add-email,.form-email,input[name=email]');


        setTimeout(function () {
            jQuery('.customPassAlert').remove();
        }, 4000);

        jQuery(this).focus();

        return;

    }

});

function is_company_email(email) {

    var invalid = ['gmail', 'ymail', 'yahoo', 'hotmail', 'live', 'icloud'];

    var index = email.indexOf('@');

    var domain1 = email.substring(index, email.length - 1);

    var domain = domain1.toLowerCase();

    var is_comp = true;

    jQuery(invalid).each(function (index, value) {

        if (domain.indexOf(value) != -1) {

            is_comp = false;

            return false;

        }

    });

    if (is_comp)

        return true;

    else

        return false;

}

jQuery(document).ready(function ($) {

    jQuery(".lam-popup-login-button").on("click", function (e) {
        e.preventDefault();

        var form = jQuery(this).closest(".lam-popup-login");
        var email = form.find("input[name=email]").val();
        var password = form.find("input[name=password]").val();
        var url = form.find("input[name=form_id]").val();

        if (email.length === 0) {
            jQuery('<div class="alert  customPassAlert">Please enter email</div>').insertAfter('input[name=email]');

            setTimeout(function () {
                jQuery('.customPassAlert').remove();
            }, 2000);

            return false;
        }

        if (password.length === 0) {
            jQuery('<div class="alert  customPassAlert">Please enter password</div>').insertAfter('input[name=password]');

            setTimeout(function () {
                jQuery('.customPassAlert').remove();
            }, 2000);

            return false;
        }

        jQuery.ajax({
            type: "POST",
            url: '/lam/user/api/login',
            data: form.serialize(),
            dataType: "json"
        }).done(function (res) {
            if (res.status != "ok") {
                alert(res.error_message);
                return false;
            }
            console.log(res);
            location.href = res.url;
            return false;

        }).fail(function (res) {
            console.log(res);
        });
        return false;

    });

});

document.addEventListener("DOMContentLoaded", function () {

    function showLoginPopup() {
        var loginPopup = document.querySelector(".login-popup");
        if (loginPopup) {
            loginPopup.style.display = "block";
            // Focus on the first input field when the popup is shown
            var firstInput = loginPopup.querySelector("input:first-child");
            if (firstInput) {
                firstInput.focus();
            }
        }
    }

    function closeLoginPopup() {
        var loginPopup = document.querySelector(".login-popup");
        if (loginPopup) {
            loginPopup.style.display = "none";
        }
    }

    var navLinkLogin = document.querySelector(".nav-link-log-in");
    if (navLinkLogin) {
        navLinkLogin.addEventListener("click", function (event) {
            event.preventDefault();
            showLoginPopup();
        });
    }

    var loginForm = document.querySelector(".login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            closeLoginPopup();
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var videos = document.querySelectorAll('.vjs-tech');
    console.log(videos);

    videos.forEach(function (video) {
        var player = videojs(video.id);

        if (player.techName === 'Html5') {
            player.tech_.hls.GOAL_BUFFER_LENGTH = 60 * 30;
            player.tech_.hls.MAX_GOAL_BUFFER_LENGTH = 60 * 60;
        }

        video.addEventListener('loadedmetadata', function () {
            video.muted = true;
            video.autoplay = true;


        });

        if (video.readyState >= 1) {
            video.dispatchEvent(new Event('loadedmetadata'));
        }
    });
});




(function ($, Drupal, drupalSettings) {

    function openGallery(imageId, collectionId) {
        if (!imageId) return;

        const base = drupalSettings.lookatmedia?.dbgalleryUrl?.replace(/\/$/, '');
        if (!base) return;

        const url = collectionId
            ? `${base}/gallery/sets/${collectionId}?selectedImage=${encodeURIComponent(imageId)}`
            : `${base}/all/?selectedImage=${encodeURIComponent(imageId)}`;

        window.open(url, '_blank', 'noopener,noreferrer');
    }

    function getBannerImageId($ctx) {
        const href = $ctx.closest('.nes-banner').find('.bd_gallery_url').attr('href');
        if (!href || !href.includes('?')) return null;

        const params = new URLSearchParams(href.split('?')[1]);
        return params.get('selectedimage') || params.get('selectedImage');
    }

    function getImageIdFromHref(href) {
        if (!href || !href.includes('?')) return null;

        const params = new URLSearchParams(href.split('?')[1]);
        return params.get('selectedimage') || params.get('selectedImage');
    }

    function getPopupGalleryHref($el) {
        const popupSelector = $el.data('popup');
        if (!popupSelector) return null;

        return $(popupSelector).find('.bd_gallery_url').first().attr('href') || null;
    }

    function getPopupImageId($el) {
        const popupSelector = $el.data('popup');
        if (!popupSelector) return null;

        const $popup = $(popupSelector);
        const href = $popup.find('.bd_gallery_url').first().attr('href');
        const imageIdFromHref = getImageIdFromHref(href);
        if (imageIdFromHref) return imageIdFromHref;

        const dataImage = $popup.find('[data-image]').first().data('image');
        if (dataImage) return dataImage;

        const videoId = $popup.find('.video-js').first().attr('id');
        if (videoId) {
            const match = videoId.match(/videojs-(\d+)/i);
            if (match) return match[1];
        }

        const previewVideoSrc = $popup.find('video, source').first().attr('src');
        if (previewVideoSrc) {
            const match = previewVideoSrc.match(/previewVideo\/(\d+)/i);
            if (match) return match[1];
        }

        return null;
    }

    function getGalleryDataFromElement($el) {
        const raw = $el.data('image');
        if (!raw) return null;

        const [imageId, collectionId] = raw.toString().trim().split('|');
        if (!imageId) return null;

        return { imageId, collectionId };
    }

    $(document).on('click', function (e) {
        const $target = $(e.target);
        const $infoButton = $target.closest('.nes-banner .nes-info.mobile-only');

        if ($infoButton.length) {
            const popupSelector = $infoButton.data('popup');
            if (!popupSelector) return;

            e.preventDefault();
            $(popupSelector).fadeIn(500);
            return;
        }

        const $loginPopupLink = $target.closest('.open-login-popup');
        if ($loginPopupLink.length) {
            const href = $loginPopupLink.attr('href') || $target.closest('a').attr('href');
            const imageId = getImageIdFromHref(href) || getPopupImageId($loginPopupLink);

            if (imageId) {
                e.preventDefault();
                openGallery(imageId);
            }
            return;
        }

        const $infoHover = $target.closest('.nes-info-hover');
        if ($infoHover.length) {
            const galleryData = getGalleryDataFromElement($infoHover);
            if (galleryData) {
                e.preventDefault();
                openGallery(galleryData.imageId, galleryData.collectionId);
            }
            return;
        }

        const $bannerImageLink = $target.closest('.nes-banner .nes-image .bd_gallery_url');
        if ($bannerImageLink.length) {
            const imageId = getBannerImageId($target);
            if (imageId) {
                e.preventDefault();
                openGallery(imageId);
            }
        }
    });

})(jQuery, Drupal, drupalSettings);



function updateHeaderHeight() {
    const header = document.querySelector('header');
    if (header) {
        document.documentElement.style.setProperty(
            '--header-height',
            `${header.offsetHeight}px`
        );
    }
}

// Update on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateHeaderHeight);
} else {
    updateHeaderHeight();
}

// Debounce resize to prevent excessive updates
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateHeaderHeight, 150);
});