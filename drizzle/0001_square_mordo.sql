ALTER TABLE `arcade_runs` ADD `board` text DEFAULT 'practice' NOT NULL;--> statement-breakpoint
CREATE INDEX `runs_board_ranking` ON `arcade_runs` (`game`,`board`,`score`,`duration`);--> statement-breakpoint
CREATE INDEX `runs_mine` ON `arcade_runs` (`visitor`,`game`,`board`);