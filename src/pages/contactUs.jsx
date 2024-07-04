// components/Form.js
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    select: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <Header />

      <div className="w-full h-full flex items-center justify-center my-11">
        <form className="w-[300px] sm:w-[400px] md:w-[563px] mx-auto my-8">
          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block mb-1 w-full text-[14px] font-normal font-poppins"
            >
              Name
            </label>
            <TextField
              fullWidth
              variant="outlined"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-100"
              style={{ width: "100%" }}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  border: "none", // Remove border from the root of outlined input
                  width: "100%",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "10px", // Optional: Adjust padding if needed
                  width: "100%",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove outline border
                  width: "100%",
                },
              }}
            />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="email" className="block mb-1 w-full">
              Email
            </label>
            <TextField
              fullWidth
              variant="outlined"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-100"
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  border: "none", // Remove border from the root of outlined input
                  width: "100%",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "10px", // Optional: Adjust padding if needed
                  width: "100%",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove outline border
                  width: "100%",
                },
              }}
            />
          </div>

          <div className="mb-4 w-full">
            <FormControl fullWidth variant="outlined">
              <label htmlFor="select" className="block mb-1 w-full">
                Are you a Vendor or a User?
              </label>
              <Select
                id="select"
                name="select"
                value={formData.select}
                onChange={handleChange}
                className="bg-gray-100"
                sx={{
                  width: "100%",
                  outline: "none",
                  border: "none", // Remove border from Select itself
                  "& fieldset": {
                    border: "none !important", // Remove border from the fieldset element
                  },
                  "& .MuiOutlinedInput-root, & .MuiMenuItem-root": {
                    border: "none", // Remove border from child elements (OutlinedInput and MenuItem)
                    outline: "none",
                    "&:hover, &.Mui-focused": {
                      border: "none", // Remove border on hover and focus for child elements
                      outline: "none",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "10px 14px", // Adjust input padding if necessary
                  },
                }}
              >
                <MenuItem value="vendor">Vendor</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="message" className="block mb-1 w-full">
              Message
            </label>
            <TextareaAutosize
              id="message"
              placeholder="Message"
              name="message"
              value={formData.message}
              className="w-full px-3 py-2 border rounded-md resize-none bg-gray-100"
              onChange={handleChange}
              style={{
                width: "100%",
                minHeight: "165px",
                border: "none",
                outline: "none",
              }}
            />
          </div>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ width: "100%", height: "56px" }}
            className="bg-gray-950"
          >
            Submit
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
