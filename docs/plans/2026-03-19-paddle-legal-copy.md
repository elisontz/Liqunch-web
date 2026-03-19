# Paddle Legal Copy Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the legal pages in `olauncher-web` match Paddle's website review expectations for refund windows and business-name visibility.

**Architecture:** The site already renders legal pages from localized content objects. The change should stay in the content layer, with tests guarding the compliance text so future copy edits do not regress the Paddle review requirements.

**Tech Stack:** Next.js, TypeScript, Vitest

---

### Task 1: Add failing legal-copy tests

**Files:**
- Modify: `olauncher-web/tests/legal-copy.test.ts`
- Test: `olauncher-web/tests/legal-copy.test.ts`

**Step 1: Write the failing test**

Add assertions that:
- both locale refund bodies include `14`, `7`, and `5`
- both locale refund bodies mention `Paddle`
- both locale refund bodies do not contain case-by-case review wording
- both locale terms bodies explicitly reference `oLauncher`
- both locale refund FAQ answers mention Paddle and a fixed window

**Step 2: Run test to verify it fails**

Run: `npm test -- tests/legal-copy.test.ts`
Expected: FAIL because the current copy still uses case-by-case refund wording and omits explicit refund windows.

### Task 2: Update localized copy

**Files:**
- Modify: `olauncher-web/content/en.ts`
- Modify: `olauncher-web/content/zh.ts`
- Test: `olauncher-web/tests/legal-copy.test.ts`

**Step 1: Write minimal implementation**

Update:
- English and Chinese terms copy
- English and Chinese refund policy copy
- English and Chinese refund FAQ answers

**Step 2: Run targeted tests**

Run: `npm test -- tests/legal-copy.test.ts`
Expected: PASS

### Task 3: Run broader verification

**Files:**
- Test: `olauncher-web/tests/sales-page.test.tsx`
- Test: `olauncher-web/tests/site.test.ts`

**Step 1: Run relevant suite**

Run: `npm test`
Expected: PASS
