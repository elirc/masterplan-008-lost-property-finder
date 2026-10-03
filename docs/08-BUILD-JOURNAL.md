# Build journal: Lost Property Finder

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A desk volunteer needs to find items recorded before a chosen day without changing the original list.

The main temptation was to make the project larger than its learning target. The useful boundary is **loops and boundary comparisons**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

Each flat item has a unique string id, a nonblank label and a real YYYY-MM-DD foundOn date. The cutoff is exclusive. Results preserve source order, return new shallow item objects and never update the input array.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Use a date-only domain

These records describe calendar days, not instants. Parsing them into local timestamps could introduce a timezone concern that the user never supplied. Valid fixed-width date strings can be compared chronologically.

**What a learner should challenge:** Explain why the shape and actual calendar validity must be checked before string comparison.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Keep the cutoff strictly before

An item on the cutoff day does not match. This is a deliberate product decision and has its own equality test. An inclusive mode would be a separate feature, not an unnoticed operator change.

**What a learner should challenge:** State the expected result before deciding between < and <=.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Build a new result with a manual loop

A fresh array and shallow copies protect the flat fixture records from accidental top-level edits through the result. This is not a deep-clone guarantee for arbitrary nested objects.

**What a learner should challenge:** Explain which mutation would still be shared if you later add a nested metadata object.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `findBefore and isDateOnly`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
