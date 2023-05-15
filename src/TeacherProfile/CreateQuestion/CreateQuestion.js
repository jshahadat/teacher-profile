import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import "./CreateQuestion.css"
import { toast } from 'react-hot-toast';

const CreateQuestion = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const courseTitle = form.courseTitle.value;
        const courseCode = form.courseCode.value;
        // const semeaster = form.semeaster.value
        // const year = form.year.value
        // const department = form.department.value
        // const presentationTopic = form.presentationTopic.value

        // const season = form.season.value
        // const section = form.section.value
        // const chapter = form.chapter.value
        const addTodos = {
            email: user?.email,
            courseTitle,
            courseCode,
            // semeaster,
            // year,
            // department,
            // presentationTopic

            // season,
            // section,
            // chapter,
        }
        fetch('https://assignment-twelfth-server.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addTodos)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Your ToDo Add successfully')
                    form.reset();
                    window.location.reload()
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='inputies' id="input-1" name='versity' type="text" placeholder="Daffodil International University" required
                    autofocus />

                <label htmlFor="input-1">
                    <span class="label-textes">University Name</span>
                    <span class="nav-dot"></span>
                    <div class="signup-button-trigger">Create Question Paper</div>
                </label>

                <input className='inputies' id="input-2" name='department' type="text" placeholder="Department of Computer Science and Engineering" required />
                <label htmlFor="input-2">
                    <span class="label-textes">Department</span>
                    <span class="nav-dot"></span>
                </label>

                <input className='inputies' id="input-3" name='faculty' type="text" placeholder="Faculty of Science and Information Technology" required />
                <label htmlFor="input-3" >
                    <span class="label-textes">Faculty</span>
                    <span class="nav-dot"></span>
                </label >
                <input className='inputies' id="input-4" name='term' type="text" placeholder="Mid Term" required />
                <label htmlFor="input-4" >
                    <span class="label-textes">Term</span>
                    <span class="nav-dot"></span>
                </label >
                <input className='inputies' id="input-5" name='semester' type="text" placeholder="Summer-2022" required />
                <label htmlFor="input-5" >
                    <span class="label-textes">Semester</span>
                    <span class="nav-dot"></span>
                </label >
                <input className='inputies' id="input-6" name='courseCode' type="text" placeholder="CSE 313 (Day)" required />
                <label htmlFor="input-6" >
                    <span class="label-textes">Course Code</span>
                    <span class="nav-dot"></span>
                </label >
                <input className='inputies' id="input-7" name='courseTitle' type="text" placeholder="Computer Network " required />
                <label htmlFor="input-7" >
                    <span class="label-textes">Course Title</span>
                    <span class="nav-dot"></span>
                </label >
                <input className='inputies' id="input-7" name='totalMarks' type="text" placeholder="25" required />
                <label htmlFor="input-7" >
                    <span class="label-textes">Total Marks</span>
                    <span class="nav-dot"></span>
                </label >
                <input className='inputies' id="input-7" name='time' type="text" placeholder="2 Hours" required />
                <label htmlFor="input-7" >
                    <span class="label-textes">Time</span>
                    <span class="nav-dot"></span>
                </label >
                <button className=' bg-orange-400 text-amber-400 hidden' type="submit">Create Your Account</button>
                <p class="tip">Press Tab</p>
                <div class="signup-button">Create Question Paper</div>
                <input className='inputies hidden' type="submit" value="Edit Your Review" required />

            </form >
            {/* <form>
                <input className='inputies' id="input-1" type="text" placeholder="John Doe" required autofocus required />
                <label for="input-1">
                    <span class="label-textes">Full Name</span>
                    <span class="nav-dot"></span>
                    <div class="signup-button-trigger">Sign Up</div>
                </label>
                <input className='inputies' id="input-2" type="text" placeholder="john" required required />
                <label for="input-2">
                    <span class="label-textes">Username</span>
                    <span class="nav-dot"></span>
                </label>
                <input className='inputies' id="input-3" type="email" placeholder="email@address.com" required />
                <label for="input-3">
                    <span class="label-textes">Email</span>
                    <span class="nav-dot"></span>
                </label>
                <input className='inputies' id="input-4" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
                <label for="input-4">
                    <span class="label-textes">Password</span>
                    <span class="nav-dot"></span>
                </label>
                <input className='inputies' id="input-5" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
                <label for="input-5">
                    <span class="label-textes">Confirm Password</span>
                    <span class="nav-dot"></span>
                </label>
                <button type="submit">Create Your Account</button>
                <p class="tip">Press Tab</p>
                <div class="signup-button">Sign Up</div>
            </form> */}


        </div >
    );
};

export default CreateQuestion;