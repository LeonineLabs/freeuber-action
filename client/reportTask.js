Template.reportTask.events({
  "submit .reportTask": function (event) {
    // Prevent default browser form submit
    console.log("HEY!")
    event.preventDefault();

    // Get value from form element    
    var task = event.target.task.value
    console.log("Task: " + task);
    
    var descrip = event.target.descrip.value;
    console.log("Descrip: " + descrip)
    //console.log(event.target);

    // Insert a task into the collection
    TaskReports.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    alert("Task received! It will be reflected in the leaderboards within 24 hours. Thank you! Any more to submit?");
    event.target.descrip.value = "";


  }
});
