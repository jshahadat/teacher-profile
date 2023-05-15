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
import Addprojects from "../../TeacherProfile/AddProjects/AddProjects/Addprojects";
import SpringMid from "../../TeacherProfile/SpringMid/SpringMid";
import SetB from "../../TeacherProfile/SpringMid/SetB";
import FallMid from "../../TeacherProfile/Exams/FallMid/FallMid";
import SummerMid from "../../TeacherProfile/Exams/SummerMid/SummerMid";
import CreateQuestion from "../../TeacherProfile/CreateQuestion/CreateQuestion";
import MainSearchBar from "../../pages/Searches/MainSearchBar";
import UpdateChapteroneQuestion from "../../TeacherProfile/Chpters/ChpaterOne/UpdateChapteroneQuestion";
import Chapter from "../../TeacherProfile/Courses/CseThreeTwoOne/Chapter";
import CseThreeTwoOne from "../../TeacherProfile/Courses/CseThreeTwoOne/CseThreeTwoOne";
import SyllabusChapter from "../../TeacherProfile/CourseSyllabus/Syllabus/SyllabusChapter";
import SyllabusChapterQuestion from "../../TeacherProfile/CourseSyllabus/Syllabus/SyllabusChapterQuestion";
import SpringMidChapterTwo from "../../TeacherProfile/SpringMid/SpringMidChapterTwo";
import SpringMidChapterThree from "../../TeacherProfile/SpringMid/SpringMidChapterThree";
import SpringMidChapterFour from "../../TeacherProfile/SpringMid/SpringMidChapterFour";
import SpringMidChapterFive from "../../TeacherProfile/SpringMid/SpringMidChapterFive";
import CseTwoOneThreeChapOne from "../../TeacherProfile/SpringMid/CSETwoOneThree/CseTwoOneThreeChapOne";
import CseTwoOneThreeChapTwo from "../../TeacherProfile/SpringMid/CSETwoOneThree/CseTwoOneThreeChapTwo";
import CseTwoOneThreeChapThree from "../../TeacherProfile/SpringMid/CSETwoOneThree/CseTwoOneThreeChapThree";
import AssignmentCourses from "../../TeacherProfile/Assignments/AssignmentCourses";
import AssignmentsTopics from "../../TeacherProfile/Assignments/AssignmentsTopics";
import PresentationCourses from "../../TeacherProfile/AddPresentationTopic/Presentation/PresentationCourses";
import PresentationTopics from "../../TeacherProfile/AddPresentationTopic/Presentation/PresentationTopics";
import SpringMidOneTwo from "../../TeacherProfile/SpringMid/SpringMidOneTwo";
import SpringMidOneTwoThree from "../../TeacherProfile/SpringMid/SpringMidOneTwoThree";
import SpringMidOneTwoThreeFourFive from "../../TeacherProfile/SpringMid/SpringMidOneTwoThreeFourFive";
import CseTwoOneThreeChapFive from "../../TeacherProfile/SpringMid/CSETwoOneThree/CseTwoOneThreeChapFive";
import CseTwoOneThreeChapFour from "../../TeacherProfile/SpringMid/CSETwoOneThree/CseTwoOneThreeChapFour";
import CseTwoTwoSixChapOne from "../../TeacherProfile/SpringMid/CSETwoTwoSix/CseTwoTwoSixChapOne";
import CseTwoTwoSixChapTwo from "../../TeacherProfile/SpringMid/CSETwoTwoSix/CseTwoTwoSixChapTwo";
import CseTwoTwoSixChapThree from "../../TeacherProfile/SpringMid/CSETwoTwoSix/CseTwoTwoSixChapThree";
import CseTwoTwoSixChapFour from "../../TeacherProfile/SpringMid/CSETwoTwoSix/CseTwoTwoSixChapFour";
import CseTwoTwoSixChapFive from "../../TeacherProfile/SpringMid/CSETwoTwoSix/CseTwoTwoSixChapFive";
import CseTwoTwoOneChapOne from "../../TeacherProfile/SpringMid/CSETwoTwoOne/CseTwoTwoOneChapOne";
import CseTwoTwoOneChapTwo from "../../TeacherProfile/SpringMid/CSETwoTwoOne/CseTwoTwoOneChapTwo";
import CseTwoTwoOneChapThree from "../../TeacherProfile/SpringMid/CSETwoTwoOne/CseTwoTwoOneChapThree";
import CseTwoTwoOneChapFour from "../../TeacherProfile/SpringMid/CSETwoTwoOne/CseTwoTwoOneChapFour";
import CseTwoTwoOneChapFive from "../../TeacherProfile/SpringMid/CSETwoTwoOne/CseTwoTwoOneChapFive";
import CseThreeTwoFiveChapFive from "../../TeacherProfile/SpringMid/CSEThreeTwoFive/CseThreeTwoFiveChapFive";
import CseThreeTwoFiveChapFour from "../../TeacherProfile/SpringMid/CSEThreeTwoFive/CseThreeTwoFiveChapFour";
import CseThreeTwoFiveChapThree from "../../TeacherProfile/SpringMid/CSEThreeTwoFive/CseThreeTwoFiveChapThree";
import CseThreeTwoFiveChapTwo from "../../TeacherProfile/SpringMid/CSEThreeTwoFive/CseThreeTwoFiveChapTwo";
import CseThreeTwoFiveChapOne from "../../TeacherProfile/SpringMid/CSEThreeTwoFive/CseThreeTwoFiveChapOne";

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
                path: '/updateprofile',
                element: <UpdateYoueProfile></UpdateYoueProfile>
            },

            {
                path: '/myprofile',
                element: <PrivateRoute><MyProfiles></MyProfiles></PrivateRoute>
            },

            {
                path: '/question',
                element: <QuestionBank></QuestionBank>
            },
            {
                path: '/generatequestion',
                element: <MainSearchBar></MainSearchBar>
            },
            {
                path: '/createquestion',
                element: <CreateQuestion></CreateQuestion>
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
                path: '/find syllabus',
                element: <FindSyllabus></FindSyllabus>
            },
            {
                path: '/viewprofile',
                element: <PrivateRoute><ViewProfile></ViewProfile></PrivateRoute>
            },

            {
                path: '/addassignment',
                element: <Assignments></Assignments>
            },
            {
                path: '/assignment',
                element: <AssignmentCourses></AssignmentCourses>
            },
            {
                path: '/presentation',
                element: <PresentationCourses></PresentationCourses>
            }
            ,
            {
                path: '/addquestion',
                element: <AddMyQuestion></AddMyQuestion>
            },
            {
                path: '/addproject',
                element: <Addprojects></Addprojects>
            }
            ,
            {
                path: '/addpresentation',
                element: <AddPresentation></AddPresentation>
            }
            ,
            {
                path: '/CSE-321Spring-22MidCha-1',
                element: <SpringMid></SpringMid>
            }
            ,
            {
                path: '/ged-111Spring-22MidCha-1',
                element: <SpringMid></SpringMid>
            }
            ,
            {
                path: '/CSE-321Spring-22Midcha-1,2',
                element: <SpringMidOneTwo></SpringMidOneTwo>
            }
            ,
            {
                path: '/CSE-321Spring-22Midcha-1,2,3',
                element: <SpringMidOneTwoThree></SpringMidOneTwoThree>
            }
            ,
            {
                path: '/CSE-321Spring-22Midcha-1,2,3,4',
                element: <SpringMidOneTwoThree></SpringMidOneTwoThree>
            }
            ,
            {
                path: '/CSE-321Spring-22Midcha-1,2,3,4,5',
                element: <SpringMidOneTwoThreeFourFive></SpringMidOneTwoThreeFourFive>
            }
            ,
            {
                path: '/cse-321spring-22midcha-1',
                element: <SpringMid></SpringMid>
            }
            ,
            {
                path: '/cse-321spring-22midcha-2',
                element: <SpringMidChapterTwo></SpringMidChapterTwo>
            }
            ,
            {
                path: '/cse-321spring-22midcha-3',
                element: <SpringMidChapterThree></SpringMidChapterThree>
            }
            ,
            {
                path: '/cse-321spring-22midcha-4',
                element: <SpringMidChapterFour></SpringMidChapterFour>
            }
            ,
            {
                path: '/cse-321spring-22midcha-5',
                element: <SpringMidChapterFive></SpringMidChapterFive>
            }
            ,
            {
                path: '/CSESummer-22MidCha-1',
                element: <SummerMid></SummerMid>
            },

            {
                path: '/cse-213spring-22midcha-1',
                element: <CseTwoOneThreeChapOne></CseTwoOneThreeChapOne>
            }
            ,
            {
                path: '/cse-213spring-22midcha-1,2',
                element: <CseTwoOneThreeChapOne></CseTwoOneThreeChapOne>
            }
            ,
            {
                path: '/cse-213spring-22midcha-1,2,3',
                element: <CseTwoOneThreeChapOne></CseTwoOneThreeChapOne>
            }
            ,
            {
                path: '/cse-213spring-22midcha-1,2,3,',
                element: <CseTwoOneThreeChapOne></CseTwoOneThreeChapOne>
            }
            ,
            {
                path: '/cse-213spring-22midcha-1,2,3,5',
                element: <CseTwoOneThreeChapOne></CseTwoOneThreeChapOne>
            }
            ,
            {
                path: '/cse-213spring-22midcha-2',
                element: <CseTwoOneThreeChapTwo></CseTwoOneThreeChapTwo>
            }
            ,
            {
                path: '/cse-213spring-22midcha-3',
                element: <CseTwoOneThreeChapThree></CseTwoOneThreeChapThree>
            }
            ,
            {
                path: '/cse-213spring-22midcha-4',
                element: <CseTwoOneThreeChapFour></CseTwoOneThreeChapFour>

            }
            ,
            {
                path: '/cse-213spring-22midcha-5',
                element: <CseTwoOneThreeChapFive></CseTwoOneThreeChapFive>

            }
            ,
            {
                path: '/cse-226spring-22midcha-1',
                element: <CseTwoTwoSixChapOne></CseTwoTwoSixChapOne>

            }
            ,
            {
                path: '/cse-226spring-22midcha-1',
                element: <CseTwoTwoSixChapOne></CseTwoTwoSixChapOne>

            }
            ,
            {
                path: '/cse-226spring-22midcha-1,2',
                element: <CseTwoTwoSixChapOne></CseTwoTwoSixChapOne>

            }
            ,
            {
                path: '/cse-226spring-22midcha-1,2,3',
                element: <CseTwoTwoSixChapOne></CseTwoTwoSixChapOne>

            }
            ,
            {
                path: '/cse-226spring-22midcha-1,2,3,4',
                element: <CseTwoTwoSixChapOne></CseTwoTwoSixChapOne>

            }
            ,
            {
                path: '/cse-226spring-22midcha-1,2,3,4,5',
                element: <CseTwoTwoSixChapOne></CseTwoTwoSixChapOne>

            }
            ,
            {
                path: '/cse-226spring-22midcha-2',
                element: <CseTwoTwoSixChapTwo />

            }
            ,
            {
                path: '/cse-226spring-22midcha-3',
                element: <CseTwoTwoSixChapThree />

            }
            ,
            {
                path: '/cse-226spring-22midcha-4',
                element: <CseTwoTwoSixChapFour />

            }
            ,
            {
                path: '/cse-226spring-22midcha-5',
                element: <CseTwoTwoSixChapFive />

            }
            ,
            {
                path: '/cse-221spring-22midcha-1',
                element: <CseTwoTwoOneChapOne />

            }
            ,
            {
                path: '/cse-221spring-22midcha-1,2',
                element: <CseTwoTwoOneChapOne />

            }
            ,
            {
                path: '/cse-221spring-22midcha-1,2,3',
                element: <CseTwoTwoOneChapOne />

            }
            ,
            {
                path: '/cse-221spring-22midcha-1,2,3,4',
                element: <CseTwoTwoOneChapOne />

            }
            ,
            {
                path: '/cse-221spring-22midcha-1,2,3,4,5',
                element: <CseTwoTwoOneChapOne />

            }
            ,
            {
                path: '/cse-221spring-22midcha-2',
                element: <CseTwoTwoOneChapTwo />

            }
            ,
            {
                path: '/cse-221spring-22midcha-3',
                element: <CseTwoTwoOneChapThree />

            }
            ,
            {
                path: '/cse-221spring-22midcha-4',
                element: <CseTwoTwoOneChapFour />

            }
            ,
            {
                path: '/cse-221spring-22midcha-5',
                element: <CseTwoTwoOneChapFive />

            }
            ,
            {
                path: '/cse-325spring-22midcha-1',
                element: <CseThreeTwoFiveChapOne />

            }
            ,
            {
                path: '/cse-325spring-22midcha-1,2',
                element: <CseThreeTwoFiveChapOne />

            }
            ,
            {
                path: '/cse-325spring-22midcha-1,2,3',
                element: <CseThreeTwoFiveChapOne />

            }
            ,
            {
                path: '/cse-325spring-22midcha-1,2,3,4',
                element: <CseThreeTwoFiveChapOne />

            }
            ,
            {
                path: '/cse-325spring-22midcha-1,2,3,4,5',
                element: <CseThreeTwoFiveChapOne />

            }
            ,
            {
                path: '/cse-325spring-22midcha-2',
                element: <CseThreeTwoFiveChapTwo />

            }
            ,
            {
                path: '/cse-325spring-22midcha-3',
                element: <CseThreeTwoFiveChapThree />

            }
            ,
            {
                path: '/cse-325spring-22midcha-4',
                element: <CseThreeTwoFiveChapFour />

            }
            ,
            {
                path: '/cse-325spring-22midcha-5',
                element: <CseThreeTwoFiveChapFive />

            }
            ,
            {
                path: '/:id',
                element: <SyllabusChapter></SyllabusChapter>,
                loader: ({ params }) => fetch(`https://assignment-twelfth-server.vercel.app/${params.id}`)
            }
            ,
            {
                path: '/chapquestion/:id',
                element: <SyllabusChapterQuestion></SyllabusChapterQuestion>,
                loader: ({ params }) => fetch(`https://assignment-twelfth-server.vercel.app/chapquestion/${params.id}`)
            }
            ,
            {
                path: '/assigncourse/:id',
                element: <AssignmentsTopics></AssignmentsTopics>,
                loader: ({ params }) => fetch(`https://assignment-twelfth-server.vercel.app/assigncourse/${params.id}`)
            }
            ,
            {
                path: '/prsentationcourse/:id',
                element: <PresentationTopics></PresentationTopics>,
                loader: ({ params }) => fetch(`https://assignment-twelfth-server.vercel.app/prsentationcourse/${params.id}`)
            }
            // ,
            // {
            //     path: '/:id',
            //     element: <SyllabusChapterQuestion></SyllabusChapterQuestion>,
            //     loader: ({ params }) => fetch(`https://assignment-twelfth-server.vercel.app/${params.id}`)
            // }
            // ,
            // {
            //     path: '/:id',
            //     element: <UpdateChapteroneQuestion></UpdateChapteroneQuestion>,
            //     loader: ({ params }) => fetch(`https://assignment-twelfth-server.vercel.app/${params.id}`)
            // }
            // ,
            // {
            //     path: '/:id',
            //     element: <UpdateChapteroneQuestion></UpdateChapteroneQuestion>,
            //     loader: ({ params }) => fetch(`https://assignment-twelfth-server.vercel.app/${params.id}`)
            // }
            ,
            {
                path: '/createquestion',
                element: <CreateQuestion></CreateQuestion>
            }
            ,
            {
                path: '/CSEFall-22MidCha-1',
                element: <FallMid></FallMid>
            }
            ,
            {
                path: '/setb',
                element: <SetB></SetB>
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
            ,
            {
                path: '/cse-321',
                element: <Chapter></Chapter>
            }
            ,
            {
                path: '/chapter-1',
                element: <CseThreeTwoOne></CseThreeTwoOne>
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