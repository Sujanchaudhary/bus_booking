import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, Input, MenuItem, Select } from "@mui/material";

function getSteps() {
  return ["select Bus", "Basic Details", "legal Docs"];
}

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <Box
              sx={{
                width: "50%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pt: 10,
              }}
            >
              <FormControl sx={{ width: "100%" }}>
                <Typography sx={{ color: "black", pb: 1 }}>
                  Select your Bus Type <span style={{ color: "red" }}>*</span>
                </Typography>
                <Select
                  sx={{ height: "45px" }}
                  fullWidth
                  // value={form.type}
                  name="type"
                  // onChange={(e) => onChange(e)}
                  // onClick={() => {
                  //   if (form.type)
                  //     setError({
                  //       ...error,
                  //       type: "",
                  //     });
                  // }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {/* {storetype.map((types: any) => {
                    return (
                      <MenuItem key={types.id} value={types.id}>
                        {types.name}
                      </MenuItem>
                    );
                  })} */}
                  <MenuItem value="Retailer">Deluxe</MenuItem>
                  <MenuItem value="Wholeseller">Super Deluxe</MenuItem>
                  <MenuItem value="Distributor">A/C</MenuItem>
                  <MenuItem value="Organization">Non A/C</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </>
        );

      case 1:
        return (
          <>
            <Box
              sx={{
                width: "80%",
                margin: "0 auto",
                height: "100%",
                pt: 5,
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gap: { xs: 1, md: 2 },
                  gridTemplateColumns: {
                    xs: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                  },
                }}
              >
                <Box>
                  <Typography sx={{ color: "black", pb: 1 }}>
                    Name <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <Input
                    sx={{
                      border: "1px solid grey",
                      borderRadius: "5px",
                      height: "45px",
                      background: "white",
                      pl: 2,
                      width: "100%",
                    }}
                    disableUnderline
                    required
                    fullWidth
                    placeholder="Name"
                    name="name"
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: "black", pb: 1 }}>
                    Email <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <Input
                    sx={{
                      border: "1px solid grey",
                      borderRadius: "5px",
                      height: "45px",
                      background: "white",
                      pl: 2,
                      width: "100%",
                    }}
                    disableUnderline
                    required
                    fullWidth
                    placeholder="Email Address"
                    name="email"
                  />
                </Box>

                <Box>
                  <Typography sx={{ color: "black", pb: 1 }}>
                    Phone Number <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <Input
                    type="number"
                    sx={{
                      border: "1px solid grey",
                      borderRadius: "5px",
                      height: "45px",
                      background: "white",
                      pl: 2,
                      width: "100%",
                    }}
                    disableUnderline
                    required
                    fullWidth
                    placeholder="Phone Number"
                    name="phone_number"
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: "black", pb: 1 }}>
                    Vehicle NO <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <Input
                    sx={{
                      border: "1px solid grey",
                      borderRadius: "5px",
                      height: "45px",
                      background: "white",
                      pl: 2,
                      width: "100%",
                    }}
                    disableUnderline
                    required
                    fullWidth
                    type="number"
                    placeholder="Registration no"
                    name="pin_number"
                    // value={form.pin_number}
                    // onChange={(e) => onChange(e)}
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: "black", pb: 1 }}>
                    Bus photo <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <Input
                    type="file"
                    sx={{
                      border: "1px solid grey",
                      borderRadius: "5px",
                      height: "45px",
                      background: "white",
                      pl: 2,
                      width: "100%",
                    }}
                    disableUnderline
                    required
                    fullWidth
                    name="name"
                  />
                </Box>
              </Box>
            </Box>
          </>
        );
      case 2:
        return (
          <>
            <Box
              sx={{
                width: "80%",
                margin: "0 auto",
                height: "100%",
                pt: 8,
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gap: 5,
                  gridTemplateColumns: {
                    xs: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                  },
                }}
              >
                <Box>
                  <Typography sx={{ color: "black", pb: 1 }}>
                    License Photo Front <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <Input
                    type="file"
                    sx={{
                      border: "1px solid grey",
                      borderRadius: "5px",
                      height: "45px",
                      background: "white",
                      pl: 2,
                      width: "100%",
                    }}
                    disableUnderline
                    required
                    fullWidth
                    placeholder="front"
                    name="back"
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: "black", pb: 1 }}>
                    License Photo Back <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <Input
                    type="file"
                    sx={{
                      border: "1px solid grey",
                      borderRadius: "5px",
                      height: "45px",
                      background: "white",
                      pl: 2,
                      width: "100%",
                    }}
                    disableUnderline
                    required
                    fullWidth
                    placeholder="Country"
                    name="country"
                  />
                </Box>
              </Box>
            </Box>
          </>
        );
      default:
        return "unknown step";
    }
  }

  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "90%", margin: "0 auto", pb: 8, pt: 12 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 1,
              color: "black",
              fontSize: "20px",
              height: "60vh",
            }}
          >
            All steps completed - you&apos;re information is on the process of
            approval we will reach to you certainly
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ minHeight: "60vh" }}>{getStepContent(activeStep)}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
