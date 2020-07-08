/*
Name: Jesse Owens
*/

var $ = function (id) { 
	return document.getElementById(id); 
}
window.onload = function () {
    var slidesNode = $("slides");    
    var captionNode = $("caption");
    var imageNode = $("slide");
    //Add my event listeners to notify the function when to fire
    $("next").addEventListener("click", nextImage);
    $("previous").addEventListener("click", prevImage);
        
    var slides = slidesNode.getElementsByTagName("img");
    
    var image;
    var imageCounter = 0;

    //This code was taken from the previous program and it works flawlessly so I pasted it here
    function nextImage()
    {
            imageCounter = (imageCounter + 1) % slides.length;
            image = slides[imageCounter];
            imageNode.src = image.src;
            captionNode.firstChild.nodeValue = image.alt;
    };

    //Almost the same as before but with tweaks that were necessary to accomplish going backwards
    function prevImage()
    {
        //If the imageCounter is above 0 then we are still within the bounds of the array, the counter can continue decrementing
        //since we are decrementing there is no way for the modulous to auto reset to 0 as above
        if (imageCounter > 0)
        {
            imageCounter = (imageCounter - 1) % slides.length;
        }
        //if the image counter is equal to 0 or drops below 0 then we need to reset to the length of the array minus 1
        //we subtract the 1 because slides.length is outside the bounds of the actual accessible memory
        else
        {
            imageCounter = slides.length - 1;
        }

        //same code as before no need to change
        image = slides[imageCounter];
        imageNode.src = image.src;
        captionNode.firstChild.nodeValue = image.alt;
    }
};




