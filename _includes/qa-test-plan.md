# MNE 4.18.1.1 - Customer Readiness QA Test Plan

**Product:** Quest Migrator for Notes to Exchange (MNE)  
**Build under test:** 4.18.1.1  
**Prepared:** 28 October 2026  
**Status:** Proposed execution plan; tests have not been run  
**Objective:** Establish that a customer can install or upgrade, configure a migration, migrate supported Notes data accurately, recover from expected failures, and use the migrated data in Exchange without release-blocking defects.

## 1. Basis, assumptions, and release-specific gaps

This plan is grounded in the supplied materials:

- [QA automation archive](README-automatedqa.zip): PowerShell/Pester environment, installation, console, UI workflow, and migration checks.
- [Installation archive](README-mneInstall.zip): installation lifecycle, preflight, existing-installation handling, and database cleanup safeguards.
- [Email generator archive](README-createEmail.zip): synthetic messages, regular attachments, and Notes rich-text/OLE embedded objects.
- [Mailbox generator archive](README-generateNotesMailbox.zip): synthetic attachment manifests and controlled Notes document generation, with significant bulk-generation limitations.
- [Mailbox reset script](EraseEmail/Erase-MailboxEmail.ps1): destructive Microsoft 365 email cleanup; not a general-purpose calendar/contact/task reset.

The workspace does not supply the 4.18.1.1 release notes, official support matrix, installer, or approved customer workload limits. Consequently:

1. Obtain release notes, changed components, fixed-defect IDs, known issues, supported upgrade paths, and the official 4.18.1.1 system requirements before signing off.
2. The supplied scripts' host requirements are **not** evidence of product platform support.
3. Microsoft 365 is the primary provisional target. Add on-premises Exchange and other migration modes only if supported and in release/customer scope.
4. Calendar, contacts, tasks, archives, delegation, and other feature cases below require confirmation against product documentation. Conditional coverage is not a claim that MNE supports every Notes feature.
5. Unknown applicability is **Blocked**, not **N/A**. Mark a case N/A only with a documented support-matrix or scope reference and QA/product-owner approval.
6. This is a risk-based qualification plan, not a guarantee of defect-free operation.

### Required release-change traceability

Create one row for every changed feature and fixed defect before execution:

| Change/defect ID | Customer risk and affected component | Reproduction or feature steps | Expected 4.18.1.1 behavior | Linked test IDs | Baseline result | New-build result | Evidence/owner |
|---|---|---|---|---|---|---|---|
| Pending release notes | Not yet assessed | Pending | Pending | Pending | Not run | Not run | Release manager |

For each fixed defect, reproduce on an affected earlier build where safe and available, verify the fix on 4.18.1.1, and test adjacent supported behavior. Record when baseline reproduction is unavailable; do not imply it succeeded.

## 2. Risk, priority, and ownership

| Priority | Meaning | Release expectation |
|---|---|---|
| P0 | Installation/upgrade usability, authentication, correct mailbox mapping, core migration, data integrity, and recoverability | Every applicable case must pass; no waived P0 failures |
| P1 | Important supported data types, configuration, customer-scale operation, diagnostics, and usability | Every applicable case executed; unresolved failures require explicit risk acceptance |
| P2 | Lower-impact presentation and less common supported combinations | Execute after P0/P1; exceptions recorded with impact and owner |

Severity is separate from test priority:

- **Sev1:** data loss/corruption, cross-user migration, source damage, sensitive-data exposure, or broad inability to migrate.
- **Sev2:** major supported workflow blocked without an acceptable workaround.
- **Sev3:** limited failure with a verified workaround.
- **Sev4:** cosmetic or minor documentation issue.

QA owns execution/evidence and defect verification. Engineering owns technical triage and fixes. Lab administrators own isolated infrastructure, backups, and access. Product/release management approves scope, support applicability, known limitations, and the final release decision.

## 3. Entry criteria and lab safeguards

