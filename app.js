import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

// Define the endpoint
app.get('/api', (req, res) => {
    // Retrieve query parameters
    const slackName = req.query.slack_name;
    const track = req.query.track;
  
    // Get the current date and time
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const currentUTCTime = new Date().toISOString();
  
    const response = {
      slack_name: slackName,
      current_day: currentDay,
      utc_time: currentUTCTime,
      track: track,
      github_file_url: 'https://github.com/Olayanju-1234/Zuri/blob/main/app.js',
      github_repo_url: 'https://github.com/Olayanju-1234/Zuri',
      status_code: 200,
    };
  
    // Send the JSON response
    res.json(response);
  });

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    }
);
