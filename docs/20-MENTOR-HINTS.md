# M008: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain date-only value through this project

A calendar day without a time or timezone.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain exclusive cutoff through this project

A boundary that does not include equality.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain shallow copy through this project

A new top-level object whose nested references would still be shared.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain source order through this project

The order supplied by the caller.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: Cutoff 2026-10-03

LP-01 and LP-02

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: Cutoff 2026-10-01

Empty result

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: Cutoff 2026-10-06

All five items

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** Explain why the shape and actual calendar validity must be checked before string comparison.

These records describe calendar days, not instants. Parsing them into local timestamps could introduce a timezone concern that the user never supplied. Valid fixed-width date strings can be compared chronologically.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** State the expected result before deciding between < and <=.

An item on the cutoff day does not match. This is a deliberate product decision and has its own equality test. An inclusive mode would be a separate feature, not an unnoticed operator change.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Explain which mutation would still be shared if you later add a nested metadata object.

A fresh array and shallow copies protect the flat fixture records from accidental top-level edits through the result. This is not a deep-clone guarantee for arbitrary nested objects.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** How does one equality case change the meaning of before?

The register stores calendar days, not moments on a clock. Once dates have a valid fixed-width calendar representation, strict string comparison can answer whether one day precedes another. The loop must validate records even when they would not match. A fresh result protects caller-owned data at the documented flat-object boundary.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add a date-range mode

**First hint:** The desired improvement is “Find items between two explicit bounds.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Define inclusivity for both ends; validate start before end; combine comparisons without mutating records.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Equal bounds and reversed bounds follow documented different policies.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose inclusive or exclusive endpoints. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Show the earliest matching day

**First hint:** The desired improvement is “Add a derived summary without sorting the source.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Compute from returned matches; handle no matches; keep result order unchanged.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Earliest-day summary agrees with the list and is absent when empty.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose empty-summary wording. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add an ID lookup

**First hint:** The desired improvement is “Compare exact identity search with date filtering.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Accept an ID string; validate it separately; return a clearly labeled match or no-match result.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Duplicate labels never cause the wrong ID to be returned.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whitespace handling for IDs. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add a fixture validation report

**First hint:** The desired improvement is “Explain multiple malformed records before filtering.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Separate validation from matching in a branch; collect row-specific errors; keep invalid results from looking complete.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A bad nonmatching row is still reported.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose all-errors versus first-error policy. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Add a leap-year worksheet

**First hint:** The desired improvement is “Reinforce calendar rules through examples.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Choose century and non-century years; hand-author valid and invalid days; compare with isDateOnly.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The worksheet distinguishes 2000 from 1900 without relying only on divisibility by four.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose additional calendar examples. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add a result selection

**First hint:** The desired improvement is “Let a reader inspect one returned flat record.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Store a selected ID; derive the displayed record from current matches; clear or explain missing selection after a new search.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A changed cutoff cannot display an unrelated stale item.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose missing-selection policy. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add a source-count summary

**First hint:** The desired improvement is “Distinguish register size from matches.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Display source and result lengths with different labels; update after each search; avoid changing fixture data.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Zero matches can coexist with a nonempty source register.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose concise count labels. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Reject duplicate result identities earlier

**First hint:** The desired improvement is “Improve duplicate-ID feedback at input validation.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Create a repeated-ID fixture; locate the existing duplicate check; make its diagnostic identify the conflict.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Different labels do not make a repeated ID acceptable.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the error detail exposed. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Document nested-data limits

**First hint:** The desired improvement is “Prepare for a future richer record shape.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Add a separate nested metadata experiment; demonstrate shallow-copy sharing; propose a supported copy policy before changing production shape.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The guide does not claim deep immutability for the flat reference.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether nested metadata belongs in the next version. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
