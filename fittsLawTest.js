var circles = [{ r: 16, d: -128 }, { r: 32, d: -128 }, { r: 64, d: -128 }, { r: 16, d: 128 }, { r: 32, d: 128 }, { r: 64, d: 128 }, { r: 16, d: -512 }, { r: 32, d: -512 }, { r: 64, d: -512 }, { r: 16, d: 512 }, { r: 32, d: 512 }, { r: 64, d: 512 }, { r: 16, d: -128 }, { r: 32, d: -128 }, { r: 64, d: -128 }, { r: 16, d: 128 }, { r: 32, d: 128 }, { r: 64, d: 128 }, { r: 16, d: -512 }, { r: 32, d: -512 }, { r: 64, d: -512 }, { r: 16, d: 512 }, { r: 32, d: 512 }, { r: 64, d: 512 }, { r: 16, d: -128 }, { r: 32, d: -128 }, { r: 64, d: -128 }, { r: 16, d: 128 }, { r: 32, d: 128 }, { r: 64, d: 128 }, { r: 16, d: -512 }, { r: 32, d: -512 }, { r: 64, d: -512 }, { r: 16, d: 512 }, { r: 32, d: 512 }, { r: 64, d: 512 }, { r: 16, d: -128 }, { r: 32, d: -128 }, { r: 64, d: -128 }, { r: 16, d: 128 }, { r: 32, d: 128 }, { r: 64, d: 128 }, { r: 16, d: -512 }, { r: 32, d: -512 }, { r: 64, d: -512 }, { r: 16, d: 512 }, { r: 32, d: 512 }, { r: 64, d: 512 }, { r: 16, d: -128 }, { r: 32, d: -128 }, { r: 64, d: -128 }, { r: 16, d: 128 }, { r: 32, d: 128 }, { r: 64, d: 128 }, { r: 16, d: -512 }, { r: 32, d: -512 }, { r: 64, d: -512 }, { r: 16, d: 512 }, { r: 32, d: 512 }, { r: 64, d: 512 }, { r: 16, d: -128 }, { r: 32, d: -128 }, { r: 64, d: -128 }, { r: 16, d: 128 }, { r: 32, d: 128 }, { r: 64, d: 128 }, { r: 16, d: -512 }, { r: 32, d: -512 }, { r: 64, d: -512 }, { r: 16, d: 512 }, { r: 32, d: 512 }, { r: 64, d: 512 }, { r: 16, d: -128 }, { r: 32, d: -128 }, { r: 64, d: -128 }, { r: 16, d: 128 }, { r: 32, d: 128 }, { r: 64, d: 128 }, { r: 16, d: -512 }, { r: 32, d: -512 }, { r: 64, d: -512 }, { r: 16, d: 512 }, { r: 32, d: 512 }, { r: 64, d: 512 }, { r: 16, d: -128 }, { r: 32, d: -128 }, { r: 64, d: -128 }, { r: 16, d: 128 }, { r: 32, d: 128 }, { r: 64, d: 128 }, { r: 16, d: -512 }, { r: 32, d: -512 }, { r: 64, d: -512 }, { r: 16, d: 512 }, { r: 32, d: 512 }, { r: 64, d: 512 }, { r: 16, d: -128 }, { r: 32, d: -128 }, { r: 64, d: -128 }, { r: 16, d: 128 }, { r: 32, d: 128 }, { r: 64, d: 128 }, { r: 16, d: -512 }, { r: 32, d: -512 }, { r: 64, d: -512 }, { r: 16, d: 512 }, { r: 32, d: 512 }, { r: 64, d: 512 }, { r: 16, d: -128 }, { r: 32, d: -128 }, { r: 64, d: -128 }, { r: 16, d: 128 }, { r: 32, d: 128 }, { r: 64, d: 128 }, { r: 16, d: -512 }, { r: 32, d: -512 }, { r: 64, d: -512 }, { r: 16, d: 512 }, { r: 32, d: 512 }, { r: 64, d: 512 }];
var width = 1200,
    height = window.outerHeight,
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
    info = document.getElementById("info");

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

svg.onmouseup = function (event) {
    var targetCircle = document.getElementById("targetCircle");
    var startingPoint = document.getElementById("startingPoint");
    if (targetCircle) {
        hitError = true;
        svg.removeChild(targetCircle);
        stop = getTime();
        totalTime = stop - start;
        info.innerText = "Time: " + totalTime + " seconds, Distance: " + Math.round(distanceTraveled) + ", Count: " + count + ", Hit: " + targetHit;

        var r = targetCircle.getAttribute("r");
        var startingCx = startingPoint.getAttribute("cx");
        var targetCx = targetCircle.getAttribute("cx");
        var distance = Math.abs(startingCx - targetCx);

        postTrial({
            UserID: userId,
            TrialTime: totalTime,
            TrialDistanceTraveled: distanceTraveled,
            TrialError: hitError,
            TrialRadius: r,
            TrialDistance: distance,
            TrialDirection: function () {
                return startingCx > targetCx ? "L" : "R"
            }()
        });
    }
};

startingPoint = function (data) {

    this.el = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    this.el.setAttributeNS(null, "id", "startingPoint");
    this.el.setAttributeNS(null, "r", 12.5);
    this.el.setAttributeNS(null, "cx", data.x);
    this.el.setAttributeNS(null, "fill", "#03ff00");
    this.el.setAttributeNS(null, "cy", data.y);

    svg.appendChild(this.el);

    this.el.onclick = function () {
        distanceTraveled = 0;
        count++;
        index = Math.floor(Math.random() * circles.length);
        circle = circles.splice(index, 1);
        start = getTime();
        new targetCircle(circle[0]);
    };
};

targetCircle = function (data) {
    info.innerText = "click the black circle";

    this.el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.el.setAttributeNS(null, "id", "targetCircle");
    this.el.setAttributeNS(null, "r", data.r);
    this.el.setAttributeNS(null, "fill", "black");
    this.el.setAttributeNS(null, "cx", data.d + pos.x);
    this.el.setAttributeNS(null, "cy", pos.y);

    svg.appendChild(this.el);

    this.el.onmousedown = function () {
        hitError = false;
        stop = getTime();       
        totalTime = stop - start;
        postTrial({
            UserID: userId,
            TrialTime: totalTime,
            TrialDistanceTraveled: distanceTraveled,
            TrialError: hitError,
            TrialRadius: data.r,
            TrialDistance: Math.abs(data.d),
            TrialDirection: data.d > 0 ? "R" : "L"
        });

        svg.removeChild(this);
    };
};

postTrial = function (trial) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'api/trial', true);
    httpRequest.setRequestHeader("Content-type", "application/json; charset=utf-8");
    httpRequest.send(JSON.stringify(trial));
}

new startingPoint(pos);
