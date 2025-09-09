
gdjs.evtsExt__Smoothy__SpwanerBehavior = gdjs.evtsExt__Smoothy__SpwanerBehavior || {};

/**
 * Behavior generated from Spawner
 */
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior = class SpwanerBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ObjectStack = behaviorData.ObjectStack !== undefined ? behaviorData.ObjectStack : "";
    this._behaviorData.ColorCount = behaviorData.ColorCount !== undefined ? behaviorData.ColorCount : Number("4") || 0;
    this._behaviorData.PathName = "";
    this._behaviorData.FirstNewColorBubbleCount = behaviorData.FirstNewColorBubbleCount !== undefined ? behaviorData.FirstNewColorBubbleCount : Number("128") || 0;
    this._behaviorData.SecondNewColorBubbleCount = behaviorData.SecondNewColorBubbleCount !== undefined ? behaviorData.SecondNewColorBubbleCount : Number("256") || 0;
    this._behaviorData.BubbleSize = behaviorData.BubbleSize !== undefined ? behaviorData.BubbleSize : Number("32") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ObjectStack !== newBehaviorData.ObjectStack)
      this._behaviorData.ObjectStack = newBehaviorData.ObjectStack;
    if (oldBehaviorData.ColorCount !== newBehaviorData.ColorCount)
      this._behaviorData.ColorCount = newBehaviorData.ColorCount;
    if (oldBehaviorData.PathName !== newBehaviorData.PathName)
      this._behaviorData.PathName = newBehaviorData.PathName;
    if (oldBehaviorData.FirstNewColorBubbleCount !== newBehaviorData.FirstNewColorBubbleCount)
      this._behaviorData.FirstNewColorBubbleCount = newBehaviorData.FirstNewColorBubbleCount;
    if (oldBehaviorData.SecondNewColorBubbleCount !== newBehaviorData.SecondNewColorBubbleCount)
      this._behaviorData.SecondNewColorBubbleCount = newBehaviorData.SecondNewColorBubbleCount;
    if (oldBehaviorData.BubbleSize !== newBehaviorData.BubbleSize)
      this._behaviorData.BubbleSize = newBehaviorData.BubbleSize;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    ObjectStack: this._behaviorData.ObjectStack,
    ColorCount: this._behaviorData.ColorCount,
    PathName: this._behaviorData.PathName,
    FirstNewColorBubbleCount: this._behaviorData.FirstNewColorBubbleCount,
    SecondNewColorBubbleCount: this._behaviorData.SecondNewColorBubbleCount,
    BubbleSize: this._behaviorData.BubbleSize,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.ObjectStack !== undefined)
      this._behaviorData.ObjectStack = networkSyncData.props.ObjectStack;
    if (networkSyncData.props.ColorCount !== undefined)
      this._behaviorData.ColorCount = networkSyncData.props.ColorCount;
    if (networkSyncData.props.PathName !== undefined)
      this._behaviorData.PathName = networkSyncData.props.PathName;
    if (networkSyncData.props.FirstNewColorBubbleCount !== undefined)
      this._behaviorData.FirstNewColorBubbleCount = networkSyncData.props.FirstNewColorBubbleCount;
    if (networkSyncData.props.SecondNewColorBubbleCount !== undefined)
      this._behaviorData.SecondNewColorBubbleCount = networkSyncData.props.SecondNewColorBubbleCount;
    if (networkSyncData.props.BubbleSize !== undefined)
      this._behaviorData.BubbleSize = networkSyncData.props.BubbleSize;
  }

  // Properties:
  
  _getObjectStack() {
    return this._behaviorData.ObjectStack !== undefined ? this._behaviorData.ObjectStack : "";
  }
  _setObjectStack(newValue) {
    this._behaviorData.ObjectStack = newValue;
  }
  _getColorCount() {
    return this._behaviorData.ColorCount !== undefined ? this._behaviorData.ColorCount : Number("4") || 0;
  }
  _setColorCount(newValue) {
    this._behaviorData.ColorCount = newValue;
  }
  _getPathName() {
    return this._behaviorData.PathName !== undefined ? this._behaviorData.PathName : "";
  }
  _setPathName(newValue) {
    this._behaviorData.PathName = newValue;
  }
  _getFirstNewColorBubbleCount() {
    return this._behaviorData.FirstNewColorBubbleCount !== undefined ? this._behaviorData.FirstNewColorBubbleCount : Number("128") || 0;
  }
  _setFirstNewColorBubbleCount(newValue) {
    this._behaviorData.FirstNewColorBubbleCount = newValue;
  }
  _getSecondNewColorBubbleCount() {
    return this._behaviorData.SecondNewColorBubbleCount !== undefined ? this._behaviorData.SecondNewColorBubbleCount : Number("256") || 0;
  }
  _setSecondNewColorBubbleCount(newValue) {
    this._behaviorData.SecondNewColorBubbleCount = newValue;
  }
  _getBubbleSize() {
    return this._behaviorData.BubbleSize !== undefined ? this._behaviorData.BubbleSize : Number("32") || 0;
  }
  _setBubbleSize(newValue) {
    this._behaviorData.BubbleSize = newValue;
  }
}

