import { pgTable, text, timestamp, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export interface IpnftMeta {
  therapeuticArea: string;
  developmentStage: "preclinical" | "phase_1" | "phase_2" | "phase_3" | "approved";
  institution: { name: string; department?: string; country?: string };
  ipType: "pre_patent" | "patent_pending" | "granted_patent" | "trade_secret" | "data_package";
  researcherName?: string;
  researcherOrcid?: string;
  fundingTargetUsd?: number;
  registeredAt?: string;
}

export const peptidesTable = pgTable("peptides", {
  id: text("id").primaryKey(),
  sequence: text("sequence").notNull(),
  seedSequence: text("seed_sequence").notNull(),
  affinity: integer("affinity").notNull(),
  stability: integer("stability").notNull(),
  novelty: integer("novelty").notNull(),
  toxicity: integer("toxicity").notNull(),
  evolutionScore: integer("evolution_score").notNull(),
  creatorWallet: text("creator_wallet"),
  mintAddress: text("mint_address"),
  ipnftMeta: jsonb("ipnft_meta").$type<IpnftMeta>(),
  therapeuticArea: text("therapeutic_area"),
  rationale: text("rationale"),
  mechanism: text("mechanism"),
  keyFeatures: jsonb("key_features").$type<string[]>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertPeptideSchema = createInsertSchema(peptidesTable).omit({ id: true, createdAt: true });
export type InsertPeptide = z.infer<typeof insertPeptideSchema>;
export type Peptide = typeof peptidesTable.$inferSelect;
