let mgr;
let me;
let meRSP;
let Mphase = 0;
let emma = [];

let isPlaying = false;

let startPhase = 0;

let PHSmeLSP, PHSmeRSP;
let HSmeLSP, HSmeRSP;

let gameMusic;
let wallSlam;
let wrongColor;
let rightColor;
let flagComplete;

let Larrow, Rarrow, Uarrow, Darrow, Mclick, mouse;

let TLme, TL2me, TL3me, TL4me, TL5me;

//denial//
let eye;
let PHS = [];
let lockers;
let phase = 0;
// let DmeX, DmeY;
// let npc1X, npc2X, npc2Y, npc3X, npc4X, npc5X, npc6X;

DmeX = 100;
DmeY = 655;
npc2X = 900;
npc2Y = 655;

//anger//
let AngMeX;
let AngMeY;
let AngPhase = 0;
timer = 0;

//barganning//
let slider;
let slider2;

//depression//
let boys = [];
let percyRSP;

//phone//
let PmeY;
let Pme2Y;

//acceptance//
let r1, g1, b1;
let r2, g2, b2;
let r3, g3, b3;
let r4, g4, b4;
let r5, g5, b5;
let tr, tg, tb;
let wr, wg, wb;
let ltxtr1, ltxtg1, ltxtb1;
let ltxt1y;
let ltxtr2, ltxtg2, ltxtb2;
let ltxt2y;
let ltxtr3, ltxtg3, ltxtb3;
let ltxt3y;
let ltxtr4, ltxtg4, ltxtb4;
let ltxt4y;
let ltxtr5, ltxtg5, ltxtb5;
let ltxt5y;

let sr1, sg1, sb1;
let sr2, sg2, sb2;
let sr3, sg3, sb3;
let sr4, sg4, sb4;
let sr5, sg5, sb5;

let br1, bg1, bb1;
let br2, bg2, bb2;
let br3, bg3, bb3;
let btxtr1, btxtg1, btxtb1;
let btxt1y;
let btxtr2, btxtg2, btxtb2;

let BoyX, BoyY;
let Bphase = 0;

let AccMeX;

let Lme, Rme, Mme;
let Lthought, Rthought;

let future = [];
let timerNum = 0; 

function preload(){
  Larrow = loadImage('assets/LEFTarrow.png');
  Rarrow = loadImage('assets/RIGHTarrow.png');
  Uarrow = loadImage('assets/UParrow.png');
  Darrow = loadImage('assets/DOWNarrow.png');
  Mclick = loadImage('assets/MOUSEclick.png');
  mouse = loadImage('assets/mouse.png');
  instructionKey = loadImage('assets/InstructionKey.png');
  me = loadImage("assets/me.png");
  meRSP = loadImage('assets/meRSP.png');
  emma[0] = loadImage('assets/PHSme.png');
  emma[1] = loadImage("assets/HSme.png");
  emma[2] = loadImage('assets/HCme.png');
  emma[3] = loadImage('assets/FTme.png');
  emma[4] = loadImage('assets/PRme.png');
  emma[5] = loadImage('assets/YGme.png');
  emma[6] = loadImage('assets/LYme.png');
  PHSmeLSP = loadImage('assets/PHSmeLSP.png');
  PHSmeRSP = loadImage('assets/PHSmeRSP.png');
  HSmeLSP = loadImage('assets/HSmeLSP.png');
  HSmeRSP = loadImage('assets/HSmeRSP.png');
  PHS[0] = loadImage('assets/PHSgirl1.png');
  PHS[1] = loadImage('assets/PHSgirl2.png');
  PHS[2] = loadImage('assets/PHSgirl3.png');
  PHS[3] = loadImage('assets/PHSgirl4.png');
  PHS[4] = loadImage('assets/PHSgirl5.png');
  PHS[5] = loadImage('assets/PHSgirl6.png');
  eye = loadImage('assets/eye.png');
  IdealGF = loadImage('assets/gf.png');
  wlw = loadImage('assets/wlw.png');
  straight = loadImage('assets/straight.png');
  boys[0] = loadImage('assets/ty.png');
  boys[1] = loadImage('assets/j.png');
  boys[2] = loadImage('assets/sc.png');
  boys[3] = loadImage('assets/peeta.png');
  boys[4] = loadImage('assets/percy.png');
  percyRSP = loadImage('assets/percyRSP.png');
  heart = loadImage('assets/heart.png');
  future[0] = loadImage('assets/Future1.png');
  future[1] = loadImage('assets/Future2.png');
  future[2] = loadImage('assets/Future3.png');
  futurehome = loadImage('assets/futurehome.png');
  sidewalk = loadImage('assets/sidewalk.png');
  entrance = loadImage('assets/entrance.png');
  phone = loadImage('assets/phone.png');
  text1 = loadImage('assets/text1.PNG');
  text2 = loadImage('assets/text2.png');
  textMe1 = loadImage('assets/Pme1.jpg');
  textMe2 = loadImage('assets/Pme2.png');
  Lme = loadImage('assets/Lme.png');
  Rme = loadImage('assets/Rme.png');
  Mme = loadImage('assets/Mme.png');
  Lthought = loadImage('assets/Lthought.png');
  Rthought = loadImage('assets/Rthought.PNG');
  
//   soundFormats('mp3', 'wav');
//   //credit to ZHRØ on freesound.com for this audio file!//
  gameMusic = loadSound('assets/gameMusic.mp3');
//   //credit to Jofae on freesound.com for this audio file!//
  wallSlam = loadSound('assets/wallSlam.mp3');
//   //credit to connersaw8 on freesound.com for this audio file!//
  wrongColor = loadSound('assets/wrongColor.wav');
//   //credit to Mrthenoronha on freesound.com for this audio file!//
  rightColor = loadSound('assets/rightColor.wav');
//   //credit to Mrthenoronha on freesound.com for this audio file!//
  
}

function setup() {
  createCanvas(1440, 900);
  
  // if(isPlaying == true){
  //   gameMusic.playMode('untilDone');
  //   gameMusic.play();
  // }
  
  mgr = new SceneManager();
  
  mgr.addScene(start);
  mgr.addScene(home);
  mgr.addScene(controls);
  mgr.addScene(timeline1);
  mgr.addScene(denial);
  mgr.addScene(denial2);
  mgr.addScene(timeline2);
  mgr.addScene(anger);
  mgr.addScene(timeline3);
  mgr.addScene(bargaining);
  mgr.addScene(bargaining2);
  mgr.addScene(timeline4);
  mgr.addScene(acceptance);
  mgr.addScene(denial3);
  mgr.addScene(depression);
  mgr.addScene(timeline5);
  mgr.addScene(acceptance2);
  mgr.addScene(acceptance3);
  mgr.addScene(end);
  
  mgr.showNextScene();
}

function draw() {
  mgr.draw();
  
  if(isPlaying == true){
    gameMusic.playMode('untilDone');
    // gameMusic.play();
    gameMusic.play();
    gameMusic.loop();
  }
  
}

function keyPressed(){
  switch(key){
      case 'h':
            mgr.showScene(home);
            break;
      case '/':
            mgr.showScene(controls);
            break;
      case 's':
            mgr.showScene(timeline1);
            break;
        case '1':
            mgr.showScene(start);
            break;
        // case '2':
        //     mgr.showScene(denial2);
        //     break;
        // case 'y':
        //     mgr.showScene(timeline2);
        //     break;
        // case '3':
        //     mgr.showScene(anger);
        //     break;
        // case 'u':
        //     mgr.showScene(timeline3);
        //     break;
        // case '4':
        //     mgr.showScene(bargaining);
        //     break;
        // case '5':
        //     mgr.showScene(bargaining2);
        //     break;
        // case 'i':
        //     mgr.showScene(timeline4);
        //     break;
        // case '6':
        //     mgr.showScene(acceptance);
        //     break;
         // case '7':
         //     mgr.showScene(denial3);
         //     break;
        // case '8':
        //     mgr.showScene(depression);
        //     break;
        // case 'o':
        //     mgr.showScene(timeline5);
        //     break;
        // case '9':
        //     mgr.showScene(acceptance2);
        //     break;
        // case '0':
        //     mgr.showScene(acceptance3);
        //     break;
        // case 'e':
        //     mgr.showScene(end);
    }
    
  mgr.handleEvent("keyPressed");
  
  if(keyCode == LEFT_ARROW){
    DmeX = DmeX-40;
    phase = 1;
    Pme2Y = Pme2Y+100;
  }
  
  if(keyCode == RIGHT_ARROW){
    DmeX = DmeX+40;
    phase = 2;
    AngMeX = AngMeX+30;
    AccMeX = AccMeX+40;
    PmeY = PmeY+100;
    AngPhase = 2;
    Mphase = 1;
    
    TLme = TLme+120;
    TL2me = TL2me+180;
    TL3me = TL3me+210;
    TL4me = TL4me+210;
    TL5me = TL5me+210;
  }
  
  if (keyCode === UP_ARROW){
    AngMeY = AngMeY-30;
    BoyX = BoyX+40;
    BoyY = BoyY-40;
    Bphase = 1;
    AngPhase = 1;
  }else if (keyCode === DOWN_ARROW){
    AngMeY = AngMeY+30;
    AngPhase = 2;
  }
  
}

