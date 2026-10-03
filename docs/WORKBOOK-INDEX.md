# M008: expanded learning workshop

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

This second learning edition extends the original companion. The working implementation is unchanged. The original six stories plus nine new stories give you **15 unfinished practice stories**. The new chapters add guided reconstruction, explicit test design, worked debugging routes, decision reviews and repeated recall. None of the proposed features is silently claimed as implemented.

## Choose a route instead of reading everything first

If syntax still feels unfamiliar, begin with the foundations clinic and one ordinary trace. If you can explain the reference, choose one story and consult only the relevant sections. If you already implemented a variation, use the test-design and review workshops to challenge it. The aim is increasing independence, not completing a reading quota.

**Current learning target:** Loops and boundary comparisons. Pair this with existing curriculum #8, [JavaScript-I](https://github.com/elirc/JavaScript-I). The broader MASTERPLAN checkpoint is #8.

## What to keep saying in your own words

The register stores calendar days, not moments on a clock. Once dates have a valid fixed-width calendar representation, strict string comparison can answer whether one day precedes another. The loop must validate records even when they would not match. A fresh result protects caller-owned data at the documented flat-object boundary.

## Chapter map

- [Foundations clinic: vocabulary, diagrams and small predictions](09-FOUNDATIONS-CLINIC.md)
- [Guided rebuild: reconstruct the contract in small slices](10-GUIDED-REBUILD-SESSIONS.md)
- [Stories 07–15: nine additional implementation workshops](11-NINE-MORE-STORIES.md)
- [Debugging casebook: hypotheses, experiments and recovery](12-DEBUGGING-CASEBOOK.md)
- [Agentic practice: bounded prompts and independent review](13-AGENTIC-PRACTICE-PLAYBOOK.md)
- [Retrieval workbook: repeated recall with changed examples](14-RETRIEVAL-AND-TRANSFER.md)
- [Architecture lab: compare alternatives with evidence](15-ARCHITECTURE-DECISION-LAB.md)
- [Test design: oracles, boundaries and useful failures](16-TEST-DESIGN-WORKSHOP.md)
- [Companion journal: twelve guided learning sessions](17-SESSION-JOURNAL.md)
- [Independent capstone: a variation you own](18-INDEPENDENT-CAPSTONE.md)
- [Review and handoff: explain a trustworthy change](19-REVIEW-AND-HANDOFF.md)
- [Mentor hints: answer directions after your attempt](20-MENTOR-HINTS.md)

## All fifteen stories

Stories 01–06 remain in [the original practice chapter](05-PRACTICE-STORIES.md), now with added planning checkpoints. Stories 07–15 are in [the new implementation workshops](11-NINE-MORE-STORIES.md). Each includes a bounded plan, acceptance evidence, a choice for you to make, a review route and a saved coaching prompt.

| Story | Exercise | Where |
|---|---|---|
| 01 | Add an inclusive mode | Original practice chapter |
| 02 | Show a result count | Original practice chapter |
| 03 | Add a category filter | Original practice chapter |
| 04 | Make chronological sorting optional | Original practice chapter |
| 05 | Improve invalid-date feedback | Original practice chapter |
| 06 | Add a clear-results action | Original practice chapter |
| 07 | Add a date-range mode | Nine more stories |
| 08 | Show the earliest matching day | Nine more stories |
| 09 | Add an ID lookup | Nine more stories |
| 10 | Add a fixture validation report | Nine more stories |
| 11 | Add a leap-year worksheet | Nine more stories |
| 12 | Add a result selection | Nine more stories |
| 13 | Add a source-count summary | Nine more stories |
| 14 | Reject duplicate result identities earlier | Nine more stories |
| 15 | Document nested-data limits | Nine more stories |

## How repetition is used

The same important idea reappears as a definition, a concrete prediction, a failure diagnosis, a feature decision and a later recall question. Those are different tasks. Do not count rereading the same sentence five times as five successful retrieval attempts. Close the explanation, change one input or condition, and produce a new answer before checking it.

Work in short sessions and leave a specific next action in your journal. A useful stopping point might be one explained trace, one confirmed hypothesis or one reviewed acceptance example. You do not need to implement every optional extension before progressing to the next project.

## Evidence labels

The existing verification record describes checks actually run against the reference. New casebook incidents are hypothetical training scenarios. Saved prompts are instructions for future use, not records of assistant conversations that already happened. Journal fields are blank on purpose. Distinguish reference evidence, your current observation and a proposed experiment whenever you write about the project.