- Record installer filename, SHA-256, digital-signature status/publisher, build provenance, and expected executable/product versions. Resolve version-number formatting differences explicitly.
- Obtain supported-platform and upgrade-path documentation; select combinations from that documentation.
- Use isolated, allowlisted QA Domino/Notes databases, SQL databases, accounts, and Exchange mailboxes containing synthetic data only.
- Confirm target provisioning, licensing where required, quotas, time synchronization, DNS, certificates, network routes, and the supported authentication/permission model.
- Capture restorable VM/configuration/source/database backups as appropriate and demonstrate restoration before failure/upgrade tests.
- Keep secrets outside configuration, screenshots, manifests, and defect reports. Use least privilege for each documented role.
- Disable unrelated live mail flow, rules, retention processing, and other background mutations where possible. Record unavoidable processing that affects reconciliation.
- Start automation with installation and migration execution disabled; enable each only for an explicitly approved test run.
- Do not run installer-wrapper cleanup or mailbox reset utilities against production.
- An uninstall-and-drop-database reinstall is **not** an in-place upgrade test. Preserve the old project/database for actual upgrade coverage.
- Never assume a snapshot alone is an application-consistent SQL backup or a supported downgrade method.

## 4. Environment and upgrade matrix

Fill exact versions and authentication modes before scheduling. Do not select obsolete versions merely because examples mention them.

| Lane | Configuration | Required coverage |
|---|---|---|
| A - Reference | Common supported Windows, Notes/Domino, SQL, and Microsoft 365 combination | All applicable P0/P1; release changes; complete reconciliation |
| B - Upgrade | Latest released customer build to 4.18.1.1, using the documented upgrade procedure | Existing projects, schema/settings/state preservation, resume, delta migration |
| C - Oldest upgrade | Oldest documented directly supported starting build; staged path if required | Upgrade and first post-upgrade migration; documented rejection of unsupported direct paths |
| D - Compatibility | Supported minimum and maximum dependency versions; supported bitness combinations | Environment/install/authentication/core migration smoke on each boundary |
| E - Alternate target/mode | Each additional supported in-scope Exchange target or migration mode | Target-specific authentication, core data migration, recovery, and client validation |
| F - Scale | Representative large mailbox and maximum supported customer concurrency | Throughput, throttling, stability, resource consumption, resume, reconciliation |

Use pairwise selection for lower-risk dependency combinations, but explicitly test changed integrations, known problematic combinations, each supported in-scope authentication mode, and customer-critical deployments. Record every omitted supported configuration and the residual risk.

Run the same immutable corpus on the previous approved build and 4.18.1.1 using restored equivalent environments. Never migrate both builds into an accumulating target and compare its final count.

## 5. Test data and independent expected results

### Proposed corpus

These are planning targets, not claims about existing tooling or supported product limits. Adjust to approved workload requirements before testing.

| Dataset | Proposed contents | Purpose |
|---|---|---|
| Golden corpus | At least 3 source users and 100 uniquely tagged email items per user; deterministic coverage of every mail scenario below | Full item-level reconciliation and cross-user isolation |
| Personal information | Per user, at least 20 calendar entries, 20 contacts, and 10 tasks where supported; include all relevant edge cases | Supported non-mail migration and usability |
| Routing/mapping | Similar display names, renamed users, aliases, a pre-populated target, and deliberately invalid/ambiguous mappings | Prevent wrong-recipient delivery and false matching |
| Delta corpus | Add 20 uniquely tagged eligible items after the first migration; modify/move/delete a controlled subset | Incremental behavior according to documented semantics |
| Fault corpus | Approved synthetic malformed item, unsupported object, inaccessible NSF, quota-bound target, and permission failures | Safe errors, isolation, reporting, recovery |
| Scale corpus | Mailbox sizes and item counts at typical, high-percentile, and approved maximum customer workloads | Realistic capacity and soak testing |

Capture a deterministic manifest before migration: run ID, source user and stable item ID, item class, folder membership/path, expected target identity, subject, body markers, addressing, timestamps/time zone, status flags, attachment names/sizes/SHA-256, and expected calendar/contact/task fields.

For filters, size limits, unsupported features, and documented conversions, calculate the eligible set and expected outcome **before** migration. Do not reclassify unexpected failures as exclusions after seeing results.

### Reconciliation rules

