import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../pages/Sheared/ErrorPage/ErrorPage";
import Home from '../../pages/Home/Home/Home'
import Register from "../../pages/Authintication/Register/Register";
import Login from "../../pages/Authintication/Login/Login";
import DashboardLayout from "../../layout/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import UpdateYoueProfile from "../../pages/UpdateYourProfile/UpdateYourProfile";
import MyProfiles from "../../pages/MyProfiles/MyProfiles";
import Assignments from "../../TeacherProfile/Assignments/Assignments";
import ViewProfile from "../../TeacherProfile/ViewProfile/ViewProfile";
import AddSyllabus from "../../TeacherProfile/CourseSyllabus/AddSyllabus/AddSyllabus";
import FindSyllabus from "../../TeacherProfile/CourseSyllabus/FindSyllabus/FindSyllabus";
import AddMyQuestion from "../../TeacherProfile/MyQuestionBank/AddMyQuestionBank/AddMyQuestion";
import AddPresentation from "../../TeacherProfile/AddPresentationTopic/AddPresentation/AddPresentation";
import Syllabus from "../../TeacherProfile/CourseSyllabus/Syllabus/Syllabus";
import QuestionBank from "../../TeacherProfile/MyQuestionBank/QuestionBank/QuestionBank";
import QuizQuestion from "../../TeacherProfile/MyQuestionBank/QuestionBank/QuizQuestion/QuizQuestion";
import MidTermQuestion from "../../TeacherProfile/MyQuestionBank/QuestionBank/MidTermQuestion/MidTermQuestion";
import FinaleExamQuestion from "../../TeacherProfile/MyQuestionBank/QuestionBank/FinaleExamQuestion/FinaleExamQuestion";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <PrivateRoute> <Home></Home></PrivateRoute>
            },
            {
                path: '/updateprofile/:id',
                element: <UpdateYoueProfile></UpdateYoueProfile>
            },

            {
                path: '/myprofile',
                element: <PrivateRoute><MyProfiles></MyProfiles></PrivateRoute>
            },

            {
                path: '/questionbank',
                element: <PrivateRoute><QuestionBank></QuestionBank></PrivateRoute>
            },
            {
                path: '/quizquestion',
                element: <PrivateRoute><QuizQuestion></QuizQuestion></PrivateRoute>
            },
            {
                path: '/midquestion',
                element: <PrivateRoute><MidTermQuestion></MidTermQuestion></PrivateRoute>
            },
            {
                path: '/finaleexamquestion',
                element: <PrivateRoute><FinaleExamQuestion></FinaleExamQuestion></PrivateRoute>
            },
            {
                path: '/coursesyllabus',
                element: <PrivateRoute><Syllabus></Syllabus></PrivateRoute>
            },
            {
                path: '/addsyllabus',
                element: <AddSyllabus></AddSyllabus>
            },
            {
                path: '/findsyllabus',
                element: <FindSyllabus></FindSyllabus>
            },
            {
                path: '/viewprofile',
                element: <PrivateRoute><ViewProfile></ViewProfile></PrivateRoute>
            },

            {
                path: '/addassignment',
                element: <Assignments></Assignments>
            }
            ,
            {
                path: '/addquestion',
                element: <AddMyQuestion></AddMyQuestion>
            }
            ,
            {
                path: '/addpresentation',
                element: <AddPresentation></AddPresentation>
            }
            ,

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }

        ]

    }
])