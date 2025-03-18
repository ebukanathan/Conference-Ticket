import reactLogo from "./assets/react.svg";
import { useState } from "react";
import broken from "./assets/images/pattern-lines.svg";
import downspiral from "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
import upspiral from "./assets/images/pattern-squiggly-line-top.svg";
import logo from "./assets/images/logo-full.svg";
import iconupload from "./assets/images/icon-upload.svg";
import "./App.css";
import Submitted from "./Submitted";
import Form from "./Form";

function App() {
  const [images, setimages] = useState();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState({});
  const [random, setRandom] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const MAX_FILE_SIZE = 500 * 1024;

  // function validateEmail(email) {
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   return emailRegex.test(email);
  // }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // if (validateEmail(name)) {
    //   setInputs({ ...inputs, [name]: value });
    // } else {
    //   setError(true);
    // }
    setInputs({ ...inputs, [name]: value });
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    setimages(URL.createObjectURL(e.target.files[0]));
    console.log("image chan");
  };

  const handleFiles = (e) => {
    e.preventDefault();
    setimages(URL.createObjectURL(e.target.files[0]));
    console.log("done deal");
  };

  const ValidateInput = () => {
    const err = {};
    if (!inputs.fullName) {
      err.fullName = "username is required";
    } else if (inputs.fullName.length < 4) {
      err.fullName = "name must be at least 5 charaters long";
    }

    if (!inputs.email) {
      err.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      err.email = "invalid email";
    }

    setError(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rand = `# ${String(Math.ceil(Math.random() * 1000)).padStart(
      4,
      "0"
    )}`;

    if (ValidateInput()) {
      setRandom(rand);
      setSubmitted(!submitted);
      alert("Form submitted successfully!");
      console.log("Submitted Data:", inputs);
      console.log(error);
      setInputs({ fullName: "", email: "", password: "" }); // Reset form
      setError({});
    }
  };

  return (
    <>
      {submitted ? (
        <Submitted images={images} inputs={inputs} random={random} />
      ) : (
        <Form
          handleChange={handleChange}
          handleFiles={handleFiles}
          inputs={inputs}
          handleSubmit={handleSubmit}
          images={images}
          setImages={setimages}
          handleImageChange={handleImageChange}
          error={error}
        />
      )}
    </>
  );
}

export default App;
