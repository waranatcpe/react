import React from 'react'
import moment from 'moment'

const subjects = ["Please select course"," - Introduction to Angular with firebase", " - Introduction to React", " - Introduction to Golang"]
const targetDate = moment("12/21/2019 17:00:00")

const Register = () => {

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [selected, setSelect] = React.useState("")
    const [isChecked , setCheck] = React.useState(false)
    const [studentID , setStudentID] = React.useState("")
  
    const [timer, setTimer] = React.useState("")
  
    const updateTimer = () => {
      const diffHours = targetDate.diff(moment(), "hours")
      const diffMins = targetDate.diff(moment(), "minutes") % 60
      const diffSec = targetDate.diff(moment(), "seconds") % 60
      console.log(diffHours,diffMins,diffSec)
  
      setTimer(diffHours + " Hours " + diffMins + " Minutes " + diffSec + " Seconds" )
    }
  
    React.useEffect(() => {
      const interval = setInterval(updateTimer,1000)
      return () => clearInterval(interval)
    },[])
  
    console.log("State :", {name,studentID,email,selected,isChecked,timer}) 
  
    return (
      <div className="App">
        <div className="colums">
          <div className="column is-half is-offset-one-quarter">
          <div className="title"> Registration Course Workshop</div>
          <p>Form ends in {timer}</p>
            <div className="field">
              <label className="label">Name</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
  
              </div>
            </div>
  
            <div className="field">
              <label className="label">Student ID</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Your Student ID"
                  maxlength="11"
                  value={studentID}
                  onChange={event => setStudentID(event.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-id-card-alt"></i>
                </span>
  
              </div>
            </div>
  
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="youremail@domain.com"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
  
              </div>
            </div>
  
            <div className="field">
              <label className="label">Courses</label>
              <div className="control">
                <div className="select">
                  <select
                    value={selected}
                    onChange={event => setSelect(event.target.value)}
                  >
                    {subjects.map(subject => <option key={subject}>{subject}</option>)}
                  </select>
                </div>
              </div>
            </div>
  
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" 
                    value={isChecked}
                    onChange={event => setCheck(event.target.checked)}
                  /> I agree to the{" "}
                  <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>
  
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Register Now</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Register;