import "./App.css";
import React, { useState } from "react";
import { Stack, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { FormControl } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);
  const [article, setArticle] = useState({
    title: "",
    content: "",
    createDate: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };
  return (
    <div className="App">
      <Button
        style={{
          backgroundColor: "#4169E1",
          fontFamily: "sans-serif",
        }}
        onClick={handleClickOpen}
        variant="contained"
      >
        Create New Article
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperProps={{
          style: {
            padding: "1rem",
            backgroundColor: "white",
            color: "black",
            fontFamily: "Lucida Sans",
          },
        }}
      >
        <FormControl>
          <form>
            <Stack direction="column" spacing={2}>
              <Stack
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ fontFamily: "Lucida Sans" }}
                >
                  Create New Article
                </Typography>
                <TextField
                  inputProps={{ style: { fontFamily: "Lucida Sans" } }}
                  InputLabelProps={{ style: { fontFamily: "Lucida Sans" } }}
                  label="Title"
                  fullWidth
                  name="Title"
                  required={true}
                  onChange={handleInput}
                />

                <TextField
                  type="date"
                  helperText="Publish Date"
                  fullWidth
                  name="Create Date"
                  inputProps={{
                    min: new Date().toISOString().split("T")[0],
                  }}
                  required={true}
                  onChange={handleInput}
                />
                <TextField
                  placeholder="Type content here..."
                  multiline
                  rows={3}
                  label="Content"
                  fullWidth
                  name="Content"
                  required={true}
                  onChange={handleInput}
                />

                <Stack
                  direction="row"
                  spacing={12}
                  justifyContent="flex-start"
                  sx={{}}
                >
                  <Button type="submit" variant="contained" size="medium">
                    Edit
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    size="medium"
                    onClick={handleClose}
                  >
                    Delete
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </form>
        </FormControl>
      </Dialog>
    </div>
  );
}

export default App;
