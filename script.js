'use strict';
const stepContent = {
  capture: { kicker: '01 / Auto-capture', title: 'Notice what is worth remembering.', body: 'Each session automatically captures proposed insights: corrections, decisions and their reasoning, recurring assumptions, and relevant constraints. I can also invoke learning capture mid-session.' },
  stage: { kicker: '02 / Stage', title: 'Collect proposals before changing the system.', body: 'Captured insights are logged as proposed learnings. A weekly prompt brings learnings requiring manual review back to me. Eligible themes can follow the auto-approval rules I explicitly authorized.' },
  review: { kicker: '03 / Review & approve', title: 'Automate selectively. Review where it matters.', body: 'I set the approval rules. Green learnings in authorized themes can be auto-approved; yellow learnings require manual review; red learnings need closer examination. The routes below show where human review remains part of the loop.' },
  apply: { kicker: '04 / Apply', title: 'Put the lesson where it will be used.', body: 'Approved learnings are merged into dedicated context and skill folders in GitHub, keeping improvements separate, versioned, and easy to reuse. The change history makes iterative updates traceable; skill-specific lessons inform reviewed updates to the skill itself.' },
  improve: { kicker: '05 / Improve', title: 'Bring better context into the next session.', body: 'Future skill use draws on the updated context and instructions. Recurring audits check drift and stale assumptions; a biweekly efficacy review helps me consolidate or remove skills based on use and useful outcomes.' }
};
const steps = [...document.querySelectorAll('.step')];
steps.forEach(button => {
  button.addEventListener('click', () => {
    const content = stepContent[button.dataset.step];
    steps.forEach(step => {
      const selected = step === button;
      step.classList.toggle('active', selected);
      step.setAttribute('aria-pressed', String(selected));
    });
    document.getElementById('detail-kicker').textContent = content.kicker;
    document.getElementById('detail-title').textContent = content.title;
    document.getElementById('detail-body').textContent = content.body;
    document.getElementById('approval-detail').hidden = button.dataset.step !== 'review';
  });
});