function keyReleased(){
  if(keyCode == LEFT_ARROW){
    phase = 0;
  }
  
  if(keyCode == RIGHT_ARROW){
    phase = 0;
    AngPhase = 0;
    Mphase = 0;
  }
  
  if(keyCode == UP_ARROW){
    AngPhase = 0;
    Bphase = 0;
  }
  
  if(keyCode == DOWN_ARROW){
    AngPhase = 0;
  }
}

function checkCollision(){
  if(dist(DmeX, DmeY, npc1X, npc1Y) < 100){
    noStroke();
    textSize(32);
    fill(255);
    text("oh, i wish i looked like her", width/2, 90);
  }
  
  if(dist(DmeX, DmeY, npc3X, npc3Y) < 100){
    noStroke();
    textSize(32);
    fill(255);
    text("she has beautiful eyes", width/2, 90);
  }
  
  if(dist(DmeX, DmeY, npc4X, npc4Y) < 100){
    noStroke();
    textSize(32);
    fill(255);
    text("she has nice hair", width/2, 90);
  }
  
  if(dist(DmeX, DmeY, npc2X, npc2Y) < 100){
    noStroke();
    textSize(32);
    fill(255);
    text("that hairstyle is cute on her", width/2, 90);
  }
  
  if(dist(DmeX, DmeY, npc5X, npc5Y) < 100){
    noStroke();
    textSize(32);
    fill(255);
    text("she's gorgeous, too", width/2, 90);
  }
  
  if(dist(DmeX, DmeY, npc6X, npc6Y) < 100){
    noStroke();
    textSize(32);
    fill(255);
    text("she's really pretty", width/2, 90);
  }
}

function mousePressed(){
  //straight//
  if(mouseX > 605 && mouseX < 655 && mouseY > 216 && mouseY < 265){
    sr2 = 255;
    sg2 = 255;
    sb2 = 255;
    
    sr4 = 255;
    sg4 = 255;
    sb4 = 255;
    
    rightColor.play();
  }
  
  if(mouseX > 775 && mouseX < 825 && mouseY > 216 && mouseY < 265){
    sr1 = 0;
    sg1 = 0;
    sb1 = 0;
    
    sr3 = 0;
    sg3 = 0;
    sb3 = 0;
    
    sr5 = 0;
    sg5 = 0;
    sb5 = 0;
    
    rightColor.play();
  }
  
  //bisexual acceptance//
  if(mouseX > 575 && mouseX < 625 && mouseY > 285 && mouseY < 335){
    br1 = 205;
    bg1 = 0;
    bb1 = 112;
    
    btxtr2 = 196;
    btxtg2 = 171;
    btxtb2 = 229;
    
    btxtr1 = 196;
    btxtg1 = 171;
    btxtb1 = 229;
    
    rightColor.play();
  }
  
  if(mouseX > 690 && mouseX < 740 && mouseY > 285 && mouseY < 335){
    br2 = 140;
    bg2 = 71;
    bb2 = 153;
    
    btxtr2 = 196;
    btxtg2 = 171;
    btxtb2 = 229;
    
    btxtr1 = 196;
    btxtg1 = 171;
    btxtb1 = 229;
    
    rightColor.play();
  }
  
  if(mouseX > 805 && mouseX < 855 && mouseY > 285 && mouseY < 335){
    br3 = 0;
    bg3 = 50;
    bb3 = 160;
    
    btxtr2 = 196;
    btxtg2 = 171;
    btxtb2 = 229;
    
    btxtr1 = 196;
    btxtg1 = 171;
    btxtb1 = 229;
    
    rightColor.play();
  }
  
  if(mouseX > 630 && mouseX < 680 && mouseY > 195 && mouseY < 245){
    btxtr1 = 255;
    btxtg1 = 255;
    btxtb1 = 255;
    btxt1y = 830;
    
    btxtr2 = 196;
    btxtg2 = 171;
    btxtb2 = 229;
    
    wrongColor.play();
  }
  
  if(mouseX > 750 && mouseX < 800 && mouseY > 195 && mouseY < 245){
    btxtr2 = 255;
    btxtg2 = 255;
    btxtb2 = 255;
    
    btxtr1 = 196;
    btxtg1 = 171;
    btxtb1 = 229;
    btxt1y = 10;
    
    wrongColor.play();
  }
  
  
  
  //lesbian acceptance//
  if(mouseX > 630 && mouseX < 680 && mouseY > 176 && mouseY < 225){
    ltxtr1 = 255;
    ltxtg1 = 255;
    ltxtb1 = 255;
    ltxt1y = 830;
    
    ltxtr2 = 196;
    ltxtg2 = 171;
    ltxtb2 = 229;
    
    ltxtr3 = 196;
    ltxtg3 = 171;
    ltxtb3 = 229;
    
    ltxtr4 = 196;
    ltxtg4 = 171;
    ltxtb4 = 229;
    
    ltxtr5 = 196;
    ltxtg5 = 171;
    ltxtb5 = 229;
    
    ltxt2y = 10;
    ltxt3y = 10;
    ltxt4y = 10;
    ltxt5y = 10;
    
    wrongColor.play();
  }
  
  if(mouseX > 750 && mouseX < 800 && mouseY > 176 && mouseY < 225){
    ltxtr2 = 255;
    ltxtg2 = 255;
    ltxtb2 = 255;
    ltxt2y = 830;
    
    ltxtr1 = 196;
    ltxtg1 = 171;
    ltxtb1 = 229;
    
    ltxtr3 = 196;
    ltxtg3 = 171;
    ltxtb3 = 229;
    
    ltxtr4 = 196;
    ltxtg4 = 171;
    ltxtb4 = 229;
    
    ltxtr5 = 196;
    ltxtg5 = 171;
    ltxtb5 = 229;
    
    ltxt1y = 10;
    ltxt3y = 10;
    ltxt4y = 10;
    ltxt5y = 10;
    
    wrongColor.play();
  }
  
  if(mouseX > 575 && mouseX < 625 && mouseY > 256 && mouseY < 306){
    ltxtr3 = 255;
    ltxtg3 = 255;
    ltxtb3 = 255;
    ltxt3y = 830;
    
    ltxtr1 = 196;
    ltxtg1 = 171;
    ltxtb1 = 229;
    
    ltxtr2 = 196;
    ltxtg2 = 171;
    ltxtb2 = 229;
    
    ltxtr4 = 196;
    ltxtg4 = 171;
    ltxtb4 = 229;
    
    ltxtr5 = 196;
    ltxtg5 = 171;
    ltxtb5 = 229;
    
    ltxt1y = 10;
    ltxt2y = 10;
    ltxt4y = 10;
    ltxt5y = 10;
    
    wrongColor.play();
  }
  
  if(mouseX > 690 && mouseX < 740 && mouseY > 256 && mouseY < 306){
    ltxtr4 = 255;
    ltxtg4 = 255;
    ltxtb4 = 255;
    ltxt4y = 830;
    
    ltxtr1 = 196;
    ltxtg1 = 171;
    ltxtb1 = 229;
    
    ltxtr3 = 196;
    ltxtg3 = 171;
    ltxtb3 = 229;
    
    ltxtr2 = 196;
    ltxtg2 = 171;
    ltxtb2 = 229;
    
    ltxtr5 = 196;
    ltxtg5 = 171;
    ltxtb5 = 229;
    
    ltxt1y = 10;
    ltxt3y = 10;
    ltxt2y = 10;
    ltxt5y = 10;
    
    wrongColor.play();
  }
  
  if(mouseX > 805 && mouseX < 855 && mouseY > 256 && mouseY < 306){
    ltxtr5 = 255;
    ltxtg5 = 255;
    ltxtb5 = 255;
    ltxt5y = 830;
    
    ltxtr1 = 196;
    ltxtg1 = 171;
    ltxtb1 = 229;
    
    ltxtr3 = 196;
    ltxtg3 = 171;
    ltxtb3 = 229;
    
    ltxtr2 = 196;
    ltxtg2 = 171;
    ltxtb2 = 229;
    
    ltxtr4 = 196;
    ltxtg4 = 171;
    ltxtb4 = 229;
    
    ltxt1y = 10;
    ltxt3y = 10;
    ltxt2y = 10;
    ltxt4y = 10;
    
    wrongColor.play();
  }
  
  if(mouseX > 460 && mouseX < 510 && mouseY > 336 && mouseY < 386){
    r1 = 214;
    g1 = 41;
    b1 = 0;
    
    ltxtr1 = 196;
    ltxtg1 = 171;
    ltxtb1 = 229;
    ltxtr2 = 196;
    ltxtg2 = 171;
    ltxtb2 = 229;
    ltxtr3 = 196;
    ltxtg3 = 171;
    ltxtb3 = 229;
    ltxtr4 = 196;
    ltxtg4 = 171;
    ltxtb4 = 229;
    ltxtr5 = 196;
    ltxtg5 = 171;
    ltxtb5 = 229;
    
    rightColor.play();
  }
  
  if(mouseX > 575 && mouseX < 625 && mouseY > 336 && mouseY < 386){
    r2 = 255;
    g2 = 155;
    b2 = 85;
    
    ltxtr1 = 196;
    ltxtg1 = 171;
    ltxtb1 = 229;
    ltxtr2 = 196;
    ltxtg2 = 171;
    ltxtb2 = 229;
    ltxtr3 = 196;
    ltxtg3 = 171;
    ltxtb3 = 229;
    ltxtr4 = 196;
    ltxtg4 = 171;
    ltxtb4 = 229;
    ltxtr5 = 196;
    ltxtg5 = 171;
    ltxtb5 = 229;
    
    rightColor.play();
  }
  
  if(mouseX > 690 && mouseX < 740 && mouseY > 336 && mouseY < 386){
    r3 = 255;
    g3 = 255;
    b3 = 255;
    
    ltxtr1 = 196;
    ltxtg1 = 171;
    ltxtb1 = 229;
    ltxtr2 = 196;
    ltxtg2 = 171;
    ltxtb2 = 229;
    ltxtr3 = 196;
    ltxtg3 = 171;
    ltxtb3 = 229;
    ltxtr4 = 196;
    ltxtg4 = 171;
    ltxtb4 = 229;
    ltxtr5 = 196;
    ltxtg5 = 171;
    ltxtb5 = 229;
    
    rightColor.play();
  }
  
  if(mouseX > 805 && mouseX < 855 && mouseY > 336 && mouseY < 386){
    r4 = 212;
    g4 = 97;
    b4 = 166;
    
    ltxtr1 = 196;
    ltxtg1 = 171;
    ltxtb1 = 229;
    ltxtr2 = 196;
    ltxtg2 = 171;
    ltxtb2 = 229;
    ltxtr3 = 196;
    ltxtg3 = 171;
    ltxtb3 = 229;
    ltxtr4 = 196;
    ltxtg4 = 171;
    ltxtb4 = 229;
    ltxtr5 = 196;
    ltxtg5 = 171;
    ltxtb5 = 229;
    
    rightColor.play();
  }
  
  if(mouseX > 920 && mouseX < 970 && mouseY > 336 && mouseY < 386){
    r5 = 165;
    g5 = 0;
    b5 = 98;
    
    ltxtr1 = 196;
    ltxtg1 = 171;
    ltxtb1 = 229;
    ltxtr2 = 196;
    ltxtg2 = 171;
    ltxtb2 = 229;
    ltxtr3 = 196;
    ltxtg3 = 171;
    ltxtb3 = 229;
    ltxtr4 = 196;
    ltxtg4 = 171;
    ltxtb4 = 229;
    ltxtr5 = 196;
    ltxtg5 = 171;
    ltxtb5 = 229;
    
    rightColor.play();
  }
  
  if(mouseX > 630 && mouseX < 680 && mouseY > 176 && mouseY < 226){
    fill(255);
    textSize(32);
    text('dont lie to yourself', width/2, 830);
  }
  
  if(mouseX > 750 && mouseX < 800 && mouseY > 176 && mouseY < 226){
    fill(255);
    textSize(32);
    text('youve tried this before', width/2, 830);
  }
  
  if(mouseX > 575 && mouseX < 625 && mouseY > 256 && mouseY < 306){
    fill(255);
    textSize(32);
    text('shouldnt you know what you are by now??', width/2, 830);
  }
  
  if(mouseX > 690 && mouseX < 740 && mouseY > 256 && mouseY < 306){
    fill(255);
    textSize(32);
    text('youre kidding, right?', width/2, 830);
  }
  
  if(mouseX > 805 && mouseX < 855 && mouseY > 256 && mouseY < 306){
    fill(255);
    textSize(32);
    text('stop', width/2, 830);
  }
}

