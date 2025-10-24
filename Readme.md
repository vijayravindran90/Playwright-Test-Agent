**Playwright Test Agents**

Playwright comes with three Playwright Test Agents out of the box: 
🎭 planner, 
🎭 generator and 
🎭 healer.

You can start adding to your project using the ***init-agents*** command
``npx playwright init-agents --loop=vscode``

**Planner**

- Planner agent explores your app and produces a test plan for one or many scenarios and user flows.

As an example you can refer to the home page and navigation test planner


**Generator**

- Generator agent uses the Markdown plan to produce executable Playwright Tests. It verifies selectors and assertions live as it performs the scenarios..

As an example you can refer to the homepage-navigation.spec.ts test script created by Test agent generator

**Healer**

When the test fails, the healer agent:

- Replays the failing steps
- Inspects the current UI to locate equivalent elements or flows
- Suggests a patch (e.g., locator update, wait adjustment, data fix)
- Re-runs the test until it passes or until guardrails stop the loop

For an example when the above created test script fails due to mismatch in locator, on selecting Healer and run a **prompt** of ``Fix the test`` should resolve the locator issue

**Run the Playwright script**

``npm run test``