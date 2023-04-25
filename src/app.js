import { generatePolicy } from './openai';
import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import CustomTextField from './CustomTextField';
function App() {
  const [firmData, setFirmData] = useState({
    scopeAndPurpose: '',
    acceptableUse: '',
    dataPrivacy: '',
    softwareAndHardware: '',
    remoteWork: '',
    emailAndCommunication: '',
    socialMedia: '',
    intellectualProperty: '',
    cybersecurity: '',
    trainingAndCompliance: '',
  });
  const [policy, setPolicy] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFirmData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const generatedPolicy = await generatePolicy(firmData);
    setPolicy(generatedPolicy);
  };

  return (
    <Container>
      <h1>Law Firm Technology Usage Policy Generator</h1>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <CustomTextField
          label="Data Privacy and Client Confidentiality"
          name="dataPrivacy"
          value={firmData.dataPrivacy}
          onChange={handleChange}
          tooltip="Detail the measures the firm takes to protect sensitive information, including encryption, access controls, and secure storage."
        />
        <CustomTextField
          label="Software"
          name="software"
          value={firmData.software}
          onChange={handleChange}
          tooltip="List the approved software and tech tools used in your firm."
        />
        <CustomTextField
          label="Remote Work and Mobile Devices"
          name="remoteWork"
          value={firmData.remoteWork}
          onChange={handleChange}
          tooltip="Outline rules and best practices for working remotely and using mobile devices, including VPN usage and device security."
        />
        <CustomTextField
          label="Cybersecurity"
          name="cybersecurity"
          value={firmData.cybersecurity}
          onChange={handleChange}
          tooltip="Establish the firm's cybersecurity policies and procedures, including incident reporting, passwords, and vulnerability management."
        />
        <Button type="submit" variant="contained" color="primary">
          Generate Policy
        </Button>
      </form>
      {/* ... */}
    </Container>
  );
}

export default App;
