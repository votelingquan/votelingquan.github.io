$(document).ready(function(){
    $(".testimonial-face-item").click(function(){
        console.log("testOutput")
        console.log(this.dataset.nameeng);
        nameEnglish = this.dataset.nameeng;
        nameArabic = this.dataset.namearb;
        personTitle = this.dataset.title;
        descriptionEng = this.dataset.desceng;
        descriptionArb = this.dataset.descarb;
        faceImage = 'url("' + this.dataset.img + '")';
        console.log(faceImage)
        //Need to know whether to change description for ling or quans testimonial section
        containerDiv = $(document.getElementById($(this).parent().data('parentgroup')))

        containerDiv.find(".testimonial-face").css({"background": faceImage, "background-size": "cover"})
        containerDiv.find(".nameEng").text(nameEnglish)
        containerDiv.find(".nameArb").text(nameArabic)
        containerDiv.find(".testimonial-title").text(personTitle)
        containerDiv.find(".testimonialEng").text(descriptionEng)
        containerDiv.find(".testimonialArb").text(descriptionArb)


    });
});