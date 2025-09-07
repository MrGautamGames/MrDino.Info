gdjs.LevelsCode = {};
gdjs.LevelsCode.localVariables = [];
gdjs.LevelsCode.GDContinueTextObjects1= [];
gdjs.LevelsCode.GDContinueTextObjects2= [];
gdjs.LevelsCode.GDContinueTextObjects3= [];
gdjs.LevelsCode.GDContinueTextObjects4= [];
gdjs.LevelsCode.GDContinueTextObjects5= [];
gdjs.LevelsCode.GDSpeedTextObjects1= [];
gdjs.LevelsCode.GDSpeedTextObjects2= [];
gdjs.LevelsCode.GDSpeedTextObjects3= [];
gdjs.LevelsCode.GDSpeedTextObjects4= [];
gdjs.LevelsCode.GDSpeedTextObjects5= [];
gdjs.LevelsCode.GDLevelTextObjects1= [];
gdjs.LevelsCode.GDLevelTextObjects2= [];
gdjs.LevelsCode.GDLevelTextObjects3= [];
gdjs.LevelsCode.GDLevelTextObjects4= [];
gdjs.LevelsCode.GDLevelTextObjects5= [];
gdjs.LevelsCode.GDSuccessTextObjects1= [];
gdjs.LevelsCode.GDSuccessTextObjects2= [];
gdjs.LevelsCode.GDSuccessTextObjects3= [];
gdjs.LevelsCode.GDSuccessTextObjects4= [];
gdjs.LevelsCode.GDSuccessTextObjects5= [];
gdjs.LevelsCode.GDParticlesEmitterWinObjects1= [];
gdjs.LevelsCode.GDParticlesEmitterWinObjects2= [];
gdjs.LevelsCode.GDParticlesEmitterWinObjects3= [];
gdjs.LevelsCode.GDParticlesEmitterWinObjects4= [];
gdjs.LevelsCode.GDParticlesEmitterWinObjects5= [];
gdjs.LevelsCode.GDCloudObjects1= [];
gdjs.LevelsCode.GDCloudObjects2= [];
gdjs.LevelsCode.GDCloudObjects3= [];
gdjs.LevelsCode.GDCloudObjects4= [];
gdjs.LevelsCode.GDCloudObjects5= [];
gdjs.LevelsCode.GDDistanceLeftObjects1= [];
gdjs.LevelsCode.GDDistanceLeftObjects2= [];
gdjs.LevelsCode.GDDistanceLeftObjects3= [];
gdjs.LevelsCode.GDDistanceLeftObjects4= [];
gdjs.LevelsCode.GDDistanceLeftObjects5= [];
gdjs.LevelsCode.GDArrowDistanceLeftObjects1= [];
gdjs.LevelsCode.GDArrowDistanceLeftObjects2= [];
gdjs.LevelsCode.GDArrowDistanceLeftObjects3= [];
gdjs.LevelsCode.GDArrowDistanceLeftObjects4= [];
gdjs.LevelsCode.GDArrowDistanceLeftObjects5= [];
gdjs.LevelsCode.GDRopeObjects1= [];
gdjs.LevelsCode.GDRopeObjects2= [];
gdjs.LevelsCode.GDRopeObjects3= [];
gdjs.LevelsCode.GDRopeObjects4= [];
gdjs.LevelsCode.GDRopeObjects5= [];
gdjs.LevelsCode.GDSmallRedBallObjects1= [];
gdjs.LevelsCode.GDSmallRedBallObjects2= [];
gdjs.LevelsCode.GDSmallRedBallObjects3= [];
gdjs.LevelsCode.GDSmallRedBallObjects4= [];
gdjs.LevelsCode.GDSmallRedBallObjects5= [];
gdjs.LevelsCode.GDFinishObjects1= [];
gdjs.LevelsCode.GDFinishObjects2= [];
gdjs.LevelsCode.GDFinishObjects3= [];
gdjs.LevelsCode.GDFinishObjects4= [];
gdjs.LevelsCode.GDFinishObjects5= [];
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects1= [];
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects2= [];
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects3= [];
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects4= [];
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects5= [];
gdjs.LevelsCode.GDStarObjects1= [];
gdjs.LevelsCode.GDStarObjects2= [];
gdjs.LevelsCode.GDStarObjects3= [];
gdjs.LevelsCode.GDStarObjects4= [];
gdjs.LevelsCode.GDStarObjects5= [];
gdjs.LevelsCode.GDBluePanelObjects1= [];
gdjs.LevelsCode.GDBluePanelObjects2= [];
gdjs.LevelsCode.GDBluePanelObjects3= [];
gdjs.LevelsCode.GDBluePanelObjects4= [];
gdjs.LevelsCode.GDBluePanelObjects5= [];


