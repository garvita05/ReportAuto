import { Container } from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home";
import CourseDescription from "./components/Reports/CourseDescription";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import CourseDescription1 from "./components/Reports/CourseDescription1";
import OpeningReport from "./components/Reports/OpeningReport";
import AttainmentReport from "./components/Reports/AttainmentReport";
import SuccessScreen from "./components/Screens/successScreen";
import GetCourseDescription from "./components/Reports/getCourseDescriptionForm";
import CourseReport from "./components/Reports/CourseReport";
import ReportScreen from "./components/Reports/ReportScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        {/* <Navbar /> */}
        <CustomNavbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/courseDescription1" element={<CourseDescription1 />} />
          <Route path="/openingReport" element={<OpeningReport />} />
          <Route path="/attainmentReport" element={<AttainmentReport />} />
          <Route
            path="/courseDescription1/successScreen"
            element={<SuccessScreen />}
            name="successScreen"
          />
          <Route
            path="/openingReport/successScreen"
            element={<SuccessScreen />}
            name="successScreen"
          />
          <Route
            path="/attainmentReport/successScreen"
            element={<SuccessScreen />}
            name="successScreen"
          />
          <Route
            path="/courseDescription1/getCourseDescription"
            element={<GetCourseDescription />}
            name="GetCourseDescription"
          />
          <Route
            path="/courseDescription1/getCourseDescription/CourseReport"
            element={<CourseReport />}
            name="courseReport"
          />
          <Route
            path="/reportScreen"
            element={<ReportScreen />}
            name="reportScreen"
          />
        </Routes>
        {/* <Home /> */}
      </Container>
    </BrowserRouter>
  );
};

export default App;
