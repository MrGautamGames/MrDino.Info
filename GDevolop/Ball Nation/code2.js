gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDScoreTextObjects1= [];
gdjs.LeaderboardCode.GDScoreTextObjects2= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects1= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects2= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects1= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects2= [];
gdjs.LeaderboardCode.GDMainMenuButtonObjects1= [];
gdjs.LeaderboardCode.GDMainMenuButtonObjects2= [];
gdjs.LeaderboardCode.GDRestartButtonObjects1= [];
gdjs.LeaderboardCode.GDRestartButtonObjects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.LeaderboardCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Score   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.LeaderboardCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRestartButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRestartButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRestartButtonObjects1[k] = gdjs.LeaderboardCode.GDRestartButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRestartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.LeaderboardCode.GDMainMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDMainMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDMainMenuButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDMainMenuButtonObjects1[k] = gdjs.LeaderboardCode.GDMainMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDMainMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelection", false);
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDMainMenuButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDMainMenuButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects2.length = 0;

gdjs.LeaderboardCode.eventsList0(runtimeScene);
gdjs.LeaderboardCode.GDScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDMainMenuButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDMainMenuButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
