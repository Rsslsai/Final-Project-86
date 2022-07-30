var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");
ctx = canvas.getContext("2d");
var block_image_object = "";
function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg" , function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(1300);
        block_image_object.scaleToHeight(950);
        block_image_object.set({
        top: 0, 
        left: 0
    });
        canvas.add(block_image_object);
    });	
}

function playSound() {
	x.play();
}
