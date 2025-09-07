gdjs.Level_325Code = {};
gdjs.Level_325Code.localVariables = [];
gdjs.Level_325Code.GDDuckObjects3_1final = [];

gdjs.Level_325Code.GDDuckObjects1= [];
gdjs.Level_325Code.GDDuckObjects2= [];
gdjs.Level_325Code.GDDuckObjects3= [];
gdjs.Level_325Code.GDDuckObjects4= [];
gdjs.Level_325Code.GDBlockObjects1= [];
gdjs.Level_325Code.GDBlockObjects2= [];
gdjs.Level_325Code.GDBlockObjects3= [];
gdjs.Level_325Code.GDBlockObjects4= [];
gdjs.Level_325Code.GDKeyObjectObjects1= [];
gdjs.Level_325Code.GDKeyObjectObjects2= [];
gdjs.Level_325Code.GDKeyObjectObjects3= [];
gdjs.Level_325Code.GDKeyObjectObjects4= [];
gdjs.Level_325Code.GDDoorObjects1= [];
gdjs.Level_325Code.GDDoorObjects2= [];
gdjs.Level_325Code.GDDoorObjects3= [];
gdjs.Level_325Code.GDDoorObjects4= [];
gdjs.Level_325Code.GDSpikeObjects1= [];
gdjs.Level_325Code.GDSpikeObjects2= [];
gdjs.Level_325Code.GDSpikeObjects3= [];
gdjs.Level_325Code.GDSpikeObjects4= [];
gdjs.Level_325Code.GDDuckArtworkObjects1= [];
gdjs.Level_325Code.GDDuckArtworkObjects2= [];
gdjs.Level_325Code.GDDuckArtworkObjects3= [];
gdjs.Level_325Code.GDDuckArtworkObjects4= [];
gdjs.Level_325Code.GDSparkleParticleObjects1= [];
gdjs.Level_325Code.GDSparkleParticleObjects2= [];
gdjs.Level_325Code.GDSparkleParticleObjects3= [];
gdjs.Level_325Code.GDSparkleParticleObjects4= [];
gdjs.Level_325Code.GDCloudsObjects1= [];
gdjs.Level_325Code.GDCloudsObjects2= [];
gdjs.Level_325Code.GDCloudsObjects3= [];
gdjs.Level_325Code.GDCloudsObjects4= [];
gdjs.Level_325Code.GDDownButtonObjects1= [];
gdjs.Level_325Code.GDDownButtonObjects2= [];
gdjs.Level_325Code.GDDownButtonObjects3= [];
gdjs.Level_325Code.GDDownButtonObjects4= [];
gdjs.Level_325Code.GDTilemapObjects1= [];
gdjs.Level_325Code.GDTilemapObjects2= [];
gdjs.Level_325Code.GDTilemapObjects3= [];
gdjs.Level_325Code.GDTilemapObjects4= [];