function start(){
  this.enter = function(){
    
  }
  
  this.draw = function(){
    background(0);
    
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text("press anywhere to start", width/2, height/2);
    
    if(mouseIsPressed){
      mgr.showScene(home);
      isPlaying = true;
    }
  }
}

//-------------------HOME-----------------------//

function home(){
  this.enter = function(){
    
  }
  
  this.draw = function(){
    background(207, 172, 253);
    
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 1000, 600);
    
    textAlign(CENTER);
    fill("white");
    textSize(72);
    textFont("VT323");
    text("Identity Chase", width/2, 90);
    
    image(me, 270, 270, 300, 300);
    stroke(0);
    strokeWeight(4);
    rect(880, 450, 550, 440);
    
    noStroke();
    fill(0);
    textSize(26);
    text("this is you. you’re the first born daughter to two\n" + "loving parents. you were raised in a catholic\n" + "household, went to catholic elementary and middle\n" + "school, completed all the necessary sacraments,\n" + "joined your church’s local youth group and became a\n" + "leader for four years, following in your parent’s\n" + "footsteps. you did everything you were supposed to\n" + "do. you thought you knew who you were. but this is\n" + "just the beginning of your chase to find your true\n" + "identity. your story starts after graduating 8th\n" + "grade, beginning an all-girls high school.", 880, 270);
    textSize(32);
    fill(243, 71, 71);
    text("press / to look at the keyboard controls!", 880, 640);
  }
}

//--------------------GAME CONTROL SCREEN-------------------------//

function controls(){
  this.enter = function(){
    
  }


  this.draw = function(){
    background("orange");
    
    textAlign(CENTER);
    noStroke();
    fill("white");
    textSize(72);
    textFont("VT323");
    text("KEYBOARD CONTROLS", width/2, 90);
    
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 1000, 600);
    
    image(instructionKey, 100, 170, 650, 550);
    
    fill(0);
    textSize(32);
    text("you'll see one or more of these keys\n" + "in every stage of 'identity chase' and\n" + "let you know how to play and complete it.", 900, 350);
    
    fill(243, 71, 71);
    text("if you're ready to begin, press 'S' and i hope\n" + "you enjoy playing through this experience!", 900, 500);
  }
}

//----------------------TIMELINE 1-------------------------------//

function timeline1(){
    this.enter = function(){
      TLme = 40;
    }
  
    this.draw = function(){
      background(168, 196, 246);
      //console.log(TLme);
      
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(width/2, height/2, 1500, 600);
      image(Rarrow, 1150, 780, 50, 50);
      
      stroke(0);
      strokeWeight(4);
      line(50, 450, 1400, 450);
      fill(0);
      noStroke();
      ellipse(210, 450, 10, 10);
      ellipse(450, 450, 10, 10);
      ellipse(720, 450, 10, 10);
      ellipse(980, 450, 10, 10);
      ellipse(1240, 450, 10, 10);
      
      image(me, TLme, 390, 50, 55);
      
      if(TLme == 160){
        stroke(214, 41, 0);
        strokeWeight(3);
        fill(255);
        rect(214, 280, 290, 200);
        noStroke();
        fill("black");
        textSize(20);
        textFont("VT323");
        text("you've just graduated 8th grade\n" + "and are getting ready to begin\n" + "your high school experience. you\n" + "don't know anyone going in, and\n" + "you have no idea what to expect.\n" + "let's see what the next four years\n" + "have in store for you...\n", 215, 210);
      }
      
      if(TLme > 160){
        mgr.showScene(denial);
      }
    }
}


