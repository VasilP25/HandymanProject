# AGENTS.md

## Project Overview

This project is built with:

* Next.js
* NeonDB (PostgreSQL)
* Drizzle ORM
* Tailwind CSS

The primary goal is to maintain a clean, scalable, and maintainable codebase. Code should be modular, reusable, and easy to extend.

## Development Principles

### Component Structure

* Create small, reusable components.
* Avoid large monolithic components.
* Each component should have a single responsibility.
* All reusable components must be stored in the `src/components` folder.
* Reuse existing components before creating new ones.

### Hooks

* All custom React hooks must be stored in `src/hooks`.
* Hooks should encapsulate reusable logic.
* Avoid duplicating state management or fetching logic across components.

### Backend Logic

* Backend operations must never be placed directly inside UI components.
* All backend functionality should be stored in a dedicated folder.
* Backend files should be organized by feature/domain.
* Database access should be isolated from UI code.

Example:

```txt
src/server/
  ads.ts
  users.ts
  auth.ts
```

### Database Queries

Performance is important.

Always fetch only the data that is required.

Preferred:

* Filter in the database query.
* Select only required columns.
* Use pagination when appropriate.
* Use sorting and filtering at database level.

Avoid:

* Loading entire tables and filtering in JavaScript.
* Fetching unnecessary columns.
* Performing expensive client-side filtering when the database can do it.

### Drizzle ORM

* Use Drizzle ORM for all database operations.
* Prefer typed queries over raw SQL.
* Use relations when appropriate.
* Reuse existing schema definitions.
* Respect existing table structures and relationships.

### Database Changes

Never modify the database structure without explicit approval.

Before creating or modifying:

* tables
* columns
* indexes
* constraints
* relations
* migrations

ask for confirmation first.

### UI / UX

The UI should be modern, clean, and professional.

Requirements:

* Use Tailwind CSS.
* Use visually appealing colors.
* Avoid overly muted or washed-out designs.
* Use subtle shadows, hover states, and transitions.
* Effects should improve the experience but never become distracting.
* Prioritize readability and usability.
* Ensure responsive layouts for desktop and mobile devices.

### Code Quality

Before completing any task:

* Check for reusable logic.
* Extract reusable components when appropriate.
* Keep files focused on a single responsibility.
* Remove duplicated code.
* Follow existing project conventions.
* Write clean and readable TypeScript.
* Prefer maintainability over short-term convenience.

### Existing Database Schema

Always use the existing schema and relationships defined in this document.

Do not invent tables, columns, or relations that are not explicitly described.

If required functionality cannot be implemented with the existing schema, ask for clarification before making schema changes.


## Database Schema

### Users

Stores registered users.

| Column   | Type    |
| -------- | ------- |
| id       | integer |
| Password | text    |
| Role     | text    |
| Username | text    |
| Verified | boolean |
| Email    | text    |

Rules:

* `id` is the primary key.
* Passwords must always be hashed.
* Email should be unique.
* Username should be unique.

---

### Ad

Stores marketplace advertisements.

| Column      | Type    |
| ----------- | ------- |
| id          | integer |
| Title       | text    |
| Price       | integer |
| Receipt     | boolean |
| CreatedBy   | integer |
| Created     | text    |
| Description | text    |
| Region      | integer |

Relations:

* `CreatedBy` → `Users.id`
* `Region` → `Region.id`

Rules:

* Always join with Users when creator information is required.
* Always join with Region when region name is required.
* Do not store username or region name directly in the Ad table.
* Filter ads at database level whenever possible.

Example:

```ts
const ads = await db
  .select()
  .from(ad)
  .where(eq(ad.region, regionId));
```

---

### Region

Lookup table containing predefined regions.

| Column | Type    |
| ------ | ------- |
| id     | integer |
| Region | text    |

Rules:

* Contains predefined values.
* Should rarely change.
* Do not allow users to create, edit, or delete regions.
* Use for filtering and display purposes only.

