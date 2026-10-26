# Design a Responsive IT Student Portfolio Website

## Project goal

Design a polished, modern, professional IT student portfolio website for an HTML and CSS course assignment.

The website must satisfy every requirement listed below. Prioritize clean visual design, excellent usability, semantic HTML structure, accessibility, responsive layouts, and maintainable CSS.

This is an educational project demonstrating a deeper understanding of HTML5 and CSS3. Do not create a generic template with only decorative elements. Every section must have a clear purpose.

## 1. Visual direction

Create a modern, elegant, professional portfolio with:
- A light background, dark navy text, and blue accents.
- Clear visual hierarchy and generous whitespace.
- A consistent spacing system, typography scale, and color palette.
- Subtle borders, restrained shadows, and polished project cards.
- A clean layout that looks professional without unnecessary animations or decoration.
- A visually distinctive but accessible design suitable for an IT student seeking opportunities in software testing, web development, and cloud technologies.

Use CSS Grid and Flexbox where appropriate. The layout should look intentional, balanced, and complete on all screen sizes.

## 2. Required page structure

### Header and navigation
- A semantic header containing a logo or text-based site identity.
- A navigation menu with links to Home, About, Skills, Projects, and Contact.
- Clear keyboard focus indicators and descriptive link text.
- A responsive navigation layout suitable for mobile screens.

### Main content
Use a semantic `<main>` element for the primary page content.

Include:
- A hero section with one clear `<h1>`, a short introduction, and a link to the projects section.
- An About section introducing the student and their professional interests.
- A Skills section with clearly grouped technical skills.
- A Projects section featuring at least three distinct project cards.
- A Contact section with contact information and a complete contact form.

Use a logical heading hierarchy with at least three heading levels: `<h1>`, `<h2>`, and `<h3>`. Do not skip heading levels without a semantic reason.

### Project cards
Display at least three projects. Placeholder projects are acceptable.

Each project card should contain:
- A project image or screenshot.
- A descriptive image alternative (`alt` text).
- A project title using `<h3>`.
- A concise project description.
- Technologies used.
- A descriptive link to view the project or its source code.

Use meaningful image placeholders and avoid broken image assets. Include appropriate image dimensions and demonstrate how images should scale responsively.

### Aside
Include a real semantic `<aside>` containing supplementary information related to the portfolio, such as:
- Current learning focus.
- Professional interests.
- Technologies currently being explored.

Integrate it naturally into the layout, for example alongside the About section on desktop and below it on mobile. It must be meaningful complementary content, not an empty decorative sidebar.

### External link
Include at least one clearly identifiable link to an external website.

### Contact form
Create a complete, visually polished contact form containing all of the following:
- Name field.
- Email field.
- Website field.
- Telephone number field.
- A dropdown (`<select>`).
- A checkbox with an associated label.
- A multiline message field (`<textarea>`).
- A submit button.

Use appropriate input types, explicit labels, helpful instructions, and clear required-field indicators. Ensure controls are easy to operate with a keyboard and on touchscreens.

Do not imply that the form sends messages successfully unless a working submission mechanism exists.

### Contact information
Include a separate, clearly visible area for contact details, with placeholders where actual contact information is not provided.

### Footer
Include a semantic `<footer>` with copyright information and useful navigation or contact links.

## 3. Accessibility requirements

Design with WCAG 2.2 Level AA as the target.

Pay attention to:
- Semantic HTML landmarks and a logical document structure.
- A logical heading hierarchy.
- Sufficient text and interface contrast.
- Visible keyboard focus indicators.
- Keyboard-accessible navigation and controls.
- Explicitly associated form labels.
- Descriptive link text.
- Meaningful alt text for informative images and empty alt attributes for purely decorative images.
- Responsive text and layouts that support zoom and reflow.
- Touch-friendly interactive elements.
- Clear form instructions and validation feedback.

Do not rely on color alone to communicate information. Avoid unnecessary ARIA attributes when native HTML elements provide the required semantics.

## 4. Responsive design

Design for mobile, tablet, and desktop.

The layout must adapt smoothly to different viewport widths:
- Mobile: a clear single-column layout with readable text, accessible controls, and appropriately sized project cards.
- Tablet: balanced spacing and a suitable intermediate layout.
- Desktop: a well-proportioned content area with a refined multi-column layout where appropriate.

Avoid horizontal overflow, fixed-width content that breaks on small screens, and images that distort their aspect ratios.

## 5. HTML and CSS quality

The assignment requires exemplary HTML and ambitious, well-considered CSS.

The intended implementation should demonstrate:
- Semantic HTML5 elements.
- Correct nesting and valid markup.
- Unique IDs and properly associated form labels.
- CSS custom properties in `:root` for colors, spacing, typography, and other reusable design tokens.
- A maintainable CSS structure without unnecessary duplication.
- Appropriate use of Grid, Flexbox, responsive units, and media queries.
- Consistent hover, focus, and interaction states.
- Comments explaining any deliberate deviation from common HTML or CSS practices.

Use plain HTML5 and CSS3 as the implementation target. Do not require React, Bootstrap, Tailwind CSS, or JavaScript frameworks.

## 6. Expected result

Generate a complete, cohesive portfolio design rather than an isolated component.

Show the entire page from header to footer. Make all required sections visually identifiable and include realistic sample content instead of excessive lorem ipsum.

The design should be attractive enough for a real portfolio, but its structure and implementation requirements must remain understandable to an HTML/CSS student.

Prioritize the assignment requirements, accessibility, responsive behavior, and maintainability over decorative effects.