/**
 * Shared data generated from Spawner
 */
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.SharedData = class SpwanerBehaviorSharedData {
  constructor(sharedData) {
    
    this.SpawnedBubbleCount = Number("") || 0;
  }
  
  // Shared properties:
  
  _getSpawnedBubbleCount() {
    return this.SpawnedBubbleCount !== undefined ? this.SpawnedBubbleCount : Number("") || 0;
  }
  _setSpawnedBubbleCount(newValue) {
    this.SpawnedBubbleCount = newValue;
  }
}

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Smoothy_SpwanerBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Smoothy_SpwanerBehaviorSharedData = new gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._Smoothy_SpwanerBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext = {};
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects3= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects4= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects3= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects4= [];


gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


};gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546RefillContext_9546GDBoardBubbleObjects4Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects4});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546RefillContext_9546GDBoardBubbleObjects4Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects4});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount4 = gdjs.randomInRange(1, 2);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects2, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects4);

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546RefillContext_9546GDBoardBubbleObjects4Objects, (( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects4[0].getX()), (( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects4[0].getY()), "");
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetPath((( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects4.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathName(eventsFunctionContext)), 1, false, eventsFunctionContext);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("randomColorIndex")));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Insert(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546RefillContext_9546GDBoardBubbleObjects4Objects, 0, eventsFunctionContext);
}
}}
}

}


};gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Height(eventsFunctionContext) < 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects2[k] = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().get("randomColorIndex").setNumber(gdjs.random((( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ColorCount(eventsFunctionContext)) - 1));
}
{ //Subevents: 
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.Refill = function(BoardBubble, SpeedPathMovement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BoardBubble": BoardBubble
},
  _objectArraysMap: {
"Object": thisObjectList
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ObjectStack": this._getObjectStack()
, "SpeedPathMovement": SpeedPathMovement
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Smoothy"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Smoothy"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects4.length = 0;

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.RefillContext.GDBoardBubbleObjects4.length = 0;


return;
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext = {};
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects3= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDGutterObjects3= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects3= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects3= [];


gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanSpawnBubbleContext_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDGutterObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanSpawnBubbleContext_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDGutterObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanSpawnBubbleContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanSpawnBubbleContext_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanSpawnBubbleContext_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects2);
gdjs.copyArray(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects1, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects2);

gdjs.copyArray(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanSpawnBubbleContext_9546GDBubbleQueueObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanSpawnBubbleContext_9546GDBoardBubbleObjects2Objects, eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).PositionOnPath(eventsFunctionContext) >= (( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBubbleSize()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects2[k] = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects2.length = k;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


{

/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).IsEmpty(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects1[k] = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


};gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDGutterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanSpawnBubbleContext_9546GDGutterObjects1Objects, (gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects1[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanSpawnBubbleContext_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanSpawnBubbleContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubble = function(Gutter, ObjectStack, BubbleQueue, ObjectStack, BoardBubble, SpeedPathMovement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Gutter": Gutter
, "BubbleQueue": BubbleQueue
, "BoardBubble": BoardBubble
},
  _objectArraysMap: {
"Object": thisObjectList
, "Gutter": gdjs.objectsListsToArray(Gutter)
, "BubbleQueue": gdjs.objectsListsToArray(BubbleQueue)
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ObjectStack": this._getObjectStack()
, "ObjectStack": ObjectStack
, "ObjectStack": ObjectStack
, "SpeedPathMovement": SpeedPathMovement
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Smoothy"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Smoothy"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDGutterObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects3.length = 0;

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDGutterObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBubbleQueueObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanSpawnBubbleContext.GDBoardBubbleObjects3.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext = {};
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects3= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects3= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects3= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects3= [];


gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBubbleQueueObjects2Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects2});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects2});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects2Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2 */
gdjs.copyArray(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(eventsFunctionContext, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects2Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDObjectObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects2Objects, eventsFunctionContext);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2 */
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects2 */
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Remove(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects2Objects, eventsFunctionContext);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).AddOnTop(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects2Objects, eventsFunctionContext);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetPositionOnPath(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("lastBubblePathPosition")) - (( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBubbleSize()), eventsFunctionContext);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("lastBubbleSpeed")), eventsFunctionContext);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setSpawnedBubbleCount(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getSpawnedBubbleCount() + (1));
}
}}

}


};gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects1);
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDObjectObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects1Objects, eventsFunctionContext);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Remove(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects1Objects, eventsFunctionContext);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).AddOnTop(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects1Objects, eventsFunctionContext);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setSpawnedBubbleCount(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getSpawnedBubbleCount() + (1));
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed((( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("GutterBehavior")).PushSpeed(eventsFunctionContext)), eventsFunctionContext);
}
}}

}


};gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2);
gdjs.copyArray(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBubbleQueueObjects2Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects2Objects, eventsFunctionContext);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2 */
{runtimeScene.getScene().getVariables().get("lastBubblePathPosition").setNumber((( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).PositionOnPath(eventsFunctionContext)));
}{runtimeScene.getScene().getVariables().get("lastBubbleSpeed").setNumber((( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).Speed(eventsFunctionContext)));
}
{ //Subevents
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).IsEmpty(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1[k] = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Refill(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBoardBubbleObjects1Objects, eventsFunctionContext.getBehaviorName("SpeedPathMovement"), eventsFunctionContext);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDGutterObjects1Objects, (gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546SpawnBubbleContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubble = function(Gutter, GutterBehavior, ObjectStack, BubbleQueue, ObjectStack, BoardBubble, SpeedPathMovement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Gutter": Gutter
, "BubbleQueue": BubbleQueue
, "BoardBubble": BoardBubble
},
  _objectArraysMap: {
"Object": thisObjectList
, "Gutter": gdjs.objectsListsToArray(Gutter)
, "BubbleQueue": gdjs.objectsListsToArray(BubbleQueue)
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ObjectStack": this._getObjectStack()
, "GutterBehavior": GutterBehavior
, "ObjectStack": ObjectStack
, "ObjectStack": ObjectStack
, "SpeedPathMovement": SpeedPathMovement
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Smoothy"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Smoothy"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects3.length = 0;

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDGutterObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBubbleQueueObjects3.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SpawnBubbleContext.GDBoardBubbleObjects3.length = 0;


return;
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext = {};
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBoardBubbleObjects2= [];


gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanUnspawnBubbleContext_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDGutterObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanUnspawnBubbleContext_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDGutterObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanUnspawnBubbleContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanUnspawnBubbleContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanUnspawnBubbleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDGutterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanUnspawnBubbleContext_9546GDGutterObjects1Objects, (gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDObjectObjects1[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanUnspawnBubbleContext_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanUnspawnBubbleContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanUnspawnBubbleContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546CanUnspawnBubbleContext_9546GDBoardBubbleObjects1Objects, eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBoardBubbleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).HasReachedOrigin(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBoardBubbleObjects1[k] = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBoardBubbleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBoardBubbleObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubble = function(Gutter, ObjectStack, BubbleQueue, ObjectStack, BoardBubble, SpeedPathMovement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Gutter": Gutter
, "BubbleQueue": BubbleQueue
, "BoardBubble": BoardBubble
},
  _objectArraysMap: {
"Object": thisObjectList
, "Gutter": gdjs.objectsListsToArray(Gutter)
, "BubbleQueue": gdjs.objectsListsToArray(BubbleQueue)
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ObjectStack": this._getObjectStack()
, "ObjectStack": ObjectStack
, "ObjectStack": ObjectStack
, "SpeedPathMovement": SpeedPathMovement
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Smoothy"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Smoothy"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBoardBubbleObjects2.length = 0;

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.CanUnspawnBubbleContext.GDBoardBubbleObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext = {};
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDGutterObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDGutterObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBubbleQueueObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBubbleQueueObjects2= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBoardBubbleObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBoardBubbleObjects2= [];


gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDGutterObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDGutterObjects1Objects = Hashtable.newFrom({"Gutter": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDGutterObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDBubbleQueueObjects1Objects = Hashtable.newFrom({"BubbleQueue": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBubbleQueueObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDBoardBubbleObjects1Objects = Hashtable.newFrom({"BoardBubble": gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBoardBubbleObjects1});
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BoardBubble"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBoardBubbleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BubbleQueue"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBubbleQueueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Gutter"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDGutterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDGutterObjects1Objects, (gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects1[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDGutterObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ObjectStack__HasOnTop.func(runtimeScene, gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDBubbleQueueObjects1Objects, eventsFunctionContext.getBehaviorName("ObjectStack"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDBoardBubbleObjects1Objects, eventsFunctionContext);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBoardBubbleObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBubbleQueueObjects1 */
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBubbleQueueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBubbleQueueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).Remove(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDBoardBubbleObjects1Objects, eventsFunctionContext);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ObjectStack")).AddOnTop(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.mapOfGDgdjs_9546evtsExt_9595_9595Smoothy_9595_9595SpwanerBehavior_9546SpwanerBehavior_9546prototype_9546UnspawnBubbleContext_9546GDBoardBubbleObjects1Objects, eventsFunctionContext);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBoardBubbleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBoardBubbleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SpeedPathMovement")).SetSpeed(0, eventsFunctionContext);
}
}{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setSpawnedBubbleCount(gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getSpawnedBubbleCount() - (1));
}
}}

}


};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubble = function(Gutter, GutterBehavior, ObjectStack, BubbleQueue, ObjectStack, BoardBubble, SpeedPathMovement, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Gutter": Gutter
, "BubbleQueue": BubbleQueue
, "BoardBubble": BoardBubble
},
  _objectArraysMap: {
"Object": thisObjectList
, "Gutter": gdjs.objectsListsToArray(Gutter)
, "BubbleQueue": gdjs.objectsListsToArray(BubbleQueue)
, "BoardBubble": gdjs.objectsListsToArray(BoardBubble)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ObjectStack": this._getObjectStack()
, "GutterBehavior": GutterBehavior
, "ObjectStack": ObjectStack
, "ObjectStack": ObjectStack
, "SpeedPathMovement": SpeedPathMovement
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Smoothy"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Smoothy"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBoardBubbleObjects2.length = 0;

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDGutterObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDGutterObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBubbleQueueObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBubbleQueueObjects2.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBoardBubbleObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.UnspawnBubbleContext.GDBoardBubbleObjects2.length = 0;


return;
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext = {};
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColorCount());}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getSpawnedBubbleCount() >= (gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFirstNewColorBubbleCount()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1 */
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColorCount()) + 1;}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getSpawnedBubbleCount() >= (gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSecondNewColorBubbleCount()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1[k] = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1 */
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColorCount()) + 2;}}

}


};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCount = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ObjectStack": this._getObjectStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Smoothy"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Smoothy"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.ColorCountContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.PathNameContext = {};
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.PathNameContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.PathNameContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.PathNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.PathNameContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.PathNameContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.PathNameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathName());}}

}


};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.PathName = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ObjectStack": this._getObjectStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Smoothy"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Smoothy"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.PathNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.PathNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.PathNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.PathNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.PathNameContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SetPathNameContext = {};
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SetPathNameContext.GDObjectObjects1= [];
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SetPathNameContext.GDObjectObjects2= [];


gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SetPathNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SetPathNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SetPathNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SetPathNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathName("" + eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SetPathName = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ObjectStack": this._getObjectStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Smoothy"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Smoothy"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SetPathNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SetPathNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SetPathNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SetPathNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.SetPathNameContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Smoothy::SpwanerBehavior", gdjs.evtsExt__Smoothy__SpwanerBehavior.SpwanerBehavior);