gdjs.Level_325Code.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects3);
{for(var i = 0, len = gdjs.Level_325Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckObjects3[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_325Code.GDDuckObjects3.length;i<l;++i) {
    if ( gdjs.Level_325Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_325Code.GDDuckObjects3[k] = gdjs.Level_325Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_325Code.GDDuckObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_325Code.GDDuckObjects3.length;i<l;++i) {
    if ( gdjs.Level_325Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_325Code.GDDuckObjects3[k] = gdjs.Level_325Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_325Code.GDDuckObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10168244);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_325Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects3[i].getBehavior("Animation").setAnimationName("Walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_325Code.GDDuckObjects3.length;i<l;++i) {
    if ( !(gdjs.Level_325Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_325Code.GDDuckObjects3[k] = gdjs.Level_325Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_325Code.GDDuckObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10169820);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_325Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_325Code.GDDownButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_325Code.GDDuckArtworkObjects2);
{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects2[i].setPosition((( gdjs.Level_325Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_325Code.GDDuckObjects2[0].getPointX("")),(( gdjs.Level_325Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_325Code.GDDuckObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Level_325Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_325Code.GDDownButtonObjects2[i].setPosition((( gdjs.Level_325Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_325Code.GDDuckObjects2[0].getPointX("")) - 32,(( gdjs.Level_325Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_325Code.GDDuckObjects2[0].getPointY("")) - 150);
}
}}

}


};gdjs.Level_325Code.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9510596);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_325Code.GDDuckObjects3 */
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_325Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_325Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects3[i].getBehavior("Resizable").setHeight(55);
}
}{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects3[i].getBehavior("Resizable").setWidth(70);
}
}{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects3[i].getBehavior("Tween").addObjectWidthTween2("Squash Jump", 64, "linear", 0.08, false);
}
}{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects3[i].getBehavior("Tween").addObjectHeightTween2("Stretch Jump", 64, "linear", 0.08, false);
}
}{for(var i = 0, len = gdjs.Level_325Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckObjects3[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


};gdjs.Level_325Code.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_325Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects3[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Level_325Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_325Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects3[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Level_325Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{



}


{

gdjs.Level_325Code.GDDuckObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_325Code.GDDuckObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects4);
for (var i = 0, k = 0, l = gdjs.Level_325Code.GDDuckObjects4.length;i<l;++i) {
    if ( gdjs.Level_325Code.GDDuckObjects4[i].getBehavior("PlatformerObject").canJump() ) {
        isConditionTrue_1 = true;
        gdjs.Level_325Code.GDDuckObjects4[k] = gdjs.Level_325Code.GDDuckObjects4[i];
        ++k;
    }
}
gdjs.Level_325Code.GDDuckObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_325Code.GDDuckObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Level_325Code.GDDuckObjects3_1final.indexOf(gdjs.Level_325Code.GDDuckObjects4[j]) === -1 )
            gdjs.Level_325Code.GDDuckObjects3_1final.push(gdjs.Level_325Code.GDDuckObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects4);
for (var i = 0, k = 0, l = gdjs.Level_325Code.GDDuckObjects4.length;i<l;++i) {
    if ( gdjs.Level_325Code.GDDuckObjects4[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_1 = true;
        gdjs.Level_325Code.GDDuckObjects4[k] = gdjs.Level_325Code.GDDuckObjects4[i];
        ++k;
    }
}
gdjs.Level_325Code.GDDuckObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_325Code.GDDuckObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Level_325Code.GDDuckObjects3_1final.indexOf(gdjs.Level_325Code.GDDuckObjects4[j]) === -1 )
            gdjs.Level_325Code.GDDuckObjects3_1final.push(gdjs.Level_325Code.GDDuckObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_325Code.GDDuckObjects3_1final, gdjs.Level_325Code.GDDuckObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_325Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_325Code.GDDuckObjects2.length;i<l;++i) {
    if ( gdjs.Level_325Code.GDDuckObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_325Code.GDDuckObjects2[k] = gdjs.Level_325Code.GDDuckObjects2[i];
        ++k;
    }
}
gdjs.Level_325Code.GDDuckObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() != 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}}

}


};gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_325Code.GDDuckObjects2});
gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDSpikeObjects2Objects = Hashtable.newFrom({"Spike": gdjs.Level_325Code.GDSpikeObjects2});
gdjs.Level_325Code.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Level_325Code.GDSpikeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDuckObjects2Objects, gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDSpikeObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Quack.mp3", false, 30, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};gdjs.Level_325Code.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_325Code.GDDuckObjects2.length;i<l;++i) {
    if ( gdjs.Level_325Code.GDDuckObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_325Code.GDDuckObjects2[k] = gdjs.Level_325Code.GDDuckObjects2[i];
        ++k;
    }
}
gdjs.Level_325Code.GDDuckObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9519340);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_325Code.GDDuckArtworkObjects2);
{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects2[i].getBehavior("Resizable").setHeight(50);
}
}{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects2[i].getBehavior("Resizable").setWidth(100);
}
}{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects2[i].getBehavior("Tween").addObjectHeightTween2("Stretch", 64, "linear", 0.08, false);
}
}{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects2[i].getBehavior("Tween").addObjectWidthTween2("Squash", 64, "linear", 0.08, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_325Code.GDDuckObjects1.length;i<l;++i) {
    if ( gdjs.Level_325Code.GDDuckObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Level_325Code.GDDuckObjects1[k] = gdjs.Level_325Code.GDDuckObjects1[i];
        ++k;
    }
}
gdjs.Level_325Code.GDDuckObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9522468);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_325Code.GDDuckArtworkObjects1);
{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects1[i].getBehavior("Tween").addObjectHeightTween2("Stretch Air", 75, "linear", 0.08, false);
}
}{for(var i = 0, len = gdjs.Level_325Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDDuckArtworkObjects1[i].getBehavior("Tween").addObjectWidthTween2("Squash Air", 50, "linear", 0.08, false);
}
}}

}


};gdjs.Level_325Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level_325Code.eventsList0(runtimeScene);
}


{


gdjs.Level_325Code.eventsList2(runtimeScene);
}


{


gdjs.Level_325Code.eventsList3(runtimeScene);
}


