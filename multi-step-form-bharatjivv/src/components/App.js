// import React, { useState } from "react";
// import Step from "./Step";
// import "../styles/App.css";

// const App = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     model: "",
//     car_price: "",
//     card_info: "",
//     expiry_date: "",
//   });

//   const handleNext = () => {
//     console.log("Moving to next step");
//     setStep((prev) => prev + 1);
//   };

//   const handlePrevious = () => setStep((prev) => prev - 1);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form submitted successfully!");
//     console.log("Submitted:", formData);
//   };

//   console.log("Current Step:", step);

//   return (
//     <div className="container">
//       <Step
//         step={step}
//         formData={formData}
//         onChange={handleChange}
//         onNext={handleNext}
//         onPrevious={handlePrevious}
//         onSubmit={handleSubmit}
//       />
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {
  const[step,setStep]=useState(1);
  const[formData,setFormData]=useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""

  })

  const nextStep=()=>{
    console.log("Moving to next step");
    setStep(prev => Math.min(prev + 1, 3))
  }
  const prevStep=()=>{
    setStep(prev => Math.max(prev - 1, 1))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Data:", formData);
    alert("Form submitted successfully!");
  };
  return (
    <div>
      <Step step={step} formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} handleSubmit={handleSubmit} />
        
    </div>
  )
}

export default App