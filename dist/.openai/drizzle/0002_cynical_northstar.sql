CREATE TABLE `pfap_activity` (
	`visitor` text NOT NULL,
	`event` text NOT NULL,
	`game` text NOT NULL,
	`created_at` integer NOT NULL,
	PRIMARY KEY(`visitor`, `event`)
);
--> statement-breakpoint
CREATE INDEX `pfap_activity_game` ON `pfap_activity` (`game`,`visitor`);