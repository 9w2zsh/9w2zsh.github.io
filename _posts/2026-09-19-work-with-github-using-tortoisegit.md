---
title: "Work with github using tortoisegit"
categories: [git]
tags: [tortoisegit]
---
## Merge local folder to github
To merge a feature branch into the main (or master) branch using TortoiseGit, you must first switch to the branch that will receive the changes.  
Follow these step-by-step instructions to complete the local merge and push it to your remote repository:

### Step 1: Switch to the Main Branch  
* Open Windows File Explorer and navigate to your local Git repository folder.
* Right-click anywhere in the folder and select TortoiseGit > Switch/Checkout...
* In the Branch dropdown menu, select main (or master) and click OK.

### Step 2: Merge the Feature Branch
* Once you are safely on the main branch, right-click inside the folder again.
* Select TortoiseGit > Merge...
* In the From section, choose the branch option and select the feature branch you want to pull into main.
* (Optional) Under the options, you can check No Fast Forward if you want to explicitly force a merge commit history.
* Click OK. A progress dialog will show you if the merge succeeded cleanly.

### Step 3: Resolve Conflicts (If Any)
* If TortoiseGit alerts you to merge conflicts, close the initial success dialog.
* Right-click the conflicted file(s), choose TortoiseGit > Edit Conflicts, and use the tool to manually select which changes to keep.
* Once resolved, mark the files as "Resolved" and commit the merge.

### Step 4: Push the Changes to the Remote Server  
The merge has only happened on your local machine so far. To update your remote repository (like GitHub or GitLab):  
* Right-click the folder and select TortoiseGit > Push...
* Ensure the local branch (main) matches the remote destination branch (main).
* Click OK to send the code to your server.For further advanced
---
