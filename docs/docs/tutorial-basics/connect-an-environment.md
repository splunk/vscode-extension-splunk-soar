---
sidebar_position: 1 
---
import ReactPlayer from 'react-player'
import addEnvironmentVideo from '@site/static/video/add_environment.webm';


# Connect an Environment

The extension can only be used in conjunction with a remote environment.

1. Open the Splunk SOAR view from the sidebar 
2. Press the Connect Environment button to set up the connection to your SOAR environment. 
3. Type info such as SOAR URL and credentials to the appearing step-by-step interactive dialog.

Once all information is entered, the extension will try to connect and activate your environment. If that is successful, the other extension panels will become visible and populate. 


<ReactPlayer width="100%" height="auto" controls url={addEnvironmentVideo} />
