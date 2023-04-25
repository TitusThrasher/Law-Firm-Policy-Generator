const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

// Replace with your actual API key
const OPENAI_API_KEY = '[YOUR_OPENAI_API_KEY';

app.use(cors());
app.use(express.json());

app.post('/api/completions', async (req, res) => {
    const { dataPrivacy, software, remoteWork, cybersecurity, } = req.body;
  
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: "text-davinci-003",
          prompt: `Data Privacy: ${dataPrivacy}\nSoftware: ${software}\nRemote Work: ${remoteWork}\nCyber Security: ${cybersecurity}\n\nGenerate a comprehensive technology usage policy for a US law firm to use in order to govern employee usage of legal technology and generative AI tools. Make sure to consider all relevant policies and regulations, as well as industry best practices and standards for similar employee policies, and construct a policy that accounts for the provided firm information. The policy should consider the provided law firm info but should also expand and infer how that info should impact the firm's policy.  ...`,
          max_tokens: 1500,
          temperature: 0.6,
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );
  
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
