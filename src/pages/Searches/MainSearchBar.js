import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MainSearchBar.css'

const MainSearchBar = () => {

    // const history = unstable_HistoryRouter()

    const history = useNavigate();
    // const history = createBrowserRouter()
    const [inputVal, SetInputVal] = useState("");
    const [inputValTwo, SetInputValTwo] = useState("");
    const [inputValThree, SetInputValThree] = useState("");
    const [inputValFour, SetInputValFour] = useState("");
    const [SuggestionReady, SetSuggestionReady] = useState(false);
    const [Suggestions, SetSuggestions] = useState([]);

    const FetchSuggestions = (value) => {
        let fetchUrl = `https://search.ssebowa.org/suggestion?query=${encodeURI(value)}`;

        console.log("fetching suggestions!!!")
        fetch(fetchUrl)
            .then((response) => response.json())
            .then((response) => {
                var sugg = response;
                SetSuggestionReady(true);
                SetSuggestions(sugg.results);
            })
            .catch((err) => {
                var error = { status: "error", error: err };
                console.error(error);
                SetSuggestionReady(false);
            });
    };

    useEffect(() => {
        if (SuggestionReady) {
            window.addEventListener("click", function (e) {
                if (document.getElementById("suggestBox") && document.getElementById("suggestBox")?.contains(e.target)) {
                } else {
                    SetSuggestionReady(false);
                }
            });
        }
    }, [SuggestionReady]);

    const onChangeInput = (e) => {
        SetInputVal(e.target.value);
        if (e.target.value.replace(/\s/g, "").length) {
            FetchSuggestions(e.target.value);
        } else {
            SetSuggestionReady(false);
            SetSuggestions([]);
        }
        if (inputVal === "") {
            SetSuggestionReady(false);
            SetSuggestions([]);
        }
    };

    const onChangeInputTwo = (e) => {
        SetInputValTwo(e.target.value);
        if (e.target.value.replace(/\s/g, "").length) {
            FetchSuggestions(e.target.value);
        } else {
            SetSuggestionReady(false);
            SetSuggestions([]);
        }
        if (inputValTwo === "") {
            SetSuggestionReady(false);
            SetSuggestions([]);
        }
    };
    const onChangeInputThree = (e) => {
        SetInputValThree(e.target.value);
        if (e.target.value.replace(/\s/g, "").length) {
            FetchSuggestions(e.target.value);
        } else {
            SetSuggestionReady(false);
            SetSuggestions([]);
        }
        if (inputValTwo === "") {
            SetSuggestionReady(false);
            SetSuggestions([]);
        }
    };
    const onChangeInputFour = (e) => {
        SetInputValFour(e.target.value);
        if (e.target.value.replace(/\s/g, "").length) {
            FetchSuggestions(e.target.value);
        } else {
            SetSuggestionReady(false);
            SetSuggestions([]);
        }
        if (inputValFour === "") {
            SetSuggestionReady(false);
            SetSuggestions([]);
        }
    };

    const SubmitSearchRequest = (e = false, text = "") => {
        let searchText = text;
        if (text === "") searchText = inputVal + inputValTwo + inputValThree + inputValFour;
        if (e) e.preventDefault();
        if (searchText.replace(/\s/g, "").length) {
            history("/" + searchText, { replace: true });
        }
    };


    return (

        <div className='back_ani' style={{ height: "88vh" }}>
            <div style={{ background: "#111E25" }}>
                <>





                    <form onSubmit={(e) => SubmitSearchRequest(e)}>

                        <input className='inputes' id="input-1" value={inputVal}
                            onChange={(e) => onChangeInput(e)} type="text" placeholder="Department (Ex: CSE-321)" required autofocus />
                        <label htmlFor="input-1">
                            <span class="label-textsss">Course Code (Ex: CSE-321)</span>
                            <span class="nav-dot"></span>
                            <div class="signup-button-trigger">GENERATE QUESTION PAPER</div>
                        </label>
                        <input className='inputes' id="input-2" type="text" value={inputValTwo}
                            onChange={(e) => onChangeInputTwo(e)} placeholder="Semeaster-year(Ex:Spring-22)" required />
                        <label htmlFor="input-2">
                            <span class="label-textsss">Semeaster-year(Ex:Spring-22)</span>
                            <span class="nav-dot"></span>
                        </label>

                        <input className='inputes' id="input-3" value={inputValThree}
                            onChange={(e) => onChangeInputThree(e)} type="text" placeholder="Tearm(Ex:Mid)" required />
                        <label htmlFor="input-3">
                            <span class="label-textsss">Tearm(Ex: Mid)</span>
                            <span class="nav-dot"></span>
                        </label>

                        <input className='inputes' id="input-4" value={inputValThree}
                            onChange={(e) => onChangeInputThree(e)} type="text" placeholder="Course Code (Ex: CSE-321)" required />
                        <label htmlFor="input-4">
                            <span class="label-textsss">Course Code (Ex: CSE-321)</span>
                            <span class="nav-dot"></span>
                        </label>

                        <input className='inputes' id="input-5" value={inputValFour}
                            onChange={(e) => onChangeInputFour(e)} type="text" placeholder="CHAPTER(Ex:Cha-1)" required />
                        <label htmlFor="input-5">
                            <span class="label-textsss">CHAPTER(Ex:Cha-1)</span>
                            <span class="nav-dot"></span>
                        </label >


                        <button className=' hidden' type="submit">Create Your Account</button>
                        <p class="tip">Press Tab</p>
                        <div class="signup-button">GENERATE QUESTION PAPER</div>
                    </form >
                    {/* {SuggestionReady ? (
                        <div className={styles.MainSuggestions}>
                            {Suggestions.length === 0 ?
                                <div style={{ width: "100%", marginTop: "3em", marginBottom: "2em", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }} >No Suggestions</div>
                                :
                                <>
                                    {Suggestions.map((item, i) => {
                                        return <SuggestSpan name={item} SubmitSearchRequest={SubmitSearchRequest} key={i} />;
                                    })}
                                </>
                            }

                        </div>
                    ) : (
                        <></>
                    )} */}




                </>


                <div>

                </div>
            </div>
            <div className=' flex justify-around'>

                <Link to="/quiz">

                    <div class="ag-format-container ml-20">
                        <div class="ag-courses_box ml-16">
                            <div class="ag-courses_item mx-auto">
                                <a href="#" class="ag-courses-item_link w-80">
                                    <div class="ag-courses-item_bg"></div>

                                    <div class="ag-courses-item_title">
                                        QUIZ
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>

                    <div class="ag-format-container ml-20">
                        <div class="ag-courses_box ml-16 ">
                            <div class="ag-courses_item mx-auto hidden">
                            </div>

                            <div class="ag-courses_item hidden">
                            </div>

                            <div class="ag-courses_item hidden">
                            </div>

                            <div class="ag-courses_item hidden">
                            </div>

                            <div class="ag-courses_item hidden">
                            </div>

                            <div class="ag-courses_item hidden">

                            </div>
                            <div class="ag-courses_item">
                                <a href="#" class="ag-courses-item_link w-80">
                                    <div class="ag-courses-item_bg"></div>

                                    <div class="ag-courses-item_title">
                                        MID
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>
                </Link>
                <Link>

                    <div class="ag-format-container ml-20">
                        <div class="ag-courses_box ml-16 ">
                            <div class="ag-courses_item mx-auto hidden">
                            </div>

                            <div class="ag-courses_item hidden">
                            </div>

                            <div class="ag-courses_item hidden">
                            </div>

                            <div class="ag-courses_item hidden">
                            </div>

                            <div class="ag-courses_item hidden">
                            </div>

                            <div class="ag-courses_item hidden">

                            </div>
                            <div class="ag-courses_item hidden">

                            </div>
                            <div class="ag-courses_item">
                                <a href="#" class="ag-courses-item_link w-80">
                                    <div class="ag-courses-item_bg"></div>

                                    <div class="ag-courses-item_title">
                                        FINALE
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MainSearchBar;