{


gdjs.Level_325Code.eventsList4(runtimeScene);
}


};gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_325Code.GDDuckObjects2});
gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDKeyObjectObjects2Objects = Hashtable.newFrom({"KeyObject": gdjs.Level_325Code.GDKeyObjectObjects2});
gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDSparkleParticleObjects2Objects = Hashtable.newFrom({"SparkleParticle": gdjs.Level_325Code.GDSparkleParticleObjects2});
gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_325Code.GDDuckObjects2});
gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_325Code.GDDoorObjects2});
gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_325Code.GDDuckObjects2});
gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_325Code.GDDoorObjects2});
gdjs.Level_325Code.eventsList6 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9510836);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), false);
}}

}


};gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDuckObjects1Objects = Hashtable.newFrom({"Duck": gdjs.Level_325Code.GDDuckObjects1});
gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_325Code.GDDoorObjects1});
gdjs.Level_325Code.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("KeyObject"), gdjs.Level_325Code.GDKeyObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDuckObjects2Objects, gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDKeyObjectObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_325Code.GDKeyObjectObjects2 */
gdjs.Level_325Code.GDSparkleParticleObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDSparkleParticleObjects2Objects, (( gdjs.Level_325Code.GDKeyObjectObjects2.length === 0 ) ? 0 :gdjs.Level_325Code.GDKeyObjectObjects2[0].getPointX("Center")), (( gdjs.Level_325Code.GDKeyObjectObjects2.length === 0 ) ? 0 :gdjs.Level_325Code.GDKeyObjectObjects2[0].getPointY("Center")), "Player");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.Level_325Code.GDKeyObjectObjects2.length ;i < len;++i) {
    gdjs.Level_325Code.GDKeyObjectObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_325Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDuckObjects2Objects, gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDoorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_325Code.GDDoorObjects2 */
{for(var i = 0, len = gdjs.Level_325Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Level_325Code.GDDoorObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock.wav", false, 50, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_325Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDuckObjects2Objects, gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDoorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_325Code.GDDoorObjects2.length;i<l;++i) {
    if ( gdjs.Level_325Code.GDDoorObjects2[i].getBehavior("Animation").getAnimationName() == "Unlocked" ) {
        isConditionTrue_0 = true;
        gdjs.Level_325Code.GDDoorObjects2[k] = gdjs.Level_325Code.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.Level_325Code.GDDoorObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_325Code.GDDownButtonObjects2);
/* Reuse gdjs.Level_325Code.GDDuckObjects2 */
{for(var i = 0, len = gdjs.Level_325Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_325Code.GDDownButtonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_325Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_325Code.GDDownButtonObjects2[i].setPosition((( gdjs.Level_325Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_325Code.GDDuckObjects2[0].getPointX("")) - 32,(( gdjs.Level_325Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_325Code.GDDuckObjects2[0].getPointY("")) - 150);
}
}
{ //Subevents
gdjs.Level_325Code.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_325Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_325Code.GDDuckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDuckObjects1Objects, gdjs.Level_325Code.mapOfGDgdjs_9546Level_9595325Code_9546GDDoorObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9522996);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_325Code.GDDownButtonObjects1);
{for(var i = 0, len = gdjs.Level_325Code.GDDownButtonObjects1.length ;i < len;++i) {
    gdjs.Level_325Code.GDDownButtonObjects1[i].hide();
}
}}

}


};gdjs.Level_325Code.eventsList8 = function(runtimeScene) {

{



}


{


gdjs.Level_325Code.eventsList5(runtimeScene);
}


{


gdjs.Level_325Code.eventsList7(runtimeScene);
}


};

gdjs.Level_325Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_325Code.GDDuckObjects1.length = 0;
gdjs.Level_325Code.GDDuckObjects2.length = 0;
gdjs.Level_325Code.GDDuckObjects3.length = 0;
gdjs.Level_325Code.GDDuckObjects4.length = 0;
gdjs.Level_325Code.GDBlockObjects1.length = 0;
gdjs.Level_325Code.GDBlockObjects2.length = 0;
gdjs.Level_325Code.GDBlockObjects3.length = 0;
gdjs.Level_325Code.GDBlockObjects4.length = 0;
gdjs.Level_325Code.GDKeyObjectObjects1.length = 0;
gdjs.Level_325Code.GDKeyObjectObjects2.length = 0;
gdjs.Level_325Code.GDKeyObjectObjects3.length = 0;
gdjs.Level_325Code.GDKeyObjectObjects4.length = 0;
gdjs.Level_325Code.GDDoorObjects1.length = 0;
gdjs.Level_325Code.GDDoorObjects2.length = 0;
gdjs.Level_325Code.GDDoorObjects3.length = 0;
gdjs.Level_325Code.GDDoorObjects4.length = 0;
gdjs.Level_325Code.GDSpikeObjects1.length = 0;
gdjs.Level_325Code.GDSpikeObjects2.length = 0;
gdjs.Level_325Code.GDSpikeObjects3.length = 0;
gdjs.Level_325Code.GDSpikeObjects4.length = 0;
gdjs.Level_325Code.GDDuckArtworkObjects1.length = 0;
gdjs.Level_325Code.GDDuckArtworkObjects2.length = 0;
gdjs.Level_325Code.GDDuckArtworkObjects3.length = 0;
gdjs.Level_325Code.GDDuckArtworkObjects4.length = 0;
gdjs.Level_325Code.GDSparkleParticleObjects1.length = 0;
gdjs.Level_325Code.GDSparkleParticleObjects2.length = 0;
gdjs.Level_325Code.GDSparkleParticleObjects3.length = 0;
gdjs.Level_325Code.GDSparkleParticleObjects4.length = 0;
gdjs.Level_325Code.GDCloudsObjects1.length = 0;
gdjs.Level_325Code.GDCloudsObjects2.length = 0;
gdjs.Level_325Code.GDCloudsObjects3.length = 0;
gdjs.Level_325Code.GDCloudsObjects4.length = 0;
gdjs.Level_325Code.GDDownButtonObjects1.length = 0;
gdjs.Level_325Code.GDDownButtonObjects2.length = 0;
gdjs.Level_325Code.GDDownButtonObjects3.length = 0;
gdjs.Level_325Code.GDDownButtonObjects4.length = 0;
gdjs.Level_325Code.GDTilemapObjects1.length = 0;
gdjs.Level_325Code.GDTilemapObjects2.length = 0;
gdjs.Level_325Code.GDTilemapObjects3.length = 0;
gdjs.Level_325Code.GDTilemapObjects4.length = 0;

gdjs.Level_325Code.eventsList8(runtimeScene);
gdjs.Level_325Code.GDDuckObjects1.length = 0;
gdjs.Level_325Code.GDDuckObjects2.length = 0;
gdjs.Level_325Code.GDDuckObjects3.length = 0;
gdjs.Level_325Code.GDDuckObjects4.length = 0;
gdjs.Level_325Code.GDBlockObjects1.length = 0;
gdjs.Level_325Code.GDBlockObjects2.length = 0;
gdjs.Level_325Code.GDBlockObjects3.length = 0;
gdjs.Level_325Code.GDBlockObjects4.length = 0;
gdjs.Level_325Code.GDKeyObjectObjects1.length = 0;
gdjs.Level_325Code.GDKeyObjectObjects2.length = 0;
gdjs.Level_325Code.GDKeyObjectObjects3.length = 0;
gdjs.Level_325Code.GDKeyObjectObjects4.length = 0;
gdjs.Level_325Code.GDDoorObjects1.length = 0;
gdjs.Level_325Code.GDDoorObjects2.length = 0;
gdjs.Level_325Code.GDDoorObjects3.length = 0;
gdjs.Level_325Code.GDDoorObjects4.length = 0;
gdjs.Level_325Code.GDSpikeObjects1.length = 0;
gdjs.Level_325Code.GDSpikeObjects2.length = 0;
gdjs.Level_325Code.GDSpikeObjects3.length = 0;
gdjs.Level_325Code.GDSpikeObjects4.length = 0;
gdjs.Level_325Code.GDDuckArtworkObjects1.length = 0;
gdjs.Level_325Code.GDDuckArtworkObjects2.length = 0;
gdjs.Level_325Code.GDDuckArtworkObjects3.length = 0;
gdjs.Level_325Code.GDDuckArtworkObjects4.length = 0;
gdjs.Level_325Code.GDSparkleParticleObjects1.length = 0;
gdjs.Level_325Code.GDSparkleParticleObjects2.length = 0;
gdjs.Level_325Code.GDSparkleParticleObjects3.length = 0;
gdjs.Level_325Code.GDSparkleParticleObjects4.length = 0;
gdjs.Level_325Code.GDCloudsObjects1.length = 0;
gdjs.Level_325Code.GDCloudsObjects2.length = 0;
gdjs.Level_325Code.GDCloudsObjects3.length = 0;
gdjs.Level_325Code.GDCloudsObjects4.length = 0;
gdjs.Level_325Code.GDDownButtonObjects1.length = 0;
gdjs.Level_325Code.GDDownButtonObjects2.length = 0;
gdjs.Level_325Code.GDDownButtonObjects3.length = 0;
gdjs.Level_325Code.GDDownButtonObjects4.length = 0;
gdjs.Level_325Code.GDTilemapObjects1.length = 0;
gdjs.Level_325Code.GDTilemapObjects2.length = 0;
gdjs.Level_325Code.GDTilemapObjects3.length = 0;
gdjs.Level_325Code.GDTilemapObjects4.length = 0;


return;

}

gdjs['Level_325Code'] = gdjs.Level_325Code;
