import{sqliteTable,text,integer,index,primaryKey}from'drizzle-orm/sqlite-core';
export const runs=sqliteTable('arcade_runs',{id:text('id').primaryKey(),game:text('game').notNull(),player:text('player').notNull(),visitor:text('visitor').notNull(),startedAt:integer('started_at').notNull(),finishedAt:integer('finished_at'),score:integer('score'),distance:integer('distance'),duration:integer('duration'),difficulty:text('difficulty').notNull().default('standard'),board:text('board').notNull().default('practice')},t=>[index('runs_board_ranking').on(t.game,t.board,t.score,t.duration),index('runs_mine').on(t.visitor,t.game,t.board),index('runs_ranking').on(t.game,t.score),index('runs_recent').on(t.game,t.finishedAt),index('runs_rate').on(t.visitor,t.startedAt)]);
export const activity=sqliteTable('pfap_activity',{visitor:text('visitor').notNull(),event:text('event').notNull(),game:text('game').notNull(),createdAt:integer('created_at').notNull()},t=>[primaryKey({columns:[t.visitor,t.event]}),index('pfap_activity_game').on(t.game,t.visitor)]);
export const survey = sqliteTable('pfap_survey', {
  pairId: text('pair_id').notNull(),
  phase: text('phase').notNull(),
  attitude: integer('attitude').notNull(),
  knowledge: integer('knowledge').notNull(),
  habit: text('habit').notNull(),
  game: text('game').notNull(),
  createdAt: integer('created_at').notNull(),
}, table => [primaryKey({columns: [table.pairId, table.phase]})]);
