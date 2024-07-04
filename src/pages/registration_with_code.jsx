import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Checkbox,
  Typography,
} from "@mui/material";
import Icon from "../assets/images/elements.svg";
import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

function CodeRegisteration() {
  const [brandName, setBrandName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const [formValues, setFormValues] = useState({ email: "" });
  const [emailValid, setEmailValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (name === "email") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      setEmailValid(emailPattern.test(value));
    }
  };

  const handleBrandNameChange = (e) => {
    setBrandName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    console.log("Brand Name:", brandName);
    console.log("Avatar File:", avatar);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formValues);
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Box className="max-w-[1091px] w-full m-auto">
        <Box className="flex justify-center items-center flex-wrap">
          <TextField
            label="Brand Name"
            variant="outlined"
            value={brandName}
            onChange={handleBrandNameChange}
            className=""
            sx={{
              width: "335px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#606060",
                  borderWidth: "2px",
                  borderRadius: "10px",
                },
                "&:hover fieldset": {
                  borderColor: "#606060",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#606060",
                },
              },
            }}
          />

          <Button className="flex m-4 text-black">
            <Image src={Icon} alt="icon" />
            <p className="font-DMSans">Brand logo</p>
          </Button>

          <Button
            variant="contained"
            className="bg-[##3276E8] rounded-[41.47px] font-kodchasan"
            sx={{ fontFamily: "Kodchasan, sans-serif" }}
            onClick={handleUpload}
          >
            upload now
          </Button>
        </Box>
        <div className="flex justify-center">
          <div className="w-[50%] h-[1px] bg-black my-6"></div>
        </div>

        <Box className=" md:flex md:justify-between h-full p-4 ">
          <Box className="w-full max-w-md space-y-4">
            <TextField
              label="Name of Primary Content"
              variant="outlined"
              fullWidth
              name="primaryContent"
              value={formValues.primaryContent}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
            />

            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              name="email"
              value={formValues.email}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
            />
            {emailValid && (
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                This email will be used for login and certificates will be sent
                to this email.
              </Typography>
            )}
            <TextField
              select
              label="Country"
              variant="outlined"
              fullWidth
              name="country"
              value={formValues.country}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
            >
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
              <MenuItem value="Australia">Australia</MenuItem>
            </TextField>

            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
            />

            <TextField
              label="Choose a Password"
              type="password"
              variant="outlined"
              fullWidth
              name="password"
              value={formValues.password}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
            />

            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
            />
          </Box>
          <Box className="w-full max-w-md space-y-4">
            <TextField
              label="Tell Us About Your Brand"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              name="description"
              value={formValues.description}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
              className="mt-4 lg:mt-0 md:mt-0"
            />
            <TextField
              label="Website"
              variant="outlined"
              fullWidth
              name="website"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
            />

            <TextField
              label="Social Media"
              variant="outlined"
              fullWidth
              name="socialmedia"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
            />

            <TextField
              label="Social Media"
              variant="outlined"
              fullWidth
              name="socialmedia"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
            />

            <TextField
              label="Social Media"
              variant="outlined"
              fullWidth
              name="socialmedia"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
            />
            <TextField
              label="Other Links"
              variant="outlined"
              fullWidth
              name="socialmedia"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
            />
            <TextField
              label="Other Links"
              variant="outlined"
              fullWidth
              name="socialmedia"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
            />
            <TextField
              label="Other Links"
              variant="outlined"
              fullWidth
              name="socialmedia"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#606060",
                    borderWidth: "2px",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#606060",
                  },
                },
              }}
            />
          </Box>
        </Box>
        <Box className="md:flex sm:flex-row md:justify-center md:items-center my-12">
          <Checkbox
            sx={{
              color: "green",
              "&.Mui-checked": {
                color: "green",
              },
            }}
          />
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            I have the authority to make this account on behalf of the <br />{" "}
            brand and I agree to the{" "}
            <span className="font-bold"> terms and services</span>
          </Typography>
          <Link href="package_plans">
            <Button
              variant="contained"
              className="bg-[#22477F] rounded-[7px] font-kodchasan"
              sx={{ fontFamily: "Kodchasan, sans-serif" }}
            >
              Continue
            </Button>
          </Link>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default CodeRegisteration;