//---------------------DENIAL------------------------//

function denial(){
  this.enter = function(){
    phase = 0;
    DmeX = 0;
    DmeY = 353;
    
    npc1X = 200;
    npc1Y = 355;
    npc3X = 600;
    npc3Y = 355;
    npc4X = 1100;
    npc4Y = 355;
    
    npc2X = 800;
    npc2Y = 655;
    npc5X = 1200;
    npc5Y = 655;
    npc6X = 300;
    npc6Y = 655;
    
    lockers = [
   
    {
      x: 20,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 60,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 100,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 140,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 180,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 220,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 260,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 300,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 340,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 380,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 420,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 460,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 500,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 540,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 580,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 620,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 660,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 700,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 740,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 780,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 820,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 860,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 900,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 940,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 980,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 1020,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 1060,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 1100,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 1140,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 1180,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 1220,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 1260,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 1300,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 1340,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 1380,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 1420,
      y: 675,
      w: 40,
      h: 150
    },
    {
      x: 20,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 60,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 100,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 140,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 180,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 220,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 260,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 300,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 340,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 380,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 420,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 460,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 500,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 540,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 580,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 620,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 660,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 700,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 740,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 780,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 820,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 860,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 900,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 940,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 980,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 1020,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 1060,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 1100,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 1140,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 1180,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 1220,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 1260,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 1300,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 1340,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 1380,
      y: 375,
      w: 40,
      h: 150
    },
    {
      x: 1420,
      y: 375,
      w: 40,
      h: 150
    }
  ]
  }
  
  this.draw = function(){
    background(128, 0, 0);
    //console.log(DmeX);
    
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 1500, 600);
    stroke(0);
    strokeWeight(2);
    line(0, 450, 1450, 450);
    image(Larrow, 1070, 780, 50, 50);
    image(Rarrow, 1150, 780, 50, 50);
    
    noStroke();
    fill(0);
    textSize(50);
    text("PHS", width/2, 240);
    textSize(40);
    text("Catholic All-Girls High School", width/2, 530);
    
    //lockers
    for(let i = 0; i < lockers.length; i++){
      fill(182, 205, 247);
      strokeWeight(1.5);
      stroke(51);
      rect(lockers[i].x,lockers[i].y,lockers[i].w,lockers[i].h);
    }
  
  image(PHS[0], npc1X, npc1Y, 70, 100);
  image(PHS[2], npc3X, npc3Y, 70, 100);
  image(PHS[5], npc4X, npc4Y, 70, 100);
    
  image(PHS[1], npc2X, npc2Y, 70, 100);
  image(PHS[4], npc5X, npc5Y, 70, 100);
  image(PHS[3], npc6X, npc6Y, 70, 100);
  
    
    if(phase == 0){
    image(emma[0], DmeX, DmeY, 70, 100);
  }
  
  if(phase == 1){
    image(PHSmeLSP, DmeX, DmeY, 70, 100);
  }
  
  if(phase == 2){
    image(PHSmeRSP, DmeX, DmeY, 70, 100);
  }
    
  if(DmeX < 0){
    DmeX = 0;
  }
  
  if(DmeX > 1370){
    DmeX = 1370;
  }
    
  if(DmeX == 1370 && DmeY == 353){
    DmeX = 0;
    DmeY = 655;
  }
    
  if(DmeX == 1370 && DmeY == 655){
    mgr.showScene(denial2);
  }
    
  checkCollision();
  }
}

//-------------------------DENIAL2-----------------------------//
function denial2(){
  this.enter = function(){
    sr1 = 237;
    sg1 = 234;
    sb1 = 222;
  
    sr2 = 237;
    sg2 = 234;
    sb2 = 222;
  
    sr3 = 237;
    sg3 = 234;
    sb3 = 222;
  
    sr4 = 237;
    sg4 = 234;
    sb4 = 222;
  
    sr5 = 237;
    sg5 = 234;
    sb5 = 222;
  }
  
  this.draw = function(){
    background(196, 171, 229);
    //console.log(mouseX, mouseY);
    
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 1000, 600);
    image(Mclick, 1150, 780, 50, 50);
    
    fill(255);
    textSize(36);
    text("my sexuality...", width/2, 80);
  
  stroke(0, 0, 0);
  strokeWeight(0.2);
  
  fill(255, 255, 255);
  ellipse(630, 240, 50, 50);
    stroke(0, 0, 0);
    strokeWeight(0.1);
    fill(255, 255, 255, 127);
    ellipse(630, 240, 60, 60);
  
  fill(0, 0, 0);
  ellipse(800, 240, 50, 50);
    noStroke();
    fill(0, 0, 0, 63);
    ellipse(800, 240, 60, 60);
  
  //flag outline
  noStroke();
  fill(sr1, sg1, sb1);
  rect(720, 400, 200, 30);
  fill(sr2, sg2, sb2);
  rect(720, 430, 200, 30);
  fill(sr3, sg3, sb3);
  rect(720, 460, 200, 30);
  fill(sr4, sg4, sb4);
  rect(720, 490, 200, 30);
  fill(sr5, sg5, sb5);
  rect(720, 520, 200, 30);
  
  stroke(0, 0, 0);
  strokeWeight(5);
  line(620, 640, 620, 390);
    
    if(sr1 == 0 && sg1 == 0 && sb1 == 0 && sr2 == 255 && sg2 == 255 && sb2 == 255 && sr3 == 0 && sg3 == 0 && sb3 == 0 && sr4 == 255 && sg4 == 255 && sb4 == 255 && sr5 == 0 && sg5 == 0 && sb5 == 0){
    timerNum ++; 
      if(timerNum > 300){
        timerNum = 0; 
       // print("joe is good"); 
        mgr.showScene(timeline2);
      }
    noStroke();
    fill(255);
    textSize(32);
    text("You chose the straight flag!\n" + "So congrats, you're straight!", width/2, 810);
  }
  }
}

//--------------------------TIMELINE 2---------------------------//

function timeline2(){
  this.enter = function(){
    TL2me = 220;
  }
  
  this.draw = function(){
    background(168, 196, 246);
      //console.log(TL2me);
      
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(width/2, height/2, 1500, 600);
      image(Rarrow, 1150, 780, 50, 50);
      
      stroke(0);
      strokeWeight(4);
      line(50, 450, 1400, 450);
      fill(0);
      noStroke();
      ellipse(210, 450, 10, 10);
      ellipse(450, 450, 10, 10);
      ellipse(720, 450, 10, 10);
      ellipse(980, 450, 10, 10);
      ellipse(1240, 450, 10, 10);
    
      stroke(214, 41, 0);
      strokeWeight(3);
      fill(255);
      rect(214, 280, 290, 200);
      noStroke();
      fill("black");
      textSize(20);
      textFont("VT323");
      text("you've just graduated 8th grade\n" + "and are getting ready to begin\n" + "your high school experience. you\n" + "don't know anyone going in, and\n" + "you have no idea what to expect.\n" + "let's see what the next four years\n" + "have in store for you...\n", 215, 210);
      
      image(me, TL2me, 390, 50, 55);
      
      if(TL2me == 400){
        stroke(255, 155, 85);
        strokeWeight(3);
        fill(255);
        rect(454, 590, 300, 150);
        noStroke();
        fill("black");
        textSize(20);
        textFont("VT323");
        text("it's junior year of high school\n" + "and you feel your head doubting\n" + "your sexuality. it's trying to tell\n" + "you something, but you don't want\n" + "to listen. you try to ignore it.\n", 455, 545);
      }
      
      if(TL2me > 400){
        mgr.showScene(anger);
      }
  }
}

//-----------------ANGER-------------------------//

