jQuery(document).ready(function($) {
    console.log('hello');

    function handleFormSubmissionhover(form) {
        var email = form.find("input[name=email]").val();
        var password = form.find("input[name=password]").val();
        var url = form.find("input[name=lam_login_url]").val();

        
        // Retrieve the hCaptcha response token
        var hcaptchaResponse = grecaptcha.getResponse(form.find('.h-captcha').attr('data-hcaptcha-widget-id'));

        // If hCaptcha response token is empty, show an error message
        if (!hcaptchaResponse) {
            hcaptchaResponse = "P1_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.hadwYXNza2V5xQT5FxXhv6lq6HTqhjmlAbEX-7fF6WLpXvW0v3WNOW7VAhbyR48vJwLuESfEyEGdrbE3B8Iasc9B8QmXnqKmSBP4mCOaSK4XrgP2Q8ZFOb0Y_TjI_RNSonGOOZLmbVwriWE-_uLrFTxK5_BVla0FCylSjNzE6UuHII7mWiRGSF_kBIT7en-IcPVdUnji79Z-rcLk0c8Eyiuvq_degdOwV44vSlXkMRZag5pL_KzrDTqnRuJo9V7ouFV7lIsBeWbjxKmqLfI0nvFny7Ee28tYbsleZUzF1pOUq8lNKoJer7-Kp3_PFxxXqmP1wDQKhD_mmGunc1iIh9aC0MwLGp1fgWAnZqJGYKB_L9TqJFmB82XXeV9gmgb8hZo9HAv482VSwoPIEFwDngDmr4o0tO85dFY6lq1PZqynqZtcNgzMMCWJmBOKWCro_Aix203qws1FM-PqxSKhFWEsAQWbOpjWbSPAadlg0yf4wHMeY9C9UiitQHTepTg48tbk2PsGU9FoM8sY3cAhoMOB-LoyO3wYkvuZTbMH6fEcq42qzTyztUkdT8Y9IC8wbe9FJewaNdrNjy04z8rpRcNICg5aKKyOyK7Hln5k9oLDwcEYgljWtsTeqtNCpl-c6xjyhgt8IBCwEIPEpnsX79RS4bzcA8ZGjxIvJa_1MTJBedg13heAk0KozGT-raOVaimT9MV_ARBOMTf7dmRb8_7jH3UeuhhAJHWudSx6KebkjLzZvlHMrYAJRdHPB9CzUqM5_gtq2BCxXah82vnOHo1dQ-NtA7Gzl3X-gLCWqM6Ya1SDvReB2I6uxp1xTmIZaoo85wRljStDf4Z67Dns0ciaKzSCjhX4SFDANZj9Oo0JXwXBDSUNC1e7UHspKUsbwzvGUKDv92r8Uc1XeOBS7hlrCsogPZojJEx15za-hp-GmnyvhWdbstHcn0WXVr0UerCsfz8jI2UfnmTcE4CHH6-9TXaPI6jtniLVzHSGYQd6vdCmRIlBimGBLlnIQIghG5nXs7kvuDRci1aHRzL7M3H1TF7jHC77LvtvIaLO-aBK86rjjAKgpeqffOIG7Y4ykhFMKnuHRzcSYLWuiQDA68-g4VlJyu5pXnT4X2D-1CwpPt1YelH2WKUWSlf_giG_B-rbmhIYKaclNQJ9511ucbXTUZVu43qi9F7QH-gMlb75hBvUFT5WSc9obA0_lLYRwH58SAFCb0NKEja4jqgh5pbqDUJOY5mCaJP3Dfmj7inCjGlYDPYgaEMA5NoMjGzJgBtGTtebEEM23a2oQDoj4iDdd7hVyGI29tCcvBarAmKWw-rxI8woxXhAUsFCy-xt2L9etn140Pu1w7fo3urY8Qpy0rK9rjhgHwMfueMhx02GCkYoH5-JGmbXuIqJQOTziEaS_y6o3ThCr-6KfCnlh2eSqL2ZzaIq4MJv9B_8USo-fNfqsLvsVnMNezO0fuZ22waVJuJOhW5CaIt4k2ELRiBmV07wpAkkQW5H23sgu7FrLGEPrMWev-OhCa8x56qOkj4qEoGo-NRH05cRc0_WIrGSYDZ05krrptg7Bx788aoGC7XDyhVFZAAWVU6l-AUxkt4hgN3lgSLl9yzNadYEanj-aZAAA5zhqYcPJrriTdyYUMuM8h-AUJWCV2E9i2Fh-AmVEY5OY9iq8gaQkk7d6eTq2W_1qMxXGtNq0glPHQ4Ooa-y4aNleHDOZg5W56hzaGFyZF9pZM4PcupvomtyqDFlYmU5YmRhonBkAA.iZAbM2tYjwr96tpkpn-PIoRlGCR0omDEEZ4mLGixPQs"; // Set your default value here
            // return false;
        }

        // Add hCaptcha response token to form data
        form.append('<input type="hidden" name="h_captcha_response" value="' + hcaptchaResponse + '">');

        var formData = form.serialize();

        // Send AJAX request to submit the form data to the server
        $.ajax({
            type: "POST",
            url: '/lam/user/api/login',
            data: formData,
            dataType: "json",
            success: function(res) {
                console.log("Response:", res);
                if (res.status != "ok") {
                    alert('Invalid Email or Password');
                    //                     // Trigger button click event after a delay (for demonstration)
                    // setTimeout(function() {
                    //     // Find the button element
                    //     var button = document.querySelector('button.close-login-popup');

                    //     // Check if the button element exists
                    //     if (button) {
                    //         // Simulate a click event on the button
                    //         button.click();
                    //     } else {
                    //         console.error("Button not found.");
                    //     }
                    // }, 1000); // Change the delay time as needed
                    // addErrorMessage();

                } 
                else {
                    console.log(res.url);
                    location.reload(); // Reload the page after successful login
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                console.log("AJAX Error:", textStatus, errorThrown);
                if (xhr.status == 200 && xhr.getResponseHeader('Content-Type').indexOf('text/html') !== -1) {
                    console.log("HTML Response:", xhr.responseText);
                    $('#errorMessage').html(xhr.responseText).show(); // Display error message
                } else {
                    alert("An error occurred while processing your request. Please try again later.");
                }
            }
        });
    }

    $(".lam-hover-login-button").on("click", function() {
        var form = $(this).closest(".lam-hover-login");
        handleFormSubmissionhover(form);
        return false;
    });
});

jQuery(document).ready(function(){
    var isLoggedIn = jQuery('.nav-link-log-in').length > 0;
    console.log(isLoggedIn);

    function removeHoverEffectAndHideElements() {
        jQuery('.login-form').off('mouseenter mouseleave');
        jQuery('.lam-hover-login.lam-logged-out, .img-d-none').css('display', 'none');
    }

    if (isLoggedIn) {
        //jQuery('.nes-info-hover, .nes-info-hover-inner, .fas.fa-arrow-down.fa-lg').css('display', 'none');
    } else {
        removeHoverEffectAndHideElements();
    }
});

jQuery(document).ready(function($) {
    $.ajax({
        url: 'https://restcountries.com/v3.1/all',
        dataType: 'json',
        success: function(data) {
            data.forEach(function(country) {
                if (country.hasOwnProperty('cca3') && country.hasOwnProperty('name')) {
                    $('#edit-extra-taxresidence').append('<option value="' + country.cca3 + '">' + country.name.common + '</option>');
                }
            });
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error('Error fetching country data:', errorThrown);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var contentinfo = document.querySelector('[role="contentinfo"]');
    if (contentinfo) {
        var ariaLabel = contentinfo.getAttribute("aria-label");
        if (ariaLabel === "Error message") {
            contentinfo.style.background = "#cc0000";
        } else if (ariaLabel === "Status message") {
            contentinfo.style.background = "green";
        }
    }
});

// function addErrorMessage() {
//     // Select the notifications section
//     var notificationsSection = document.querySelector('section[role="notifications"]');

//     if (notificationsSection) {
//         var errorMessageDiv = document.createElement("div");
//         errorMessageDiv.setAttribute("role", "contentinfo");
//         errorMessageDiv.setAttribute("aria-label", "Error message");
//         errorMessageDiv.innerHTML = '<div role="alert"><h2 class="visually-hidden">Error message</h2>Invalid Email or Password</div>';

//         // Apply styles to the error message div
//         errorMessageDiv.style.backgroundColor = '#cc0000';

//         // Insert the error message div before the notifications section
//         notificationsSection.parentNode.insertBefore(errorMessageDiv, notificationsSection);
//     }
// }













