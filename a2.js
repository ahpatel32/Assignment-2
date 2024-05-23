// Step 1: Require the collegeData module
const collegedata = require('./modules/collegedata.js');

// Step 2: Initialize the collegeData module
collegedata.initialize()
    .then(() => {
        console.log("Initialization successful.");
        // Step 3: Test other functions after successful initialization
        testGetAllStudents();
        testGetCourses();
        testGetTAs();
    })
    .catch((error) => {
        console.error("Initialization failed:", error);
    });

// Step 4: Define functions to test other functions

// Function to test getAllStudents
function testGetAllStudents() {
    collegedata.getAllStudents()
        .then((students) => {
            console.log(`Successfully retrieved ${students.length} students`);
        })
        .catch((error) => {
            console.error("Error retrieving students:", error);
        });
}

// Function to test getCourses
function testGetCourses() {
    collegedata.getCourses()
        .then((courses) => {
            console.log(`Successfully retrieved ${courses.length} courses`);
        })
        .catch((error) => {
            console.error("Error retrieving courses:", error);
        });
}

// Function to test getTAs
function testGetTAs() {
    collegedata.getTAs()
        .then((TAs) => {
            console.log(`Successfully retrieved ${TAs.length} TAs`);
        })
        .catch((error) => {
            console.error("Error retrieving TAs:", error);
        });
}