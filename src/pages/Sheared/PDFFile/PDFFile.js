import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import ChpaterOne from "../../../TeacherProfile/Chpters/ChpaterOne/ChpaterOne";
// import LebronStretch from "../photos/lebron_transparent.png";

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    // image: {
    //     marginVertical: 15,
    //     marginHorizontal: 100,
    // },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

const PDFFile = ({ chapterOneQuestion }) => {
    console.log(chapterOneQuestion);
    return (
        <Document>
            <Page style={styles.body}>
                <div className=' m-auto mb-24 mt-6' style={{ width: "50vw" }}>
                    {/* <div className=' text-center'>
                        <img className='w-24 ml-80' src="https://i.ibb.co/VvPV0dV/diuLogo.png" alt="" />
                        <h1 className=' text-4xl font-bold'>Daffodil International University</h1>
                        <h2 className='text-xl  font-semibold'>Department of Computer Science and Engineering</h2>
                        <h3 className=' font-medium'>Faculty of Science and Information Technology</h3>
                        <h4 className=' font-medium'>Mid Term, Semester: Spring-2022</h4>
                        <div className='flex justify-between justify-items-center'>
                            <h2 className=' font-bold'>Course Code: CSE 313 (Day)</h2>
                            <h2 className=' font-bold'>Course Title: Computer Network</h2>
                        </div>
                    </div> */}
                    {/* <div className='flex justify-between justify-items-center'>
                        <h1 className=' font-bold'>Total Marks: 25</h1>
                        <h1 className=' font-bold'>Time: 2 Hours</h1>

                    </div> */}
                    <div>
                        <h1 className='text-center text-lg font-bold mt-3'>Answer all of the following questions. Figures in the right-hand margin indicate full marks.</h1>
                    </div>
                    <div >
                        {/* <Numbers></Numbers> */}
                        <div>

                        </div>
                    </div>


                    {/* <div >
                <div className='flex justify-between justify-items-center'>
                    // <h1 className='mt-3 font-semibold text-justify mr-2'><span className='text-xl'>(1)</span> Suppose there is an administrator that has four departments to manage. These are
                    //     sales and purchase department with 120 computers, development department with
                    //     50 computers, accounts department with 26 computers and management
                    //     department with 5 computers. If the administrator has IP 192.168.1.0/24,
                    //     calculate the Network Address, Broadcast Address, Usable IP range, subnet
                    //     mask. </h1>
                    <h1 className='text-xl font-bold mt-3 ml-3'>5</h1>
                </div>

                <div className='flex justify-between justify-items-center'>
                    <h1 className='mt-3 font-semibold text-justify mr-2'><span className='text-xl'>(2)</span> How wireless link is different from wired link? Briefly explain the components of
                        the GSM 2G cellular network architecture with proper figure. </h1>
                    <h1 className='text-xl font-bold mt-3 ml-3'>5</h1>
                </div>
                <div className='flex justify-between justify-items-center'>
                    <h1 className='mt-3 font-semibold text-justify mr-2'><span className='text-xl'>(3)</span> What are the basic components of 802.11 LAN? Describe different scanning
                        processes of 802.11 LAN.
                    </h1>
                    <h1 className='text-xl font-bold mt-3 ml-3'>5</h1>
                </div>

                <div className='flex justify-between justify-items-center'>
                    <h1 className='mt-3 font-semibold text-justify mr-2'><span className='text-xl'>(4)</span> What is MPLS? “MPLS system forward packets to outgoing interface based
                        only on label value”, Justify this statement with appropriate figure and proper
                        clarification.
                    </h1>
                    <h1 className='text-xl font-bold mt-3 ml-3'>5</h1>
                </div>
                <div className='flex justify-between justify-items-center'>
                    <h1 className='mt-3 font-semibold text-justify mr-2'><span className='text-xl'>(5)</span> Why we use printf() and scanf() function and what is the necessity of main() function in C program?  Describe it with your own words.
                    </h1>
                    <h1 className='text-xl font-bold mt-3 ml-3'>5</h1>
                </div>

            </div> */}
                </div>
                <Text style={styles.header} fixed></Text>
                <Text> <div>
                    <h1 className='text-center text-lg font-bold mt-3'>Answer all of the following questions. Figures in the right-hand margin indicate full marks.</h1>
                </div></Text>
                {/* <Image className='w-24 ml-80' src="https://i.ibb.co/VvPV0dV/diuLogo.png" /> */}
                <Text style={styles.text}>
                    <ChpaterOne></ChpaterOne>
                    {/* {chapterOneQuestion.question} */}

                </Text>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>
    );
};

export default PDFFile;