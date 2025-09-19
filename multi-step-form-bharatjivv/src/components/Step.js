// import React from 'react';

// const Step = ({ step, formData, onChange, onNext, onPrevious, onSubmit }) => {
//   // RegEx for MM/YY format
//   const isValidExpiry = (value) => {
//     return /^(0[1-9]|1[0-2])\/\d{2}$/.test(value);
//   };

//   return (
//     <form className="form-box" onSubmit={onSubmit}>
//       {step === 1 && (
//         <div id="step1">
//           <h2>Customer Details</h2>
//           <p>First name:</p>
//           <input
//             id="first_name"
//             type="text"
//             value={formData.first_name}
//             onChange={onChange}
//             required
//           />
//           <p>Last Name:</p>
//           <input
//             id="last_name"
//             type="text"
//             value={formData.last_name}
//             onChange={onChange}
//             required
//           />
//         </div>
//       )}

//       {step === 2 && (
//         <div id="step2">
//           <h2>Car Details</h2>
//           <p>Brand</p>
//           <input
//             id="model"
//             type="text"
//             value={formData.model}
//             onChange={onChange}
//             required
//           />
//           <p>Model</p>
//           <input
//             id="car_price"
//             type="number"
//             value={formData.car_price}
//             onChange={onChange}
//             required
//           />
//         </div>
//       )}

//       {step === 3 && (
//         <div id="step3">
//           <h2>Payment Details</h2>
//           <p>Credit Card Number:</p>
//           <input
//             id="card_info"
//             type="text"
//             inputMode="numeric"
//             maxLength={12}
//             value={formData.card_info}
//             onChange={onChange}
//             required
//           />
//           {formData.card_info.length > 0 && formData.card_info.length !== 12 && (
//             <p className="warning">Credit card number must be exactly 12 digits long</p>
//           )}
//           <p>Expiration Date:</p>
//           <input
//             id="expiry_date"
//             type="text"
//             placeholder="MM/YY"
//             value={formData.expiry_date}
//             onChange={onChange}
//             required
//           />
//           {formData.expiry_date.length > 0 && !isValidExpiry(formData.expiry_date) && (
//             <p className="warning">Expiration Date must be in the format MM/YY</p>
//           )}
//         </div>
//       )}

//       <div className="btn-group">
//         {step > 1 && (
//           <button type="button" className="btn" onClick={onPrevious}>
//             Previous
//           </button>
//         )}
//        {step < 3 && (
//   <button
//     type="button"
//     id="nextBtn"  // ADD THIS
//     className="btn"
//     onClick={onNext}
//   >
//     Next
//   </button>
// )}
//         {step === 3 && (
//           <button type="submit" className="btn submit-btn">
//             Submit
//           </button>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Step;


import React from 'react'

const Step = ({ step, formData, setFormData, nextStep, prevStep, handleSubmit }) => {
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    };
  return (
    <form>

    {step === 1 && <h2>Customer Details</h2>}
      {step === 2 && <h2>Car Details</h2>}
      {step === 3 && <h2>Payment Details</h2>}

        <div id="step1">
     {step === 1 && (
        <>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
          <button type="button" onClick={nextStep}>Next</button>
          </>
        )}
        </div>
  
      <div id="step2">
      {step === 2 && (
        <>
          <label htmlFor="model">Brand:</label>
          <input
            type="text"
            id="model"
            value={formData.model}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="car_price">Model:</label>
          <input
            id="car_price"
            value={formData.car_price}
            onChange={handleChange}
          />
          <button type="button" onClick={prevStep}>Previous</button>
          <button type="button" onClick={nextStep}>Next</button>
        </>
      )}
      </div>
       
       <div id="step3">
      {step === 3 && (
        <>
          <label htmlFor="card_info">Credit Card Number:</label>
          <input
            id="card_info"
            value={formData.card_info}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="expiry_date">Expiration Date:</label>
          <input
            id="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
          />
          <button type="button" onClick={prevStep}>Previous</button>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
      )}
      </div>


      {/* <div>
        {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
        {step < 3 && <button onClick={nextStep}>Next</button>}
        {step === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div> */}



    </form>
  )
}

export default Step