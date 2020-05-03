$(document).ready(function () {
    var currentDay = moment();
    $("#currentDay").text(currentDay);


    var currentTime = (moment()).toString();
    var timeAt9am = (moment('09:00', 'HH:mm')).toString();
    var timeAt10am = (moment('10:00', 'HH:mm')).toString();
    var timeAt11am = (moment('11:00', 'HH:mm')).toString();
    var timeAt12pm = (moment('12:00', 'HH:mm')).toString();
    var timeAt1pm = (moment('13:00', 'HH:mm')).toString();
    var timeAt2pm = (moment('14:00', 'HH:mm')).toString();
    var timeAt3pm = (moment('15:00', 'HH:mm')).toString();
    var timeAt4pm = (moment('16:00', 'HH:mm')).toString();
    var timeAt5pm = (moment('17:00', 'HH:mm')).toString();
    var timeAt6pm = (moment('18:00', 'HH:mm')).toString();


    // 9AM
    if (currentTime < timeAt9am) {
        $("#9amTable").addClass("future")
    }
    else if ((currentTime >= timeAt9am) && (currentTime < timeAt10am)) {
        $("#9amTable").addClass("present")
    }
    else if (currentTime >= timeAt10am) {
        $("#9amTable").addClass("past")
    };

    // 10AM
    if (currentTime < timeAt10am) {
        $("#10amTable").addClass("future")
    }
    else if ((currentTime >= timeAt10am) && (currentTime < timeAt11am)) {
        $("#10amTable").addClass("present")
    }
    else if (currentTime >= timeAt11am) {
        $("10amTable").addClass("past")
    };

    // 11AM
    if (currentTime < timeAt11am) {
        $("#11amTable").addClass("future")
    }
    else if ((currentTime >= timeAt11am) && (currentTime < timeAt12pm)) {
        $("#11amTable").addClass("present")
    }
    else if (currentTime >= timeAt12pm) {
        $("#11amTable").addClass("past")
    };

    // 12PM
    if (currentTime < timeAt12pm) {
        $("#12pmTable").addClass("future")
    }
    else if ((currentTime >= timeAt12pm) && (currentTime < timeAt1pm)) {
        $("#12pmTable").addClass("present")
    }
    else if (currentTime >= timeAt1pm) {
        $("#12pmTable").addClass("past")
    };

    // 1PM
    if (currentTime < timeAt1pm) {
        $("#1pmTable").addClass("future")
    }
    else if ((currentTime >= timeAt1pm) && (currentTime < timeAt2pm)) {
        $("#1pmTable").addClass("present")
    }
    else if (currentTime >= timeAt2pm) {
        $("#1pmTable").addClass("past")
    };

    // 2PM
    if (currentTime < timeAt2pm) {
        $("#2pmTable").addClass("future")
    }
    else if ((currentTime >= timeAt2pm) && (currentTime < timeAt3pm)) {
        $("#2pmTable").addClass("present")
    }
    else if (currentTime >= timeAt3pm) {
        $("#2pmTable").addClass("past")
    };

    // 3PM
    if (currentTime < timeAt3pm) {
        $("#3pmTable").addClass("future")
    }
    else if ((currentTime >= timeAt3pm) && (currentTime < timeAt4pm)) {
        $("#3pmTable").addClass("present")
    }
    else if (currentTime >= timeAt4pm) {
        $("#3pmTable").addClass("past")
    };

    // 4PM
    if (currentTime < timeAt4pm) {
        $("#4pmTable").addClass("future")
    }
    else if ((currentTime >= timeAt4pm) && (currentTime < timeAt5pm)) {
        $("#4pmTable").addClass("present")
    }
    else if (currentTime >= timeAt5pm) {
        $("#4pmTable").addClass("past")
    };

    // 5PM
    if (currentTime < timeAt5pm) {
        $("#5pmTable").addClass("future")
    }
    else if ((currentTime >= timeAt5pm) && (currentTime < timeAt6pm)) {
        $("#5pmTable").addClass("present")
    }
    else if (currentTime >= timeAt6pm) {
        $("#5pmTable").addClass("past")
    };

    // 9AM event call
    var eventCall9am = localStorage.getItem("9amEvent");
    $("#9amTable").text(eventCall9am);

    $(".btnFor9").on("click", function (event) {

        var renderEvent9am = $("#9amTable").text();
        localStorage.setItem("9amEvent", (renderEvent9am));
    });

    // 10AM event call
    var eventCall10am = localStorage.getItem("10amEvent");
    $("#10amTable").text(eventCall10am);

    $(".btnFor10").on("click", function (event) {

        var renderEvent10am = $("#10amTable").text();
        localStorage.setItem("10amEvent", (renderEvent10am));
    });

    // 11am event call
    var eventCall11am = localStorage.getItem("11amEvent");
    $("#11amTable").text(eventCall11am);

    $(".btnFor11").on("click", function (event) {

        var renderEvent11am = $("#11amTable").text();
        localStorage.setItem("11amEvent", (renderEvent11am));
    });

    // 12pm event call
    var eventCall12pm = localStorage.getItem("12pmEvent");
    $("#12pmTable").text(eventCall12pm);

    $(".btnFor12").on("click", function (event) {

        var renderEvent12pm = $("#12pmTable").text();
        localStorage.setItem("12pmEvent", (renderEvent12pm));
    });

    // 1pm event call
    var eventCall1pm = localStorage.getItem("1pmEvent");
    $("#1pmTable").text(eventCall1pm);

    $(".btnFor1").on("click", function (event) {

        var renderEvent1pm = $("#1pmTable").text();
        localStorage.setItem("1pmEvent", (renderEvent1pm));
    });

    // 2pm event call
    var eventCall2pm = localStorage.getItem("2pmEvent");
    $("#2pmTable").text(eventCall2pm);

    $(".btnFor2").on("click", function (event) {

        var renderEvent2pm = $("#2pmTable").text();
        localStorage.setItem("2pmEvent", (renderEvent2pm));
    });

    // 3pm event call
    var eventCall3pm = localStorage.getItem("3pmEvent");
    $("#3pmTable").text(eventCall3pm);

    $(".btnFor3").on("click", function (event) {

        var renderEvent3pm = $("#3pmTable").text();
        localStorage.setItem("3pmEvent", (renderEvent3pm));
    });
    // 4pm event call
    var eventCall4pm = localStorage.getItem("4pmEvent");
    $("#4pmTable").text(eventCall4pm);

    $(".btnFor4").on("click", function (event) {

        var renderEvent4pm = $("#4pmTable").text();
        localStorage.setItem("4pmEvent", (renderEvent4pm));
    });

    //5pm event call
    var eventCall5pm = localStorage.getItem("5pmEvent");
    $("#5pmTable").text(eventCall5pm);

    $(".btnFor5").on("click", function (event) {
        var renderEvent5pm = $("#5pmTable").text();
        localStorage.setItem("5pmEvent", (renderEvent5pm));
    });

});