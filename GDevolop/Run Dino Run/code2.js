gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDLeaderboardDialogObjects1= [];
gdjs.LeaderboardCode.GDLeaderboardDialogObjects2= [];
gdjs.LeaderboardCode.GDRetryButtonObjects1= [];
gdjs.LeaderboardCode.GDRetryButtonObjects2= [];
gdjs.LeaderboardCode.GDScore2Objects1= [];
gdjs.LeaderboardCode.GDScore2Objects2= [];
gdjs.LeaderboardCode.GDScoreTextObjects1= [];
gdjs.LeaderboardCode.GDScoreTextObjects2= [];
gdjs.LeaderboardCode.GDPlatformObjects1= [];
gdjs.LeaderboardCode.GDPlatformObjects2= [];
gdjs.LeaderboardCode.GDBackgroundObjects1= [];
gdjs.LeaderboardCode.GDBackgroundObjects2= [];
gdjs.LeaderboardCode.GDDustParticlesObjects1= [];
gdjs.LeaderboardCode.GDDustParticlesObjects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RetryButton"), gdjs.LeaderboardCode.GDRetryButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRetryButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRetryButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRetryButtonObjects1[k] = gdjs.LeaderboardCode.GDRetryButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRetryButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.LeaderboardCode.GDScore2Objects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "LeaderboardMusic.mp3", true, 70, 1);
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore2Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDLeaderboardDialogObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardDialogObjects2.length = 0;
gdjs.LeaderboardCode.GDRetryButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRetryButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDScore2Objects1.length = 0;
gdjs.LeaderboardCode.GDScore2Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects1.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects2.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects1.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects2.length = 0;

gdjs.LeaderboardCode.eventsList0(runtimeScene);
gdjs.LeaderboardCode.GDLeaderboardDialogObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardDialogObjects2.length = 0;
gdjs.LeaderboardCode.GDRetryButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRetryButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDScore2Objects1.length = 0;
gdjs.LeaderboardCode.GDScore2Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects1.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects2.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects1.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
