import { asc } from "drizzle-orm";

import { db } from "@/db";
import { region } from "@/db/schema";

export async function getRegions() {
  return db
    .select({
      id: region.id,
      name: region.region,
    })
    .from(region)
    .orderBy(asc(region.region));
}
