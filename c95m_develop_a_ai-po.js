// Data model for AI-powered web app tracker

// User data model
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.trackedApps = []; // array of TrackedApp objects
  }
}

// Tracked app data model
class TrackedApp {
  constructor(id, appId, appName, appCategory) {
    this.id = id;
    this.appId = appId;
    this.appName = appName;
    this.appCategory = appCategory;
    this.usageData = []; // array of UsageData objects
  }
}

// Usage data model
class UsageData {
  constructor(id, appId, timestamp, duration, interactions) {
    this.id = id;
    this.appId = appId;
    this.timestamp = timestamp;
    this.duration = duration;
    this.interactions = interactions; // array of interaction objects
  }
}

// Interaction data model
class Interaction {
  constructor(id, appId, timestamp, type, details) {
    this.id = id;
    this.appId = appId;
    this.timestamp = timestamp;
    this.type = type; // e.g. click, scroll, hover
    this.details = details; // additional details about the interaction
  }
}

// AI model data model
class AIModule {
  constructor(id, moduleName, trainedModel) {
    this.id = id;
    this.moduleName = moduleName;
    this.trainedModel = trainedModel; // serialized AI model
  }
}

// Tracker data model
class Tracker {
  constructor(id, userId, appId, trackId) {
    this.id = id;
    this.userId = userId;
    this.appId = appId;
    this.trackId = trackId;
    this.trackedData = []; // array of TrackedData objects
  }
}

// Tracked data model
class TrackedData {
  constructor(id, trackId, timestamp, data) {
    this.id = id;
    this.trackId = trackId;
    this.timestamp = timestamp;
    this.data = data; // tracked data (e.g. page views, clicks)
  }
}

// Expose data models
module.exports = {
  User,
  TrackedApp,
  UsageData,
  Interaction,
  AIModule,
  Tracker,
  TrackedData
};