1. Enumerate the full expected target scope with pagination, including nested folders and all in-scope item classes. Do not limit validation to Inbox.
2. Resolve identity using supported preserved identifiers or unique synthetic markers and corroborating fields, not subject alone.
3. Each eligible source item must map to exactly its documented target representation in the intended mailbox; no unexplained missing items, extra items, or duplicates.
4. Model Notes multi-folder membership and any one-to-many or many-to-one conversion according to documented behavior. Account for physical items separately from folder memberships.
5. Reconcile pre-existing target data separately; it must not be overwritten, removed, or mistaken for newly migrated data.
6. For ordinary file attachments, require matching filename, size, and SHA-256. For documented transformed content, define the expected transformation and validate usability rather than requiring identical encoded message bytes.
7. Validate 100% of golden-corpus items and ordinary attachment hashes. For scale runs, reconcile every item identity/count and attachment metadata; use a preselected stratified sample of at least 100 items, or all if fewer, for deep rendering/content/hash checks. Expand to the affected class/mailbox if any mismatch is found.
8. Compare source manifests before/after. Allow only documented, pre-approved source-side updates; no unexplained deletions or changes.
9. A migration-complete UI message, minimum target item count, or successful script exit is not sufficient proof of correctness.

## 6. Executable functional test catalogue

For every case, record exact inputs/settings, environment lane, operator, execution time, actual result, evidence, and defect reference. Use the documented product workflow; expected behavior for conditional features must be approved before running.

### A. Package, installation, upgrade, and removal

| ID | Priority | Procedure | Expected result |
|---|---|---|---|
| INS-01 | P0 | Verify approved package hash/signature; install on a clean supported host; launch and inspect installed versions. | Authentic 4.18.1.1 components installed; registration and required components consistent; console opens. |
| INS-02 | P1 | Execute documented unattended installation with approved settings; repeat after any required reboot. | Correct exit/reboot behavior and logs; no hidden prompt or incomplete install reported as success. |
| INS-03 | P1 | Attempt installation with missing prerequisites, insufficient privilege, low disk space, and inaccessible SQL in separate restored runs. | Actionable failure or documented prerequisite handling; no misleading success or unusable partial state. |
| INS-04 | P1 | Cancel installation, then retry; exercise documented repair and supported custom path if offered. | Predictable rollback/retry; repaired installation works; no duplicate or stale registration. |
| UPG-01 | P0 | Populate an existing supported build with projects, mappings, settings, and migration history; back up; perform documented upgrade. | Upgrade succeeds; expected configuration/state/schema retained and readable; versions consistent. |
| UPG-02 | P0 | Open upgraded projects; migrate new data and rerun a previously migrated mailbox. | Authentication/configuration remains usable; no state reset, unexpected full re-copy, or unintended duplicates. |
| UPG-03 | P0 | In a disposable clone, interrupt upgrade or inject database failure; follow documented recovery procedure. | No false success; restore/recovery returns to a usable consistent system with recorded recovery time. |
| UPG-04 | P1 | Exercise oldest supported upgrade path and attempt a documented unsupported direct path. | Supported path works; unsupported path rejected or redirected clearly without corrupting existing state. |
| INS-05 | P1 | Uninstall after migration; inspect documented retained data; reinstall and restore/open a project as supported. | Removal and retention match documentation; unrelated Notes/SQL/Exchange data untouched; reinstall usable. |

### B. First use, project configuration, and connections

