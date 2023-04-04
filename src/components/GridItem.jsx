import { Typography, Zoom } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { colMap } from "./constants/colMap";

const ops = {
  "Ethnicity / Race": [
    {
      label: "Hispanic",
      weight: 1,
    },
    { label: "First Nations", weight: 1 },
    { label: "Asian", weight: 1 },
    { label: "Black", weight: 1 },
    { label: "White", weight: 1 },
    { label: "European", weight: 1 },
    { label: "Middle Eastern", weight: 1 },
  ],
  Gender: [
    {
      label: "Male",
      weight: 1,
    },
    {
      label: "Female",
      weight: 1,
    },
    {
      label: "Non-binary",
      weight: 1,
    },
  ],
  Age: [
    { label: "Age < 18", weight: 1 },
    { label: "18 < Age < 30", weight: 1 },
    { label: "30 < Age < 50", weight: 1 },
    { label: "50 < Age < 70", weight: 1 },
    { label: "Age 70+", weight: 1 },
  ],
  Disability: [
    {
      label: "Disability",
      weight: 1,
    },
    {
      label: "Other",
      weight: 3,
    },
  ],
  "LGBTQ+": [
    {
      label: "LGBTQ+",
      weight: 1,
    },
    {
      label: "Other",
      weight: 3,
    },
  ],
  Religion: [
    { label: "Christian", weight: 1 },
    { label: "Muslim", weight: 1 },
    { label: "Hindu", weight: 1 },
    { label: "Buddhist", weight: 1 },
    { label: "Atheist", weight: 1 },
    { label: "Jewish", weight: 1 },
    { label: "Sikh", weight: 1 },
  ],
};

const GridItem = ({ color, text, setTemplate }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: color,
          height: "100px",
          cursor: "pointer",
          borderRadius: 3,
        }}
        onClick={handleOpen}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="subtitle1">{text}</Typography>
      </Box>
      <Dialog open={open} onClose={handleClose} TransitionComponent={Zoom}>
        <Zoom in={open}>
          <Box>
            <DialogTitle style={{ textAlign: "center" }}>
              Applicant Pool for Diverse {text}
            </DialogTitle>
            <DialogContent style={{ textAlign: "center" }}>
              <PieChart
                data={ops[text]?.map((op) => {
                  return {
                    title: op.label,
                    value: op.weight,
                    color: colMap[op.label],
                  };
                })}
                label={({ dataEntry }) =>
                  dataEntry?.value !== 0 ? dataEntry.title : ""
                }
                labelStyle={{ fontSize: 6, maxWidth: 2 }}
                style={{ width: 320 }}
                labelPosition={60}
                animate
              />
            </DialogContent>
            <DialogActions>
              <Box justifyContent="space-between">
                <Button onClick={handleClose}>Close</Button>
                <Button
                  onClick={() => {
                    setTemplate(ops[text]);
                    handleClose();
                  }}
                >
                  Select
                </Button>
              </Box>
            </DialogActions>
          </Box>
        </Zoom>
      </Dialog>
    </Box>
  );
};

export default GridItem;
