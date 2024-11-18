import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckIcon from "@mui/icons-material/Check";

import { Button, TextField } from "@mui/material";

import { submitNewTodo } from "../actions";

function AddNewTodo() {
  const [isOpen, setIsOpen] = useState(false);

  const INPUT_ELEMENT_ID = "new-task-input";

  return (
    <div className="add-todo-row">
      <Button
        startIcon={!isOpen && <AddIcon />}
        variant="outlined"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HighlightOffIcon /> : "New Todo"}
      </Button>
      {isOpen && (
        <>
          <TextField variant="standard" fullWidth id={INPUT_ELEMENT_ID} />
          <Button
            variant="contained"
            onClick={() =>
              submitNewTodo(
                document.querySelector("#" + INPUT_ELEMENT_ID).value
              )
            }
          >
            <CheckIcon />
          </Button>
        </>
      )}
    </div>
  );
}

export default AddNewTodo;
