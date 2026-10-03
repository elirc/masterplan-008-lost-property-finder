# M008: practice stories 07–15

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

These nine proposals extend the original six stories. They are intentionally not implemented in the reference. Each plan gives you boundaries and a route, while leaving the actual patch, exact fixtures and a product decision to you. Start with one story; do not bundle all nine into a single difficult-to-review change.

## Story 07: Add a date-range mode

**User story:** As a user or learner of Lost Property Finder, I want to find items between two explicit bounds so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Equal bounds and reversed bounds follow documented different policies.

**Decision you own:** Choose inclusive or exclusive endpoints. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `findBefore and isDateOnly` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Equal bounds and reversed bounds follow documented different policies.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Define inclusivity for both ends.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Validate start before end.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Combine comparisons without mutating records.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Equal bounds and reversed bounds follow documented different policies.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 07: Add a date-range mode in Lost Property Finder.
Acceptance requirement: Equal bounds and reversed bounds follow documented different policies.
My unresolved choice: Choose inclusive or exclusive endpoints.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 08: Show the earliest matching day

**User story:** As a user or learner of Lost Property Finder, I want to add a derived summary without sorting the source so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Earliest-day summary agrees with the list and is absent when empty.

**Decision you own:** Choose empty-summary wording. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `findBefore and isDateOnly` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Earliest-day summary agrees with the list and is absent when empty.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Compute from returned matches.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Handle no matches.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Keep result order unchanged.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Earliest-day summary agrees with the list and is absent when empty.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 08: Show the earliest matching day in Lost Property Finder.
Acceptance requirement: Earliest-day summary agrees with the list and is absent when empty.
My unresolved choice: Choose empty-summary wording.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 09: Add an ID lookup

**User story:** As a user or learner of Lost Property Finder, I want to compare exact identity search with date filtering so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Duplicate labels never cause the wrong ID to be returned.

**Decision you own:** Choose whitespace handling for IDs. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `findBefore and isDateOnly` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Duplicate labels never cause the wrong ID to be returned.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Accept an ID string.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Validate it separately.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Return a clearly labeled match or no-match result.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Duplicate labels never cause the wrong ID to be returned.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 09: Add an ID lookup in Lost Property Finder.
Acceptance requirement: Duplicate labels never cause the wrong ID to be returned.
My unresolved choice: Choose whitespace handling for IDs.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 10: Add a fixture validation report

**User story:** As a user or learner of Lost Property Finder, I want to explain multiple malformed records before filtering so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** A bad nonmatching row is still reported.

**Decision you own:** Choose all-errors versus first-error policy. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `findBefore and isDateOnly` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **A bad nonmatching row is still reported.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Separate validation from matching in a branch.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Collect row-specific errors.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Keep invalid results from looking complete.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “A bad nonmatching row is still reported.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 10: Add a fixture validation report in Lost Property Finder.
Acceptance requirement: A bad nonmatching row is still reported.
My unresolved choice: Choose all-errors versus first-error policy.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 11: Add a leap-year worksheet

**User story:** As a user or learner of Lost Property Finder, I want to reinforce calendar rules through examples so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** The worksheet distinguishes 2000 from 1900 without relying only on divisibility by four.

**Decision you own:** Choose additional calendar examples. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `findBefore and isDateOnly` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **The worksheet distinguishes 2000 from 1900 without relying only on divisibility by four.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Choose century and non-century years.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Hand-author valid and invalid days.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Compare with isDateOnly.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “The worksheet distinguishes 2000 from 1900 without relying only on divisibility by four.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 11: Add a leap-year worksheet in Lost Property Finder.
Acceptance requirement: The worksheet distinguishes 2000 from 1900 without relying only on divisibility by four.
My unresolved choice: Choose additional calendar examples.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 12: Add a result selection

**User story:** As a user or learner of Lost Property Finder, I want to let a reader inspect one returned flat record so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** A changed cutoff cannot display an unrelated stale item.

**Decision you own:** Choose missing-selection policy. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `findBefore and isDateOnly` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **A changed cutoff cannot display an unrelated stale item.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Store a selected ID.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Derive the displayed record from current matches.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Clear or explain missing selection after a new search.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “A changed cutoff cannot display an unrelated stale item.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 12: Add a result selection in Lost Property Finder.
Acceptance requirement: A changed cutoff cannot display an unrelated stale item.
My unresolved choice: Choose missing-selection policy.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 13: Add a source-count summary

**User story:** As a user or learner of Lost Property Finder, I want to distinguish register size from matches so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Zero matches can coexist with a nonempty source register.

**Decision you own:** Choose concise count labels. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `findBefore and isDateOnly` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Zero matches can coexist with a nonempty source register.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Display source and result lengths with different labels.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Update after each search.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Avoid changing fixture data.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Zero matches can coexist with a nonempty source register.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 13: Add a source-count summary in Lost Property Finder.
Acceptance requirement: Zero matches can coexist with a nonempty source register.
My unresolved choice: Choose concise count labels.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 14: Reject duplicate result identities earlier

**User story:** As a user or learner of Lost Property Finder, I want to improve duplicate-ID feedback at input validation so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Different labels do not make a repeated ID acceptable.

**Decision you own:** Choose the error detail exposed. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `findBefore and isDateOnly` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Different labels do not make a repeated ID acceptable.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Create a repeated-ID fixture.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Locate the existing duplicate check.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Make its diagnostic identify the conflict.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Different labels do not make a repeated ID acceptable.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 14: Reject duplicate result identities earlier in Lost Property Finder.
Acceptance requirement: Different labels do not make a repeated ID acceptable.
My unresolved choice: Choose the error detail exposed.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 15: Document nested-data limits

**User story:** As a user or learner of Lost Property Finder, I want to prepare for a future richer record shape so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** The guide does not claim deep immutability for the flat reference.

**Decision you own:** Choose whether nested metadata belongs in the next version. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `findBefore and isDateOnly` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **The guide does not claim deep immutability for the flat reference.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Add a separate nested metadata experiment.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Demonstrate shallow-copy sharing.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Propose a supported copy policy before changing production shape.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “The guide does not claim deep immutability for the flat reference.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 15: Document nested-data limits in Lost Property Finder.
Acceptance requirement: The guide does not claim deep immutability for the flat reference.
My unresolved choice: Choose whether nested metadata belongs in the next version.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.
