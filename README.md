# NISL First Lessons

A lightweight bilingual lesson generator for Newton International School Lagoon staff.

## Purpose

NISL First Lessons is designed for flexible starts, timetable uncertainty, new classes, cover, transition and tutor time. Staff choose an age band, lesson length and focus, then receive a ready-to-teach lesson using a quality-controlled activity bank.

The site is intentionally static and dependency-free for the MVP. It does not require a login, database, API key or build step.

## Current features

- English and Arabic interface and activity content
- Age bands from KG / EYFS to Years 10–12
- 20, 40, 60 and 80 minute lesson structures
- Three pathways:
  - Get to know them
  - Learn something together
  - Build our classroom
- Subject icebreakers for English, Maths, Science, Humanities, Computing, Languages, Art & Design and PE
- Optional Flourish connection using Ready, Respectful, Responsible and Safe
- Teacher lens and age adaptation guidance
- Student display mode
- Printable lesson view
- Quick simplify and stretch prompts
- Lesson 2 and alternative lesson generation
- 30+ bilingual activity structures across the lesson bank

## Files

- `index.html` - interface and lesson display
- `styles.css` - NISL / Flourish-inspired design system
- `activities.js` - core bilingual activity bank
- `activities-extra.js` - additional age and subject coverage
- `app.js` - lesson matching, timing, bilingual interface and display logic
- `netlify.toml` - Netlify configuration and security headers

## Netlify

This repository can be deployed directly from the `main` branch.

There is no build command. The publish directory is the repository root (`.`).

## Design principles

1. No prior class knowledge required.
2. Board, paper and pens should be enough for most lessons.
3. Activities should give the teacher useful information about the class, not simply fill time.
4. Flourish is introduced lightly while the wider behaviour framework develops.
5. Student voice activities should be useful for ongoing consultation without presenting draft behaviour procedures as final policy.
6. The activity bank is quality controlled rather than generated live by AI.

## Possible next phase

- Save favourite lessons locally
- Copy lesson to clipboard / Google Classroom-friendly format
- Add school crest and final approved brand assets
- Add more subject-specific packs
- Optional Netlify Function for AI customisation while keeping the approved activity structure as a guardrail
- Anonymous staff rating and feedback on activities
