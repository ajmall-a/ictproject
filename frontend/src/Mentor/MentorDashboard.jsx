// Mentordash.js

import React from 'react';
import EvaluationForm from './EvaluationForm';

const Mentordash = () => {
  // Sample submission ID, replace with actual submission ID
  const submissionId = '123';

  return (
    <div>
      <h1>Mentor Dashboard</h1>
      <EvaluationForm submissionId={submissionId} />
    </div>
  );
};

export default Mentordash;
