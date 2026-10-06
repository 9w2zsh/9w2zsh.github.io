### Github Command
---
<details markdown="block">
  <summary>Create PAT in Github</summary>
  {% include create-pat-github.md %}
</details>
---
<details markdown="block">
  <summary>Upload local folder to Github</summary>
  {% include upload-local-folder-to-github.md %}
</details>
---
<details markdown="block">
  <summary>Remove all files in repo</summary>
  
  * remove all files from git index
    ```
    git rm -r --cached '*'
    ```  
  * Commit the changes
    ```
    git commit -m "Remove all files from repository"
    ```
  * Push the changes
    ```
    git push origin master
    ```
</details>
---
<details markdown="block">
  <summary>Invalid username or token</summary>
  
  ### remote: Invalid username or token. Password authentication is not supported for Git operation  

  #### Step 1: Generate a Personal Access Token (PAT)
  * Log into your account on GitHub.
  * Click your profile icon in the top-right corner and select Settings.
  * Scroll down the left sidebar and click Developer settings.
  * Expand Personal access tokens and select Tokens (classic).Click
  * Generate new token → Generate new token (classic).
  * Give it a descriptive name (e.g., "Laptop Git Terminal") and set an expiration date.
  * Check the repo scope checkbox (this grants terminal access to your repositories).
  * Click Generate token at the bottom of the page.
  * Copy the generated token immediately. You will not be able to see it again after navigating away.

  #### Step 2: Clear Your Old Cached Password  

  Your system is likely still trying to use your old saved password. You must clear it before your terminal will accept the new token.
  If you are using the local secret storage configuration, clear your credentials by running
  ```
  bashgit config --global --unset credential.helper
  ```

  #### Step 3: Apply the Token to Your Repository  

  The easiest way to reconnect without running into credential manager caching bugs is to update your repository's remote URL directly with your token:
  ```
  bashgit remote set-url origin https://github.com
  ```
</details>
---
<details markdown="block">
  <summary>Error: src refspec main does not match any  </summary>

  This error typically occurs because you haven't made any commits yet, or your local branch is spelled differently than the remote branch (e.g., local is master while remote is main).To fix this, add your files and make your first commit before pushing:
  ```
  git add .
  git commit -m "Initial commit"
  git push -u origin main
  ```
</details>

