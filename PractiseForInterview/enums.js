"use strict";
var Browser;
(function (Browser) {
    Browser["Chrome"] = "chrome";
    Browser["Edge"] = "edge";
    Browser["Firefox"] = "firefox";
})(Browser || (Browser = {}));
let browserName = Browser.Edge;
console.log(browserName);
var Status;
(function (Status) {
    Status[Status["completed"] = 0] = "completed";
    Status[Status["inProgress"] = 1] = "inProgress";
    Status[Status["pending"] = 2] = "pending";
})(Status || (Status = {}));
let latestStatus = Status.inProgress;
console.log(latestStatus);
