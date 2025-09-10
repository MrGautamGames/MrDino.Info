gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDJumpButtonObjects2_1final = [];

gdjs.GameCode.GDLeftButtonObjects3_1final = [];

gdjs.GameCode.GDRightButtonObjects3_1final = [];

gdjs.GameCode.GDTutorialTipsObjects2_1final = [];

gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDPlayerFeetObjects1= [];
gdjs.GameCode.GDPlayerFeetObjects2= [];
gdjs.GameCode.GDPlayerFeetObjects3= [];
gdjs.GameCode.GDPlayerFeetObjects4= [];
gdjs.GameCode.GDPlayerSpriteObjects1= [];
gdjs.GameCode.GDPlayerSpriteObjects2= [];
gdjs.GameCode.GDPlayerSpriteObjects3= [];
gdjs.GameCode.GDPlayerSpriteObjects4= [];
gdjs.GameCode.GDPlatformObjects1= [];
gdjs.GameCode.GDPlatformObjects2= [];
gdjs.GameCode.GDPlatformObjects3= [];
gdjs.GameCode.GDPlatformObjects4= [];
gdjs.GameCode.GDRockObjects1= [];
gdjs.GameCode.GDRockObjects2= [];
gdjs.GameCode.GDRockObjects3= [];
gdjs.GameCode.GDRockObjects4= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects4= [];
gdjs.GameCode.GDBlackMaskObjects1= [];
gdjs.GameCode.GDBlackMaskObjects2= [];
gdjs.GameCode.GDBlackMaskObjects3= [];
gdjs.GameCode.GDBlackMaskObjects4= [];
gdjs.GameCode.GDPauseButtonObjects1= [];
gdjs.GameCode.GDPauseButtonObjects2= [];
gdjs.GameCode.GDPauseButtonObjects3= [];
gdjs.GameCode.GDPauseButtonObjects4= [];
gdjs.GameCode.GDSpringObjects1= [];
gdjs.GameCode.GDSpringObjects2= [];
gdjs.GameCode.GDSpringObjects3= [];
gdjs.GameCode.GDSpringObjects4= [];
gdjs.GameCode.GDPlayButtonObjects1= [];
gdjs.GameCode.GDPlayButtonObjects2= [];
gdjs.GameCode.GDPlayButtonObjects3= [];
gdjs.GameCode.GDPlayButtonObjects4= [];
gdjs.GameCode.GDRestartButtonObjects1= [];
gdjs.GameCode.GDRestartButtonObjects2= [];
gdjs.GameCode.GDRestartButtonObjects3= [];
gdjs.GameCode.GDRestartButtonObjects4= [];
gdjs.GameCode.GDTutorialTipsObjects1= [];
gdjs.GameCode.GDTutorialTipsObjects2= [];
gdjs.GameCode.GDTutorialTipsObjects3= [];
gdjs.GameCode.GDTutorialTipsObjects4= [];
gdjs.GameCode.GDFinalScoreTitleObjects1= [];
gdjs.GameCode.GDFinalScoreTitleObjects2= [];
gdjs.GameCode.GDFinalScoreTitleObjects3= [];
gdjs.GameCode.GDFinalScoreTitleObjects4= [];
gdjs.GameCode.GDFinalScoreObjects1= [];
gdjs.GameCode.GDFinalScoreObjects2= [];
gdjs.GameCode.GDFinalScoreObjects3= [];
gdjs.GameCode.GDFinalScoreObjects4= [];
gdjs.GameCode.GDNewRecordObjects1= [];
gdjs.GameCode.GDNewRecordObjects2= [];
gdjs.GameCode.GDNewRecordObjects3= [];
gdjs.GameCode.GDNewRecordObjects4= [];
gdjs.GameCode.GDBestScoreObjects1= [];
gdjs.GameCode.GDBestScoreObjects2= [];
gdjs.GameCode.GDBestScoreObjects3= [];
gdjs.GameCode.GDBestScoreObjects4= [];
gdjs.GameCode.GDLeftButtonObjects1= [];
gdjs.GameCode.GDLeftButtonObjects2= [];
gdjs.GameCode.GDLeftButtonObjects3= [];
gdjs.GameCode.GDLeftButtonObjects4= [];
gdjs.GameCode.GDRightButtonObjects1= [];
gdjs.GameCode.GDRightButtonObjects2= [];
gdjs.GameCode.GDRightButtonObjects3= [];
gdjs.GameCode.GDRightButtonObjects4= [];
gdjs.GameCode.GDJumpButtonObjects1= [];
gdjs.GameCode.GDJumpButtonObjects2= [];
gdjs.GameCode.GDJumpButtonObjects3= [];
gdjs.GameCode.GDJumpButtonObjects4= [];
gdjs.GameCode.GDBrandingObjects1= [];
gdjs.GameCode.GDBrandingObjects2= [];
gdjs.GameCode.GDBrandingObjects3= [];
gdjs.GameCode.GDBrandingObjects4= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("movingCamera").setNumber(1);
}{runtimeScene.getScene().getVariables().get("movingSpeed").setNumber(10);
}{runtimeScene.getScene().getVariables().get("increasedSpeedPerScore").setNumber(0.5);
}{runtimeScene.getScene().getVariables().get("maxMovingSpeed").setNumber(100);
}{runtimeScene.getScene().getVariables().get("topY").setNumber(0);
}{runtimeScene.getScene().getVariables().get("platformDistance").setNumber(90);
}{runtimeScene.getScene().getVariables().get("randomPlatformDistance").setNumber(5);
}{runtimeScene.getScene().getVariables().get("throwRocks").setNumber(1);
}{runtimeScene.getScene().getVariables().get("rockTime").setNumber(4);
}{runtimeScene.getScene().getVariables().get("rockWidth").setNumber(50);
}{runtimeScene.getScene().getVariables().get("rockSpeed").setNumber(80);
}{runtimeScene.getScene().getVariables().get("springChance").setNumber(5);
}{runtimeScene.getScene().getVariables().get("springWidth").setNumber(20);
}{runtimeScene.getScene().getVariables().get("commonJumpSpeed").setNumber(680);
}{runtimeScene.getScene().getVariables().get("springJumpSpeed").setNumber(2000);
}{runtimeScene.getScene().getVariables().get("springJumping").setNumber(0);
}{runtimeScene.getScene().getVariables().get("gamePaused").setNumber(0);
}{runtimeScene.getScene().getVariables().get("gameRunning").setNumber(1);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "824ceb44fd0c1656d52bf6dcc0f0f08104e24c0beef9e3e0a9905a90dd2745f8_32 - famicommunist manifesto.aac", true, 70, 1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewRecord"), gdjs.GameCode.GDNewRecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerFeet"), gdjs.GameCode.GDPlayerFeetObjects1);
gdjs.copyArray(runtimeScene.getObjects("TutorialTips"), gdjs.GameCode.GDTutorialTipsObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "GUI");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Pause");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "GameOver");
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerFeetObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerFeetObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTipsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTipsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDNewRecordObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewRecordObjects1[i].hide();
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLeftButtonObjects4Objects = Hashtable.newFrom({"LeftButton": gdjs.GameCode.GDLeftButtonObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRightButtonObjects4Objects = Hashtable.newFrom({"RightButton": gdjs.GameCode.GDRightButtonObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDJumpButtonObjects3Objects = Hashtable.newFrom({"JumpButton": gdjs.GameCode.GDJumpButtonObjects3});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.GameCode.GDLeftButtonObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDLeftButtonObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.GameCode.GDLeftButtonObjects4);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLeftButtonObjects4Objects, runtimeScene, true, false);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDLeftButtonObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDLeftButtonObjects3_1final.indexOf(gdjs.GameCode.GDLeftButtonObjects4[j]) === -1 )
            gdjs.GameCode.GDLeftButtonObjects3_1final.push(gdjs.GameCode.GDLeftButtonObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDLeftButtonObjects3_1final, gdjs.GameCode.GDLeftButtonObjects3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects3[i].flipX(true);
}
}}

}