| ID | Priority | Procedure | Expected result |
|---|---|---|---|
| CFG-01 | P0 | Launch as documented operator role; validate applicable license; create/save/close/reopen project. | No crash; settings persist; invalid/expired license, where applicable, gives clear documented behavior. |
| CFG-02 | P0 | Connect to Notes source, SQL project database, and target using every supported in-scope authentication mode. | Correct endpoints, identities, access, and persistence; a basic operation succeeds, not merely a connection indicator. |
| CFG-03 | P0 | Supply invalid/expired credentials, missing consent/permissions, or wrong Notes identity; correct and retry. | Clear diagnosis; no migration under an unintended identity; retry succeeds without recreating healthy configuration. |
| CFG-04 | P1 | Reopen console, reboot host, and reconnect with the saved project. | Saved non-secret settings and documented credential handling behave correctly; no broken references. |
| CFG-05 | P0 | Import/discover users; map similar names/aliases; supply duplicate, missing, and ambiguous targets. | Accurate deterministic mapping; unsafe ambiguity blocked before data is written to the wrong mailbox. |
| CFG-06 | P1 | Exercise supported Unicode names, spaces, long paths, invalid values, and import/export round-trip if provided. | Valid inputs persist correctly; invalid inputs identified explicitly; export/import preserves supported settings. |
| CFG-07 | P1 | Inspect each changed wizard/control, required fields, validation, Back/Cancel, and help links. | No dead end or unintended setting change; documentation matches actual 4.18.1.1 behavior. |

### C. Mail migration and content integrity

| ID | Priority | Procedure | Expected result |
|---|---|---|---|
| MIG-01 | P0 | Migrate the golden corpus into known-baseline targets; run complete reconciliation. | Every eligible item appears only in its intended target; no unexplained loss, corruption, duplication, or source modification. |
| MIG-02 | P0 | Include plain text, HTML, and Notes rich text with Unicode, mixed scripts, long subjects, line breaks, and formatting. | Text and supported formatting remain readable; no truncation, garbled characters, or dropped body sections. |
| MIG-03 | P0 | Include multiple To/Cc/Bcc values where retained by source, aliases, reply-to, internal/external addresses, and supported address conversion. | Addressing and conversion match documented semantics; replies resolve correctly; unavailable Bcc data is not invented. |
| MIG-04 | P0 | Include Inbox, Sent, Drafts, nested/custom/empty folders, repeated folder names, and multi-folder Notes items. | Supported folder/item representation correct; no accidental item inflation from miscounted memberships. |
| MIG-05 | P0 | Migrate single/multiple and same-name attachments: Office files, PDF, images, ZIP, non-ASCII names, and empty files where supported. | Ordinary files match manifests/hashes and open in appropriate safe viewers; counts/names preserved. |
| MIG-06 | P1 | Use item/attachment sizes just below, at, and above each documented migration and target limit. | Eligible sizes migrate; oversized items receive accurate documented skip/error/handling; adjacent items continue safely. |
| MIG-07 | P0 | Test true MIME inline images and Notes rich-text/OLE objects as separate datasets. | MIME references/images render correctly where supported; OLE conversion or unsupported status matches documentation and is visible, not silently lost. |
| MIG-08 | P1 | Include read/unread, priority, sensitivity, flags, and sent/received timestamps across time zones/DST. | Supported properties and absolute times are correct; any unsupported property is explicitly accounted for. |
| MIG-09 | P1 | Include supported encrypted/signed messages, private items, links/doclinks, and unusual rich-text objects. | Authorized supported content remains usable; unsupported/encrypted cases are explicit with no false success or unsafe disclosure. |
| MIG-10 | P1 | Apply supported item-class/date/folder filters using exact boundary timestamps. | Only independently calculated eligible items migrate; boundary inclusivity and exclusions match documentation. |
| MIG-11 | P0 | Include controlled corrupt/unsupported items among valid items. | Item-specific errors identify affected data; valid items follow documented continuation behavior; totals reconcile. |
| MIG-12 | P1 | Migrate supported archive/local NSF or alternate supported source mode, if in scope. | Correct source selection, content, and target placement; no unintended data collection. |

### D. Calendar, contacts, tasks, and customer usability

All cases in this section are conditional on documented support; obtain that decision before execution.

