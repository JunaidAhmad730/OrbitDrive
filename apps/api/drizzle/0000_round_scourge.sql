CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"telegram_id" text,
	"username" text,
	"first_name" text,
	"last_name" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_telegram_id_unique" UNIQUE("telegram_id")
);
