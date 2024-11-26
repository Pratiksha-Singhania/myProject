import React, { useState } from 'react';

const Dashboard = ()=>{
    const [formDetails,setFormDetails]= useState({
        firstName:'',
        lastName:'',
        email:'',
        contact:'',
        gender:'',
        selectedOption:''
    });
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [about, setAbout] = useState("");
    const [successFlag,setSuccessFlag]=useState(false);
    const [errorFlag,setErrorFlag] = useState(false);
    
const handleSubmit=(e)=>{
    e.preventDefault();
    if(formDetails.firstName===''||formDetails.lastName===''||formDetails.email===''||formDetails.contact===''||formDetails.gender===''||formDetails.selectedOption===''||about===''||subjects===''){
        setErrorFlag(true);
        setSuccessFlag(false);
    }
    else{
        setErrorFlag(false);
    setSuccessFlag(true);
    }
}

const handleSubjectChange=(value)=>{
    setSubjects((prev) => ({
        ...prev,
        [value]: !prev[value],
    }));
}

const handleReset=()=>{
    setFormDetails({
        firstName:'',
        lastName:'',
        email:'',
        contact:'',
        gender:'',
        selectedOption:''
    });
    setSubjects({
            english: true,
            maths: false,
            physics: false,
    });
    setAbout('');
    setSuccessFlag(false);
}
    
    return(
        <div className='form-container'>
            <h1>Form in React</h1>
            <form action='#' method='get'>
                <label for="firstname">First Name*</label>
                <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={formDetails.firstName}
                        onChange={(e) =>
                            setFormDetails({...formDetails,firstName:e.target.value})
                        }
                        placeholder="Enter First Name"
                        required
                    />
                    <label for="lastname">Last Name*</label>
                <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={formDetails.lastName}
                        onChange={(e) =>
                            setFormDetails({...formDetails,lastName:e.target.value})
                        }
                        placeholder="Enter last Name"
                        required
                    />

                    <label for="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formDetails.email}
                        onChange={(e) =>
                            setFormDetails({...formDetails,email:e.target.value})
                        }
                        placeholder="Enter email"
                        required
                    />

                    <label for="tel">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={formDetails.contact}
                        onChange={(e) =>
                            setFormDetails({...formDetails,contact:e.target.value})
                        }
                        placeholder="Enter Mobile number"
                        required
                    />

                    <label for="gender">Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={formDetails.gender === "male"}
                        onChange={(e) =>
                            setFormDetails({...formDetails,gender:e.target.value})
                        }
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={formDetails.gender === "female"}
                        onChange={(e) =>
                            setFormDetails({...formDetails,gender:e.target.value})
                        }
                    />
                    Female

                    <label for="lang">
                        Your best Subject
                    </label>
                    <input
                        type="checkbox"
                        name="lang"
                        id="english"
                        checked={subjects.english === true}
                        onChange={(e) =>
                            handleSubjectChange("english")
                        }
                    />
                    English
                    <input
                        type="checkbox"
                        name="lang"
                        id="maths"
                        checked={subjects.maths === true}
                        onChange={(e) =>
                            handleSubjectChange("maths")
                        }
                    />
                    Maths
                    <input
                        type="checkbox"
                        name="lang"
                        id="physics"
                        checked={subjects.physics === true}
                        onChange={(e) =>
                            handleSubjectChange("physics")
                        }
                    />
                    Physics




                    <label>Select your choice</label>
                    <select
                        name="select"
                        id="select"
                        value={formDetails.selectedOption}
                        onChange={(e) =>
                            setFormDetails({...formDetails,selectedOption:e.target.value})
                        }
                    >
                        <option
                            value=""
                            disabled
                            selected={formDetails.selectedOption === ""}
                        >
                            Select your Ans
                        </option>
                        <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">
                                JavaScript
                            </option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">
                                Express
                            </option>
                            <option value="t">
                                MongoDB
                            </option>
                        </optgroup>
                    </select>



                    <label for="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setAbout(e.target.value)
                        }
                        placeholder="About your self"
                        required
                    ></textarea>
                    <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                    {successFlag?<span className='success-text'>Details added SuccessFully!!!</span>:null}
                    {errorFlag?<span className='error-text'>Please enter all the Details.</span>:null}
            </form>

        </div>
    )
};

export default Dashboard;