var circles = [{ r: 16, d: -128, iod: 3.2}, { r: 32, d: -128, iod: 2.3}, { r: 64, d: -128, iod: 1.6}, { r: 16, d: 128, iod: 3.2}, { r: 32, d: 128, iod: 2.3}, { r: 64, d: 128, iod: 1.6}, { r: 16, d: -512, iod: 5.0}, { r: 32, d: -512, iod: 4.1}, { r: 64, d: -512, iod: 3.2}, { r: 16, d: 512, iod: 5.0}, { r: 32, d: 512, iod: 4.1}, { r: 64, d: 512, iod: 3.2}, { r: 16, d: -128, iod: 3.2}, { r: 32, d: -128, iod: 2.3}, { r: 64, d: -128, iod: 1.6}, { r: 16, d: 128, iod: 3.2}, { r: 32, d: 128, iod: 2.3}, { r: 64, d: 128, iod: 1.6}, { r: 16, d: -512, iod: 5.0}, { r: 32, d: -512, iod: 4.1}, { r: 64, d: -512, iod: 3.2}, { r: 16, d: 512, iod: 5.0}, { r: 32, d: 512, iod: 4.1}, { r: 64, d: 512, iod: 3.2}, { r: 16, d: -128, iod: 3.2}, { r: 32, d: -128, iod: 2.3}, { r: 64, d: -128, iod: 1.6}, { r: 16, d: 128, iod: 3.2}, { r: 32, d: 128, iod: 2.3}, { r: 64, d: 128, iod: 1.6}, { r: 16, d: -512, iod: 5.0}, { r: 32, d: -512, iod: 4.1}, { r: 64, d: -512, iod: 3.2}, { r: 16, d: 512, iod: 5.0}, { r: 32, d: 512, iod: 4.1}, { r: 64, d: 512, iod: 3.2}, { r: 16, d: -128, iod: 3.2}, { r: 32, d: -128, iod: 2.3}, { r: 64, d: -128, iod: 1.6}, { r: 16, d: 128, iod: 3.2}, { r: 32, d: 128, iod: 2.3}, { r: 64, d: 128, iod: 1.6}, { r: 16, d: -512, iod: 5.0}, { r: 32, d: -512, iod: 4.1}, { r: 64, d: -512, iod: 3.2}, { r: 16, d: 512, iod: 5.0}, { r: 32, d: 512, iod: 4.1}, { r: 64, d: 512, iod: 3.2}, { r: 16, d: -128, iod: 3.2}, { r: 32, d: -128, iod: 2.3}, { r: 64, d: -128, iod: 1.6}, { r: 16, d: 128, iod: 3.2}, { r: 32, d: 128, iod: 2.3}, { r: 64, d: 128, iod: 1.6}, { r: 16, d: -512, iod: 5.0}, { r: 32, d: -512, iod: 4.1}, { r: 64, d: -512, iod: 3.2}, { r: 16, d: 512, iod: 5.0}, { r: 32, d: 512, iod: 4.1}, { r: 64, d: 512, iod: 3.2}, { r: 16, d: -128, iod: 3.2}, { r: 32, d: -128, iod: 2.3}, { r: 64, d: -128, iod: 1.6}, { r: 16, d: 128, iod: 3.2}, { r: 32, d: 128, iod: 2.3}, { r: 64, d: 128, iod: 1.6}, { r: 16, d: -512, iod: 5.0}, { r: 32, d: -512, iod: 4.1}, { r: 64, d: -512, iod: 3.2}, { r: 16, d: 512, iod: 5.0}, { r: 32, d: 512, iod: 4.1}, { r: 64, d: 512, iod: 3.2}, { r: 16, d: -128, iod: 3.2}, { r: 32, d: -128, iod: 2.3}, { r: 64, d: -128, iod: 1.6}, { r: 16, d: 128, iod: 3.2}, { r: 32, d: 128, iod: 2.3}, { r: 64, d: 128, iod: 1.6}, { r: 16, d: -512, iod: 5.0}, { r: 32, d: -512, iod: 4.1}, { r: 64, d: -512, iod: 3.2}, { r: 16, d: 512, iod: 5.0}, { r: 32, d: 512, iod: 4.1}, { r: 64, d: 512, iod: 3.2}, { r: 16, d: -128, iod: 3.2}, { r: 32, d: -128, iod: 2.3}, { r: 64, d: -128, iod: 1.6}, { r: 16, d: 128, iod: 3.2}, { r: 32, d: 128, iod: 2.3}, { r: 64, d: 128, iod: 1.6}, { r: 16, d: -512, iod: 5.0}, { r: 32, d: -512, iod: 4.1}, { r: 64, d: -512, iod: 3.2}, { r: 16, d: 512, iod: 5.0}, { r: 32, d: 512, iod: 4.1}, { r: 64, d: 512, iod: 3.2}, { r: 16, d: -128, iod: 3.2}, { r: 32, d: -128, iod: 2.3}, { r: 64, d: -128, iod: 1.6}, { r: 16, d: 128, iod: 3.2}, { r: 32, d: 128, iod: 2.3}, { r: 64, d: 128, iod: 1.6}, { r: 16, d: -512, iod: 5.0}, { r: 32, d: -512, iod: 4.1}, { r: 64, d: -512, iod: 3.2}, { r: 16, d: 512, iod: 5.0}, { r: 32, d: 512, iod: 4.1}, { r: 64, d: 512, iod: 3.2}, { r: 16, d: -128, iod: 3.2}, { r: 32, d: -128, iod: 2.3}, { r: 64, d: -128, iod: 1.6}, { r: 16, d: 128, iod: 3.2}, { r: 32, d: 128, iod: 2.3}, { r: 64, d: 128, iod: 1.6}, { r: 16, d: -512, iod: 5.0}, { r: 32, d: -512, iod: 4.1}, { r: 64, d: -512, iod: 3.2}, { r: 16, d: 512, iod: 5.0}, { r: 32, d: 512, iod: 4.1}, { r: 64, d: 512, iod: 3.2}];
var width = 1200,
    height = 500,
    pos = {
        x: width / 2,
        y: height / 2
    },
    results = [],
    count = 0,
    stop = 0,
    start = 0,
    totalTime = 0,
    circle,
    index,
    distanceTraveled = 0,
    lastSeenAt = {
        x: null,
        y: null
    },
    hitError,
    svg = document.getElementById("svg"),
    instruction = document.getElementById("instruction"),
    trialCount = document.getElementById("trialCount");

