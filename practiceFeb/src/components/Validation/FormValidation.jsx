import React from "react";

function FormValidation() {


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("chal gaya handlesubmit without refresh");

    const formData = new FormData(e.target);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();


    if(name.trim().length === 0) {
        alert('Name required')
        return ;
    }
    if (password.length <= 6) {
      alert("minimum length of password should be 6 chars");
      return;
    }

    console.log({
      name,
      email,
      password,
    });
    e.target.reset();
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
