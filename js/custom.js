/**
 *todo: Question 5: (Adding interactivity features on apple.com website’s footer section)The following question is based on the responsive Apple website you built back in phase 1. Aswe didn't cover JavaScript back then, we didn't implement some of the interactive features of the website that are provided by JavaScript. You can use apple.com’s responsive code we wrote from the link provided below to implement the interactivity of apple.com's footer section
 */
/*$(".footer-links-wrapper h3").on("click",function(){
    if($(window).width()<=768)
    {
        $(this).next().slideToggle();
        $(this).toggleClass("expanded")
    }
});
$(window).resize(function () {
    if ($(window).width() > 768) {
        $(".footer-links-wrapper ul").show();
        $(".footer-links-wrapper h3").removeClass("expanded");
    } else {
        $(".footer-links-wrapper ul").hide();
    }
});*/
// Function to toggle the sub-links with a Promise
function toggleFunction(element) {
    return new Promise(() => {
        if ($(window).width() <= 768) {
            // Slide toggle the next element (ul) and toggle the expanded class
            $(element).next().slideToggle(400, function() {
                // Resolve the promise when the toggle is complete
                $(element).toggleClass("expanded");
            });
        } 
    });
}

// On click, call the toggle function and handle the promise
$(".footer-links-wrapper h3").on("click", function() {
    toggleFunction(this)
        .then(() => {
            console.log("Toggle completed.");
        })
        .catch((error) => {
            console.log("Error:", error);
        });
});

// Resize handling with promise logic
$(window).resize(function() {
    // Wrap the resize actions in a promise
    new Promise(() => {
        if ($(window).width() > 768) {
            $(".footer-links-wrapper ul").show(); 
            $(".footer-links-wrapper h3").removeClass("expanded");
        } else {
            $(".footer-links-wrapper ul").hide(); 
        }
    }).then((message) => {
        console.log(message);
    });
});
