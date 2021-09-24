var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["11d94f7d-a822-4d55-accf-f955b2673922","ae67e69b-14e2-4e29-b9d9-9dd4444ece65","b6d37a2d-086f-4447-8556-14685c62ffe6","a8271aa5-5d32-4942-8dd0-8680f1f0b7cf","be204d14-1249-442f-bf80-a8b28843e481","9de696f2-df31-4679-8d4f-073fcf47d7fa","c97ab49f-a1a4-4b85-9963-14ffed69864b","d9f734c4-b9c5-4aab-96f5-03f94e4921d2","50528384-5e3d-4149-9532-cf62fecb2389","15b155d4-d87c-4935-8f57-c36994a88e28","9b35cd08-dcff-4dc6-8de1-dc4755f82c44","f26d6e3c-fc07-4df3-a92b-17bb26b8d423","99d21256-413c-480a-8845-333b6e9f969d","31a3944f-955f-421a-b5e8-49aa9134dbd9","26c5bba9-03be-454f-9252-bffca38eef2d","4d6cca22-9fc4-40c2-940b-6131a5f8839e","27f1d320-1c7e-45b7-8a06-7faca50a4a06","4b01ce91-1bf7-4be2-9844-c122feb06d23","cdcda3fb-e51d-43ed-bebf-3bd35d454a4f"],"propsByKey":{"11d94f7d-a822-4d55-accf-f955b2673922":{"name":"soldadoDer","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":8,"looping":true,"frameDelay":12,"version":"VJPL.QAH1vn6vS25TWEKP5iteTBii8JX","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":240},"rootRelativePath":"assets/11d94f7d-a822-4d55-accf-f955b2673922.png"},"ae67e69b-14e2-4e29-b9d9-9dd4444ece65":{"name":"soldado","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"jmNC4euYhVTVeaJqbebeaeB3362F02_I","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/ae67e69b-14e2-4e29-b9d9-9dd4444ece65.png"},"b6d37a2d-086f-4447-8556-14685c62ffe6":{"name":"soldadomuerto","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":5,"looping":true,"frameDelay":12,"version":"nDLISFnM0dmlty1.tmlamC7.bHpmz6GA","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":240},"rootRelativePath":"assets/b6d37a2d-086f-4447-8556-14685c62ffe6.png"},"a8271aa5-5d32-4942-8dd0-8680f1f0b7cf":{"name":"capitan","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":4,"looping":true,"frameDelay":12,"version":"fSFNG7nZchMz.xX2DJPYAKc7ciY599bX","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":160},"rootRelativePath":"assets/a8271aa5-5d32-4942-8dd0-8680f1f0b7cf.png"},"be204d14-1249-442f-bf80-a8b28843e481":{"name":"soldadoAdelante","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":4,"looping":true,"frameDelay":12,"version":"hQkcNJ.a3jcpVEfxej4uVyNHcSbDhH02","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":160},"rootRelativePath":"assets/be204d14-1249-442f-bf80-a8b28843e481.png"},"9de696f2-df31-4679-8d4f-073fcf47d7fa":{"name":"soldadoAtras","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":4,"looping":true,"frameDelay":12,"version":"50bZBL8v.eeEjLdo5JJYxiYr6VEDUyBX","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":160},"rootRelativePath":"assets/9de696f2-df31-4679-8d4f-073fcf47d7fa.png"},"c97ab49f-a1a4-4b85-9963-14ffed69864b":{"name":"soldadoIzq","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":4,"looping":true,"frameDelay":12,"version":"BwKWcUCFfPlEXlkG0ZpIXagO92eKlemW","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":160},"rootRelativePath":"assets/c97ab49f-a1a4-4b85-9963-14ffed69864b.png"},"d9f734c4-b9c5-4aab-96f5-03f94e4921d2":{"name":"japonesA","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":6,"looping":true,"frameDelay":12,"version":"VX_R5aLSGv_0UhecB.z7npa7WcBCz9A_","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":240},"rootRelativePath":"assets/d9f734c4-b9c5-4aab-96f5-03f94e4921d2.png"},"50528384-5e3d-4149-9532-cf62fecb2389":{"name":"japonesB","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"VNNQEt423i0v_waCcSRAnwgREJR9epjC","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/50528384-5e3d-4149-9532-cf62fecb2389.png"},"15b155d4-d87c-4935-8f57-c36994a88e28":{"name":"japonesC","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"akBHEeKh8JFVQcgx1WrW.oc3AHO_0aSe","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/15b155d4-d87c-4935-8f57-c36994a88e28.png"},"9b35cd08-dcff-4dc6-8de1-dc4755f82c44":{"name":"parte1","sourceUrl":null,"frameSize":{"x":80,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"0ILIRiF2DvdXHYZK0WWnB9SiDEYRrwV3","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":40},"rootRelativePath":"assets/9b35cd08-dcff-4dc6-8de1-dc4755f82c44.png"},"f26d6e3c-fc07-4df3-a92b-17bb26b8d423":{"name":"parte2","sourceUrl":null,"frameSize":{"x":80,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"s.LfCC06TpnDzrbnymmMHaNgN7FSNfWp","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":30},"rootRelativePath":"assets/f26d6e3c-fc07-4df3-a92b-17bb26b8d423.png"},"99d21256-413c-480a-8845-333b6e9f969d":{"name":"parte3","sourceUrl":null,"frameSize":{"x":80,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"FpZJzAgfztIgcRR8BLAGYuLsY674a3_C","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":30},"rootRelativePath":"assets/99d21256-413c-480a-8845-333b6e9f969d.png"},"31a3944f-955f-421a-b5e8-49aa9134dbd9":{"name":"suelo","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"ELtoxvStUjBuubG5G08SRJ0pR3j5UzYK","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/31a3944f-955f-421a-b5e8-49aa9134dbd9.png"},"26c5bba9-03be-454f-9252-bffca38eef2d":{"name":"sueloseguro","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"tW4wuwapD.EdEsiy7FtEmA5rumQVGfeM","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/26c5bba9-03be-454f-9252-bffca38eef2d.png"},"4d6cca22-9fc4-40c2-940b-6131a5f8839e":{"name":"radio","sourceUrl":null,"frameSize":{"x":130,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"or6j34f5M4VuudP9467DRbvCSrkPhWK2","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":75},"rootRelativePath":"assets/4d6cca22-9fc4-40c2-940b-6131a5f8839e.png"},"27f1d320-1c7e-45b7-8a06-7faca50a4a06":{"name":"bala","sourceUrl":null,"frameSize":{"x":23,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"6aFPl9yIjKxA8znaxrXKO0G89MQEIlpk","loadedFromSource":true,"saved":true,"sourceSize":{"x":23,"y":10},"rootRelativePath":"assets/27f1d320-1c7e-45b7-8a06-7faca50a4a06.png"},"4b01ce91-1bf7-4be2-9844-c122feb06d23":{"name":"baladetanque","sourceUrl":null,"frameSize":{"x":50,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"uuXwUsygLJV45QYfmRvcaSwIUwX3uAEt","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":25},"rootRelativePath":"assets/4b01ce91-1bf7-4be2-9844-c122feb06d23.png"},"cdcda3fb-e51d-43ed-bebf-3bd35d454a4f":{"name":"explocion","sourceUrl":null,"frameSize":{"x":180,"y":800},"frameCount":4,"looping":true,"frameDelay":12,"version":"moha9UtwKlArzOvcpqvOaORbCdv3vTmb","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":800},"rootRelativePath":"assets/cdcda3fb-e51d-43ed-bebf-3bd35d454a4f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//mapa invisible
var radiomental=createSprite(50,105);
var instrucciones=createSprite(50,350);
var limiteseguro=createSprite(100,200,5,200);
var tanque=createSprite(50,200,200,200);
//mapa visible

var suelo=createSprite(200,200);
var baladetanque=createSprite(-50,200);
var sueloseguro=createSprite(50,200,100,390);
var radio=createSprite(50,50,100,100);
var radiofisica=createSprite(47,125);
var trinchera1=createSprite(150,50,5,200);
var trinchera2=createSprite(100,50,5,180);
var trinchera3=createSprite(150,200,5,100);
var trinchera4=createSprite(100,350,5,150);
var trinchera5=createSprite(200,50,5,150);
var trinchera6=createSprite(300,350,5,200);
var trinchera7=createSprite(200,358,5,152);
var trinchera8=createSprite(300,50,5,152);
var trinchera9=createSprite(250,200,5,100);
var trinchera10=createSprite(275,250,50,5);

//personajes y objetos
var parte1=createSprite(150,350);
var parte2=createSprite(250,50);
var parte3=createSprite(350,200);

var soldado=createSprite(50,350);
var capitan=createSprite(50,50);
var bala1=createSprite(350,350);
var bala2=createSprite(350,250);
var bala3=createSprite(350,150);
var bala4=createSprite(350,50);

var japones1=createSprite(350,350);
var japones2=createSprite(350,250);
var japones3=createSprite(350,150);
var japones4=createSprite(350,50);

var explotionsite=createSprite(350,200,0.05,390);
//var gameState="serve";

//imagenes
suelo.setAnimation("suelo");
suelo.scale=2;
soldado.setAnimation("soldado");
soldado.scale=0.5;
capitan.setAnimation("capitan");
capitan.scale=1;
japones1.setAnimation("japonesB");
japones1.scale=0.5;
japones2.setAnimation("japonesB");
japones2.scale=0.5;
japones3.setAnimation("japonesB");
japones3.scale=0.5;
japones4.setAnimation("japonesB");
japones4.scale=0.5;

parte1.setAnimation("parte1");
parte2.setAnimation("parte2");
parte3.setAnimation("parte3");
radiofisica.setAnimation("radio");
radiofisica.scale=0.8;
bala1.setAnimation("bala");
bala1.scale=0.5;
bala2.setAnimation("bala");
bala2.scale=0.5;
bala3.setAnimation("bala");
bala3.scale=0.5;
bala4.setAnimation("bala");
bala4.scale=0.5;
baladetanque.setAnimation("baladetanque");




function draw() {
background("brown");
radio.shapeColor=("black");
sueloseguro.shapeColor=("#5a2d03");

//movimiento
if (keyDown("left")){
  soldado.x=soldado.x-2;
  soldado.setAnimation("soldadoIzq");
playSound("assets/category_movement/unique_snow_or_ice_footstep_3.mp3", false);
}
if (keyDown("right")){
  soldado.x=soldado.x+2;
  soldado.setAnimation("soldadoDer");
playSound("assets/category_movement/unique_snow_or_ice_footstep_3.mp3", false);
}
if (keyDown("up")){
  soldado.y=soldado.y-2;
  soldado.setAnimation("soldadoAtras");
playSound("assets/category_movement/unique_snow_or_ice_footstep_3.mp3", false);
}
if (keyDown("down")){
  soldado.y=soldado.y+2;
  soldado.setAnimation("soldadoAdelante");
playSound("assets/category_movement/unique_snow_or_ice_footstep_3.mp3", false);
}
//instrucciones
if (soldado.isTouching(instrucciones)) {
playSpeech("Welcome to santys world war 2 game, go answer radio for instructions", "male", "English");
  instrucciones.x=-1000;  
}

if (soldado.isTouching(radiomental)) {
playSpeech("SOLDIER, CONNTACTING FROM BASE, WHERE HAVE YOU BEEN? DONT CARE, LISTEN CAREFULLY, YOU MUST GATHER OUR TANK PIECES SCATTERED ACROSS THE BATTLEFIELD TO FIX IT, GET THEM, and do not die,THATS AN ORDER SOLDIER, OVER AND OUT!", "male", "English (UK)");
radiomental.x=-1000;
}


//ataque enemigo
if (soldado.isTouching(limiteseguro)) {
bala1.velocityX=-6;
bala2.velocityX=-6;
bala3.velocityX=-6;
bala4.velocityX=-6;
japones1.setAnimation("japonesA");
japones2.setAnimation("japonesA");
japones3.setAnimation("japonesA");
japones4.setAnimation("japonesA");
}

if (bala1.isTouching(limiteseguro)||bala2.isTouching(limiteseguro)||bala3.isTouching(limiteseguro)||bala4.isTouching(limiteseguro)) {
 bala1.x= 350;
 bala2.x= 350;
 bala3.x= 350;
 bala4.x= 350;
playSound("assets/category_explosion/8bit_explosion.mp3", false);
  
}
//tanque
if (soldado.isTouching(parte1)) {
  parte1.x=50;
  parte1.y=200;
}
if (soldado.isTouching(parte2)) {
  parte2.x=48;
  parte2.y=223;
}
if (soldado.isTouching(parte3)) {
  parte3.x=50;
  parte3.y=235;
}
if (tanque.isTouching(parte1)&&tanque.isTouching(parte2)&&tanque.isTouching(parte3)){
  bala1.x=1000;
  bala1.velocityX=0;
  bala2.x=1000;
  bala2.velocityX=0;
  bala3.x=1000;
  bala3.velocityX=0;
  bala4.x=1000;
  bala4.velocityX=0;
  japones1.setAnimation("japonesC");
  japones2.setAnimation("japonesC");
  japones3.setAnimation("japonesC");
  japones4.setAnimation("japonesC");
  baladetanque.velocityX=2;
}

if (baladetanque.isTouching(explotionsite)) {
  playSound("assets/category_explosion/8bit_explosion.mp3",false);
  explotionsite.setAnimation("explocion");
  explotionsite.setScale=100;
  
}

//muerte
if (soldado.isTouching(bala1)||soldado.isTouching(bala2)||soldado.isTouching(bala3)||soldado.isTouching(bala4)||soldado.isTouching(explotionsite)) {
japones1.setAnimation("japonesB");
japones2.setAnimation("japonesB");
japones3.setAnimation("japonesB");
japones4.setAnimation("japonesB");
radiomental.y=-5000;
instrucciones.x=-5000;
bala1.velocityX=0; 
bala1.x=-1000;
bala2.velocityX=0;   
bala2.x=-1000;
bala3.velocityX=0;   
bala3.x=-1000;
bala4.velocityX=0;  
bala4.x=-1000;
soldado.x=200;
soldado.y=200;

soldado.setAnimation("soldadomuerto");
soldado.scale=3;
playSpeech("I GAVE YOU AN ORDER SOLDIER, DONT DIE, PRESS R TO TRY AGAIN OR REST IN PIECE,  PRESS R,  SAVE OUR BASE, WE WILL NEVER GIVE UP AND NEITHER SHOULD YOU, TRY AGAIN FOR YOUR FAMILY AND PRESS THE R, IF YOU ARE STILL HERE STOP PLAYING AND GO READ A BOOK OR SOMETHING YOU SLIMEBALL, YOU BETTER PRESS R OR I WILL GO AND KICK YOUUUUUUUUUUUUU O I SEE YOU WANT TO SPEND YOUR TIME SLACKING AROUND, WE DONT NEED YOUR TYPE ON THE BATTLEFIELD, O MY GOD JUST LEAVE AND WATCH YOUTUBE OR SOMETHING", "male", "English (UK)");
}




//trincheras
createEdgeSprites();
soldado.collide(leftEdge);
soldado.collide(rightEdge);
soldado.collide(bottomEdge);
soldado.collide(topEdge);
soldado.collide(trinchera1);
soldado.collide(trinchera2);
soldado.collide(trinchera3);
soldado.collide(trinchera4);
soldado.collide(trinchera5);
soldado.collide(trinchera6);
soldado.collide(trinchera7);
soldado.collide(trinchera8);
soldado.collide(trinchera9);
soldado.collide(trinchera10);
soldado.collide(radiofisica);



drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