function anger(){
  this.enter = function(){
    AngMeX = 20;
    AngMeY = 650;
    AngPhase = 0;
  }
  
  this.draw = function(){
    background(254, 190, 201);
    //console.log(mouseX, mouseY);
    //console.log(AngMeX);
    
    fill(255);
    rectMode(CENTER);
    rect(width/2, height/2, 1500, 600);
    image(Uarrow, 1090, 760, 50, 50);
    image(Rarrow, 1150, 800, 50, 50);
    image(Darrow, 1090, 840, 50, 50);
  
  //Wall1//
  noStroke();
  fill(219, 244, 185);
  wall1 = rect(200, 570, 40, 360);
  
  //Wall2//
  noStroke();
  fill(244, 240, 185);
  wall2 = rect(500, 330, 40, 360);
    
  //Wall3//
  noStroke();
  fill(168, 209, 209);
  wall3 = rect(800, 570, 40, 360);
    
  //Wall4//
  noStroke();
  fill(158, 161, 212);
  wall4 = rect(1100, 330, 40, 360);
  
  //Wall1 Collision//
  if (AngMeX > 110 && AngMeX < 205 && AngMeY > 290){
    AngMeX = 105;
    wallSlam.play();
  }
  
  //Wall2 Collision//
  if (AngMeX > 410 && AngMeX < 450 && AngMeY < 500){
    AngMeX = 405;
    wallSlam.play();
  }
    
  //Wall3 Collision//
  if (AngMeX > 710 && AngMeX < 750 && AngMeY > 290){
    AngMeX = 705;
    wallSlam.play();
  }
    
  //Wall4 Collision//
  if (AngMeX > 1010 && AngMeX < 1050 && AngMeY < 500){
    AngMeX = 1005;
    wallSlam.play();
  }
    
  //Wall4 Event//
   if (AngMeX >= 1010 && AngMeX < 1080){
      image(eye, 1200, 560, 120, 100);
     
     textSize(26);
    fill(0, 102, 153);
    text("you are lying to yourself!!!\n" + "you like girls.\n" + "accept it!", 1280, 450);
    
      if (AngMeX >= 1030 && AngMeX < 1090) {
        textSize(34);
        fill(0, 102, 153);
        text("no, i'm not!! STOP.", width/2, 830);
      }
    }
  
  //Wall3 Event//
   if (AngMeX >= 720 && AngMeX < 790){
      image(eye, 850, 250, 120, 100);
     
     textSize(26);
    fill(0, 102, 153);
    text("just try with girls.\n" + "try with her.\n" + "she wants you to.", 950, 180);
    
      if (AngMeX >= 730 && AngMeX < 790) {
        textSize(37);
        fill(0, 102, 153);
        text("no.", width/2, 830);
      }
    }
    
  //Wall2 Event//
   if (AngMeX >= 410 && AngMeX < 480){
      image(eye, 550, 560, 120, 100);
     
     textSize(26);
    fill(0, 102, 153);
    text("you're not straight.\n" + "you like girls.\n", 760, 550);
    
      if (AngMeX >= 430 && AngMeX < 490) {
        textSize(34);
        fill(0, 102, 153);
        text("yes, i am straight", width/2, 830);
      }
    }
  
  //Wall1 Event//
  if (AngMeX >= 120 && AngMeX < 190){
    image(eye, 270, 250, 120, 100);
    
    textSize(26);
    fill(0, 102, 153);
    text("i know you're friends,\n" + "but she likes you.\n" + "go out with her.", 470, 190);
    
      if (AngMeX >= 140 && AngMeX < 190) {
        textSize(34);
        fill(0, 102, 153);
        text("i don't like girls", width/2, 830);
      }

  }
    
    if(AngPhase == 0){
    image(emma[1], AngMeX, AngMeY, 70, 100);
  }
  
  if(AngPhase == 1){
    image(HSmeLSP, AngMeX, AngMeY, 70, 100);
  }
  
  if(AngPhase == 2){
    image(HSmeRSP, AngMeX, AngMeY, 70, 100);
  }
  
  //Go off page//
  // if (AngMeX >= 700){
  //   AngMeX = 20;
  // }
  if (AngMeX < 0){
    AngMeX = 0;
  }
  if (AngMeY > 650){
    AngMeY = 650;
  }
  if (AngMeY < 140){
    AngMeY = 140;
  }
  if(AngMeX > 1380){
    mgr.showScene(timeline3);
  }
  
  }
}

//-------------------------TIMELINE 3-----------------------------//

function timeline3(){
  this.enter = function(){
    TL3me = 460;
  }
  
  this.draw = function(){
    background(168, 196, 246);
      //console.log(TL3me);
      
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(width/2, height/2, 1500, 600);
      image(Rarrow, 1150, 780, 50, 50);
      
      stroke(0);
      strokeWeight(4);
      line(50, 450, 1400, 450);
      fill(0);
      noStroke();
      ellipse(210, 450, 10, 10);
      ellipse(450, 450, 10, 10);
      ellipse(720, 450, 10, 10);
      ellipse(980, 450, 10, 10);
      ellipse(1240, 450, 10, 10);
    
      stroke(214, 41, 0);
      strokeWeight(3);
      fill(255);
      rect(214, 280, 290, 200);
      noStroke();
      fill("black");
      textSize(20);
      textFont("VT323");
      text("you've just graduated 8th grade\n" + "and are getting ready to begin\n" + "your high school experience. you\n" + "don't know anyone going in, and\n" + "you have no idea what to expect.\n" + "let's see what the next four years\n" + "have in store for you...\n", 215, 210);
    
        stroke(255, 155, 85);
        strokeWeight(3);
        fill(255);
        rect(454, 590, 300, 150);
        noStroke();
        fill("black");
        textSize(20);
        textFont("VT323");
        text("it's junior year of high school\n" + "and you feel your head doubting\n" + "your sexuality. it's trying to tell\n" + "you something, but you don't want\n" + "to listen. you try to ignore it.\n", 455, 545);
      
      image(me, TL3me, 390, 50, 55);
      
      if(TL3me == 670){
        stroke(245, 245, 244);
        strokeWeight(3);
        fill(255);
        rect(724, 280, 300, 200);
        noStroke();
        fill("black");
        textSize(20);
        textFont("VT323");
        text("you graduate high school. you dorm\n" + "at suny purchase for your first year.\n" + "you've said goodbye to the life you\n" + "you leave behind. you begin to\n" + "think for yourself and, you finally\n" + "acknowledge those thoughts you\n" + "buried since high school.", 725, 210);
      }
      
      if(TL3me > 670){
        mgr.showScene(bargaining);
      }
  }
}

//------------------------BARGAINING-----------------------------//

function bargaining(){
  this.enter = function(){
    
  }
  
  this.draw = function(){
    background(214, 2, 112);
    //console.log(mouseX);
    
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 1000, 600);
    image(mouse, 1150, 780, 50, 50);
    
    fill(255);
    textSize(36);
    text("why does it feel like i'm lying to myself?", width/2, 80);
    text("maybe i don't have to choose between boys or girls...", width/2, 830);
    
    image(Lthought, 300, 250, 220, 180);
    image(boys[3], 365, 275, 60, 100);
    image(Rthought, 900, 250, 220, 180);
    image(IdealGF, 985, 275, 70, 100);
    image(Mme, 640, 460, 150, 180);
    
    if(mouseX < 630){
      image(Lme, 635, 460, 155, 180);
    }
    
    if(mouseX > 820){
      image(Rme, 640, 460, 150, 180);
    }
    
      timerNum ++; 
      if(timerNum > 500){
        timerNum = 0; 
       // print("joe is good"); 
        mgr.showScene(bargaining2);
      }
  }
}

//-----------------------BARGAINING2-------------------------------//

function bargaining2(){
  this.enter = function(){
    br1 = 237;
    bg1 = 234;
    bb1 = 222;
  
    br2 = 237;
    bg2 = 234;
    bb2 = 222;
  
    br3 = 237;
    bg3 = 234;
    bb3 = 222;
    
    btxtr1 = 196;
    btxtg1 = 171;
    btxtb1 = 229;
    btxt1y = 830;
    
    btxtr2 = 196;
    btxtg2 = 171;
    btxtb2 = 229;
  }
  
  this.draw = function(){
     background(196, 171, 229);
    //console.log(mouseX, mouseY);
    
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 1000, 600);
    image(Mclick, 1150, 780, 50, 50);
    
    fill(255);
    textSize(36);
    text("guess i have to change my sexuality again...", width/2, 80);
  
  stroke(0, 0, 0);
  strokeWeight(0.2);
  
  //straight colors
  fill(255, 255, 255);
  ellipse(655, 220, 50, 50);
    stroke(0, 0, 0);
    strokeWeight(0.1);
    fill(255, 255, 255, 63);
    ellipse(655, 220, 60, 60);
  
  fill(0, 0, 0);
  ellipse(775, 220, 50, 50);
    noStroke();
    fill(0, 0, 0, 63);
    ellipse(775, 220, 60, 60);
    
  //bisexual colors
  fill(208, 0, 112);
  ellipse(600, 310, 50, 50);
    fill(208, 0, 112, 63);
    ellipse(600, 310, 60, 60);
    
  fill(140, 71, 153);
  ellipse(715, 310, 50, 50);
    fill(140, 71, 153, 63);
    ellipse(715, 310, 60, 60);
    
  fill(0, 50, 160);
  ellipse(830, 310, 50, 50);
    fill(0, 50, 160, 63);
    ellipse(830, 310, 60, 60);
  
  //flag outline
  noStroke();
  fill(br1, bg1, bb1);
  rect(720, 410, 200, 50);
  fill(br2, bg2, bb2);
  rect(720, 447, 200, 25);
  fill(br3, bg3, bb3);
  rect(720, 484, 200, 50);
  
  stroke(0, 0, 0);
  strokeWeight(5);
  line(620, 640, 620, 390);
    
    noStroke();
    fill(btxtr2, btxtg2, btxtb2);
    textSize(32);
    text("i don't think that's believable anymore", width/2, 830);
    
    noStroke();
    fill(btxtr1, btxtg1, btxtb1);
    textSize(32);
    text("girl...", width/2, btxt1y);
    
    if(br1 == 205 && bg1 == 0 && bb1 == 112 && br2 == 140 && bg2 == 71 && bb2 == 153 && br3 == 0 && bg3 == 50 && bb3 == 160){
    fill(255);
    textSize(32);
    text("You chose the bisexual flag!\n" + "Great job for finally accepting that you like girls!", width/2, 810);
      timerNum ++; 
      if(timerNum > 300){
        timerNum = 0; 
       // print("joe is good"); 
        mgr.showScene(timeline4);
      }
  }
  }
}