{



}


{

gdjs.GameCode.GDRightButtonObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDRightButtonObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.GameCode.GDRightButtonObjects4);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRightButtonObjects4Objects, runtimeScene, true, false);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDRightButtonObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDRightButtonObjects3_1final.indexOf(gdjs.GameCode.GDRightButtonObjects4[j]) === -1 )
            gdjs.GameCode.GDRightButtonObjects3_1final.push(gdjs.GameCode.GDRightButtonObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDRightButtonObjects3_1final, gdjs.GameCode.GDRightButtonObjects3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects3[i].flipX(false);
}
}}

}


{



}


{

gdjs.GameCode.GDJumpButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDJumpButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.GameCode.GDJumpButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDJumpButtonObjects3Objects, runtimeScene, true, false);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDJumpButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDJumpButtonObjects2_1final.indexOf(gdjs.GameCode.GDJumpButtonObjects3[j]) === -1 )
            gdjs.GameCode.GDJumpButtonObjects2_1final.push(gdjs.GameCode.GDJumpButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDJumpButtonObjects2_1final, gdjs.GameCode.GDJumpButtonObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14087228);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPlayerObjects2, gdjs.GameCode.GDPlayerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects3[i].setAnimationName("idle");
}
}}

}


{

/* Reuse gdjs.GameCode.GDPlayerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects2[i].setAnimationName("run");
}
}}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPlayerObjects2, gdjs.GameCode.GDPlayerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects3[i].setAnimationName("jump");
}
}}

}


{

/* Reuse gdjs.GameCode.GDPlayerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects2[i].setAnimationName("fall");
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.GameCode.GDJumpButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.GameCode.GDLeftButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.GameCode.GDRightButtonObjects2);
{for(var i = 0, len = gdjs.GameCode.GDLeftButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLeftButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDRightButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRightButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDJumpButtonObjects2[i].hide();
}
}
{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gamePaused")) == 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getX() < -((gdjs.GameCode.GDPlayerObjects2[i].getWidth())) / 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setX(gdjs.GameCode.GDPlayerObjects2[i].getX() + (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (gdjs.GameCode.GDPlayerObjects2[i].getWidth())));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getX() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (gdjs.GameCode.GDPlayerObjects2[i].getWidth()) / 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setX(gdjs.GameCode.GDPlayerObjects2[i].getX() - (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (gdjs.GameCode.GDPlayerObjects2[i].getWidth())));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gameRunning")) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerFeet"), gdjs.GameCode.GDPlayerFeetObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects1[i].setPosition((( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointX("Sprite")),(( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointY("Sprite")));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerFeetObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerFeetObjects1[i].setPosition((( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointX("Feet")),(( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointY("Feet")));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerFeetObjects1Objects = Hashtable.newFrom({"PlayerFeet": gdjs.GameCode.GDPlayerFeetObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRockObjects2Objects = Hashtable.newFrom({"Rock": gdjs.GameCode.GDRockObjects2});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPlatformObjects1, gdjs.GameCode.GDPlatformObjects2);

gdjs.copyArray(runtimeScene.getObjects("TutorialTips"), gdjs.GameCode.GDTutorialTipsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTutorialTipsObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTutorialTipsObjects2[i].getVariableNumber(gdjs.GameCode.GDTutorialTipsObjects2[i].getVariables().get("step")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlatformObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlatformObjects2[0].getVariables()).get("id"))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTutorialTipsObjects2[k] = gdjs.GameCode.GDTutorialTipsObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTutorialTipsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTutorialTipsObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTutorialTipsObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTipsObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(gdjs.GameCode.GDPlatformObjects1, gdjs.GameCode.GDPlatformObjects2);

gdjs.copyArray(runtimeScene.getObjects("TutorialTips"), gdjs.GameCode.GDTutorialTipsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTutorialTipsObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTutorialTipsObjects2[i].getVariableNumber(gdjs.GameCode.GDTutorialTipsObjects2[i].getVariables().get("step")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlatformObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlatformObjects2[0].getVariables()).get("id"))) + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTutorialTipsObjects2[k] = gdjs.GameCode.GDTutorialTipsObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTutorialTipsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTutorialTipsObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTutorialTipsObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTipsObjects2[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.GameCode.GDPlatformObjects1, gdjs.GameCode.GDPlatformObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects2[i].getVariableNumber(gdjs.GameCode.GDPlatformObjects2[i].getVariables().get("id")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects2[k] = gdjs.GameCode.GDPlatformObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects2.length = k;
if (isConditionTrue_0) {
gdjs.GameCode.GDRockObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRockObjects2Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rockWidth")) / 2, -(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rockWidth"))) - 250, "");
}{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].setZOrder(5);
}
}{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].addForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rockSpeed")), 1);
}
}}

}


{



}


{

/* Reuse gdjs.GameCode.GDPlatformObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects1[i].getVariableNumber(gdjs.GameCode.GDPlatformObjects1[i].getVariables().get("id")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects1[k] = gdjs.GameCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getScene().getVariables().get("movingCamera").setNumber(1);
}{runtimeScene.getScene().getVariables().get("throwRocks").setNumber(1);
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.GameCode.GDTutorialTipsObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.GameCode.GDTutorialTipsObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TutorialTips"), gdjs.GameCode.GDTutorialTipsObjects3);
for (var i = 0, k = 0, l = gdjs.GameCode.GDTutorialTipsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDTutorialTipsObjects3[i].getVariableNumber(gdjs.GameCode.GDTutorialTipsObjects3[i].getVariables().get("step")) == 1 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDTutorialTipsObjects3[k] = gdjs.GameCode.GDTutorialTipsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDTutorialTipsObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDTutorialTipsObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDTutorialTipsObjects2_1final.indexOf(gdjs.GameCode.GDTutorialTipsObjects3[j]) === -1 )
            gdjs.GameCode.GDTutorialTipsObjects2_1final.push(gdjs.GameCode.GDTutorialTipsObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDTutorialTipsObjects2_1final, gdjs.GameCode.GDTutorialTipsObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTutorialTipsObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTutorialTipsObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTipsObjects2[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerFeet"), gdjs.GameCode.GDPlayerFeetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects1[i].getVariableNumber(gdjs.GameCode.GDPlatformObjects1[i].getVariables().get("used")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects1[k] = gdjs.GameCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerFeetObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects1Objects, false, runtimeScene, false);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("movingCamera").setNumber(0);
}{runtimeScene.getScene().getVariables().get("throwRocks").setNumber(0);
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerFeetObjects2Objects = Hashtable.newFrom({"PlayerFeet": gdjs.GameCode.GDPlayerFeetObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects1});
gdjs.GameCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerFeet"), gdjs.GameCode.GDPlayerFeetObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects2[i].getVariableNumber(gdjs.GameCode.GDPlatformObjects2[i].getVariables().get("used")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects2[k] = gdjs.GameCode.GDPlatformObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerFeetObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects2Objects, false, runtimeScene, false);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlatformObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects2[i].returnVariable(gdjs.GameCode.GDPlatformObjects2[i].getVariables().get("used")).setNumber(1);
}
}{runtimeScene.getScene().getVariables().get("score").add(gdjs.evtTools.object.pickedObjectsCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects2Objects));
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("score"))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("springJumping")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects1[i].getVariableNumber(gdjs.GameCode.GDPlatformObjects1[i].getVariables().get("used")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects1[k] = gdjs.GameCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects1[i].getY() > (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointY("")) + (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getHeight()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects1[k] = gdjs.GameCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlatformObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects1[i].returnVariable(gdjs.GameCode.GDPlatformObjects1[i].getVariables().get("used")).setNumber(1);
}
}{runtimeScene.getScene().getVariables().get("score").add(gdjs.evtTools.object.pickedObjectsCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects1Objects));
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("score"))));
}
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("movingCamera")) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("totalMovingSpeed").setNumber(Math.min(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("movingSpeed")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("increasedSpeedPerScore")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("score")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("maxMovingSpeed"))));
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("totalMovingSpeed")) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gameRunning")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) > (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY(""));
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("")), "", 0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getY() > gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + 20 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("gameRunning").setNumber(0);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpringObjects2Objects = Hashtable.newFrom({"Spring": gdjs.GameCode.GDSpringObjects2});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("springRandom")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("springChance"));
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlatformObjects2 */
gdjs.GameCode.GDSpringObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpringObjects2Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("randomX")) + gdjs.random((( gdjs.GameCode.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects2[0].getWidth()) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("springWidth"))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("topY")), "");
}{for(var i = 0, len = gdjs.GameCode.GDSpringObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSpringObjects2[i].setZOrder(1);
}
}}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("topY")) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + (( gdjs.GameCode.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects2[0].getHeight());
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlatformObjects2 */
{runtimeScene.getScene().getVariables().get("topY").sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("platformDistance")) + gdjs.random(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("randomPlatformDistance"))));
}{runtimeScene.getScene().getVariables().get("randomX").setNumber(gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.GameCode.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects2[0].getWidth())));
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects2Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("randomX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("topY")), "");
}{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects2[i].setZOrder(1);
}
}{runtimeScene.getScene().getVariables().get("springRandom").setNumber(gdjs.randomInRange(1, 100));
}
{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects1[i].getY() > gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getHeight()) + 20 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects1[k] = gdjs.GameCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlatformObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRockObjects2Objects = Hashtable.newFrom({"Rock": gdjs.GameCode.GDRockObjects2});
gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11160476);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "throwRock");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "throwRock") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rockTime"));
if (isConditionTrue_0) {
gdjs.GameCode.GDRockObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "throwRock");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRockObjects2Objects, gdjs.random(300) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rockWidth")) / 2, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("topY")), "");
}{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].setZOrder(5);
}
}{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].addForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rockSpeed")), 1);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRockObjects1Objects = Hashtable.newFrom({"Rock": gdjs.GameCode.GDRockObjects1});
gdjs.GameCode.eventsList14 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("throwRocks")) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.GameCode.GDRockObjects2);
{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].rotate(90, runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.GameCode.GDRockObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDRockObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDRockObjects2[i].getY() > gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getHeight()) + 20 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDRockObjects2[k] = gdjs.GameCode.GDRockObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDRockObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRockObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.GameCode.GDRockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRockObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("springJumping")) == 0;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("gameRunning").setNumber(0);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpringObjects1Objects = Hashtable.newFrom({"Spring": gdjs.GameCode.GDSpringObjects1});
gdjs.GameCode.eventsList15 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("commonJumpSpeed")));
}
}{runtimeScene.getScene().getVariables().get("springJumping").setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spring"), gdjs.GameCode.GDSpringObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpringObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
/* Reuse gdjs.GameCode.GDSpringObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("springJumpSpeed")));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDSpringObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpringObjects1[i].setAnimation(1);
}
}{runtimeScene.getScene().getVariables().get("springJumping").setNumber(1);
}}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gamePaused")) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 1);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Pause");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gamePaused")) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Pause");
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPauseButtonObjects2Objects = Hashtable.newFrom({"PauseButton": gdjs.GameCode.GDPauseButtonObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.GameCode.GDPlayButtonObjects1});
gdjs.GameCode.eventsList17 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("PauseButton"), gdjs.GameCode.GDPauseButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gamePaused")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPauseButtonObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("gamePaused").setNumber(1);
}{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Pause");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.GameCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gamePaused")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("gamePaused").setNumber(0);
}{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 1);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Pause");
}}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16435716);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("gamePaused").setNumber(1 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gamePaused")));
}
{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.systemInfo.isMobile();
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gameRunning")) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList20 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("score")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewRecord"), gdjs.GameCode.GDNewRecordObjects3);
{for(var i = 0, len = gdjs.GameCode.GDNewRecordObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDNewRecordObjects3[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("score")));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BestScore"), gdjs.GameCode.GDBestScoreObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBestScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBestScoreObjects2[i].setString("BEST: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.GameCode.GDBestScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBestScoreObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.GameCode.GDBestScoreObjects2[i].getWidth()) / 2);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRestartButtonObjects1Objects = Hashtable.newFrom({"RestartButton": gdjs.GameCode.GDRestartButtonObjects1});
gdjs.GameCode.eventsList21 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11169140);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FinalScore"), gdjs.GameCode.GDFinalScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "GameOver");
}{for(var i = 0, len = gdjs.GameCode.GDFinalScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFinalScoreObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("score"))));
}
}{for(var i = 0, len = gdjs.GameCode.GDFinalScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFinalScoreObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.GameCode.GDFinalScoreObjects2[i].getWidth()) / 2);
}
}
{ //Subevents
gdjs.GameCode.eventsList20(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects2[i].setAnimationName("fall");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects2[i].setY(gdjs.GameCode.GDPlayerSpriteObjects2[i].getY() + (400 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.systemInfo.isMobile();
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRestartButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.GameCode.eventsList22 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gameRunning")) == 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList21(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList23 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList9(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


{


gdjs.GameCode.eventsList15(runtimeScene);
}


{


gdjs.GameCode.eventsList19(runtimeScene);
}


{


gdjs.GameCode.eventsList22(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerFeetObjects1.length = 0;
gdjs.GameCode.GDPlayerFeetObjects2.length = 0;
gdjs.GameCode.GDPlayerFeetObjects3.length = 0;
gdjs.GameCode.GDPlayerFeetObjects4.length = 0;
gdjs.GameCode.GDPlayerSpriteObjects1.length = 0;
gdjs.GameCode.GDPlayerSpriteObjects2.length = 0;
gdjs.GameCode.GDPlayerSpriteObjects3.length = 0;
gdjs.GameCode.GDPlayerSpriteObjects4.length = 0;
gdjs.GameCode.GDPlatformObjects1.length = 0;
gdjs.GameCode.GDPlatformObjects2.length = 0;
gdjs.GameCode.GDPlatformObjects3.length = 0;
gdjs.GameCode.GDPlatformObjects4.length = 0;
gdjs.GameCode.GDRockObjects1.length = 0;
gdjs.GameCode.GDRockObjects2.length = 0;
gdjs.GameCode.GDRockObjects3.length = 0;
gdjs.GameCode.GDRockObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDBlackMaskObjects1.length = 0;
gdjs.GameCode.GDBlackMaskObjects2.length = 0;
gdjs.GameCode.GDBlackMaskObjects3.length = 0;
gdjs.GameCode.GDBlackMaskObjects4.length = 0;
gdjs.GameCode.GDPauseButtonObjects1.length = 0;
gdjs.GameCode.GDPauseButtonObjects2.length = 0;
gdjs.GameCode.GDPauseButtonObjects3.length = 0;
gdjs.GameCode.GDPauseButtonObjects4.length = 0;
gdjs.GameCode.GDSpringObjects1.length = 0;
gdjs.GameCode.GDSpringObjects2.length = 0;
gdjs.GameCode.GDSpringObjects3.length = 0;
gdjs.GameCode.GDSpringObjects4.length = 0;
gdjs.GameCode.GDPlayButtonObjects1.length = 0;
gdjs.GameCode.GDPlayButtonObjects2.length = 0;
gdjs.GameCode.GDPlayButtonObjects3.length = 0;
gdjs.GameCode.GDPlayButtonObjects4.length = 0;
gdjs.GameCode.GDRestartButtonObjects1.length = 0;
gdjs.GameCode.GDRestartButtonObjects2.length = 0;
gdjs.GameCode.GDRestartButtonObjects3.length = 0;
gdjs.GameCode.GDRestartButtonObjects4.length = 0;
gdjs.GameCode.GDTutorialTipsObjects1.length = 0;
gdjs.GameCode.GDTutorialTipsObjects2.length = 0;
gdjs.GameCode.GDTutorialTipsObjects3.length = 0;
gdjs.GameCode.GDTutorialTipsObjects4.length = 0;
gdjs.GameCode.GDFinalScoreTitleObjects1.length = 0;
gdjs.GameCode.GDFinalScoreTitleObjects2.length = 0;
gdjs.GameCode.GDFinalScoreTitleObjects3.length = 0;
gdjs.GameCode.GDFinalScoreTitleObjects4.length = 0;
gdjs.GameCode.GDFinalScoreObjects1.length = 0;
gdjs.GameCode.GDFinalScoreObjects2.length = 0;
gdjs.GameCode.GDFinalScoreObjects3.length = 0;
gdjs.GameCode.GDFinalScoreObjects4.length = 0;
gdjs.GameCode.GDNewRecordObjects1.length = 0;
gdjs.GameCode.GDNewRecordObjects2.length = 0;
gdjs.GameCode.GDNewRecordObjects3.length = 0;
gdjs.GameCode.GDNewRecordObjects4.length = 0;
gdjs.GameCode.GDBestScoreObjects1.length = 0;
gdjs.GameCode.GDBestScoreObjects2.length = 0;
gdjs.GameCode.GDBestScoreObjects3.length = 0;
gdjs.GameCode.GDBestScoreObjects4.length = 0;
gdjs.GameCode.GDLeftButtonObjects1.length = 0;
gdjs.GameCode.GDLeftButtonObjects2.length = 0;
gdjs.GameCode.GDLeftButtonObjects3.length = 0;
gdjs.GameCode.GDLeftButtonObjects4.length = 0;
gdjs.GameCode.GDRightButtonObjects1.length = 0;
gdjs.GameCode.GDRightButtonObjects2.length = 0;
gdjs.GameCode.GDRightButtonObjects3.length = 0;
gdjs.GameCode.GDRightButtonObjects4.length = 0;
gdjs.GameCode.GDJumpButtonObjects1.length = 0;
gdjs.GameCode.GDJumpButtonObjects2.length = 0;
gdjs.GameCode.GDJumpButtonObjects3.length = 0;
gdjs.GameCode.GDJumpButtonObjects4.length = 0;
gdjs.GameCode.GDBrandingObjects1.length = 0;
gdjs.GameCode.GDBrandingObjects2.length = 0;
gdjs.GameCode.GDBrandingObjects3.length = 0;
gdjs.GameCode.GDBrandingObjects4.length = 0;

gdjs.GameCode.eventsList23(runtimeScene);
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerFeetObjects1.length = 0;
gdjs.GameCode.GDPlayerFeetObjects2.length = 0;
gdjs.GameCode.GDPlayerFeetObjects3.length = 0;
gdjs.GameCode.GDPlayerFeetObjects4.length = 0;
gdjs.GameCode.GDPlayerSpriteObjects1.length = 0;
gdjs.GameCode.GDPlayerSpriteObjects2.length = 0;
gdjs.GameCode.GDPlayerSpriteObjects3.length = 0;
gdjs.GameCode.GDPlayerSpriteObjects4.length = 0;
gdjs.GameCode.GDPlatformObjects1.length = 0;
gdjs.GameCode.GDPlatformObjects2.length = 0;
gdjs.GameCode.GDPlatformObjects3.length = 0;
gdjs.GameCode.GDPlatformObjects4.length = 0;
gdjs.GameCode.GDRockObjects1.length = 0;
gdjs.GameCode.GDRockObjects2.length = 0;
gdjs.GameCode.GDRockObjects3.length = 0;
gdjs.GameCode.GDRockObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDBlackMaskObjects1.length = 0;
gdjs.GameCode.GDBlackMaskObjects2.length = 0;
gdjs.GameCode.GDBlackMaskObjects3.length = 0;
gdjs.GameCode.GDBlackMaskObjects4.length = 0;
gdjs.GameCode.GDPauseButtonObjects1.length = 0;
gdjs.GameCode.GDPauseButtonObjects2.length = 0;
gdjs.GameCode.GDPauseButtonObjects3.length = 0;
gdjs.GameCode.GDPauseButtonObjects4.length = 0;
gdjs.GameCode.GDSpringObjects1.length = 0;
gdjs.GameCode.GDSpringObjects2.length = 0;
gdjs.GameCode.GDSpringObjects3.length = 0;
gdjs.GameCode.GDSpringObjects4.length = 0;
gdjs.GameCode.GDPlayButtonObjects1.length = 0;
gdjs.GameCode.GDPlayButtonObjects2.length = 0;
gdjs.GameCode.GDPlayButtonObjects3.length = 0;
gdjs.GameCode.GDPlayButtonObjects4.length = 0;
gdjs.GameCode.GDRestartButtonObjects1.length = 0;
gdjs.GameCode.GDRestartButtonObjects2.length = 0;
gdjs.GameCode.GDRestartButtonObjects3.length = 0;
gdjs.GameCode.GDRestartButtonObjects4.length = 0;
gdjs.GameCode.GDTutorialTipsObjects1.length = 0;
gdjs.GameCode.GDTutorialTipsObjects2.length = 0;
gdjs.GameCode.GDTutorialTipsObjects3.length = 0;
gdjs.GameCode.GDTutorialTipsObjects4.length = 0;
gdjs.GameCode.GDFinalScoreTitleObjects1.length = 0;
gdjs.GameCode.GDFinalScoreTitleObjects2.length = 0;
gdjs.GameCode.GDFinalScoreTitleObjects3.length = 0;
gdjs.GameCode.GDFinalScoreTitleObjects4.length = 0;
gdjs.GameCode.GDFinalScoreObjects1.length = 0;
gdjs.GameCode.GDFinalScoreObjects2.length = 0;
gdjs.GameCode.GDFinalScoreObjects3.length = 0;
gdjs.GameCode.GDFinalScoreObjects4.length = 0;
gdjs.GameCode.GDNewRecordObjects1.length = 0;
gdjs.GameCode.GDNewRecordObjects2.length = 0;
gdjs.GameCode.GDNewRecordObjects3.length = 0;
gdjs.GameCode.GDNewRecordObjects4.length = 0;
gdjs.GameCode.GDBestScoreObjects1.length = 0;
gdjs.GameCode.GDBestScoreObjects2.length = 0;
gdjs.GameCode.GDBestScoreObjects3.length = 0;
gdjs.GameCode.GDBestScoreObjects4.length = 0;
gdjs.GameCode.GDLeftButtonObjects1.length = 0;
gdjs.GameCode.GDLeftButtonObjects2.length = 0;
gdjs.GameCode.GDLeftButtonObjects3.length = 0;
gdjs.GameCode.GDLeftButtonObjects4.length = 0;
gdjs.GameCode.GDRightButtonObjects1.length = 0;
gdjs.GameCode.GDRightButtonObjects2.length = 0;
gdjs.GameCode.GDRightButtonObjects3.length = 0;
gdjs.GameCode.GDRightButtonObjects4.length = 0;
gdjs.GameCode.GDJumpButtonObjects1.length = 0;
gdjs.GameCode.GDJumpButtonObjects2.length = 0;
gdjs.GameCode.GDJumpButtonObjects3.length = 0;
gdjs.GameCode.GDJumpButtonObjects4.length = 0;
gdjs.GameCode.GDBrandingObjects1.length = 0;
gdjs.GameCode.GDBrandingObjects2.length = 0;
gdjs.GameCode.GDBrandingObjects3.length = 0;
gdjs.GameCode.GDBrandingObjects4.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
