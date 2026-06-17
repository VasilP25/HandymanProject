import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable("Users", {
  id: integer("id").primaryKey(),
  password: text("Password").notNull(),
  role: text("Role").notNull(),
  username: text("Username").notNull(),
  verified: boolean("Verified").notNull(),
  email: text("Email").notNull(),
});

export const region = pgTable("Region", {
  id: integer("id").primaryKey(),
  region: text("Region").notNull(),
});

export const ad = pgTable("Ad", {
  id: integer("id").primaryKey(),
  title: text("Title").notNull(),
  price: integer("Price").notNull(),
  receipt: boolean("Receipt").notNull(),
  createdBy: integer("CreatedBy")
    .notNull()
    .references(() => users.id),
  created: text("Created").notNull(),
  description: text("Description").notNull(),
  region: integer("Region")
    .notNull()
    .references(() => region.id),
});