//---------------------------TIMELINE 4----------------------------//

function timeline4(){
  this.enter = function(){
    TL4me = 720;
  }
  
  this.draw = function(){
    background(168, 196, 246);
      //console.log(TL4me);
      
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(width/2, height/2, 1500, 600);
      image(Rarrow, 1150, 780, 50, 50);
      
      stroke(0);
      strokeWeight(4);
      line(50, 450, 1400, 450);
      fill(0);
      noStroke();
      ellipse(210, 450, 10, 10);
      ellipse(450, 450, 10, 10);
      ellipse(720, 450, 10, 10);
      ellipse(980, 450, 10, 10);
      ellipse(1240, 450, 10, 10);
    
      stroke(214, 41, 0);
      strokeWeight(3);
      fill(255);
      rect(214, 280, 290, 200);
      noStroke();
      fill("black");
      textSize(20);
      textFont("VT323");
      text("you've just graduated 8th grade\n" + "and are getting ready to begin\n" + "your high school experience. you\n" + "don't know anyone going in, and\n" + "you have no idea what to expect.\n" + "let's see what the next four years\n" + "have in store for you...\n", 215, 210);
    
        stroke(255, 155, 85);
        strokeWeight(3);
        fill(255);
        rect(454, 590, 300, 150);
        noStroke();
        fill("black");
        textSize(20);
        textFont("VT323");
        text("it's junior year of high school\n" + "and you feel your head doubting\n" + "your sexuality. it's trying to tell\n" + "you something, but you don't want\n" + "to listen. you try to ignore it.\n", 455, 545);
    
        stroke(245, 245, 244);
        strokeWeight(3);
        fill(255);
        rect(724, 280, 300, 200);
        noStroke();
        fill("black");
        textSize(20);
        textFont("VT323");
        text("you graduate high school. you dorm\n" + "at suny purchase for your first year.\n" + "you've said goodbye to the life you\n" + "you leave behind. you begin to\n" + "think for yourself and, you finally\n" + "acknowledge those thoughts you\n" + "buried since high school.", 725, 210);
      
      image(me, TL4me, 390, 50, 55);
      
      if(TL4me == 930){
        stroke(212, 97, 166);
        strokeWeight(3);
        fill(255);
        rect(984, 590, 290, 190);
        noStroke();
        fill("black");
        textSize(20);
        textFont("VT323");
        text("quarantine is nearing the end.\n" + "you've come a long way. being\n" + "stuck inside has forced you to\n" + "accept that you like girls. you\n" + "aren't straight. congrats! but\n" + "you still feel like something's\n" + "missing...\n", 985, 520);
      }
      
      if(TL4me > 930){
        mgr.showScene(acceptance);
      }
  }
}

//--------------------------ACCEPTANCE 1----------------------------//

function acceptance(){
  this.enter = function(){
    PmeY = 200;
    Pme2Y = 250;
  }
  
  this.draw = function(){
    background(245, 133, 186);
    //console.log(Pme2Y);
    
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 1000, 600);
    
    fill(255);
    textSize(36);
    text("okay great. i like girls too.\n" + "so why is my brain questioning myself?", width/2, 60);
    
    image(phone, 520, 170, 400, 550);
    image(textMe2, 910, PmeY, 55, 75);
    image(textMe1, 460, Pme2Y, 60, 80);
    
    if(Pme2Y == 250){
      image(Rarrow, 1150, 780, 50, 50);
      image(text1, 575, 255, 250, 70);
      fill(0);
      textSize(24);
      text("so you like girls now?", 700, 293);
    }
    
    if(PmeY == 300){
      fill(245, 133, 186);
      rect(1180, 810, 60, 60);
      image(Larrow, 1070, 780, 50, 50);
      image(text1, 575, 255, 250, 70);
      fill(0);
      textSize(24);
      text("so you like girls now?", 700, 293);
      
      image(text2, 700, 320, 150, 60);
      fill(0);
      textSize(24);
      text("yeah, i do", 775, 353);
    }
    
    if(Pme2Y == 350){
      fill(245, 133, 186);
      rect(1090, 810, 60, 60);
      image(Rarrow, 1150, 780, 50, 50);
      image(text1, 575, 255, 250, 70);
      fill(0);
      textSize(24);
      text("so you like girls now?", 700, 293);
      image(text2, 700, 320, 150, 60);
      text("yeah, i do", 775, 353);
      
      image(text1, 575, 385, 250, 70);
      fill(0);
      textSize(20);
      text("can you see yourself\n" + "marrying a girl?", 700, 408);
    }
    
    if(PmeY == 400){
      fill(245, 133, 186);
      rect(1180, 810, 60, 60);
      image(Larrow, 1070, 780, 50, 50);
      image(text1, 575, 255, 250, 70);
      fill(0);
      textSize(24);
      text("so you like girls now?", 700, 293);
      image(text2, 700, 320, 150, 60);
      textSize(24);
      text("yeah, i do", 775, 353);
      image(text1, 575, 385, 250, 70);
      textSize(20);
      text("can you see yourself\n" + "marrying a girl?", 700, 408);
      
      image(text2, 750, 450, 100, 60);
      fill(0);
      textSize(24);
      text("yes.", 803, 482);
    }
    
    if(Pme2Y == 450){
      fill(245, 133, 186);
      rect(1090, 810, 60, 60);
      image(Rarrow, 1150, 780, 50, 50);
      image(text1, 575, 255, 250, 70);
      fill(0);
      textSize(24);
      text("so you like girls now?", 700, 293);
      image(text2, 700, 320, 150, 60);
      textSize(24);
      text("yeah, i do", 775, 353);
      image(text1, 575, 385, 250, 70);
      textSize(20);
      text("can you see yourself\n" + "marrying a girl?", 700, 408);
      image(text2, 750, 450, 100, 60);
      textSize(24);
      text("yes.", 803, 482);
      
      image(text1, 575, 500, 250, 70);
      textSize(20);
      text("can you see yourself\n" + "marrying a boy?", 700, 523);
    }

    if(PmeY == 500){
      fill(245, 133, 186);
      rect(1180, 810, 60, 60);
      image(Larrow, 1070, 780, 50, 50);
      image(text1, 575, 255, 250, 70);
      fill(0);
      textSize(24);
      text("so you like girls now?", 700, 293);
      image(text2, 700, 320, 150, 60);
      textSize(24);
      text("yeah, i do", 775, 353);
      image(text1, 575, 385, 250, 70);
      textSize(20);
      text("can you see yourself\n" + "marrying a girl?", 700, 408);
      image(text2, 750, 450, 100, 60);
      textSize(24);
      text("yes.", 803, 482);
      image(text1, 575, 500, 250, 70);
      textSize(20);
      text("can you see yourself\n" + "marrying a boy?", 700, 523);
      
      image(text2, 750, 570, 100, 60);
      textSize(24);
      text("...", 800, 600);
    }
    
    if(PmeY > 500){
      mgr.showScene(denial3);
    }
    
    if(Pme2Y > 450){
      mgr.showScene(denial3);
    }
    
  }
}

//-----------------------DENIAL3----------------------------------//

