import React, { useRef } from 'react'

function SignupForm() {
    let selectStateRef = useRef();
    let msgLabelRef = useRef();
    let firstNameRef = useRef();
    let lastNameRef = useRef();
    let MaleRBRef = useRef();
    let FemaleRBRef = useRef();

    let selectedGender;
    let salutation;
    let maritalStatus;

    let onClickAccount = ()=>{
        if(selectedGender =="Male"){
             salutation ="Mr."
        }else{
            if(maritalStatus =="single"){
            salutation ="Miss."
            }else{
                salutation = "Mrs."
            }
        }
        
        msgLabelRef.current.innerHTML = `${salutation} ${firstNameRef.current.value} ${lastNameRef.current.value} 
    from ${selectStateRef.current.value} 
    your account has been created sucessfully`
    }
  return (
    <div>
        <h2>Signup Form</h2>
        <form>
            <div>
                <lable>First Name</lable>
                <input ref={firstNameRef}></input>
            </div>
            <div>
                <lable>Last Name</lable>
                <input ref={lastNameRef}></input>
            </div>
            <div>
                <lable>Gender</lable>
                <input type="radio" name='gender' ref={MaleRBRef} onChange={()=>{
                    if(MaleRBRef.current.checked == true){
                    selectedGender ="Male"
                 }
                }}></input>
                <lable className="innerlable">Male</lable>
                <input type="radio" name='gender' ref={FemaleRBRef} onChange={()=>{
                    if(FemaleRBRef.current.checked == true){
                        selectedGender ="Female"
                    }
                }}></input>
                <lable className="innerlable">Female</lable>

            </div>
            <div>
                <label>Marital Status</label>
                <input type='radio' name='Miss' onChange={(eventobj)=>{
                   console.log(eventobj);
                   if(eventobj.target.checked == true){
                    maritalStatus ="single"
                   }
                }}></input>
                <label className="innerlable">Single</label>
                <input type='radio' name='Miss' onChange={(e)=>{
                   console.log(e);
                   if(e.target.checked == true){
                    maritalStatus = "Married"
                   }
                }}></input>
                <label className="innerlable">Married</label>
                

            </div>
            <div>
                <lable>State</lable>
                <select ref={selectStateRef}>
                    <option>Telangana</option>
                    <option value="AP">Andhra Pradesh</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                    <option>Maharastra</option>
                    
                </select>
            </div>
            <div>
                <lable>Email</lable>
                <input></input>
            </div>
            <div>
                <lable>Password</lable>
                <input></input>
            </div>
            <div>
                <lable>Mobile Number</lable>
                <input></input>
            </div>
            <div>
                <button type="button" onClick={()=>{
                    onClickAccount();
                }}>Submit</button>
            </div>
            <label ref={msgLabelRef} style={{width:"500px"}}></label>
        </form>
    </div>
  )
}

export default SignupForm