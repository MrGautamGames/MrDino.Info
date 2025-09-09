
if (typeof gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime !== "undefined") {
  gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime = {};
gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.GDObjectObjects1[0].getTimerElapsedTimeInSeconds("" + eventsFunctionContext.getArgument("Timer")));}}

}


};

gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.func = function(runtimeScene, Object, Timer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedTimer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedTimer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Timer") return Timer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__AdvancedTimer__ObjectTimerElapsedTime.registeredGdjsCallbacks = [];