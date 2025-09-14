gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDCoinObjects1= [];
gdjs.LeaderboardCode.GDCoinObjects2= [];
gdjs.LeaderboardCode.GDLeaderboardDialogObjects1= [];
gdjs.LeaderboardCode.GDLeaderboardDialogObjects2= [];
gdjs.LeaderboardCode.GDRestartObjects1= [];
gdjs.LeaderboardCode.GDRestartObjects2= [];
gdjs.LeaderboardCode.GDGreenButtonObjects1= [];
gdjs.LeaderboardCode.GDGreenButtonObjects2= [];
gdjs.LeaderboardCode.GDNewTextObjects1= [];
gdjs.LeaderboardCode.GDNewTextObjects2= [];
gdjs.LeaderboardCode.GDStartObjects1= [];
gdjs.LeaderboardCode.GDStartObjects2= [];
gdjs.LeaderboardCode.GDRestart2Objects1= [];
gdjs.LeaderboardCode.GDRestart2Objects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Restart2"), gdjs.LeaderboardCode.GDRestart2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRestart2Objects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRestart2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRestart2Objects1[k] = gdjs.LeaderboardCode.GDRestart2Objects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRestart2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDCoinObjects1.length = 0;
gdjs.LeaderboardCode.GDCoinObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboardDialogObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardDialogObjects2.length = 0;
gdjs.LeaderboardCode.GDRestartObjects1.length = 0;
gdjs.LeaderboardCode.GDRestartObjects2.length = 0;
gdjs.LeaderboardCode.GDGreenButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDGreenButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects1.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects2.length = 0;
gdjs.LeaderboardCode.GDStartObjects1.length = 0;
gdjs.LeaderboardCode.GDStartObjects2.length = 0;
gdjs.LeaderboardCode.GDRestart2Objects1.length = 0;
gdjs.LeaderboardCode.GDRestart2Objects2.length = 0;

gdjs.LeaderboardCode.eventsList0(runtimeScene);
gdjs.LeaderboardCode.GDCoinObjects1.length = 0;
gdjs.LeaderboardCode.GDCoinObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboardDialogObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardDialogObjects2.length = 0;
gdjs.LeaderboardCode.GDRestartObjects1.length = 0;
gdjs.LeaderboardCode.GDRestartObjects2.length = 0;
gdjs.LeaderboardCode.GDGreenButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDGreenButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects1.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects2.length = 0;
gdjs.LeaderboardCode.GDStartObjects1.length = 0;
gdjs.LeaderboardCode.GDStartObjects2.length = 0;
gdjs.LeaderboardCode.GDRestart2Objects1.length = 0;
gdjs.LeaderboardCode.GDRestart2Objects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
