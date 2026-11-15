# QSO log for Anytype
To record your amateur radio contacts, you need to create a custom QSO Log Object Type and template in Anytype. Because Anytype operates as an object-oriented data graph, we will define the strict database fields (Relations) matching a standard QRZ.com / ADIF logbook input interface first, then assign them to a reusable template.
---
## Step 1: Mapping the QRZ.com Input Fields (Relations)

Before building the visual template layout, you need to make sure the underlying database inputs exist in your vault.

| QRZ Log Field Name | Anytype Relation Type | Description / Notes |
| :--- | :--- | :--- |
| **Callsign** | Text (or Title) | The callsign of the station you worked. |
| **QSO Date / Time** | Date | Select "Include Time" in the settings. Set to UTC. |
| **Band** | Select | Dropdown choices (e.g., 40m, 20m, 15m, 10m, 2m). |
| **Frequency (MHz)** | Number | Exact dial frequency (e.g., 14.250). |
| **Mode** | Select | Dropdown choices (e.g., SSB, CW, FT8, FM). |
| **RST Sent** | Text or Number | Signal report given (e.g., 59, 599). |
| **RST Rcvd** | Text or Number | Signal report received. |
| **Power (W)** | Number | Your transmit power in Watts. |
| **Grid Square** | Text | Maidenhead grid locator (e.g., FN20). |
| **State / County** | Text | US State or regional administrative division. |
| **Country** | Select or Text | DXCC country name. |
| **Comments** | Text | General notes about the conversation or rig setup. |

## Step 2: Create a New Object Type

To prevent these ham radio fields from cluttering your standard everyday personal "Notes" or "Tasks," create a unique category.
1. Press Ctrl + Shift + T (Windows/Linux) or Cmd + Shift + T (macOS) to open the Type Library.
2. Click Create New Type in the top right corner.
3. Name your new type QSO Log.
4. Choose an icon representing your log entries (e.g., a radio wave, antenna, or book icon).

## Step 3: Define the Template Layout

Once your QSO Log Type is initialized, Anytype will ask you to configure its default layout template.
1. Click on Templates inside your newly created QSO Log Type screen.
2. Select Create Template and name it Standard QSO Entry.
3. Add the QRZ Fields to the Top Header (Recommended):
	• Click + Add Relation right below the title area.
	• Search for pre-existing relations (like Date or Tag), or click Create New Relation for specific ones like Band, Mode, RST Sent, and Grid Square.
	• Assign the correct data format (Text, Select dropdown, Number) matching the layout table in Step 1.
4. Arrange into Columns: You can click and drag relations next to each other to replicate the exact compact horizontal block structure used by QRZ's interface (e.g., placing Band, Frequency, and Mode on the same line).

## Step 4: Formatting the Page Body (Optional QSL Details)

In the main canvas area below the header fields, you can configure text blocks for data that doesn't need to be sorted inside database columns but is helpful for reference:
• Add a header line (/h2) named QSL Card Routing.
• Create checkboxes (/todo) for QSL Sent and QSL Received.
• Create a Code Block field (/code) at the bottom. Label it Raw ADIF Export String so you can manually copy/paste compliant string blocks if you ever need to transfer a single contact directly into an external program.
Save the template and toggle the option "Set as Default for this Type".

## Step 5: Setting Up Your "Logbook" Database View

To view your logs in a clean matrix row ledger just like the main screen of QRZ.com:
1. Go to your sidebar and click the + icon to create a new Set.
2. Name the set Amateur Radio Logbook.
3. Under the target selector, change Object Type to your custom QSO Log.
4. Switch the View configuration from a Gallery/List layout over to a Table View.
5. Click the + columns button on the far right of the table header to enable and unhide all your custom relations (Callsign, Date/Time, Band, Mode, RST).
Now, every time you press the + New button inside this dynamic logbook dashboard, a clean input form mimicking QRZ will load up automatically.
Would you like help setting up the specific Select Dropdown variables for all the digital/analog Modes according to ADIF compliance standards, or do you want to design a QSL Card Image gallery view within this dashboard layout?
