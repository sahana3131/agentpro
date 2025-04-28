// agent_template.js

const storeUrl = "{{ store }}";  // This comes from Flask dynamically
console.log("Connected to store:", storeUrl);

// 1. Create Chat Button
const chatButton = document.createElement('div');
chatButton.style.position = 'fixed';
chatButton.style.bottom = '20px';
chatButton.style.right = '20px';
chatButton.style.width = '60px';
chatButton.style.height = '60px';
chatButton.style.backgroundColor = '#0077ff';
chatButton.style.borderRadius = '50%';
chatButton.style.boxShadow = '0px 4px 10px rgba(0,0,0,0.3)';
chatButton.style.cursor = 'pointer';
chatButton.innerHTML = '<div style="color:white;font-size:30px;text-align:center;line-height:60px;">💬</div>';
document.body.appendChild(chatButton);

// 2. Create Chat Window
const chatWindow = document.createElement('div');
chatWindow.style.position = 'fixed';
chatWindow.style.bottom = '90px';
chatWindow.style.right = '20px';
chatWindow.style.width = '300px';
chatWindow.style.height = '400px';
chatWindow.style.backgroundColor = 'white';
chatWindow.style.border = '1px solid #ccc';
chatWindow.style.borderRadius = '10px';
chatWindow.style.boxShadow = '0px 4px 20px rgba(0,0,0,0.3)';
chatWindow.style.display = 'none'; // Hide by default

// Here you should embed your Salesforce Copilot iframe or any chatbot service you use
chatWindow.innerHTML = `
    <iframe 
        src="https://orgfarm-6eeab31791-dev-ed.develop.lightning.force.com/embeddedservice/copilot/copilotIframe.app?copilotId=YOUR_COPILOT_ID&versionId=YOUR_VERSION_ID"
        width="100%" height="100%" style="border:none;border-radius:10px;">
    </iframe>
`;

document.body.appendChild(chatWindow);

// 3. Toggle open/close
chatButton.onclick = function() {
    if (chatWindow.style.display === 'none') {
        chatWindow.style.display = 'block';
    } else {
        chatWindow.style.display = 'none';
    }
};