| ID | Priority | Procedure | Expected result |
|---|---|---|---|
| PIM-01 | P0 | Migrate appointments and meetings with organizers/attendees, all-day/multi-day entries, attachments, reminders, and time zones. | Correct date/time/duration, identities, fields, and supported reminders; no unintended invitations generated by migration. |
| PIM-02 | P0 | Migrate daily/weekly/monthly recurrences, DST crossings, edited occurrences, deleted occurrences, and cancellations. | Series, exceptions, and cancellations are correct in the target calendar; no shifted or resurrected occurrences. |
| PIM-03 | P1 | Migrate contacts with multiple addresses/emails/phones, Unicode, photos, and supported groups/distribution lists. | Supported fields and group membership preserved; no silent merging of distinct contacts. |
| PIM-04 | P1 | Migrate tasks with due/start dates, status, completion, recurrence, and categories where supported. | Supported fields remain accurate and usable; unsupported semantics are reported/documented. |
| PIM-05 | P1 | Validate supported shared/delegated access, ACL mapping, and private-item behavior using separate identities. | Only intended users have documented access; no privilege expansion or misleading preservation claim. |
| UX-01 | P0 | In each supported in-scope Outlook/web client, open/search migrated mail, open/download attachments, reply, and forward. | Content usable; correct send/reply identities and recipients; no customer-blocking rendering or attachment errors. |
| UX-02 | P1 | Open migrated contacts/tasks/calendars; create a new message/event and perform supported meeting updates. | Normal post-migration work succeeds; operations affect only intended users/items. |

### E. Incremental operation, restart, and recovery

| ID | Priority | Procedure | Expected result |
|---|---|---|---|
| RUN-01 | P0 | Rerun a completed migration against unchanged source/target using supported settings. | Documented duplicate prevention/reprocessing behavior; no unintended duplicate items or lost state. |
| RUN-02 | P0 | Add delta corpus; modify/move/delete selected source items; rerun. | New eligible items migrate exactly as expected; update/move/delete behavior matches documented semantics, not an assumed synchronization model. |
| RUN-03 | P0 | Cancel through supported UI, restart console, and resume a partially migrated mailbox. | Clear state and safe resume; final reconciliation matches uninterrupted run with no unexplained loss/duplicates. |
| RUN-04 | P0 | In isolated runs, interrupt network, console/worker, and host; restore and resume. | Recoverable state/checkpoints; committed data accounted for; no permanent stuck job or false completion. |
| RUN-05 | P0 | Interrupt SQL, Domino, and target connectivity separately; restore service. | Bounded documented retry or actionable stop; resume preserves integrity; unavailable components are identified correctly. |
| RUN-06 | P1 | Exercise target throttling/transient failures and token renewal/expiry during a long run. | Appropriate backoff/reauthentication; no runaway requests or silent skips; resumed result reconciles. |
| RUN-07 | P1 | Remove target permissions, exhaust target quota, or remove a target mailbox during migration; correct and retry. | Failure scoped and reported accurately; healthy users handled as documented; retry does not damage existing data. |
| RUN-08 | P1 | Reduce host/log/database free space to agreed safe fault thresholds on isolated test disks. | Actionable errors before uncontrolled corruption; restored capacity permits documented recovery; logs do not falsely show success. |
| RUN-09 | P0 | Restore the pre-upgrade backup/configuration into a documented compatible environment and verify a project/migration. | Demonstrated usable recovery, not just a successful backup command; recovery duration recorded. |

### F. Scale, operational confidence, and release changes

| ID | Priority | Procedure | Expected result |
|---|---|---|---|
| OPS-01 | P1 | Migrate typical and large mailboxes at 1 worker, typical concurrency, and approved maximum concurrency. | Meets agreed completion/throughput thresholds; correctness maintained; no crash, unbounded resource growth, or sustained starvation. |
| OPS-02 | P1 | Run at least a 24-hour soak with representative data/concurrency and credential renewal. | Stable processing and recoverability; reconciliation passes; resources remain within pre-agreed budgets. |
| OPS-03 | P1 | Compare 3 matched workload runs against previous approved build in equivalent restored environments. | No unexplained median throughput decrease over the provisional 10% tolerance; agreed time/memory/disk budgets met. |
| OPS-04 | P1 | Reconcile UI summary, per-mailbox/item logs, exported report, and independent manifests for success/partial/failure cases. | Counts/statuses and exclusions consistent; partial completion is not labeled complete success. |
| OPS-05 | P0 | Inspect logs, reports, config exports, screenshots, and standard diagnostic bundles after authentication/failure flows. | No plaintext passwords, client secrets, or access tokens; artifacts use approved access controls and sanitization. |
| OPS-06 | P1 | Follow customer installation, configuration, migration, troubleshooting, and recovery instructions literally. | Instructions match build behavior and explain prerequisites, limits, and known issues; support can diagnose seeded failures. |
| REL-01 | P0 | Execute every release-note fixed-defect reproduction and changed-feature acceptance test. | Intended fix/feature verified with evidence; no untested release change remains. |
| REL-02 | P1 | Exercise adjacent features and configuration toggles around every changed component. | Unchanged supported behavior preserved; intentional differences documented and approved. |

