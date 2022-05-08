import React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./courseDescriptionStyles";
import { useForm, Form } from "./useForm";
import Controls from "../controls/Controls";
import * as dropdownService from "../../services/dropdownData";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const CourseDescription1 = () => {
  var courses_dict = {
    123456: {
      course_code: "123456",
      course_name: "software eng.",
      course_credits: "4",
      contact_hours: "4",
      Branch: "CSE/IT",
      course_outcome: [
        { index: "1", Description: "its a co1", cognitive_level: "co1" },
        { index: "2", Description: "its a co2", cognitive_level: "co2" },
        { index: "3", Description: "its a co3", cognitive_level: "co3" },
        { index: "4", Description: "its a co4", cognitive_level: "co4" },
      ],
      faculty_table: [
        {
          faculty_name: "bhawna",
          faculty_subject: "software eng.",
          faculty_id: "123",
          department: "CSE/IT",
        },
        {
          faculty_name: "amit",
          faculty_subject: "software eng.",
          faculty_id: "124",
          department: "CSE/IT",
        },
        {
          faculty_name: "seema",
          faculty_subject: "software developement",
          faculty_id: "125",
          department: "CSE/IT",
        },
        {
          faculty_name: "aneeta",
          faculty_subject: "software fundamentals",
          faculty_id: "126",
          department: "CSE/IT",
        },
        {
          faculty_name: "gautam",
          faculty_subject: "software developemnt",
          faculty_id: "127",
          department: "CSE/IT",
        },
      ],
    },

    123457: {
      course_code: "123457",
      course_name: "cn/iot",
      course_credits: "4",
      contact_hours: "4",
      Branch: "CSE/IT",
      course_outcome: [
        { index: "1", Description: "its a co1", cognitive_level: "co1" },
        { index: "2", Description: "its a co2", cognitive_level: "co2" },
        { index: "3", Description: "its a co3", cognitive_level: "co3" },
        { index: "4", Description: "its a co4", cognitive_level: "co4" },
      ],
      faculty_table: [
        {
          faculty_name: "bhawna",
          faculty_subject: "software eng.",
          faculty_id: "123",
          department: "CSE/IT",
        },
        {
          faculty_name: "amit",
          faculty_subject: "software eng.",
          faculty_id: "124",
          department: "CSE/IT",
        },
        {
          faculty_name: "seema",
          faculty_subject: "software developement",
          faculty_id: "125",
          department: "CSE/IT",
        },
        {
          faculty_name: "aneeta",
          faculty_subject: "software fundamentals",
          faculty_id: "126",
          department: "CSE/IT",
        },
        {
          faculty_name: "gautam",
          faculty_subject: "software developemnt",
          faculty_id: "127",
          department: "CSE/IT",
        },
      ],
    },
    123458: {
      course_code: "123458",
      course_name: "VLSI",
      course_credits: "4",
      contact_hours: "4",
      Branch: "ECE",
      course_outcome: [
        { index: "1", Description: "its a co1", cognitive_level: "co1" },
        { index: "2", Description: "its a co2", cognitive_level: "co2" },
        { index: "3", Description: "its a co3", cognitive_level: "co3" },
        { index: "4", Description: "its a co4", cognitive_level: "co4" },
      ],
      faculty_table: [
        {
          faculty_name: "bhawna",
          faculty_subject: "Electrical",
          faculty_id: "128",
          department: "ECE",
        },
        {
          faculty_name: "amit",
          faculty_subject: "Electrical",
          faculty_id: "124",
          department: "ECE",
        },
        {
          faculty_name: "seema",
          faculty_subject: "Electrical",
          faculty_id: "125",
          department: "ECE",
        },
        {
          faculty_name: "aneeta",
          faculty_subject: "Electrical",
          faculty_id: "126",
          department: "ECE",
        },
        {
          faculty_name: "gautam",
          faculty_subject: "Electrical",
          faculty_id: "127",
          department: "ECE",
        },
      ],
    },
  };
  const classes = useStyles();
  const intialFValues = {
    courseName: "",
    courseCode: "",
    semester: "even",
    branch: "",
    dateFrom: new Date(),
    dateTo: new Date(),
    creditsLecture: "",
    creditsTutorial: "",
    creditsLab: "",
    contactHours: "",

    teacherNames: [],
    modules: [],
    eval: "",
    books: [],
  };
  const [inputFeilds, setInputFeilds] = useState([
    {
      moduleName: "",
      moduleDescription: "",
      moduleLectures: "",
    },
  ]);
  const [coordinator, setCoordinator] = useState([
    {
      coordinatorName: "",
      coordinatorCode: "",
    },
  ]);
  const [ta, setTa] = useState([
    {
      Attendence: "",
      Assignments: "",
      Quiz: "",
      PBL: "",
      Tutorials: "",
    },
  ]);
  const [books, setBooks] = useState([
    {
      Name: "",
      Author: "",
    },
  ]);
  const handleChangeTa = (index4, event) => {
    const values = [...ta];
    values[index4][event.target.name] = event.target.value;
    setTa(values);
  };
  const handlePlusBooks = (index5, event) => {
    setBooks([
      ...books,
      {
        name: "",
        author: "",
      },
    ]);
  };
  const handleMinusBooks = (index5) => {
    const value = [...books];
    value.splice(index5, 1);
    setBooks(value);
  };
  const handleChangeBooks = (index5, event) => {
    const values = [...books];
    values[index5][event.target.name] = event.target.value;
    setBooks(values);
  };
  const handleMinusCoordinator = (index1) => {
    const value = [...coordinator];
    value.splice(index1, 1);
    setCoordinator(value);
  };
  const handleplusCoordinator = () => {
    setCoordinator([
      ...coordinator,
      {
        coordinatorName: "",
        coordinatorCode: "",
      },
    ]);
  };
  const handleChangeCoordinator = (index1, event) => {
    const values = [...coordinator];
    values[index1][event.target.name] = event.target.value;
    setCoordinator(values);
  };

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const [faculty, setFaculty] = useState([
    {
      facultyName: "",
      facultyCode: "",
    },
  ]);
  const [courseOutcome, setCourseOutcome] = useState([
    {
      courseOutcomeNum: "",
      courseOutcomeDescription: "",
      courseOutcomeLevel: "",
    },
  ]);
  const getValue = () => {
    var need = values.courseCode;
    return courses_dict[need].course_name;
  };
  const handleplusCourseOutcome = (index3, event) => {
    setCourseOutcome([
      ...courseOutcome,
      {
        courseOutcomeNum: "",
        courseOutcomeDescription: "",
        courseOutcomeLevel: "",
      },
    ]);
  };
  const handleMinusCourseOutcome = (index3) => {
    const value = [...courseOutcome];
    value.splice(index3, 1);
    setCourseOutcome(value);
  };
  const handleChangeCourseOutcome = (index3, event) => {
    const values = [...courseOutcome];
    values[index3][event.target.name] = event.target.value;
    setCourseOutcome(values);
  };
  const handleChangeInput = (index, event) => {
    const values = [...inputFeilds];
    values[index][event.target.name] = event.target.value;
    setInputFeilds(values);
  };
  const handleChangeFaculty = (index2, event) => {
    const values = [...faculty];
    values[index2][event.target.name] = event.target.value;
    setFaculty(values);
  };
  const handleMinusFaculty = (index2) => {
    const value = [...faculty];
    value.splice(index2, 1);
    setFaculty(value);
  };
  const handleplusFaculty = () => {
    setFaculty([
      ...faculty,
      {
        facultyName: "",
        facultyCode: "",
      },
    ]);
  };
  const handleplus = () => {
    setInputFeilds([
      ...inputFeilds,
      {
        moduleName: "",
        moduleDescription: "",
        moduleLectures: "",
      },
    ]);
  };
  const handleMinus = (index) => {
    const value = [...inputFeilds];
    value.splice(index, 1);
    setInputFeilds(value);
  };
  const { values, setValues, handleInputChange } = useForm(intialFValues);
  const semesterItems = [
    { id: "Odd", title: "Odd" },
    { id: "Even", title: "Even" },
  ];
  const branchItems = [
    { id: "Cse", title: "Cse" },
    { id: "Ece", title: "Ece" },
    { id: "Biotech", title: "Biotech" },
  ];

  const lectureCreditItems = [
    { id: 0, title: 0 },
    { id: 1, title: 1 },
    { id: 2, title: 2 },
    { id: 3, title: 3 },
    { id: 4, title: 4 },
    { id: 5, title: 5 },
    { id: 6, title: 6 },
    { id: 7, title: 7 },
    { id: 8, title: 8 },
    { id: 9, title: 9 },
  ];

  return (
    <Container className={classes.mainLayout}>
      <Paper className={classes.pageContent}>
        <Typography className={classes.headerText} align="center">
          Course Description Form
        </Typography>
        <Typography className={classes.normalText} align="left">
          Fill in the details carefully:
        </Typography>

        <Form>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Course Name"
                name="courseName"
                value={values.courseName}
                onChange={handleChangeInput}
                style={{ width: "35%" }}
              />

              <Controls.Select
                name="courseCode"
                label="Course Code"
                value={values.courseCode}
                onChange={handleInputChange}
                options={dropdownService.courseCodeItems()}
                // error={errors.creditsLecture}
              />
              {/* <Controls.Input
                name="courseName"
                label="Course Name"
                value={values.courseName}
                onChange={handleInputChange}
              /> */}
              {/* <Controls.Input
                name="courseCode"
                label="Course Code"
                value={values.courseCode}
                onChange={handleInputChange}
              /> */}
              <Controls.Select
                name="creditsLecture"
                label="Credits Lecture"
                value={values.creditsLecture}
                onChange={handleInputChange}
                options={lectureCreditItems}

                // error={errors.creditsLecture}
              />
              <Controls.Select
                name="creditsTutorial"
                label="Credits Tutorial"
                value={values.creditsTutorial}
                onChange={handleInputChange}
                options={lectureCreditItems}

                // error={errors.creditsLecture}
              />
              <Controls.Select
                name="creditsLab"
                label="Credits Lab"
                value={values.creditsLab}
                onChange={handleInputChange}
                options={lectureCreditItems}

                // error={errors.creditsLecture}
              />
              <Controls.Select
                name="contactHours"
                label="Contact Hours"
                value={values.creditsLab}
                onChange={handleInputChange}
                options={lectureCreditItems}

                // error={errors.creditsLecture}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.RadioGroup
                name="semester"
                label="Semester"
                value={values.semester}
                onChange={handleInputChange}
                items={semesterItems}
              />
              <Controls.RadioGroup
                name="branch"
                label="Branch"
                value={values.branch}
                onChange={handleInputChange}
                items={branchItems}
              />
              <Controls.DatePicker
                name="dateFrom"
                label="Date From"
                value={values.dateFrom}
                onChange={handleInputChange}
              />
              <Controls.DatePicker
                name="dateTo"
                label="Date To"
                value={values.dateTo}
                onChange={handleInputChange}
              />

              {/* <Controls.Input
                name="coordinatorName"
                label="Coordinator Name"
                value={values.coordinatorName}
                onChange={handleInputChange}
              />
              <Controls.Input
                name="coordinatorCode"
                label="Coordinator Code"
                value={values.courseName}
                onChange={handleInputChange}
              /> */}
            </Grid>
          </Grid>
          <hr></hr>
          <Grid container>
            <div className={classes.div1}>
              <div>
                <Typography className={classes.captionsText}>
                  Coordinator Details
                </Typography>
              </div>
              {coordinator.map((coordinator, index1) => (
                <div key={index1} className={classes.insideDiv}>
                  <TextField
                    variant="outlined"
                    label="Coordinator Name"
                    name="coordinatorName"
                    value={coordinator.coordinatorName}
                    onChange={(event) => handleChangeCoordinator(index1, event)}
                    style={{ width: "35%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Coordinator Code"
                    name="coordinatorCode"
                    value={coordinator.coordinatorCode}
                    onChange={(event) => handleChangeCoordinator(index1, event)}
                    style={{ width: "35%" }}
                  />
                  <IconButton
                    className={classes.addButton}
                    onClick={() => handleplusCoordinator()}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    className={classes.minusButton}
                    onClick={() => handleMinusCoordinator()}
                  >
                    <RemoveIcon />
                  </IconButton>
                </div>
              ))}
            </div>

            <div className={classes.div1}>
              <div>
                <Typography className={classes.captionsText}>
                  Faculty Details
                </Typography>
              </div>
              {faculty.map((faculty, index2) => (
                <div key={index2} className={classes.insideDiv}>
                  <TextField
                    variant="outlined"
                    label="Faculty Name"
                    name="facultyName"
                    value={faculty.facultyName}
                    onChange={(event) => handleChangeFaculty(index2, event)}
                    style={{ width: "35%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Faculty Code"
                    name="facultyCode"
                    value={faculty.facultyCode}
                    onChange={(event) => handleChangeFaculty(index2, event)}
                    style={{ width: "35%" }}
                  />
                  <IconButton
                    className={classes.addButton}
                    onClick={() => handleplusFaculty()}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    className={classes.minusButton}
                    onClick={() => handleMinusFaculty()}
                  >
                    <RemoveIcon />
                  </IconButton>
                </div>
              ))}
            </div>

            <div className={classes.div1}>
              <div>
                <Typography className={classes.captionsText}>
                  Modules Details
                </Typography>
              </div>
              {inputFeilds.map((inputFeilds, index) => (
                <div key={index} className={classes.insideDiv}>
                  <TextField
                    variant="outlined"
                    label="Module Name"
                    name="moduleName"
                    value={inputFeilds.moduleName}
                    onChange={(event) => handleChangeInput(index, event)}
                    style={{ width: "25%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Topics "
                    name="moduleDescription"
                    value={inputFeilds.moduleDescription}
                    onChange={(event) => handleChangeInput(index, event)}
                    style={{ width: "20%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Lectures "
                    name="moduleLectures"
                    value={inputFeilds.moduleLectures}
                    onChange={(event) => handleChangeInput(index, event)}
                    style={{ width: "20%" }}
                  />
                  <IconButton
                    className={classes.addButton}
                    onClick={() => handleplus()}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    className={classes.minusButton}
                    onClick={() => handleMinus(index)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </div>
              ))}
            </div>

            <div className={classes.div1}>
              <div>
                <Typography className={classes.captionsText}>
                  Course Outcomes
                </Typography>
              </div>
              {courseOutcome.map((courseOutcome, index3) => (
                <div key={index3} className={classes.insideDiv}>
                  <TextField
                    variant="outlined"
                    label="No"
                    name="CourseOutcomeNum"
                    value={courseOutcome.courseOutcomeNum}
                    onChange={(event) =>
                      handleChangeCourseOutcome(index3, event)
                    }
                    style={{ width: "10%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Course Outcome Description"
                    name="courseOutcomeDescription"
                    value={courseOutcome.courseOutcomeDescription}
                    onChange={(event) =>
                      handleChangeCourseOutcome(index3, event)
                    }
                    style={{ width: "35%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Course Outcome Level"
                    name="courseOutcomeLevel"
                    value={courseOutcome.courseOutcomeLevel}
                    onChange={(event) =>
                      handleChangeCourseOutcome(index3, event)
                    }
                    style={{ width: "35%" }}
                  />
                  <IconButton
                    className={classes.addButton}
                    onClick={() => handleplusCourseOutcome()}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    className={classes.minusButton}
                    onClick={() => handleMinusCourseOutcome()}
                  >
                    <RemoveIcon />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>
          {/* <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Attendence</TableCell>
                  <TableCell align="right">Assignments</TableCell>
                  <TableCell align="right">Quiz</TableCell>
                  <TableCell align="right">PBL</TableCell>
                  <TableCell align="right">Tutorials</TableCell>
                </TableRow>
              </TableHead> */}
          {/* <TableBody>
                <TableRow>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      label="No"
                      name="CourseOutcomeNum"
                      value={courseOutcome.courseOutcomeNum}
                      onChange={(event) =>
                        handleChangeCourseOutcome(index3, event)
                      }
                      style={{ width: "10%" }}
                    ></TextField>
                  </TableCell>
                </TableRow>
              </TableBody> */}
          {/* </Table>
          </TableContainer> */}

          {ta.map((ta, index4) => (
            <div key={index4} className={classes.insideDiv}>
              <Typography className={classes.captionsText}>
                Teacher's Assesment
              </Typography>
              <TextField
                variant="outlined"
                label="Attendence"
                name="attendence"
                value={ta.attendence}
                onChange={(event) => handleChangeTa(index4, event)}
                style={{ width: "15%" }}
              />
              <TextField
                variant="outlined"
                label="Assignments"
                name="assignments"
                value={ta.assignments}
                onChange={(event) => handleChangeTa(index4, event)}
                style={{ width: "15%" }}
              />
              <TextField
                variant="outlined"
                label="Quiz"
                name="quiz"
                value={ta.quiz}
                onChange={(event) => handleChangeTa(index4, event)}
                style={{ width: "15%" }}
              />
              <TextField
                variant="outlined"
                label="PBL"
                name="pbl"
                value={ta.pbl}
                onChange={(event) => handleChangeTa(index4, event)}
                style={{ width: "15%" }}
              />
              <TextField
                variant="outlined"
                label="Tutorial"
                name="tutorial"
                value={ta.tutorial}
                onChange={(event) => handleChangeTa(index4, event)}
                style={{ width: "15%" }}
              />
              {/* <IconButton
                className={classes.addButton}
                onClick={() => handleplusCourseOutcome()}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                className={classes.minusButton}
                onClick={() => handleMinusCourseOutcome()}
              >
                <RemoveIcon />
              </IconButton> */}
            </div>
          ))}
          <div className={classes.div1}>
            <div>
              <Typography className={classes.captionsText}>
                Reference Books
              </Typography>
            </div>
            {books.map((books, index5) => (
              <div key={index5} className={classes.insideDiv}>
                <TextField
                  variant="outlined"
                  label="Name"
                  name="name"
                  value={books.name}
                  onChange={(event) => handleChangeBooks(index5, event)}
                  style={{ width: "15%" }}
                />
                <TextField
                  variant="outlined"
                  label="Author"
                  name="author"
                  value={books.author}
                  onChange={(event) => handleChangeBooks(index5, event)}
                  style={{ width: "15%" }}
                />

                <IconButton
                  className={classes.addButton}
                  onClick={() => handlePlusBooks(index5)}
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  className={classes.minusButton}
                  onClick={() => handleMinusBooks(index5)}
                >
                  <RemoveIcon />
                </IconButton>
              </div>
            ))}
          </div>
        </Form>
      </Paper>
    </Container>
  );
};

export default CourseDescription1;