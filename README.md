# M008 — Lost Property Finder

A desk volunteer needs to find items recorded before a chosen day without changing the original list.

This is a complete small **reference implementation and learning workshop** for the first ten MASTERPLAN builds. Study the choices, then make your own variation. The reference is finished; the exercises and your journal are deliberately unfinished.

**Main skill:** Loops and boundary comparisons. **Study pairing:** existing curriculum #8, [JavaScript-I](https://github.com/elirc/JavaScript-I). [Previous](https://github.com/elirc/masterplan-007-unit-conversion-bench) · [Next](https://github.com/elirc/masterplan-009-score-sheet-reconciler)

## Run it

Use Git and Node.js 22 or newer. There are **no package dependencies to install**.

```sh
git clone https://github.com/elirc/masterplan-008-lost-property-finder.git
cd masterplan-008-lost-property-finder
npm test
npm start
```

Open http://127.0.0.1:4300 and leave the terminal running. Stop with Ctrl+C. Run one project at a time, or use a different PORT for a second server. On PowerShell: `$env:PORT=4301` before `npm start`. The preview serves only public/ on your own computer.

`private: true` in package.json prevents accidental npm publication; it does not make this GitHub repository private. The GitHub repository is intended to be public.

## What the reference promises

Each flat item has a unique string id, a nonblank label and a real YYYY-MM-DD foundOn date. The cutoff is exclusive. Results preserve source order, return new shallow item objects and never update the input array.

Transfers the JavaScript-I cutoff lesson to a new domain; do not silently rename the source's car_year field.

## Read in this order

1. [Learning route](docs/00-START-HERE.md): a manageable session plan and readiness check.
2. [Build walkthrough](docs/01-BUILD-WALKTHROUGH.md): build from requirements to the smallest verified result.
3. [Concepts and execution traces](docs/02-CONCEPTS-AND-TRACES.md): predict, trace and explain the real code.
4. [Code tour and architecture choices](docs/03-CODE-TOUR.md): exact files and responsibilities.
5. [Debugging laboratory](docs/04-DEBUGGING-LAB.md): one worked diagnosis and two guided investigations.
6. [Six learner stories](docs/05-PRACTICE-STORIES.md): features and fixes with plans, acceptance criteria and decisions left to you.
7. [Hints and answer directions](docs/06-HINTS-AND-ANSWERS.md): consult after an attempt.
8. [Agentic coaching prompts](docs/07-AGENTIC-COACHING.md): ask for help without outsourcing the learning.
9. [Build journal and decision narrative](docs/08-BUILD-JOURNAL.md): a retrospective explanation grounded in the actual implementation.
10. [Verification](docs/VERIFICATION.md) and [blank journal](docs/JOURNAL-TEMPLATE.md).

![Reference screenshot](docs/images/preview.png)

## Know what the checks prove

npm test runs the pure JavaScript boundary regressions. Browser evidence separately covers form interaction, error recovery, layout and keyboard entry.

This is a local educational example with fictional content. There is no production deployment, external data integration, tracking, authentication or payment flow. Do not mistake the deliberately small scope for a template that already solves those additional concerns.

## Your first independent task

Add an inclusive mode: Add an explicit option controlling whether the cutoff day matches. Read its acceptance criteria, create a practice branch, and write your prediction before changing code. Keep your personal notes in `my-journal/`, which is ignored by Git.

<!-- expanded-workbook -->

## Expanded upskilling edition

[Open the expanded workshop map](docs/WORKBOOK-INDEX.md). The original companion is now supplemented by twelve substantial chapters, **15 total practice stories**, twelve saved coaching prompts, guided rebuild sessions, deeper debugging cases, test-design exercises, repeated recall and a twelve-session personal journal.

Start with one route: foundations if syntax is unfamiliar; one story if you can trace the reference; review and test design if you have already made a change. The reference code is unchanged. New features and journal entries remain your work to complete.

- [Foundations clinic](docs/09-FOUNDATIONS-CLINIC.md)
- [Guided rebuild](docs/10-GUIDED-REBUILD-SESSIONS.md)
- [Nine additional stories](docs/11-NINE-MORE-STORIES.md)
- [Agentic practice playbook](docs/13-AGENTIC-PRACTICE-PLAYBOOK.md)
- [Companion session journal](docs/17-SESSION-JOURNAL.md)
- [Mentor hints after your attempt](docs/20-MENTOR-HINTS.md)