For OPS-01/02/03, agree absolute mailbox completion time, items/bytes per hour, maximum SQL/log/disk growth, and CPU/memory budgets before testing. The 10% comparison tolerance and 24-hour soak are proposed QA criteria, not published product guarantees. A performance case remains Blocked until its acceptance limits and workloads are approved.

## 7. Build acceptance smoke: customer first-hour path

Run immediately on a clean reference host, again on the upgraded reference host, and after any replacement build:

1. Verify authentic package and installed 4.18.1.1 versions.
2. Launch console and open/create a usable project.
3. Authenticate to Notes, SQL, and target using the supported customer mode.
4. Map at least two users with deliberately distinguishable source content.
5. Migrate a small deterministic corpus containing text, HTML/rich text, an ordinary attachment, a nested folder, and supported PIM items.
6. Reconcile every smoke item, attachment hash, and intended target user.
7. Open migrated content in a supported client; reply and open an attachment.
8. Rerun unchanged data, then add a small delta and rerun; check documented duplicate/delta behavior.
9. Reopen the project and confirm persistent status/history; review logs for errors/secrets.

Stop broad execution and triage if package authenticity, mapping, data integrity, source safety, or core authentication fails. Smoke success permits regression testing; it is not release approval.

## 8. Use existing automation without overstating coverage

### What the supplied framework can contribute

The scaffold offers Pester checks, version selection, installation/console/UI checks, optional migration execution, and HTML/CSV/NUnit/screenshot artifacts. Extract it into an approved QA tools location and configure it for 4.18.1.1 before running. The commands below are to be run from that extracted framework root, not from this plan's directory.

```powershell
# Configure a 4.18.1.1 entry with verified installer and executable paths first.
# Keep allowInstallExecution and allowMigrationExecution false for initial checks.
.\scripts\Invoke-MNEPreflight.ps1
.\scripts\Invoke-MNETestRun.ps1 -MNEVersion 4.18.1.1 -Suite Environment
.\scripts\Invoke-MNETestRun.ps1 -MNEVersion 4.18.1.1 -Suite Smoke
.\scripts\Invoke-MNETestRun.ps1 -MNEVersion 4.18.1.1 -Suite Regression
```

Installation and migration require separate, explicit approval and the relevant execution flags. Check selected tests, locator readiness, flags, pass/fail/skip counts, and captured evidence for every run. Do not assume the suite name includes the full manual smoke sequence above.

### Confirmed gaps to close manually or with additional QA assertions

- The supplied workflow test's result assertion checks only whether target Inbox count is at least a configured minimum. It does not prove complete migration, attachment integrity, correct mapping, folder accuracy, or absence of duplicates.
- Migration tests can be skipped when execution is disabled. The runner reports success when failed count is zero even if tests were skipped. **A green exit code with skipped mandatory cases is not an acceptance pass.**
- UI discovery/readiness does not prove that a project was actually saved or a connection authenticated. Verify effective persistence and operations.
- Existing configuration/examples reference an earlier build. Discover/verify locators and version paths against 4.18.1.1; do not reuse dynamic window handles.
- The email generator randomizes scenarios and can continue after an attachment failure. Check the actual source data against the intended manifest; guarantee every required scenario explicitly.
- That generator creates rich-text/OLE image objects, not true MIME `cid:` inline-image mail. Supply a separate verified MIME fixture.
- The mailbox generator documents bulk/100 GB generation as unimplemented; mock runs and local file generation are not real migrated mailbox coverage. Build/verify scale data through an approved alternative before scheduling scale tests.
- The controlled Notes generator creates Memo documents; obtain independent fixtures for calendar, contacts, tasks, and other supported classes.

