# Frontend Mentor - Hotel Booking Confirmation Page Solution

This is a solution to the [Hotel booking confirmation page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/hotel-booking-confirmation-page-c-M5q6w10M). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Hotel Booking Confirmation Page Solution](#frontend-mentor---hotel-booking-confirmation-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- View layered overlapping cards (receipt and welcome card) with subtle hover animations

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/yoz0816/hotel-booking-confirmation)
- Live Site URL: [GitHub Pages Live Preview](https://yoz0816.github.io/hotel-booking-confirmation/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom styling & typography
- CSS Grid (for global sidebar/main layout & bottom card section)
- Flexbox (for navigation, header controls, and card content alignment)
- Mobile-first CSS Media Queries
- Custom CSS Transforms & Transitions (for card rotation and hover fan-out effects)

### What I learned

During this challenge, I practiced structuring a multi-section dashboard layout using CSS Grid and Flexbox. 

Key technical takeaways included:
1. **Layering & Overlapping Elements:** Using CSS `transform: rotate()`, negative margins, and `z-index` to create realistic stacked physical cards that fan out interactively on hover.
2. **Accessible Focus States:** Adding `:focus-visible` styles to ensure button and navigation elements are clearly highlighted when navigating via keyboard.
3. **Responsive Media Queries:** Handling full-page structural collapses (converting a 2-column sidebar grid to a stacked mobile view) while resetting rotated card transforms to prevent horizontal page overflow.
