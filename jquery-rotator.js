    //counts the amount of items
    var imageRotatorItems = $('.wrapping-element .col-md-4').length -1;
    //Establish the counter
    var imageRotatorCount = 0;
    //Creates the element as a variable for easier use
    var imageRotatorElement = $('.wrapping-element .col-md-4');


// Click Right
    $('.rotator-arrow.right').click(function () {
        console.log('right arrow clicked');
        if (imageRotatorCount < imageRotatorItems) {
            // "neg-margin" class will have -100%
            $(imageRotatorElement[imageRotatorCount]).addClass('neg-margin');

            imageRotatorCount += 1;
        }
    })

    $('.kel-rotator-arrow.left').click(function () {
        console.log('left arrow clicked');
        if (imageRotatorCount > 0) {
            $(imageRotatorElement[imageRotatorCount-1]).removeClass('neg-margin');
            imageRotatorCount -= 1;
        }
    })