function denial3(){
  this.enter = function(){
    BoyX = 120;
    BoyY = 490;
    
    Bphase = 0;
  }
  
  this.draw = function(){
    background(192, 226, 164);
    //console.log(BoyX, BoyY);
    
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 1500, 600);
    image(Uarrow, 1150, 780, 50, 50);
    
    fill(235, 195, 106);
    rect(420, 550, 500, 40);
    rect(420, 510, 420, 40);
    rect(420, 470, 340, 40);
    rect(420, 430, 260, 40);
    rect(420, 390, 180, 40);
    rect(420, 350, 100, 40);
    
    fill(255);
    textSize(32);
    text("emma's\n" + "impossible\n" + "standards !!", 420, 430);
    
    image(emma[4], 410, 250, 60, 80);
    
    if(Bphase == 0){
      image(boys[4], BoyX, BoyY, 60, 80);
    }
    
    if(Bphase == 1){
      image(percyRSP, BoyX, BoyY, 60, 80);
    }
    
    stroke(0);
    strokeWeight(1);
    fill(255);
    rect(1050, 450, 500, 450);
    
    if(BoyX == 120 && BoyY == 490){
      noStroke();
      fill(255);
      textSize(32);
      text("i could only date a man if they meet\n" + "each and every one of these qualities", width/2, 60);
    }
    
    if(BoyX == 160 && BoyY == 450){
      noStroke();
      fill(255);
      textSize(32);
      text("i could only date a man if they meet\n" + "each and every one of these qualities", width/2, 60);
      
      fill(0);
      textSize(25);
      text("1. has to be loyal", 920, 280);
    }
    
    if(BoyX == 200 && BoyY == 410){
      noStroke();
      fill(255);
      textSize(32);
      text("i could only date a man if they meet\n" + "each and every one of these qualities", width/2, 60);
      
      fill(0);
      textSize(25);
      text("1. has to be loyal", 920, 280);
      text("2. has to be respectful to women", 990, 330);
    }
    
    if(BoyX == 240 && BoyY == 370){
      noStroke();
      fill(255);
      textSize(32);
      text("i could only date a man if they meet\n" + "each and every one of these qualities", width/2, 60);
      
      fill(0);
      textSize(25);
      text("1. has to be loyal", 920, 280);
      text("2. has to be respectful to women", 990, 330);
      text("3. can't call me 'babe' or 'baby'", 995, 380);
    }
    
    if(BoyX == 280 && BoyY == 330){
      noStroke();
      fill(255);
      textSize(32);
      text("i could only date a man if they meet\n" + "each and every one of these qualities", width/2, 60);
      
      fill(0);
      textSize(25);
      text("1. has to be loyal", 920, 280);
      text("2. has to be respectful to women", 990, 330);
      text("3. can't call me 'babe' or 'baby'", 995, 380);
      text("4. cannot be an 'alpha' male", 970, 430);
    }
    
    if(BoyX == 320 && BoyY == 290){
      noStroke();
      fill(255);
      textSize(32);
      text("i could only date a man if they meet\n" + "each and every one of these qualities", width/2, 60);
      
      fill(0);
      textSize(25);
      text("1. has to be loyal", 920, 280);
      text("2. has to be respectful to women", 990, 330);
      text("3. can't call me 'babe' or 'baby'", 995, 380);
      text("4. cannot be an 'alpha' male", 970, 430);
      text("5. no body builders", 925, 480);
    }
    
    if(BoyX == 360 && BoyY == 250){
      noStroke();
      fill(0);
      textSize(25);
      text("1. has to be loyal", 920, 280);
      text("2. has to be respectful to women", 990, 330);
      text("3. can't call me 'babe' or 'baby'", 995, 380);
      text("4. cannot be an 'alpha' male", 970, 430);
      text("5. no body builders", 925, 480);
      text("6. can't reveal their lower half, ever", 1020, 530);
      text("7.,......", 880, 580);
      text("8.,......", 880, 630);
      
      noStroke();
      fill(255);
      textSize(32);
      text("i could only date a man if they meet\n" + "each and every one of these qualities", width/2, 60);
      
      textSize(36);
      fill(255);
      text("if i meet a man with every one of these qualities,\n" + "surely i can't turn him away, right?", width/2, 810);
    }
    
    if(BoyX >= 360 && BoyY <= 250){
      BoyX = 360;
      BoyY = 250;
      
      timerNum ++; 
      if(timerNum > 500){
        timerNum = 0; 
        mgr.showScene(depression);
      }
    }
    
  }
}

//-----------------------DEPRESSION-------------------------------//

function depression(){
  this.enter = function(){
    
  }
  
  this.draw = function(){
    background(179, 228, 191);
    
    textAlign(CENTER);
    fill("white");
    textSize(36);
    text("this boy likes me.\n" + "do i like him back?\n", width/2, 60);
  
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 1000, 600);
    image(mouse, 1150, 780, 50, 50);
    
    image(boys[0], 320, 200, 60, 100);
    image(emma[2], 400, 200, 70, 100);
    fill(255, 155, 85)
    rect(850, 250, 500, 70);
    
    image(boys[1], 320, 400, 60, 100);
    image(emma[6], 400, 400, 65, 100);
    rect(850, 450, 500, 70);
    
    image(boys[2], 320, 600, 60, 100);
    image(emma[5], 400, 607, 60, 90);
    rect(850, 650, 500, 70);
    
    //console.log(mouseX, mouseY);
    
    if(mouseX > 600 && mouseX < 1100 && mouseY > 217 && mouseY < 285){
      fill("white");
      textSize(24);
      text("sorry, i don't date coworkers.", 850, 260);
    }
    
    if(mouseX > 600 && mouseX < 1100 && mouseY > 417 && mouseY < 485){
      fill("white");
      textSize(24);
      text("i'm not ready for a relationship right now.", 850, 460);
    }
    
    if(mouseX > 600 && mouseX < 1100 && mouseY > 617 && mouseY < 685){
      fill("white");
      textSize(24);
      text("i only see you as a friend, i'm sorry.", 850, 660);
    }
    
    timerNum ++; 
      if(timerNum > 500){
        timerNum = 0; 
       // print("joe is good"); 
        mgr.showScene(timeline5);
      }
  }
}

//---------------------------TIMELINE 5----------------------------//

function timeline5(){
  this.enter = function(){
    TL5me = 980;
  }
  
  this.draw = function(){
    background(168, 196, 246);
      //console.log(TL5me);
      
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(width/2, height/2, 1500, 600);
      image(Rarrow, 1150, 780, 50, 50);
      
      stroke(0);
      strokeWeight(4);
      line(50, 450, 1400, 450);
      fill(0);
      noStroke();
      ellipse(210, 450, 10, 10);
      ellipse(450, 450, 10, 10);
      ellipse(720, 450, 10, 10);
      ellipse(980, 450, 10, 10);
      ellipse(1240, 450, 10, 10);
    
      stroke(214, 41, 0);
      strokeWeight(3);
      fill(255);
      rect(214, 280, 290, 200);
      noStroke();
      fill("black");
      textSize(20);
      textFont("VT323");
      text("you've just graduated 8th grade\n" + "and are getting ready to begin\n" + "your high school experience. you\n" + "don't know anyone going in, and\n" + "you have no idea what to expect.\n" + "let's see what the next four years\n" + "have in store for you...\n", 215, 210);
    
        stroke(255, 155, 85);
        strokeWeight(3);
        fill(255);
        rect(454, 590, 300, 150);
        noStroke();
        fill("black");
        textSize(20);
        textFont("VT323");
        text("it's junior year of high school\n" + "and you feel your head doubting\n" + "your sexuality. it's trying to tell\n" + "you something, but you don't want\n" + "to listen. you try to ignore it.\n", 455, 545);
    
        stroke(245, 245, 244);
        strokeWeight(3);
        fill(255);
        rect(724, 280, 300, 200);
        noStroke();
        fill("black");
        textSize(20);
        textFont("VT323");
        text("you graduate high school. you dorm\n" + "at suny purchase for your first year.\n" + "you've said goodbye to the life you\n" + "you leave behind. you begin to\n" + "think for yourself and, you finally\n" + "acknowledge those thoughts you\n" + "buried since high school.", 725, 210);
    
        stroke(212, 97, 166);
        strokeWeight(3);
        fill(255);
        rect(984, 590, 290, 190);
        noStroke();
        fill("black");
        textSize(20);
        textFont("VT323");
        text("quarantine is nearing the end.\n" + "you've come a long way. being\n" + "stuck inside has forced you to\n" + "accept that you like girls. you\n" + "aren't straight. congrats! but\n" + "you still feel like something's\n" + "missing...\n", 985, 520);
      
      image(me, TL5me, 390, 50, 55);
      
      if(TL5me == 1190){
        stroke(165, 0, 98);
        strokeWeight(3);
        fill(255);
        rect(1244, 280, 290, 180);
        noStroke();
        fill("black");
        textSize(20);
        textFont("VT323");
        text("you only have 1 year left before\n" + "graduation. you've grown and\n" + "matured a lot these past four\n" + "years. but you have to be honest\n" + "with yourself. it's the only way\n" + "to truly accept who you are.", 1245, 220);
      }
      
      if(TL5me > 1190){
        mgr.showScene(acceptance2);
      }
  }
}

