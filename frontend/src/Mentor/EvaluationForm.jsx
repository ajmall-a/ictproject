import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const EvaluationForm = ({ submissionId }) => {
  const classes = useStyles();

  const [marks, setMarks] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`/api/submissions/${submissionId}/evaluate`, {
        marks,
        comments
      });

      console.log(response.data); // Log the updated submission
      // Add logic to update UI or display success message
    } catch (error) {
      console.error(error);
      // Add logic to handle errors
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        className={classes.input}
        label="Marks"
        variant="outlined"
        type="number"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      <TextField
        className={classes.input}
        label="Comments"
        variant="outlined"
        multiline
        rows={4}
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit Evaluation
      </Button>
    </form>
  );
};

export default EvaluationForm;
