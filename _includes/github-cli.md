## 1. Install it on Windows

### Recommended: WinGet

Open PowerShell 7 and run:
```PowerShell
winget install GitHub.Copilot
```

GitHub Copilot CLI supports WinGet installation on Windows. You need an active Copilot subscription, and organization-managed accounts require the Copilot CLI policy to be enabled. Windows requires PowerShell 6 or later.

Verify the installation:
```PowerShell
copilot --version
```

If copilot is not recognized, close and reopen PowerShell or VS Code so that the updated PATH is loaded.

### Alternative: npm

If you already have Node.js 22 or later:
```PowerShell
npm install -g @github/copilot
```
The npm package works across platforms and requires Node.js 22 or later.

## 2. Start Copilot in your project

Move into the project that you want Copilot to examine:
```PowerShell
Set-Location C:\Users\SysAdm\Dev
copilot
```
On first use, enter:
```Plain Text
/login
```
Follow the displayed authentication instructions. On first launch, GitHub Copilot CLI prompts you to authenticate with /login if you are not already signed in.

You will also be asked whether you trust the current directory. Copilot can potentially read, modify, and execute files within and below that directory, so only trust a folder whose contents you recognize.

For your environment, start narrowly:
```PowerShell
Set-Location C:\Users\SysAdm\Dev\MNEReadiness
copilot
```
This is safer than starting it at C:\Users\SysAdm, because the working scope is limited to the relevant project tree.

## 3. Begin with read-only exploration

Use prompts that explicitly prohibit changes.

```Plain Text
Inspect this project in read-only mode.
```
 
Do not modify, create, delete, rename, or execute anything.
 
Explain:
1. The project structure.
2. The main entry point.
3. The configuration files.
4. How validation is performed.
5. Any obvious inconsistencies.
 
Cite the file path and relevant line numbers for every finding.

Another useful prompt for your PowerShell framework:

```Plain Text
Review all PowerShell scripts in this project without changing anything.
```
 
Check for:
- Windows PowerShell 5.1 compatibility
- syntax errors
- missing functions or modules
- unsafe destructive operations
- hard-coded credentials
- incorrect paths
- ineffective error handling
- inconsistencies between scripts and JSON configuration
 
Return findings grouped as Critical, Warning, and Informational.

This gives you a baseline before allowing Copilot to touch the code.

## 4. Ask it to plan before editing

For controlled QA automation, use a three-stage workflow:

#### Stage A: Investigate
```Plain Text
Investigate why LivePreflight is failing.
```
 
Do not edit files and do not execute destructive commands.
 
Use the logs and source code in this workspace to identify the most likely root cause. Show the evidence supporting the diagnosis.

#### Stage B: Propose
```Plain Text
Propose the smallest possible fix.
```
 
List:
1. Files that would change.
2. Functions or sections affected.
3. Exact behavior before and after.
4. Risks and regression areas.
5. Validation commands.
 
Do not make the changes yet.

#### Stage C: Implement and validate
```Plain Text
Apply only the proposed minimal fix.
```
 
Constraints:
- Do not change unrelated files.
- Preserve Windows PowerShell 5.1 compatibility.
- Do not install software.
- Do not start migrations.
- Do not delete databases, mailboxes, logs, or configuration.
- Do not expose credentials.
- Show the diff after editing.
- Run parser validation and the existing safe tests.
- Stop if any validation fails.

This matches your normal checkpoint-driven, non-destructive working style.

## 5. Understand approvals

When Copilot wants to use a tool or command that can modify files or execute something, it asks for approval. You can approve it once or approve that tool for the remainder of the current session.

For your QA environment, I recommend:

* Read commands such as Get-Content, Get-ChildItem, and git diff: usually approve individually at first.
* Validation commands such as PowerShell parser checks or Invoke-Pester: approve after reading the complete command.
* File modifications: approve only after reviewing Copilot’s plan.
Install, uninstall, migration, SQL, mailbox, or Azure commands: never approve automatically.
* Avoid session-wide approval for general-purpose interpreters such as powershell, pwsh, cmd, or python, because later commands could have broader effects.

## 6. Useful interactive commands

Inside an interactive session:

```Plain Text
/help
```

shows available help and commands.

Useful controls include:

/ displays slash commands.
@ mentions files to include in the context.
Esc cancels the current operation.
Ctrl+C cancels processing, clears input, or exits depending on the current state.
Ctrl+L clears the screen.
Up and down arrows navigate prompt history.

Example using a particular file:

```Plain Text
@MNEReadiness.json explain every setting and identify which values are permanent configuration versus runtime input
```

## 7. Use it for one-off terminal questions

You do not always need an interactive session. The -p option sends one prompt directly:

```PowerShell
copilot -p "Explain what this PowerShell repository does. Do not modify anything."
```

For output intended for a script or variable, -s suppresses additional usage information:

```PowerShell
copilot -sp "Explain the difference between a PowerShell terminating and non-terminating error."
```

The official quickstart documents -p for non-interactive prompts and -s for outputting only Copilot’s response.

Be careful when embedding Copilot into automated scripts. AI output can vary and should not directly trigger installation, deletion, migration, or production administration without deterministic validation and human approval.

## 8. Practical prompts for your MNE work
Explain a failure
```Plain Text
Analyze the latest error logs in this workspace.
```
 
Do not change files.
 
For each error:
- quote the relevant log entry
- identify the component that emitted it
- explain the probable root cause
- distinguish evidence from assumptions
- recommend the lowest-risk diagnostic step
Check configuration consistency
```Plain Text
Compare all PowerShell scripts, JSON files, Markdown documentation, examples, and tests.
```
 
Find inconsistent references to:
- SQL Server instance
- SQL database
- project paths
- installer directory
- log directory
- bulk-import share
- Notes ID path
- source mailbox
- target mailbox
 
Do not edit anything. Return each inconsistency with file name, line number, current value, and expected value.
Review only the current change
```Plain Text
Review the current git diff only.
```
 
Check for:
- unintended scope expansion
- syntax problems
- PowerShell 5.1 incompatibility
- security regressions
- destructive behavior
- inadequate error handling
- missing Pester coverage
 
Do not modify the files.
Generate Pester tests
```Plain Text
Create Pester tests for the changed function only.
```
 
Requirements:
- mock external systems
- do not connect to Domino, SQL, Exchange, Microsoft 365, or Azure
- do not modify the machine
- cover success, failure, missing configuration, malformed input, and access-denied cases
- preserve compatibility with the Pester version used by this repository
 
Show the proposed test cases before editing.

## 9. Recommended daily workflow
```PowerShell
Set-Location C:\Users\SysAdm\Dev\<ProjectName>
 
git status
git pull
 
copilot
```

Then use this opening instruction:

```Plain Text
You are assisting with a controlled QA automation repository.
 
Operating rules:
- Begin in read-only mode.
- Inspect before proposing changes.
- Propose before editing.
- Make the smallest relevant change.
- Do not install, uninstall, migrate, delete, or alter infrastructure.
- Never expose secrets.
- Preserve existing compatibility requirements.
- Run syntax checks and safe tests after changes.
- Show git diff and validation results.
- Stop on unexpected results.
```

After Copilot finishes:

```PowerShell
git status
git diff
```

Review every changed line before committing. GitHub Copilot CLI is designed to maintain user control, and its documented workflow includes explicit approval before file-changing or command-execution tools are used.

Official references: Install GitHub Copilot CLI and GitHub Copilot CLI quickstart.