getTime = function () {
    return Date.now();
};

svg.onmousemove = function (event) {
    if (lastSeenAt.x) {
        //calcuate total distance mouse have moved using the distance formula
        //and round to the nearest int
        distanceTraveled += Math.round(Math.sqrt(Math.pow(lastSeenAt.y - event.clientY, 2) + Math.pow(lastSeenAt.x - event.clientX, 2)));
    };
    lastSeenAt.x = event.clientX; //store reference to last seen x-coord
    lastSeenAt.y = event.clientY; //store reference to last seen y-coord
};

//if user misses target circle
svg.onmouseup = function (event) {
    var targetCircle = document.getElementById("targetCircle");
    var startingPoint = document.getElementById("startingPoint");
    if (targetCircle) {
        instruction.innerHTML = "Click the green circle";
        hitError = true;
        stop = getTime();
        totalTime = stop - start;

        var r = targetCircle.getAttribute("r");
        var startingX = startingPoint.getAttribute("cx");
        var targetX = targetCircle.getAttribute("cx");
        var distance = Math.abs(startingX - targetX);

        //postTrial({
        //    UserID: userId,
        //    TrialTime: totalTime,
        //    TrialDistanceTraveled: distanceTraveled,
        //    TrialError: hitError,
        //    TrialRadius: r,
        //    TrialDistance: distance,
        //    TrialDirection: (startingX > targetX) ? "R" : "L"
        //});

        svg.removeChild(targetCircle);
        (circle.length > 0 ) ? trialCount.innerHTML = "You're on trial  " + count +". Index Of Difficulty " + circle[0].iod : null;
    }
};

//green circle in middle of screen
startingPoint = function (data) {
    instruction.innerHTML = 'Click the green circle to begin';
    trialCount.innerHTML = 'Welcome';
    this.el = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    this.el.setAttributeNS(null, "id", "startingPoint");
    this.el.setAttributeNS(null, "r", 12.5);
    this.el.setAttributeNS(null, "cx", data.x);
    this.el.setAttributeNS(null, "fill", "#03ff00");
    this.el.setAttributeNS(null, "cy", data.y);

    svg.appendChild(this.el);

    this.el.onclick = function () {
        start = getTime();
        distanceTraveled = 0;
        count++;
        instruction.innerHTML = "Click the black circle";
        index = Math.floor(Math.random() * circles.length);
        circle = circles.splice(index, 1);
        (circle.length > 0 ) ? trialCount.innerHTML = "You're on trial " + count + ". Index Of Difficulty " + circle[0].iod : null;
        (circle.length > 0 ) ? new targetCircle(circle[0]) : trialComplete();
    };
};

//black circle
targetCircle = function (data) {
    
    this.el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.el.setAttributeNS(null, "id", "targetCircle");
    this.el.setAttributeNS(null, "r", data.r);
    this.el.setAttributeNS(null, "fill", "black");
    this.el.setAttributeNS(null, "cx", data.d + pos.x);
    this.el.setAttributeNS(null, "cy", pos.y);

    svg.appendChild(this.el);

    this.el.onmousedown = function () {
        stop = getTime();
        instruction.innerHTML = "Click the green circle";
        hitError = false;
               
        totalTime = stop - start;
        //postTrial({
        //    UserID: userId,
        //    TrialTime: totalTime,
        //    TrialDistanceTraveled: distanceTraveled,
        //    TrialError: hitError,
        //    TrialRadius: data.r,
        //    TrialDistance: Math.abs(data.d),
        //    TrialDirection: (data.d > 0) ? "R" : "L"
        //});

        svg.removeChild(this);       
    };
};

postTrial = function (trial) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'api/trial', true);
    httpRequest.setRequestHeader("Content-type", "application/json; charset=utf-8");
    httpRequest.send(JSON.stringify(trial));
}

trialComplete = function () {
    trialCount.innerHTML = "";
    instruction.innerHTML = "<h1>Thank you for your participation. <br> Enjoy your day or night</h1>";
    svg.style.display = 'none';
    svg.remove();
}

//start of trial
new startingPoint(pos);
