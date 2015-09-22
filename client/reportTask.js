Template.reportTask.events({
  "submit .reportTask": function (event) {
    event.preventDefault();

    var report = {};

    report.task = event.target.task.value    
    report.desc = event.target.descrip.value;

    Meteor.call("insertTaskReport", report);

    alert("Task received! It will be reflected in the leaderboards within 24 hours. Thank you! Any more to submit?");

    event.target.descrip.value = "";
  }
});