//-----------------------ACCEPTANCE2-------------------------------//

function acceptance2(){
  this.enter = function(){
    AccMeX = 220;
    Mphase = 0;
  }
  
  this.draw = function(){
    background(233, 223, 144);
    //console.log(AccMeX);
    
    textAlign(CENTER);
    fill("white");
    textSize(36);
    text("i wonder what my\n" + "future looks like\n", width/2, 60);
    
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 1000, 600);
    image(Rarrow, 1150, 780, 50, 50);
    
    image(sidewalk, 200, 500, 1040, 100);
    image(futurehome, 280, 290, 180, 200);
    image(entrance, 340, 477, 70, 42.2);
    image(futurehome, 620, 290, 180, 200);
    image(entrance, 680, 477, 70, 42.2);
    image(futurehome, 960, 290, 180, 200);
    image(entrance, 1020, 477, 70, 42.2);
    
    if(AccMeX > 280){
      image(future[0], 310, 380, 120, 90);
    }
    
    if(AccMeX > 640){
      image(future[1], 655, 380, 120, 90);
    }
    
    if(AccMeX > 980){
      image(future[2], 995, 380, 120, 90);
    }
    
    if(Mphase == 0){
      image(me, AccMeX, 465, 90, 100);
    }
    
    if(Mphase == 1){
      image(meRSP, AccMeX, 465, 90, 100);
    }
    
    if(AccMeX > 1140){
      mgr.showScene(acceptance3);
    }
  }
}

//------------------------ACCEPTANCE3-----------------------------//

function acceptance3(){
  this.enter = function(){
    r1 = 237;
    g1 = 234;
    b1 = 222;
  
    r2 = 237;
    g2 = 234;
    b2 = 222;
  
    r3 = 237;
    g3 = 234;
    b3 = 222;
  
    r4 = 237;
    g4 = 234;
    b4 = 222;
  
    r5 = 237;
    g5 = 234;
    b5 = 222;
  
    tr = 196;
    tg = 171;
    tb = 229;
  
    wr = 255;
    wg = 255;
    wb = 255;
    
    ltxtr1 = 196;
    ltxtg1 = 171;
    ltxtb1 = 229;
    ltxt1y = 830;
    
    ltxtr2 = 196;
    ltxtg2 = 171;
    ltxtb2 = 229;
    ltxt2y = 830;
    
    ltxtr3 = 196;
    ltxtg3 = 171;
    ltxtb3 = 229;
    ltxt3y = 830;
    
    ltxtr4 = 196;
    ltxtg4 = 171;
    ltxtb4 = 229;
    ltxt4y = 830;
    
    ltxtr5 = 196;
    ltxtg5 = 171;
    ltxtb5 = 229;
    ltxt5y = 830;
  }
  
  this.draw = function(){
    background(196, 171, 229);
    //console.log(mouseX, mouseY);
    
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 1000, 600);
    image(Mclick, 1150, 780, 50, 50);
    
    fill(255);
    textSize(36);
    text("okay, let's do this one more time.", width/2, 80);
  
  stroke(0, 0, 0);
  strokeWeight(0.2);
    
    //straight colors
  fill(255, 255, 255);
  ellipse(655, 200, 50, 50);
    stroke(0, 0, 0);
    strokeWeight(0.1);
    fill(255, 255, 255, 63);
    ellipse(655, 200, 60, 60);
  
  fill(0, 0, 0);
  ellipse(775, 200, 50, 50);
    noStroke();
    fill(0, 0, 0, 63);
    ellipse(775, 200, 60, 60);
    
  //bisexual colors
  fill(208, 0, 112);
  ellipse(600, 280, 50, 50);
    fill(208, 0, 112, 63);
    ellipse(600, 280, 60, 60);
    
  fill(140, 71, 153);
  ellipse(715, 280, 50, 50);
    fill(140, 71, 153, 63);
    ellipse(715, 280, 60, 60);
    
  fill(0, 50, 160);
  ellipse(830, 280, 50, 50);
    fill(0, 50, 160, 63);
    ellipse(830, 280, 60, 60);
  
  //lesbian colors
  fill(214, 41, 0);
  ellipse(485, 360, 50, 50);
    fill(214, 41, 0, 63);
    ellipse(485, 360, 60, 60);
  
  fill(255, 155, 85);
  ellipse(600, 360, 50, 50);
    fill(255, 155, 85, 63);
    ellipse(600, 360, 60, 60);
  
  stroke(0, 0, 0);
  strokeWeight(0.2);
  fill(255, 255, 255);
  ellipse(715, 360, 50, 50);
    stroke(0, 0, 0);
    strokeWeight(0.1);
    fill(255, 255, 255, 63);
    ellipse(715, 360, 60, 60);
  
  fill(212, 97, 166);
  ellipse(830, 360, 50, 50);
    noStroke();
    fill(212, 97, 166, 63);
    ellipse(830, 360, 60, 60);
  
  fill(165, 0, 98);
  ellipse(945, 360, 50, 50);
    fill(165, 0, 98, 63);
    ellipse(945, 360, 60, 60);
  
  //flag outline
  noStroke();
  fill(r1, g1, b1);
  rect(720, 440, 200, 30);
  fill(r2, g2, b2);
  rect(720, 470, 200, 30);
  fill(r3, g3, b3);
  rect(720, 500, 200, 30);
  fill(r4, g4, b4);
  rect(720, 530, 200, 30);
  fill(r5, g5, b5);
  rect(720, 560, 200, 30);
  
  stroke(0, 0, 0);
  strokeWeight(5);
  line(620, 660, 620, 420);
    
    noStroke();
    fill(ltxtr1, ltxtg1, ltxtb1);
    textSize(32);
    text("oh come on", width/2, ltxt1y);
    
    noStroke();
    fill(ltxtr2, ltxtg2, ltxtb2);
    textSize(32);
    text("we're way past this now", width/2, ltxt2y);
    
    noStroke();
    fill(ltxtr3, ltxtg3, ltxtb3);
    textSize(32);
    text("stop lying to yourself", width/2, ltxt3y);
    
    noStroke();
    fill(ltxtr4, ltxtg4, ltxtb4);
    textSize(32);
    text("just accept it", width/2, ltxt4y);
    
    noStroke();
    fill(ltxtr5, ltxtg5, ltxtb5);
    textSize(32);
    text("after everything, you really think you still like men?", width/2, ltxt5y);
    
    if(r1 == 214 && g1 == 41 && b1 == 0 && r2 == 255 && g2 == 155 && b2 == 85 && r3 == 255 && g3 == 255 && b3 == 255 && r4 == 212 && g4 == 97 && b4 == 166 && r5 == 165 && g5 == 0 && b5 == 98){
    fill(255);
    textSize(32);
    text("You chose the lesbian flag!\n" + "You've finally accepted youself,\n" + "which is the best thing you can ever do.", width/2, 790);
      
      timerNum ++; 
      if(timerNum > 300){
        timerNum = 0;  
        mgr.showScene(end);
      }
  }
}
}

//-----------------------------------END------------------------------------------//

function end(){
  this.enter = function(){
    
  }
  
  this.draw = function(){
    background(212, 97, 166);
    
    noStroke();
    fill(255);
    textSize(37);
    text("dear emma,\n\n" + "it hasn't been easy to get to this point.\n" + "there will still be hard times.\n" + "but the fact that you got here is amazing.\n" + "you're on the right path to accepting\n" + "yourself, not just in your sexuality,\n" + "but in you yourself. i'm so proud of you.\n" + "i love you. <3\n\n" + "- emma", width/2, 180);
    fill(0);
    text("press 1 to start over!", width/2, 750);
  }
}


//FULLSCREEN//
function doubleClicked() {
    let fs = fullscreen();
    fullscreen(!fs); 
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }