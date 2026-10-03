# Building Lost Property Finder, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

Each flat item has a unique string id, a nonblank label and a real YYYY-MM-DD foundOn date. The cutoff is exclusive. Results preserve source order, return new shallow item objects and never update the input array.

The smallest useful result answers this user need: A desk volunteer needs to find items recorded before a chosen day without changing the original list. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Choose a representable day

The input format is deliberately narrow: a four-digit year, two-digit month and two-digit day, with year at least one. The validator first checks the shape, then actual calendar limits including leap years. A regular expression alone cannot reject every impossible date such as April 31.

**Pause and produce evidence:** Cutoff 2026-10-03. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Trace the loop manually

Write the cutoff next to each of the five found dates and mark true or false for strict comparison. Only after completing that table should you run the function. Preserving input order means the output order follows the fixture, not an unexplained sort. If you want sorted results later, it must be an explicit new behavior.

**Pause and produce evidence:** Cutoff 2026-10-01. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Protect the caller’s records

The function creates a result array and copies each accepted flat item. It does not splice, sort or change the supplied array. The test freezes the inputs and then changes a returned label to demonstrate independence at that top level. This is a stronger explanation than saying the code is immutable without defining the boundary.

**Pause and produce evidence:** Cutoff 2026-10-06. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Treat no matches as normal

The UI clears prior result elements before each new search. An empty result gets an ordinary message rather than an exception. Invalid input follows a separate error path. That distinction prevents yesterday’s successful results from remaining on screen under a new, unsuccessful search.

**Pause and produce evidence:** 2024-02-29. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. M001 additionally contains the actual two-file baseline and a separate opening-time correction.

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose and explain strict versus inclusive cutoff behavior.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
