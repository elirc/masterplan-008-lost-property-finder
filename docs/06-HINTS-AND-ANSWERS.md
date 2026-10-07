# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Add an inclusive mode

**Hint 1 — ownership:** Begin from the `item.foundOn < cutoff` comparison in `findBefore`. Add an explicit option controlling whether the cutoff day matches.

**Hint 2 — reasoning:** Revisit the decision “Keep the cutoff strictly before”. Ask yourself: State the expected result before deciding between < and <=.

**Answer direction:** A defensible solution demonstrates this observable result: Both modes have an equality test and the UI names the selected meaning. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Show a result count

**Hint 1 — ownership:** Begin from the summary message in the submit handler of `public/app.js`. Add a summary derived from the returned array.

**Hint 2 — reasoning:** Revisit the decision “Build a new result with a manual loop”. Ask yourself: Explain which mutation would still be shared if you later add a nested metadata object.

**Answer direction:** A defensible solution demonstrates this observable result: The count is zero for no matches and never uses the source array length by mistake. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Add a category filter

**Hint 1 — ownership:** Begin from the item validation in `findBefore` and `public/fixtures.js`. Extend the flat fixture with a category and combine the two rules.

**Hint 2 — reasoning:** Revisit the decision “Build a new result with a manual loop”. Ask yourself: Explain which mutation would still be shared if you later add a nested metadata object.

**Answer direction:** A defensible solution demonstrates this observable result: The original records stay unchanged and both filters must match. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Make chronological sorting optional

**Hint 1 — ownership:** Begin from the result array built by `findBefore`. Return a sorted copy when the user requests it.

**Hint 2 — reasoning:** Revisit the decision “Use a date-only domain”. Ask yourself: Explain why the shape and actual calendar validity must be checked before string comparison.

**Answer direction:** A defensible solution demonstrates this observable result: Sorting never mutates the fixture and the default preserves source order. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Improve invalid-date feedback

**Hint 1 — ownership:** Begin from `isDateOnly`. Return or display a more specific explanation for an impossible calendar day.

**Hint 2 — reasoning:** Revisit the decision “Use a date-only domain”. Ask yourself: Explain why the shape and actual calendar validity must be checked before string comparison.

**Answer direction:** A defensible solution demonstrates this observable result: The validator still rejects the value rather than normalizing it silently. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Add a clear-results action

**Hint 1 — ownership:** Begin from the `#matches` list and `#result` message in `public/app.js`. Clear only the current matches and result message.

**Hint 2 — reasoning:** Revisit the decision “Build a new result with a manual loop”. Ask yourself: Explain which mutation would still be shared if you later add a nested metadata object.

**Answer direction:** A defensible solution demonstrates this observable result: The source register and chosen cutoff remain unchanged unless your documented policy says otherwise. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

Cutoff 2026-10-03 is validated → loop checks LP-01 through LP-05 → 01 and 02 are strictly earlier → 03 is equal and excluded → new shallow objects for the first two items enter a new result array.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