---

## Known Relations

Ad.CreatedBy → Users.id

Ad.Region → Region.id

## Additional Project Rules

### Existing Project Structure

Always follow the existing folder structure.

```txt
src/
├── app/
├── components/
├── hooks/
├── server/
├── db/
```

Do not create alternative folders for the same purpose.

Examples:

* Components must be stored in `src/components`
* Custom hooks must be stored in `src/hooks`
* Backend operations must be stored in `src/server`
* Database-related files must be stored in `src/db`

---

### Database Safety

The existing database schema is considered the source of truth.

Do not:

* Create new tables
* Create new columns
* Rename tables
* Rename columns
* Change column types
* Create migrations
* Create indexes
* Modify relationships

without explicit approval.

If a feature requires schema changes, explain why and ask for confirmation first.

---

### Database Query Rules

Always fetch the minimum amount of data required.

Preferred:

* Use WHERE clauses
* Use LIMIT when appropriate
* Select only required columns
* Filter in the database query

Avoid:

* Loading full tables
* Client-side filtering when database filtering is possible
* Selecting columns that are not used

Good example:

```ts
const ads = await db
  .select({
    id: ad.id,
    title: ad.Title,
    price: ad.Price,
  })
  .from(ad)
  .where(eq(ad.Region, regionId));
```

Bad example:

```ts
const ads = await db.select().from(ad);

const filteredAds = ads.filter(
  x => x.Region === regionId
);
```

---

### Relationships

Known relationships:

```txt
Ad.CreatedBy → Users.id
Ad.Region → Region.id
```

When related data is required, use joins instead of additional unnecessary queries.

Example:

```ts
const ads = await db
  .select()
  .from(ad)
  .leftJoin(users, eq(ad.CreatedBy, users.id));
```

---

### Authentication Rules

Users.Password:

* Must always be hashed.
* Must never be sent to the frontend.
* Must never be returned from API responses.
* Must never be logged.

Users.Verified:

* Indicates whether the account has been verified.

Users.Role:

* Used for authorization.
* Always validate permissions before privileged operations.

---

### Frontend Rules

The frontend should be:

* Modern
* Clean
* Responsive
* Fast
* Easy to use

Use:

* Tailwind CSS
* Consistent spacing
* Rounded corners
* Subtle shadows
* Smooth transitions
* Hover states
* Loading states
* Error states
* Empty states

Avoid:

* Excessive animations
* Excessive gradients
* Cluttered layouts
* Overly muted designs
* Inline styles when Tailwind can be used

---

### Component Rules

Before creating a new component:

1. Check whether a reusable component already exists.
2. Reuse existing components whenever possible.
3. Extract reusable UI into shared components.

Avoid components exceeding 300 lines whenever possible.

If a component becomes too large:

* Split UI into child components.
* Move logic into hooks.
* Move backend operations into server files.

---

### Hook Rules

Custom hooks belong in:

```txt
src/hooks/
```

Use hooks for:

* Data fetching
* Form logic
* State management
* Reusable business logic

Do not place backend logic inside hooks.

---

### Backend Rules

Backend operations belong in:

```txt
src/server/
```

Organize files by domain.

Example:

```txt
src/server/
├── ads.ts
├── users.ts
├── auth.ts
```

Do not place database queries directly inside page components unless absolutely necessary.

---

### Code Quality Checklist

Before completing any task verify:

* No duplicated code exists.
* Reusable components have been extracted.
* Database queries are optimized.
* Unused code has been removed.
* Types are properly defined.
* Responsive behavior works.
* Error handling exists.
* Loading states exist where appropriate.
* Existing project conventions are respected.

---

### If Unsure

If any requirement is unclear:

* Ask for clarification.
* Do not make assumptions about database structure.
* Do not invent tables, columns, relationships, or business rules.
* Use only information explicitly defined in this document.
