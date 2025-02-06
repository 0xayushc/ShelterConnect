import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Registration from "../components/Registartion";
import "../assets/css/Login.css";

const LoginPage = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Effect to disable scrolling when registration is open
  useEffect(() => {
    if (showRegistration) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [showRegistration]);

  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 255, 0.2)",
          zIndex: 1,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'url("../src/assets/images/resident.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: "900px",
          minHeight: "500px",
          bgcolor: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 2,
          mx: 2,
          mt: 2,
          mb: 4,
          maxHeight: "700px",
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "#1a237e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            component="img"
            src="../src/assets/icons/shelterconnect-removebg.png"
            alt="ShelterConnect Logo"
            sx={{
              width: "400px",
              height: "350px",
              filter: "invert(1) brightness(2) contrast(2)",
            }}
          />
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            flex: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {showRegistration ? (
            <Box sx={{ margin: 0 }}>
              <Registration onBackToLogin={() => setShowRegistration(false)} />
            </Box>
          ) : (
            <>
              <Box sx={{ mb: 4, textAlign: "center" }}>
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    color: "#1a237e",
                    mb: 2,
                    fontFamily: "'DM Serif Text', sans-serif",
                    letterSpacing: "4px",
                  }}
                >
                  ShelterConnect
                </Typography>
              </Box>

              <TextField
                fullWidth
                label="Email"
                variant="standard"
                margin="normal"
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#ddd",
                  },
                }}
              />

              <Box sx={{ position: "relative" }}>
                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="standard"
                  margin="normal"
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#ddd",
                    },
                  }}
                />
                {showPassword ? (
                  <VisibilityOffOutlinedIcon
                    onClick={() => setShowPassword(!showPassword)}
                    sx={{
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      color: "#666",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <VisibilityOutlinedIcon
                    onClick={() => setShowPassword(!showPassword)}
                    sx={{
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      color: "#666",
                      cursor: "pointer",
                    }}
                  />
                )}
              </Box>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 4,
                  mb: 2,
                  bgcolor: "#2196f3",
                  textTransform: "none",
                  py: 1.5,
                  fontSize: "1rem",
                  "&:hover": {
                    bgcolor: "#1976d2",
                  },
                }}
              >
                Login
              </Button>

              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    color: "#666",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    display: "block",
                    mb: 1,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Forgot Password?
                </Typography>
                <Typography
                  component="button"
                  onClick={() => setShowRegistration(true)}
                  sx={{
                    color: "#666",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Get New Managing Agent Account?
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
