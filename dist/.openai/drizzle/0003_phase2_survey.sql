CREATE TABLE `pfap_survey` (
	`pair_id` text NOT NULL,
	`phase` text NOT NULL,
	`attitude` integer NOT NULL,
	`knowledge` integer NOT NULL,
	`habit` text NOT NULL,
	`game` text NOT NULL,
	`created_at` integer NOT NULL,
	PRIMARY KEY(`pair_id`, `phase`)
);