Do not run the reset script as part of automatic acceptance. If reset is approved, verify the explicit mailbox allowlist and available backups, preview with `-WhatIf`, and require operator confirmation. It permanently removes email and does not establish a clean PIM baseline. Re-provision or restore targets through approved lab procedures and re-inventory them.

## 9. Execution sequence and indicative effort

Dependencies, rather than calendar dates, govern progression:

| Phase | Activity | Indicative effort | Gate |
|---|---|---|---|
| 0 | Collect release scope/support matrix; approve workloads and thresholds; restore lab; validate manifests | 0.5-1 day | Entry criteria satisfied |
| 1 | Clean install, upgrade, first-hour smoke | 0.5-1 day | No P0 smoke failure |
| 2 | Release-change tests; mail/PIM/client regression; exact reconciliation | 1-2 days | Core correctness established |
| 3 | Fault injection, restart/resume, supported compatibility lanes | 1-2 days | Recovery and required matrix pass |
| 4 | Matched performance runs and >=24-hour soak | 1-2+ days | Capacity/stability thresholds met |
| 5 | Fix verification, affected regression, final smoke, report/sign-off | 0.5-1 day plus fix time | Exit criteria satisfied |

Approximately 5-9 working days is an initial planning range with suitable parallel lab capacity, not a commitment. Large mailbox creation/migration, extra target modes, missing release information, and defects can materially extend it. Run independent lanes in parallel only when they do not share mutable databases/mailboxes.

After a fix/replacement package, record its new hash/build identity, rerun the failed case, related regression, and core smoke; repeat broader qualification when the change affects a shared migration/conversion/state component.

## 10. Results, defect evidence, and release decision

### Per-test execution record

| Run ID | Test ID | Build/hash | Environment lane | Dataset/manifest | Expected | Actual | Status | Evidence | Defect | Tester/date |
|---|---|---|---|---|---|---|---|---|---|---|
| To assign | To assign | 4.18.1.1 / pending | Pending | Pending | From approved case | Not run | Not run | Pending | None | Pending |

Statuses: **Not run, Pass, Fail, Blocked, N/A**. Automation-skipped cases map to Blocked or Not run unless approved as N/A. A valid expected negative outcome is Pass only when the error, data safety, and recovery assertions were verified.

Every defect should include severity, customer impact, supported environment, exact settings/steps, deterministic source item IDs, sanitized source/target evidence, logs, reproducibility, baseline behavior, workaround, and fix-verification result. Keep sensitive diagnostic content in approved restricted storage.

### Mandatory exit criteria

- Authentic package/build identity verified, release changes traced, and official applicability/support decisions completed.
- 100% of applicable P0 cases passed across their required lanes; no failed, blocked, skipped, or unexecuted mandatory P0 case.
- 100% of applicable P1 cases executed; all failures resolved or explicitly accepted with customer impact, verified workaround, owner, and expiry.
- No open Sev1 or Sev2 defect. No unresolved unexplained data loss/corruption, cross-user writes, source damage, or credential exposure.
- Golden-corpus reconciliation passes completely; scale reconciliation/sampling passes under the approved rules; all exclusions match pre-approved documented behavior.
- Required clean-install/upgrade, recovery, compatibility, client, performance, and soak coverage completed with acceptable evidence.
- Fixed defects retested; related regression and final smoke pass on the release-candidate package.
- Reports and known issues accurately describe remaining limitations. QA lead, engineering lead, and product/release owner record approval.

### Release recommendation

- **GO:** all mandatory exit criteria satisfied.
- **CONDITIONAL GO:** mandatory safety/P0 and severity gates satisfied; only explicitly accepted non-blocking residual risks remain.
- **NO-GO:** any mandatory gate unmet, including missing release-change qualification or unknown required platform applicability.

The final report must show case totals by priority and status, environment coverage, release-change coverage, reconciliation results, performance/soak results, unresolved defects, accepted risks, and the signed recommendation. Until execution supplies this evidence, build 4.18.1.1 remains **unqualified by this plan**.
