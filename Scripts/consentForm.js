consentForm = function () {
    var consentForm = document.createElement("div");
    var backBtn = document.createElement("input");
    backBtn.type = "button";
    backBtn.value = "Back";
    consentForm.id = "containeConsentForm";
    consentForm.innerHTML = ["In this study, users will be asked to click on a series of circles of various sizes and positions. Please attempt to be as accurate as possible.",
"<br>A trial consists of clicking a small center circle and then clicking a circle generated to its left or right; the test consists of 120 of these trials.",
"<br>Breaks may be taken between any two trials.",
"<br><br>Participants must use a conventional mouse or trackpad; touchscreens will not be acceptable.",
"<br><br>If you have any wrist strain issues, you may wish to decline taking part in this study or take frequent breaks. Participants may choose to opt out of the study at any point.",
"<Br><br>Upon completion of the test, participants’ results will be displayed along with a unique identifier for the test, allowing them to review their results at any time.",
"<br><br>Personally identifying information will not be shared and is for validation purposes only.",
"<br><br>[Name Field(s)] [Date/Time/UserID auto generated]<br>"].join("", ",");

    containerMain.appendChild(consentForm);
    consentForm.appendChild(backBtn);

    backBtn.onclick = function () {
        containerMain.removeChild(consentForm);
    };
};
