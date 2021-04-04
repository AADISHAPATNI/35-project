//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{
	//load images here
  var dog  = loadImage(images/dogImg.png)
  var happyDog = loadImage(images/dogImg1.png)
}

function setup() {
	createCanvas(500, 500);
  var dog = createSprite(200,200,50,50);
  var dog = addImage("dogImg.png")

  var database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  

  drawSprites();
  //add styles here
   Background(46,139,87);


   if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(dogHappy);
     happyDog = addImage("dogImg1.png")
   }

   
   function readStock(data){
     foodS = data.val();
   }

   function writeStock(x){
     if(x<=0){
       x= 0 
     }else{
       x = x-1
     }
   }
   database.ref('/').update({
     Food:x
   })

  }



