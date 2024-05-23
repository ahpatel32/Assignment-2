//declaring constant variable collegedata which will store the path for collegedata.js which we will use to call functions
const collegedata = require('./modules/collegedata.js');

//Calling the initialize function to check if we are able to read the files or not.
collegedata.initialize().then(() => {
        //printing successful message if we are able to read the data from files.
        console.log("Initialization successful.");
        //calling other functions to test if the other functions are working fine or not.
        check_GetAllStudents();
        check_GetCourses();
        check_GetTAs();
    })
    .catch((error) => {
        //if we get error printing the error message.
        console.error("Initialization failed:", error);
    });

// Function to test getAllStudents function
function check_GetAllStudents() {
    //Calling the getAllStudents function to check if it is working or not.
    collegedata.getAllStudents().then((students) => {
            //print message if it is working fine and we are using students.length to count the number of students.
            console.log(`Successfully retrieved ${students.length} students`);
        })
        .catch((error) => {
            //printing the error message if we have the error.
            console.error("Error retrieving students:", error);
        });
}

// Function to test getCourses function
function check_GetCourses() {
    //Calling the getCourses function to check if it is working or not.
    collegedata.getCourses().then((courses) => {
            //print message if it is working fine
            console.log(`Successfully retrieved ${courses.length} courses`);
        })
        .catch((error) => {
            //printing the error message if we have the error.
            console.error("Error retrieving courses:", error);
        });
}

// Function to test getTAs function
function check_GetTAs() {
    //calling the getTAs function to check if it is working or not.
    collegedata.getTAs().then((TAs) => {
            //pring message if it is working fine.
            console.log(`Successfully retrieved ${TAs.length} TAs`);
        })
        .catch((error) => {
            //printing the error message if we have the error.
            console.error("Error retrieving TAs:", error);
        });
}