
import React from "react";
import { useForm } from "react-hook-form";
import "./LoanForm.css"; 
import { Add } from "../../Store/Features/Reducer";
import { PostReq } from "../../api/axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const LoanForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("Username", data.Username);
    formData.append("FatherName", data.FatherName);
    formData.append("CNIC", data.CNIC);
    formData.append("Purpose", data.Purpose);
    formData.append("BankAccount", data.BankAccount);
    formData.append("AccountNumber", data.AccountNumber);
    formData.append("GuarantedName1", data.GuarantedName1);
    formData.append("GuarantedAddress1", data.GuarantedAddress1);
    formData.append("GuarantedCnic1", data.GuarantedCnic1);
    formData.append("GuarantedName2", data.GuarantedName2);
    formData.append("GuarantedAddress2", data.GuarantedAddress2);
    formData.append("GuarantedCnic2", data.GuarantedCnic2);

    try {
      const response = await PostReq("/User/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response) {
        dispatch(Add(response?.data));
        navigate('/UserData');
        
        // Show a success toast after form submission
        toast.success("Your request has been submitted successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("There was an error submitting your request. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div>
      <h1>Loan Application Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            {...register("Username", { required: "Username is required" })}
          />
          {errors.Username && <p>{errors.Username.message}</p>}
        </div>

        {/* Father Name */}
        <div>
          <label htmlFor="fatherName">Father's Name:</label>
          <input
            id="fatherName"
            {...register("FatherName", { required: "Father's Name is required" })}
          />
          {errors.FatherName && <p>{errors.FatherName.message}</p>}
        </div>

        {/* CNIC */}
        <div>
          <label htmlFor="cnic">CNIC:</label>
          <input
            id="cnic"
            {...register("CNIC", { required: "CNIC is required" })}
          />
          {errors.CNIC && <p>{errors.CNIC.message}</p>}
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            {...register("Address", { required: "Address is required" })}
          />
          {errors.Address && <p>{errors.Address.message}</p>}
        </div>

        {/* Purpose */}
        <div>
          <label htmlFor="purpose">Purpose:</label>
          <input
            id="purpose"
            {...register("Purpose", { required: "Purpose is required" })}
          />
          {errors.Purpose && <p>{errors.Purpose.message}</p>}
        </div>

        {/* Bank Account */}
        <div>
          <label htmlFor="bankAccount">Bank Account:</label>
          <input
            id="bankAccount"
            {...register("BankAccount", { required: "Bank Account is required" })}
          />
          {errors.BankAccount && <p>{errors.BankAccount.message}</p>}
        </div>

        {/* Account Number */}
        <div>
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            id="accountNumber"
            {...register("AccountNumber", { required: "Account Number is required" })}
          />
          {errors.AccountNumber && <p>{errors.AccountNumber.message}</p>}
        </div>

        {/* Guarantor 1 Name */}
        <div>
          <label htmlFor="guarantedName1">Guarantor 1 Name:</label>
          <input
            id="guarantedName1"
            {...register("GuarantedName1", { required: "Guarantor 1 Name is required" })}
          />
          {errors.GuarantedName1 && <p>{errors.GuarantedName1.message}</p>}
        </div>

        {/* Guarantor 1 Address */}
        <div>
          <label htmlFor="guarantedAddress1">Guarantor 1 Address:</label>
          <input
            id="guarantedAddress1"
            {...register("GuarantedAddress1", { required: "Guarantor 1 Address is required" })}
          />
          {errors.GuarantedAddress1 && <p>{errors.GuarantedAddress1.message}</p>}
        </div>

        {/* Guarantor 1 CNIC */}
        <div>
          <label htmlFor="guarantedCnic1">Guarantor 1 CNIC:</label>
          <input
            id="guarantedCnic1"
            {...register("GuarantedCnic1", { required: "Guarantor 1 CNIC is required" })}
          />
          {errors.GuarantedCnic1 && <p>{errors.GuarantedCnic1.message}</p>}
        </div>

        {/* Guarantor 2 Name */}
        <div>
          <label htmlFor="guarantedName2">Guarantor 2 Name:</label>
          <input
            id="guarantedName2"
            {...register("GuarantedName2", { required: "Guarantor 2 Name is required" })}
          />
          {errors.GuarantedName2 && <p>{errors.GuarantedName2.message}</p>}
        </div>

        {/* Guarantor 2 Address */}
        <div>
          <label htmlFor="guarantedAddress2">Guarantor 2 Address:</label>
          <input
            id="guarantedAddress2"
            {...register("GuarantedAddress2", { required: "Guarantor 2 Address is required" })}
          />
          {errors.GuarantedAddress2 && <p>{errors.GuarantedAddress2.message}</p>}
        </div>

        {/* Guarantor 2 CNIC */}
        <div>
          <label htmlFor="guarantedCnic2">Guarantor 2 CNIC:</label>
          <input
            id="guarantedCnic2"
            {...register("GuarantedCnic2", { required: "Guarantor 2 CNIC is required" })}
          />
          {errors.GuarantedCnic2 && <p>{errors.GuarantedCnic2.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      {/* ToastContainer will render the toast notifications */}
     
    </div>
  );
};

export default LoanForm;