import React from "react";
import moment from "moment";
import Input from "../components/input";
import axios from "axios";

const subjects = [
  "Please select course",
  " - Introduction to Angular with firebase",
  " - Introduction to React",
  " - Introduction to Golang"
];
const targetDate = moment("12/21/2019 18:00:00");

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [selected, setSelect] = React.useState("");
  const [isChecked, setCheck] = React.useState(false);
  const [studentID, setStudentID] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const [timer, setTimer] = React.useState("");

  const updateTimer = () => {
    const diffHours = targetDate.diff(moment(), "hours");
    const diffMins = targetDate.diff(moment(), "minutes") % 60;
    const diffSec = targetDate.diff(moment(), "seconds") % 60;
    console.log(diffHours, diffMins, diffSec);

    setTimer(
      diffHours + " Hours " + diffMins + " Minutes " + diffSec + " Seconds"
    );
  };

  React.useEffect(() => {
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log("State :", {
    name,
    studentID,
    email,
    selected,
    isChecked,
    timer
  });

  const handleSubmit = () => {
    setLoading(true);
    axios
      .get(
        "http://www.mocky.io/v2/5dfde561310000ed1ac96e39?mocky-delay=4000ms&fbclid=IwAR3_5p6AMEsDmErHRW9XPOmJXbJaAL6SG7wHiZvC3dMCDYLYQEMKNf5CLgc"
      )
      .then(response => {
        const { data } = response;
        setMessage(
          <div class="notification is-success">
            <button class="delete"></button>
            {data.response}
          </div>
        );
        setLoading(false);
      });
  };

  const cancelSubmit = () => {
    setMessage("");
  };

  return (
    <div className="App">
      <div className="colums">
        <div className="column is-half is-offset-one-quarter">
          <div className="title"> Registration Course Workshop</div>
          {message}
          <p>Form ends in {timer}</p>

          <Input
            label="Name"
            icon="fas fa-user"
            alt="Your name"
            value={name}
            onChangeFromComponent={value => setName(value)}
          />

          <Input
            label="Student ID"
            icon="fas fa-id-card-alt"
            alt="Your Student ID"
            value={studentID}
            onChangeFromComponent={value => setStudentID(value)}
          />

          <Input
            label="Email"
            icon="fas fa-envelope"
            alt="youremail@domain.com"
            value={email}
            onChangeFromComponent={value => setEmail(value)}
          />

          <div className="field">
            <label className="label">Courses</label>
            <div className="control">
              <div className="select">
                <select
                  value={selected}
                  onChange={event => setSelect(event.target.value)}
                >
                  {subjects.map(subject => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  value={isChecked}
                  onChange={event => setCheck(event.target.checked)}
                />{" "}
                I agree to the terms and conditions
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button
                className={`button is-link ${isLoading && "is-loading"}`}
                onClick={handleSubmit}
                disabled={isLoading}
              >
                Register Now
              </button>
            </div>
            <div className="control">
              <button
                className="button is-link is-light"
                onClick={cancelSubmit}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
