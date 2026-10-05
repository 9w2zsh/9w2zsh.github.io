To create a Personal Access Token (PAT) on GitHub, follow these step-by-step instructions.
Step 1: Generate the Token on GitHub
1. Go to GitHub and log into your account.
2. In the top-right corner of any page, click your profile photo, then click Settings.
3. In the left sidebar, scroll all the way to the bottom and click Developer settings.
4. In the left sidebar, expand Personal access tokens and select Tokens (classic).
5. Click the Generate new token dropdown button and select Generate new token (classic).
6. Configure your token:
	• Note: Give your token a descriptive name (e.g., Linux-Terminal-Upload).
	• Expiration: Choose an expiration period (e.g., 30 days or 90 days) for security.
	• Select scopes: Check the box next to repo (this allows you to pull and push code).
7. Scroll to the bottom and click Generate token.
Step 2: Copy and Save Your Token
• Crucial: Copy the generated token (it looks like a long string of letters and numbers beginning with ghp_).
• Warning: Save this token somewhere secure (like a password manager). GitHub will never show it to you again once you leave or refresh the page.
Step 3: Use the Token in Your Terminal
When you run git push -u origin main in your Linux terminal:
1. When prompted for your Username, type your regular GitHub username.
2. When prompted for your Password, paste the PAT you just copied (the terminal will not show characters as you paste, which is normal—just paste and hit Enter).
