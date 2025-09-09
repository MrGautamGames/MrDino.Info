
gdjs.evtsExt__Turret__Turret = gdjs.evtsExt__Turret__Turret || {};

/**
 * Behavior generated from Turret movement
 */
gdjs.evtsExt__Turret__Turret.Turret = class Turret extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Turret__Turret.Turret.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.SpeedMax = behaviorData.SpeedMax !== undefined ? behaviorData.SpeedMax : Number("360") || 0;
    this._behaviorData.Acceleration = behaviorData.Acceleration !== undefined ? behaviorData.Acceleration : Number("1440") || 0;
    this._behaviorData.Deceleration = behaviorData.Deceleration !== undefined ? behaviorData.Deceleration : Number("36000") || 0;
    this._behaviorData.Rotate = behaviorData.Rotate !== undefined ? behaviorData.Rotate : true;
    this._behaviorData.AngleMax = behaviorData.AngleMax !== undefined ? behaviorData.AngleMax : Number("0") || 0;
    this._behaviorData.AngleMin = behaviorData.AngleMin !== undefined ? behaviorData.AngleMin : Number("0") || 0;
    this._behaviorData.AimingAngle = Number("0") || 0;
    this._behaviorData.Speed = Number("") || 0;
    this._behaviorData.MustMoveClockwise = false;
    this._behaviorData.MustMoveCounterClockwise = false;
    this._behaviorData.HasMoved = false;
    this._behaviorData.TargetAngle = Number("") || 0;
    this._behaviorData.OriginAngle = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.SpeedMax !== newBehaviorData.SpeedMax)
      this._behaviorData.SpeedMax = newBehaviorData.SpeedMax;
    if (oldBehaviorData.Acceleration !== newBehaviorData.Acceleration)
      this._behaviorData.Acceleration = newBehaviorData.Acceleration;
    if (oldBehaviorData.Deceleration !== newBehaviorData.Deceleration)
      this._behaviorData.Deceleration = newBehaviorData.Deceleration;
    if (oldBehaviorData.Rotate !== newBehaviorData.Rotate)
      this._behaviorData.Rotate = newBehaviorData.Rotate;
    if (oldBehaviorData.AngleMax !== newBehaviorData.AngleMax)
      this._behaviorData.AngleMax = newBehaviorData.AngleMax;
    if (oldBehaviorData.AngleMin !== newBehaviorData.AngleMin)
      this._behaviorData.AngleMin = newBehaviorData.AngleMin;
    if (oldBehaviorData.AimingAngle !== newBehaviorData.AimingAngle)
      this._behaviorData.AimingAngle = newBehaviorData.AimingAngle;
    if (oldBehaviorData.Speed !== newBehaviorData.Speed)
      this._behaviorData.Speed = newBehaviorData.Speed;
    if (oldBehaviorData.MustMoveClockwise !== newBehaviorData.MustMoveClockwise)
      this._behaviorData.MustMoveClockwise = newBehaviorData.MustMoveClockwise;
    if (oldBehaviorData.MustMoveCounterClockwise !== newBehaviorData.MustMoveCounterClockwise)
      this._behaviorData.MustMoveCounterClockwise = newBehaviorData.MustMoveCounterClockwise;
    if (oldBehaviorData.HasMoved !== newBehaviorData.HasMoved)
      this._behaviorData.HasMoved = newBehaviorData.HasMoved;
    if (oldBehaviorData.TargetAngle !== newBehaviorData.TargetAngle)
      this._behaviorData.TargetAngle = newBehaviorData.TargetAngle;
    if (oldBehaviorData.OriginAngle !== newBehaviorData.OriginAngle)
      this._behaviorData.OriginAngle = newBehaviorData.OriginAngle;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    SpeedMax: this._behaviorData.SpeedMax,
    Acceleration: this._behaviorData.Acceleration,
    Deceleration: this._behaviorData.Deceleration,
    Rotate: this._behaviorData.Rotate,
    AngleMax: this._behaviorData.AngleMax,
    AngleMin: this._behaviorData.AngleMin,
    AimingAngle: this._behaviorData.AimingAngle,
    Speed: this._behaviorData.Speed,
    MustMoveClockwise: this._behaviorData.MustMoveClockwise,
    MustMoveCounterClockwise: this._behaviorData.MustMoveCounterClockwise,
    HasMoved: this._behaviorData.HasMoved,
    TargetAngle: this._behaviorData.TargetAngle,
    OriginAngle: this._behaviorData.OriginAngle,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.SpeedMax !== undefined)
      this._behaviorData.SpeedMax = networkSyncData.props.SpeedMax;
    if (networkSyncData.props.Acceleration !== undefined)
      this._behaviorData.Acceleration = networkSyncData.props.Acceleration;
    if (networkSyncData.props.Deceleration !== undefined)
      this._behaviorData.Deceleration = networkSyncData.props.Deceleration;
    if (networkSyncData.props.Rotate !== undefined)
      this._behaviorData.Rotate = networkSyncData.props.Rotate;
    if (networkSyncData.props.AngleMax !== undefined)
      this._behaviorData.AngleMax = networkSyncData.props.AngleMax;
    if (networkSyncData.props.AngleMin !== undefined)
      this._behaviorData.AngleMin = networkSyncData.props.AngleMin;
    if (networkSyncData.props.AimingAngle !== undefined)
      this._behaviorData.AimingAngle = networkSyncData.props.AimingAngle;
    if (networkSyncData.props.Speed !== undefined)
      this._behaviorData.Speed = networkSyncData.props.Speed;
    if (networkSyncData.props.MustMoveClockwise !== undefined)
      this._behaviorData.MustMoveClockwise = networkSyncData.props.MustMoveClockwise;
    if (networkSyncData.props.MustMoveCounterClockwise !== undefined)
      this._behaviorData.MustMoveCounterClockwise = networkSyncData.props.MustMoveCounterClockwise;
    if (networkSyncData.props.HasMoved !== undefined)
      this._behaviorData.HasMoved = networkSyncData.props.HasMoved;
    if (networkSyncData.props.TargetAngle !== undefined)
      this._behaviorData.TargetAngle = networkSyncData.props.TargetAngle;
    if (networkSyncData.props.OriginAngle !== undefined)
      this._behaviorData.OriginAngle = networkSyncData.props.OriginAngle;
  }

  // Properties:
  
  _getSpeedMax() {
    return this._behaviorData.SpeedMax !== undefined ? this._behaviorData.SpeedMax : Number("360") || 0;
  }
  _setSpeedMax(newValue) {
    this._behaviorData.SpeedMax = newValue;
  }
  _getAcceleration() {
    return this._behaviorData.Acceleration !== undefined ? this._behaviorData.Acceleration : Number("1440") || 0;
  }
  _setAcceleration(newValue) {
    this._behaviorData.Acceleration = newValue;
  }
  _getDeceleration() {
    return this._behaviorData.Deceleration !== undefined ? this._behaviorData.Deceleration : Number("36000") || 0;
  }
  _setDeceleration(newValue) {
    this._behaviorData.Deceleration = newValue;
  }
  _getRotate() {
    return this._behaviorData.Rotate !== undefined ? this._behaviorData.Rotate : true;
  }
  _setRotate(newValue) {
    this._behaviorData.Rotate = newValue;
  }
  _toggleRotate() {
    this._setRotate(!this._getRotate());
  }
  _getAngleMax() {
    return this._behaviorData.AngleMax !== undefined ? this._behaviorData.AngleMax : Number("0") || 0;
  }
  _setAngleMax(newValue) {
    this._behaviorData.AngleMax = newValue;
  }
  _getAngleMin() {
    return this._behaviorData.AngleMin !== undefined ? this._behaviorData.AngleMin : Number("0") || 0;
  }
  _setAngleMin(newValue) {
    this._behaviorData.AngleMin = newValue;
  }
  _getAimingAngle() {
    return this._behaviorData.AimingAngle !== undefined ? this._behaviorData.AimingAngle : Number("0") || 0;
  }
  _setAimingAngle(newValue) {
    this._behaviorData.AimingAngle = newValue;
  }
  _getSpeed() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("") || 0;
  }
  _setSpeed(newValue) {
    this._behaviorData.Speed = newValue;
  }
  _getMustMoveClockwise() {
    return this._behaviorData.MustMoveClockwise !== undefined ? this._behaviorData.MustMoveClockwise : false;
  }
  _setMustMoveClockwise(newValue) {
    this._behaviorData.MustMoveClockwise = newValue;
  }
  _toggleMustMoveClockwise() {
    this._setMustMoveClockwise(!this._getMustMoveClockwise());
  }
  _getMustMoveCounterClockwise() {
    return this._behaviorData.MustMoveCounterClockwise !== undefined ? this._behaviorData.MustMoveCounterClockwise : false;
  }
  _setMustMoveCounterClockwise(newValue) {
    this._behaviorData.MustMoveCounterClockwise = newValue;
  }
  _toggleMustMoveCounterClockwise() {
    this._setMustMoveCounterClockwise(!this._getMustMoveCounterClockwise());
  }
  _getHasMoved() {
    return this._behaviorData.HasMoved !== undefined ? this._behaviorData.HasMoved : false;
  }
  _setHasMoved(newValue) {
    this._behaviorData.HasMoved = newValue;
  }
  _toggleHasMoved() {
    this._setHasMoved(!this._getHasMoved());
  }
  _getTargetAngle() {
    return this._behaviorData.TargetAngle !== undefined ? this._behaviorData.TargetAngle : Number("") || 0;
  }
  _setTargetAngle(newValue) {
    this._behaviorData.TargetAngle = newValue;
  }
  _getOriginAngle() {
    return this._behaviorData.OriginAngle !== undefined ? this._behaviorData.OriginAngle : Number("") || 0;
  }
  _setOriginAngle(newValue) {
    this._behaviorData.OriginAngle = newValue;
  }
}

