import React, { useState } from 'react';

const Dashboard = ()=>{
    const [formDetails,setFormDetails]= useState({
        name:'',
        city:'',
        role:''
    });
    const[errorFlag,setErrorflag] = useState(false);
    const [successFlag,setSuccessFlag]=useState(false);
    
const handleSubmit=(e)=>{
    e.preventDefault();
    if(formDetails.name ===''|| formDetails.city===''|| formDetails.role===''){
       setErrorflag(true);
       setSuccessFlag(false);
    }else{
        setErrorflag(false);
        setSuccessFlag(true);
    }
}
    
    return(
        <div>
            <form>
                
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' value={formDetails.name} onChange={(e)=>setFormDetails({...formDetails,name:e.target.value})} className='input-1'/>
                </div>
                <div>
            <label htmlFor='city'>City</label>
            <input type='text' className='input-2' id='city' value={formDetails.city} onChange={(e)=>setFormDetails({...formDetails,city:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor='role'>Role</label>
                    <select id='role' className='input-3' value={formDetails.role} onChange={(e)=>setFormDetails({...formDetails,role:e.target.value})}>
                        <option></option>
                        <option>React Js Developer</option>
                        <option>Java Developer</option>
                        <option>devops engineer</option>
                    </select>
                </div>
<div>
    <button type='submit' className='button' onClick={handleSubmit}>Submit</button>

    {errorFlag ? <span className='error-text'>Please enter data in all Fields</span>:null}
    {successFlag?<span className='success-text'>Details added SuccessFully!!!</span>:null}
</div>
            </form>

{formDetails && successFlag && (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>City</th>
                <th>Role</th>
            </tr>
            <tr>
                <td>{formDetails.name}</td>
                <td>{formDetails.city}</td>
                <td>{formDetails.role}</td>
            </tr>
        </table>
    </div>
)}




        </div>
    )
};

export default Dashboard;