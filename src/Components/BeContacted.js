import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import '../Styles/BeContacted.css'


function BeContactedForm() {
    const { register, handleSubmit } = useForm("");
    const [data, setData] = useState("");
  
    return (
     
     <div className="formContainer">
     <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <input className="BorderForm" {...register("firstName")} placeholder="First name" />
        <select className="BorderForm" {...register("category", { required: true })}>
          <option value="">Choose Project...</option>
          <option value="A">Houses</option>
          <option value="B">Buildings-Offices</option>
          <option value="C">Post-Construction</option>
        </select>
        <input className="BorderForm" type="number" {...register("YourNumber")} placeholder="Your Number" />
        <p>{data}</p>
        <input type="submit" />
      </form>
      </div>
    );
  }

  export default BeContactedForm;