/**
 * Shared data generated from Turret movement
 */
gdjs.evtsExt__Turret__Turret.Turret.SharedData = class TurretSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Turret__Turret.Turret.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Turret_TurretSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Turret_TurretSharedData = new gdjs.evtsExt__Turret__Turret.Turret.SharedData(
      initialData
    );
  }
  return instanceContainer._Turret_TurretSharedData;
}

// Methods:
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() < 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(0)
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() > 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(0)
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() > 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()-eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))
}
{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() < 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()+eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))
}
{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveClockwise() ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveCounterClockwise() ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveClockwise()) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveCounterClockwise()) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax());
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax())
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() < -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax()));
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax()))
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveClockwise();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveCounterClockwise();
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()+eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))
}
{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveCounterClockwise();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMustMoveClockwise();
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()-eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))
}
{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAimingAngle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext);
}
}}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasMoved(false)
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() != 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasMoved(true)
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMustMoveClockwise(false)
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMustMoveCounterClockwise(false)
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList8(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Turret"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Turret"),
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

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.eventsList9(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects2= [];


gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasMoved();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMoving = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Turret"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Turret"),
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

gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.IsMovingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.GDObjectObjects2= [];


gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMustMoveClockwise(true)
}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwise = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Turret"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Turret"),
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

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveClockwiseContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.GDObjectObjects2= [];


gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMustMoveCounterClockwise(true)
}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwise = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Turret"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Turret"),
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

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveCounterClockwiseContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAimingAngle((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax()) / 2, eventsFunctionContext);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOriginAngle((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax()) / 2 - 180)
}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreated = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Turret"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Turret"),
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

gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects2= [];


gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAimingAngle(gdjs.evtTools.common.mod(gdjs.toDegrees(Math.atan2(eventsFunctionContext.getArgument("TargetY") - (gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1[i].getY()), eventsFunctionContext.getArgument("TargetX") - (gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1[i].getX()))) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOriginAngle(), 360) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOriginAngle(), eventsFunctionContext);
}
}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleToward = function(TargetX, TargetY, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Turret"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Turret"),
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
if (argName === "TargetX") return TargetX;
if (argName === "TargetY") return TargetY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleTowardContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects3= [];


gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle() > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetAngle() + eventsFunctionContext.getArgument("AngleMargin"));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveCounterClockwise(eventsFunctionContext);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetAngle() - eventsFunctionContext.getArgument("AngleMargin"));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveClockwise(eventsFunctionContext);
}
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(180 + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetAngle() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle(), 360) < 180 - eventsFunctionContext.getArgument("AngleMargin"));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveCounterClockwise(eventsFunctionContext);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(180 + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetAngle(), 360) < 180 - eventsFunctionContext.getArgument("AngleMargin"));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveClockwise(eventsFunctionContext);
}
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetAngle(gdjs.evtTools.common.mod(gdjs.toDegrees(Math.atan2(eventsFunctionContext.getArgument("TargetY") - (( gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[0].getY()), eventsFunctionContext.getArgument("TargetX") - (( gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1[0].getX()))) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOriginAngle(), 360) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOriginAngle())
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax());
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin() == eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax());
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveToward = function(TargetX, TargetY, AngleMargin, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Turret"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Turret"),
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
if (argName === "TargetX") return TargetX;
if (argName === "TargetY") return TargetY;
if (argName === "AngleMargin") return AngleMargin;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.MoveTowardContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects3= [];


gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle() > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax());
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAimingAngle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax())
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin());
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAimingAngle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin())
}}

}


};gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAimingAngle(eventsFunctionContext.getArgument("Value"))
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin() == eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax());
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAimingAngle(gdjs.evtTools.common.mod(eventsFunctionContext.getArgument("Value"), 360))
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMin() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleMax());
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotate();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1[i].setAngle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle());
}
}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngle = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Turret"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Turret"),
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

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.SetAimingAngleContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext = {};
gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAimingAngle();}}

}


};

gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngle = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Turret"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Turret"),
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

gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Turret__Turret.Turret.prototype.AimingAngleContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Turret__Turret.Turret.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Turret::Turret", gdjs.evtsExt__Turret__Turret.Turret);
