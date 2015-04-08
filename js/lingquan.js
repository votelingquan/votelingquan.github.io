$(document).ready(function(){
    $(".testimonial-face-item").click(function(){
        nameEnglish = this.dataset.nameeng;
        nameArabic = this.dataset.namearb;
        personTitle = this.dataset.title;
        descriptionEng = this.dataset.desceng;
        descriptionArb = this.dataset.descarb;
        faceImage = 'url("' + this.dataset.img + '")';

        //Change the opacity of the face thumbails
        activeFace = $(this).parent().find(".active")
        activeFace.removeClass("active").addClass("inactive")
        $(this).removeClass("inactive").addClass("active")

        //Need to know whether to change description for ling or quans testimonial section
        containerDiv = $(document.getElementById($(this).parent().data('parentgroup')))

        containerDiv.find(".testimonial-face").css({"background": faceImage, "background-size": "cover"})
        containerDiv.find(".nameEng").text(nameEnglish)
        containerDiv.find(".nameArb").text(nameArabic)
        containerDiv.find(".testimonial-title").text(personTitle)
        containerDiv.find(".testimonialEng").html(descriptionEng)
        containerDiv.find(".testimonialArb").html(descriptionArb)


    });
    //Scrolling to anchors
    $('a[href^="#"]').on('click', function(event) {
      var target = $( $(this).attr('href') );
      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 1000);
      }
    });
});