gdjs.LevelsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 2);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}}

}


};gdjs.LevelsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelText"), gdjs.LevelsCode.GDLevelTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Level" + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), 0, 0, 0);
}{for(var i = 0, len = gdjs.LevelsCode.GDLevelTextObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDLevelTextObjects2[i].getBehavior("Text").setText("Level " + gdjs.evtTools.string.newLine() + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Ending");
}
{ //Subevents
gdjs.LevelsCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.LevelsCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.LevelsCode.GDSmallRedBallObjects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.LevelsCode.GDSmallRedBallObjects2.length === 0 ) ? 0 :gdjs.LevelsCode.GDSmallRedBallObjects2[0].getCenterXInScene()), "", 0);
}}

}


};gdjs.LevelsCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\Audio\\Background Music.mp3", 1, true, 30, 1);
}}

}


};gdjs.LevelsCode.eventsList4 = function(runtimeScene) {

{


gdjs.LevelsCode.eventsList1(runtimeScene);
}


{


gdjs.LevelsCode.eventsList2(runtimeScene);
}


{


gdjs.LevelsCode.eventsList3(runtimeScene);
}


};gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDSmallRedBallObjects2Objects = Hashtable.newFrom({"SmallRedBall": gdjs.LevelsCode.GDSmallRedBallObjects2});
gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDCloudObjects2Objects = Hashtable.newFrom({"Cloud": gdjs.LevelsCode.GDCloudObjects2});
gdjs.LevelsCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cloud"), gdjs.LevelsCode.GDCloudObjects2);
gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.LevelsCode.GDSmallRedBallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDSmallRedBallObjects2Objects, "Physics2", gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDCloudObjects2Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11931020);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Audio\\cloud.ogg", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("EmptyCloudBackground"), gdjs.LevelsCode.GDEmptyCloudBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.LevelsCode.GDSmallRedBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("SpeedText"), gdjs.LevelsCode.GDSpeedTextObjects2);
{for(var i = 0, len = gdjs.LevelsCode.GDEmptyCloudBackgroundObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDEmptyCloudBackgroundObjects2[i].setXOffset(gdjs.LevelsCode.GDEmptyCloudBackgroundObjects2[i].getXOffset() + (1));
}
}{for(var i = 0, len = gdjs.LevelsCode.GDSpeedTextObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDSpeedTextObjects2[i].getBehavior("Text").setText("Speed " + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(Math.round(Math.abs((( gdjs.LevelsCode.GDSmallRedBallObjects2.length === 0 ) ? 0 :gdjs.LevelsCode.GDSmallRedBallObjects2[0].getBehavior("Physics2").getLinearVelocityX())))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.LevelsCode.GDFinishObjects2);
gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.LevelsCode.GDSmallRedBallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsCode.GDSmallRedBallObjects2.length;i<l;++i) {
    if ( gdjs.LevelsCode.GDSmallRedBallObjects2[i].getX() < (( gdjs.LevelsCode.GDFinishObjects2.length === 0 ) ? 0 :gdjs.LevelsCode.GDFinishObjects2[0].getX()) - 300 ) {
        isConditionTrue_0 = true;
        gdjs.LevelsCode.GDSmallRedBallObjects2[k] = gdjs.LevelsCode.GDSmallRedBallObjects2[i];
        ++k;
    }
}
gdjs.LevelsCode.GDSmallRedBallObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDistanceLeft"), gdjs.LevelsCode.GDArrowDistanceLeftObjects2);
gdjs.copyArray(runtimeScene.getObjects("DistanceLeft"), gdjs.LevelsCode.GDDistanceLeftObjects2);
/* Reuse gdjs.LevelsCode.GDFinishObjects2 */
/* Reuse gdjs.LevelsCode.GDSmallRedBallObjects2 */
{for(var i = 0, len = gdjs.LevelsCode.GDDistanceLeftObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDDistanceLeftObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round((( gdjs.LevelsCode.GDSmallRedBallObjects2.length === 0 ) ? 0 :gdjs.LevelsCode.GDSmallRedBallObjects2[0].getDistanceToObject((gdjs.LevelsCode.GDFinishObjects2.length !== 0 ? gdjs.LevelsCode.GDFinishObjects2[0] : null))) / 100)));
}
}{for(var i = 0, len = gdjs.LevelsCode.GDDistanceLeftObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDDistanceLeftObjects2[i].setX((( gdjs.LevelsCode.GDArrowDistanceLeftObjects2.length === 0 ) ? 0 :gdjs.LevelsCode.GDArrowDistanceLeftObjects2[0].getPointX("")) - (gdjs.LevelsCode.GDDistanceLeftObjects2[i].getWidth()) - 20);
}
}{for(var i = 0, len = gdjs.LevelsCode.GDDistanceLeftObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDDistanceLeftObjects2[i].setCenterYInScene((( gdjs.LevelsCode.GDArrowDistanceLeftObjects2.length === 0 ) ? 0 :gdjs.LevelsCode.GDArrowDistanceLeftObjects2[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.LevelsCode.GDArrowDistanceLeftObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDArrowDistanceLeftObjects2[i].setCenterYInScene((( gdjs.LevelsCode.GDSmallRedBallObjects2.length === 0 ) ? 0 :gdjs.LevelsCode.GDSmallRedBallObjects2[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.LevelsCode.GDDistanceLeftObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDDistanceLeftObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.LevelsCode.GDArrowDistanceLeftObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDArrowDistanceLeftObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.LevelsCode.GDFinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.LevelsCode.GDSmallRedBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsCode.GDSmallRedBallObjects1.length;i<l;++i) {
    if ( gdjs.LevelsCode.GDSmallRedBallObjects1[i].getX() > (( gdjs.LevelsCode.GDFinishObjects1.length === 0 ) ? 0 :gdjs.LevelsCode.GDFinishObjects1[0].getX()) - 300 ) {
        isConditionTrue_0 = true;
        gdjs.LevelsCode.GDSmallRedBallObjects1[k] = gdjs.LevelsCode.GDSmallRedBallObjects1[i];
        ++k;
    }
}
gdjs.LevelsCode.GDSmallRedBallObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowDistanceLeft"), gdjs.LevelsCode.GDArrowDistanceLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("DistanceLeft"), gdjs.LevelsCode.GDDistanceLeftObjects1);
{for(var i = 0, len = gdjs.LevelsCode.GDDistanceLeftObjects1.length ;i < len;++i) {
    gdjs.LevelsCode.GDDistanceLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LevelsCode.GDArrowDistanceLeftObjects1.length ;i < len;++i) {
    gdjs.LevelsCode.GDArrowDistanceLeftObjects1[i].hide();
}
}}

}


};gdjs.LevelsCode.eventsList6 = function(runtimeScene) {

};gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDStarObjects4Objects = Hashtable.newFrom({"Star": gdjs.LevelsCode.GDStarObjects4});
gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDStarObjects4Objects = Hashtable.newFrom({"Star": gdjs.LevelsCode.GDStarObjects4});
gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDSmallRedBallObjects4Objects = Hashtable.newFrom({"SmallRedBall": gdjs.LevelsCode.GDSmallRedBallObjects4});
gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDStarObjects3Objects = Hashtable.newFrom({"Star": gdjs.LevelsCode.GDStarObjects3});
gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDSmallRedBallObjects3Objects = Hashtable.newFrom({"SmallRedBall": gdjs.LevelsCode.GDSmallRedBallObjects3});
gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDStarObjects3Objects = Hashtable.newFrom({"Star": gdjs.LevelsCode.GDStarObjects3});
gdjs.LevelsCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.LevelsCode.GDSmallRedBallObjects4);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.LevelsCode.GDStarObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDStarObjects4Objects, (( gdjs.LevelsCode.GDSmallRedBallObjects4.length === 0 ) ? 0 :gdjs.LevelsCode.GDSmallRedBallObjects4[0].getPointX("")), (( gdjs.LevelsCode.GDSmallRedBallObjects4.length === 0 ) ? 0 :gdjs.LevelsCode.GDSmallRedBallObjects4[0].getPointY("")), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDStarObjects4Objects, gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDSmallRedBallObjects4Objects, 500, false);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.LevelsCode.GDSmallRedBallObjects4 */
/* Reuse gdjs.LevelsCode.GDStarObjects4 */
{for(var i = 0, len = gdjs.LevelsCode.GDStarObjects4.length ;i < len;++i) {
    gdjs.LevelsCode.GDStarObjects4[i].getBehavior("Physics2").addRopeJoint((gdjs.LevelsCode.GDStarObjects4[i].getCenterXInScene()), (gdjs.LevelsCode.GDStarObjects4[i].getCenterYInScene()), (gdjs.LevelsCode.GDSmallRedBallObjects4.length !== 0 ? gdjs.LevelsCode.GDSmallRedBallObjects4[0] : null), (( gdjs.LevelsCode.GDSmallRedBallObjects4.length === 0 ) ? 0 :gdjs.LevelsCode.GDSmallRedBallObjects4[0].getCenterXInScene()), (( gdjs.LevelsCode.GDSmallRedBallObjects4.length === 0 ) ? 0 :gdjs.LevelsCode.GDSmallRedBallObjects4[0].getCenterYInScene()), -(1), false, runtimeScene.getScene().getVariables().getFromIndex(1));
}
}{for(var i = 0, len = gdjs.LevelsCode.GDStarObjects4.length ;i < len;++i) {
    gdjs.LevelsCode.GDStarObjects4[i].getBehavior("Opacity").setOpacity(250);
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.LevelsCode.GDSmallRedBallObjects4.length !== 0 ? gdjs.LevelsCode.GDSmallRedBallObjects4[0] : null), (gdjs.LevelsCode.GDStarObjects4.length !== 0 ? gdjs.LevelsCode.GDStarObjects4[0] : null));
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}{for(var i = 0, len = gdjs.LevelsCode.GDStarObjects4.length ;i < len;++i) {
    gdjs.LevelsCode.GDStarObjects4[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.3, 5, 5, 10, 10, 0.08, false, null);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Audio\\star.ogg", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.LevelsCode.GDSmallRedBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.LevelsCode.GDStarObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDStarObjects3Objects, gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDSmallRedBallObjects3Objects, 500, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rope"), gdjs.LevelsCode.GDRopeObjects3);
/* Reuse gdjs.LevelsCode.GDSmallRedBallObjects3 */
/* Reuse gdjs.LevelsCode.GDStarObjects3 */
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDStarObjects3Objects, (gdjs.LevelsCode.GDSmallRedBallObjects3.length !== 0 ? gdjs.LevelsCode.GDSmallRedBallObjects3[0] : null), null);
}{for(var i = 0, len = gdjs.LevelsCode.GDRopeObjects3.length ;i < len;++i) {
    gdjs.LevelsCode.GDRopeObjects3[i].drawLine((( gdjs.LevelsCode.GDSmallRedBallObjects3.length === 0 ) ? 0 :gdjs.LevelsCode.GDSmallRedBallObjects3[0].getCenterXInScene()), (( gdjs.LevelsCode.GDSmallRedBallObjects3.length === 0 ) ? 0 :gdjs.LevelsCode.GDSmallRedBallObjects3[0].getCenterYInScene()), (( gdjs.LevelsCode.GDStarObjects3.length === 0 ) ? 0 :gdjs.LevelsCode.GDStarObjects3[0].getPointX("Grab")), (( gdjs.LevelsCode.GDStarObjects3.length === 0 ) ? 0 :gdjs.LevelsCode.GDStarObjects3[0].getPointY("Grab")), 2);
}
}}

}


};gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDStarObjects2Objects = Hashtable.newFrom({"Star": gdjs.LevelsCode.GDStarObjects2});
gdjs.LevelsCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.LevelsCode.GDSmallRedBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.LevelsCode.GDStarObjects2);
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDStarObjects2Objects, (gdjs.LevelsCode.GDSmallRedBallObjects2.length !== 0 ? gdjs.LevelsCode.GDSmallRedBallObjects2[0] : null), null);
}{for(var i = 0, len = gdjs.LevelsCode.GDStarObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDStarObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.linkedObjects.removeLinkBetween(runtimeScene, (gdjs.LevelsCode.GDStarObjects2.length !== 0 ? gdjs.LevelsCode.GDStarObjects2[0] : null), (gdjs.LevelsCode.GDSmallRedBallObjects2.length !== 0 ? gdjs.LevelsCode.GDSmallRedBallObjects2[0] : null));
}{for(var i = 0, len = gdjs.LevelsCode.GDStarObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDStarObjects2[i].getBehavior("Physics2").removeJoint(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}{for(var i = 0, len = gdjs.LevelsCode.GDSmallRedBallObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDSmallRedBallObjects2[i].getBehavior("Physics2").applyImpulse((gdjs.LevelsCode.GDSmallRedBallObjects2[i].getBehavior("Physics2").getLinearVelocityX()) * 0.001, (gdjs.LevelsCode.GDSmallRedBallObjects2[i].getBehavior("Physics2").getLinearVelocityY()) * 0.001, (gdjs.LevelsCode.GDSmallRedBallObjects2[i].getCenterXInScene()), (gdjs.LevelsCode.GDSmallRedBallObjects2[i].getCenterYInScene()));
}
}}

}


};gdjs.LevelsCode.eventsList9 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelsCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelsCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.LevelsCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) >= 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelsCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.LevelsCode.eventsList11 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.LevelsCode.GDSmallRedBallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsCode.GDSmallRedBallObjects2.length;i<l;++i) {
    if ( gdjs.LevelsCode.GDSmallRedBallObjects2[i].getY() > gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.LevelsCode.GDSmallRedBallObjects2[k] = gdjs.LevelsCode.GDSmallRedBallObjects2[i];
        ++k;
    }
}
gdjs.LevelsCode.GDSmallRedBallObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Levels", true);
}}

}


};gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDSmallRedBallObjects1Objects = Hashtable.newFrom({"SmallRedBall": gdjs.LevelsCode.GDSmallRedBallObjects1});
gdjs.LevelsCode.eventsList12 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.LevelsCode.GDFinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.LevelsCode.GDSmallRedBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelsCode.GDSmallRedBallObjects1.length;i<l;++i) {
    if ( gdjs.LevelsCode.GDSmallRedBallObjects1[i].getCenterXInScene() >= (( gdjs.LevelsCode.GDFinishObjects1.length === 0 ) ? 0 :gdjs.LevelsCode.GDFinishObjects1[0].getX()) ) {
        isConditionTrue_0 = true;
        gdjs.LevelsCode.GDSmallRedBallObjects1[k] = gdjs.LevelsCode.GDSmallRedBallObjects1[i];
        ++k;
    }
}
gdjs.LevelsCode.GDSmallRedBallObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LevelsCode.GDSmallRedBallObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sceneFinish");
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Audio\\whoosh.wav", false, 20, 1);
}{gdjs.physics2.setTimeScale(gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDSmallRedBallObjects1Objects, "Physics2", 0.05);
}}

}


};gdjs.LevelsCode.eventsList13 = function(runtimeScene) {

{


gdjs.LevelsCode.eventsList10(runtimeScene);
}


{


gdjs.LevelsCode.eventsList11(runtimeScene);
}


{


gdjs.LevelsCode.eventsList12(runtimeScene);
}


};gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDSmallRedBallObjects3Objects = Hashtable.newFrom({"SmallRedBall": gdjs.LevelsCode.GDSmallRedBallObjects3});
gdjs.LevelsCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.LevelsCode.GDSmallRedBallObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\Audio\\applause.wav", 2, false, 30, 1);
}{gdjs.physics2.setTimeScale(gdjs.LevelsCode.mapOfGDgdjs_9546LevelsCode_9546GDSmallRedBallObjects3Objects, "Physics2", 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SuccessText"), gdjs.LevelsCode.GDSuccessTextObjects3);
{for(var i = 0, len = gdjs.LevelsCode.GDSuccessTextObjects3.length ;i < len;++i) {
    gdjs.LevelsCode.GDSuccessTextObjects3[i].getBehavior("Text").setText("Congratulations!");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SuccessText"), gdjs.LevelsCode.GDSuccessTextObjects3);
{for(var i = 0, len = gdjs.LevelsCode.GDSuccessTextObjects3.length ;i < len;++i) {
    gdjs.LevelsCode.GDSuccessTextObjects3[i].getBehavior("Text").setText("Level cleared!" + gdjs.evtTools.string.newLine() + "Next level >>>");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BluePanel"), gdjs.LevelsCode.GDBluePanelObjects2);
gdjs.copyArray(runtimeScene.getObjects("ParticlesEmitterWin"), gdjs.LevelsCode.GDParticlesEmitterWinObjects2);
gdjs.copyArray(runtimeScene.getObjects("SuccessText"), gdjs.LevelsCode.GDSuccessTextObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Ending");
}{for(var i = 0, len = gdjs.LevelsCode.GDParticlesEmitterWinObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDParticlesEmitterWinObjects2[i].startEmission();
}
}{for(var i = 0, len = gdjs.LevelsCode.GDSuccessTextObjects2.length ;i < len;++i) {
    gdjs.LevelsCode.GDSuccessTextObjects2[i].setCenterPositionInScene((( gdjs.LevelsCode.GDBluePanelObjects2.length === 0 ) ? 0 :gdjs.LevelsCode.GDBluePanelObjects2[0].getCenterXInScene()),(( gdjs.LevelsCode.GDBluePanelObjects2.length === 0 ) ? 0 :gdjs.LevelsCode.GDBluePanelObjects2[0].getCenterYInScene()));
}
}}

}


};gdjs.LevelsCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Levels", true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.LevelsCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sceneFinish") >= 1.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelsCode.eventsList14(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sceneFinish") >= 3;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sceneFinish") >= 1.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelsCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.LevelsCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelsCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.LevelsCode.eventsList18 = function(runtimeScene) {

{


gdjs.LevelsCode.eventsList4(runtimeScene);
}


{


gdjs.LevelsCode.eventsList5(runtimeScene);
}


{


gdjs.LevelsCode.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelsCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


gdjs.LevelsCode.eventsList17(runtimeScene);
}


};

gdjs.LevelsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelsCode.GDContinueTextObjects1.length = 0;
gdjs.LevelsCode.GDContinueTextObjects2.length = 0;
gdjs.LevelsCode.GDContinueTextObjects3.length = 0;
gdjs.LevelsCode.GDContinueTextObjects4.length = 0;
gdjs.LevelsCode.GDContinueTextObjects5.length = 0;
gdjs.LevelsCode.GDSpeedTextObjects1.length = 0;
gdjs.LevelsCode.GDSpeedTextObjects2.length = 0;
gdjs.LevelsCode.GDSpeedTextObjects3.length = 0;
gdjs.LevelsCode.GDSpeedTextObjects4.length = 0;
gdjs.LevelsCode.GDSpeedTextObjects5.length = 0;
gdjs.LevelsCode.GDLevelTextObjects1.length = 0;
gdjs.LevelsCode.GDLevelTextObjects2.length = 0;
gdjs.LevelsCode.GDLevelTextObjects3.length = 0;
gdjs.LevelsCode.GDLevelTextObjects4.length = 0;
gdjs.LevelsCode.GDLevelTextObjects5.length = 0;
gdjs.LevelsCode.GDSuccessTextObjects1.length = 0;
gdjs.LevelsCode.GDSuccessTextObjects2.length = 0;
gdjs.LevelsCode.GDSuccessTextObjects3.length = 0;
gdjs.LevelsCode.GDSuccessTextObjects4.length = 0;
gdjs.LevelsCode.GDSuccessTextObjects5.length = 0;
gdjs.LevelsCode.GDParticlesEmitterWinObjects1.length = 0;
gdjs.LevelsCode.GDParticlesEmitterWinObjects2.length = 0;
gdjs.LevelsCode.GDParticlesEmitterWinObjects3.length = 0;
gdjs.LevelsCode.GDParticlesEmitterWinObjects4.length = 0;
gdjs.LevelsCode.GDParticlesEmitterWinObjects5.length = 0;
gdjs.LevelsCode.GDCloudObjects1.length = 0;
gdjs.LevelsCode.GDCloudObjects2.length = 0;
gdjs.LevelsCode.GDCloudObjects3.length = 0;
gdjs.LevelsCode.GDCloudObjects4.length = 0;
gdjs.LevelsCode.GDCloudObjects5.length = 0;
gdjs.LevelsCode.GDDistanceLeftObjects1.length = 0;
gdjs.LevelsCode.GDDistanceLeftObjects2.length = 0;
gdjs.LevelsCode.GDDistanceLeftObjects3.length = 0;
gdjs.LevelsCode.GDDistanceLeftObjects4.length = 0;
gdjs.LevelsCode.GDDistanceLeftObjects5.length = 0;
gdjs.LevelsCode.GDArrowDistanceLeftObjects1.length = 0;
gdjs.LevelsCode.GDArrowDistanceLeftObjects2.length = 0;
gdjs.LevelsCode.GDArrowDistanceLeftObjects3.length = 0;
gdjs.LevelsCode.GDArrowDistanceLeftObjects4.length = 0;
gdjs.LevelsCode.GDArrowDistanceLeftObjects5.length = 0;
gdjs.LevelsCode.GDRopeObjects1.length = 0;
gdjs.LevelsCode.GDRopeObjects2.length = 0;
gdjs.LevelsCode.GDRopeObjects3.length = 0;
gdjs.LevelsCode.GDRopeObjects4.length = 0;
gdjs.LevelsCode.GDRopeObjects5.length = 0;
gdjs.LevelsCode.GDSmallRedBallObjects1.length = 0;
gdjs.LevelsCode.GDSmallRedBallObjects2.length = 0;
gdjs.LevelsCode.GDSmallRedBallObjects3.length = 0;
gdjs.LevelsCode.GDSmallRedBallObjects4.length = 0;
gdjs.LevelsCode.GDSmallRedBallObjects5.length = 0;
gdjs.LevelsCode.GDFinishObjects1.length = 0;
gdjs.LevelsCode.GDFinishObjects2.length = 0;
gdjs.LevelsCode.GDFinishObjects3.length = 0;
gdjs.LevelsCode.GDFinishObjects4.length = 0;
gdjs.LevelsCode.GDFinishObjects5.length = 0;
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects3.length = 0;
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects4.length = 0;
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects5.length = 0;
gdjs.LevelsCode.GDStarObjects1.length = 0;
gdjs.LevelsCode.GDStarObjects2.length = 0;
gdjs.LevelsCode.GDStarObjects3.length = 0;
gdjs.LevelsCode.GDStarObjects4.length = 0;
gdjs.LevelsCode.GDStarObjects5.length = 0;
gdjs.LevelsCode.GDBluePanelObjects1.length = 0;
gdjs.LevelsCode.GDBluePanelObjects2.length = 0;
gdjs.LevelsCode.GDBluePanelObjects3.length = 0;
gdjs.LevelsCode.GDBluePanelObjects4.length = 0;
gdjs.LevelsCode.GDBluePanelObjects5.length = 0;

gdjs.LevelsCode.eventsList18(runtimeScene);
gdjs.LevelsCode.GDContinueTextObjects1.length = 0;
gdjs.LevelsCode.GDContinueTextObjects2.length = 0;
gdjs.LevelsCode.GDContinueTextObjects3.length = 0;
gdjs.LevelsCode.GDContinueTextObjects4.length = 0;
gdjs.LevelsCode.GDContinueTextObjects5.length = 0;
gdjs.LevelsCode.GDSpeedTextObjects1.length = 0;
gdjs.LevelsCode.GDSpeedTextObjects2.length = 0;
gdjs.LevelsCode.GDSpeedTextObjects3.length = 0;
gdjs.LevelsCode.GDSpeedTextObjects4.length = 0;
gdjs.LevelsCode.GDSpeedTextObjects5.length = 0;
gdjs.LevelsCode.GDLevelTextObjects1.length = 0;
gdjs.LevelsCode.GDLevelTextObjects2.length = 0;
gdjs.LevelsCode.GDLevelTextObjects3.length = 0;
gdjs.LevelsCode.GDLevelTextObjects4.length = 0;
gdjs.LevelsCode.GDLevelTextObjects5.length = 0;
gdjs.LevelsCode.GDSuccessTextObjects1.length = 0;
gdjs.LevelsCode.GDSuccessTextObjects2.length = 0;
gdjs.LevelsCode.GDSuccessTextObjects3.length = 0;
gdjs.LevelsCode.GDSuccessTextObjects4.length = 0;
gdjs.LevelsCode.GDSuccessTextObjects5.length = 0;
gdjs.LevelsCode.GDParticlesEmitterWinObjects1.length = 0;
gdjs.LevelsCode.GDParticlesEmitterWinObjects2.length = 0;
gdjs.LevelsCode.GDParticlesEmitterWinObjects3.length = 0;
gdjs.LevelsCode.GDParticlesEmitterWinObjects4.length = 0;
gdjs.LevelsCode.GDParticlesEmitterWinObjects5.length = 0;
gdjs.LevelsCode.GDCloudObjects1.length = 0;
gdjs.LevelsCode.GDCloudObjects2.length = 0;
gdjs.LevelsCode.GDCloudObjects3.length = 0;
gdjs.LevelsCode.GDCloudObjects4.length = 0;
gdjs.LevelsCode.GDCloudObjects5.length = 0;
gdjs.LevelsCode.GDDistanceLeftObjects1.length = 0;
gdjs.LevelsCode.GDDistanceLeftObjects2.length = 0;
gdjs.LevelsCode.GDDistanceLeftObjects3.length = 0;
gdjs.LevelsCode.GDDistanceLeftObjects4.length = 0;
gdjs.LevelsCode.GDDistanceLeftObjects5.length = 0;
gdjs.LevelsCode.GDArrowDistanceLeftObjects1.length = 0;
gdjs.LevelsCode.GDArrowDistanceLeftObjects2.length = 0;
gdjs.LevelsCode.GDArrowDistanceLeftObjects3.length = 0;
gdjs.LevelsCode.GDArrowDistanceLeftObjects4.length = 0;
gdjs.LevelsCode.GDArrowDistanceLeftObjects5.length = 0;
gdjs.LevelsCode.GDRopeObjects1.length = 0;
gdjs.LevelsCode.GDRopeObjects2.length = 0;
gdjs.LevelsCode.GDRopeObjects3.length = 0;
gdjs.LevelsCode.GDRopeObjects4.length = 0;
gdjs.LevelsCode.GDRopeObjects5.length = 0;
gdjs.LevelsCode.GDSmallRedBallObjects1.length = 0;
gdjs.LevelsCode.GDSmallRedBallObjects2.length = 0;
gdjs.LevelsCode.GDSmallRedBallObjects3.length = 0;
gdjs.LevelsCode.GDSmallRedBallObjects4.length = 0;
gdjs.LevelsCode.GDSmallRedBallObjects5.length = 0;
gdjs.LevelsCode.GDFinishObjects1.length = 0;
gdjs.LevelsCode.GDFinishObjects2.length = 0;
gdjs.LevelsCode.GDFinishObjects3.length = 0;
gdjs.LevelsCode.GDFinishObjects4.length = 0;
gdjs.LevelsCode.GDFinishObjects5.length = 0;
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects3.length = 0;
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects4.length = 0;
gdjs.LevelsCode.GDEmptyCloudBackgroundObjects5.length = 0;
gdjs.LevelsCode.GDStarObjects1.length = 0;
gdjs.LevelsCode.GDStarObjects2.length = 0;
gdjs.LevelsCode.GDStarObjects3.length = 0;
gdjs.LevelsCode.GDStarObjects4.length = 0;
gdjs.LevelsCode.GDStarObjects5.length = 0;
gdjs.LevelsCode.GDBluePanelObjects1.length = 0;
gdjs.LevelsCode.GDBluePanelObjects2.length = 0;
gdjs.LevelsCode.GDBluePanelObjects3.length = 0;
gdjs.LevelsCode.GDBluePanelObjects4.length = 0;
gdjs.LevelsCode.GDBluePanelObjects5.length = 0;


return;

}

gdjs['LevelsCode'] = gdjs.LevelsCode;
