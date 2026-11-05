CREATE TABLE `arcade_runs` (
	`id` text PRIMARY KEY NOT NULL,
	`game` text NOT NULL,
	`player` text NOT NULL,
	`visitor` text NOT NULL,
	`started_at` integer NOT NULL,
	`finished_at` integer,
	`score` integer,
	`distance` integer,
	`duration` integer,
	`difficulty` text DEFAULT 'standard' NOT NULL
);
--> statement-breakpoint
CREATE INDEX `runs_ranking` ON `arcade_runs` (`game`,`score`);--> statement-breakpoint
CREATE INDEX `runs_recent` ON `arcade_runs` (`game`,`finished_at`);--> statement-breakpoint
CREATE INDEX `runs_rate` ON `arcade_runs` (`visitor`,`started_at`);