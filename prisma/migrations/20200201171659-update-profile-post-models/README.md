# Migration `20200201171659-update-profile-post-models`

This migration has been generated by hatchli at 2/1/2020, 5:17:00 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `prisma`.`post` (
    `author_id` int NOT NULL ,
    `content` varchar(191)   ,
    `created_at` datetime(3)   ,
    `post_id` int NOT NULL  AUTO_INCREMENT,
    `title` varchar(191) NOT NULL DEFAULT '' ,
    PRIMARY KEY (`post_id`)
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `prisma`.`profile` (
    `bio` varchar(191)   ,
    `profile_id` int NOT NULL  AUTO_INCREMENT,
    `user_id` int NOT NULL ,
    PRIMARY KEY (`profile_id`)
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `prisma`.`user` (
    `email` varchar(191) NOT NULL DEFAULT '' ,
    `name` varchar(191)   ,
    `role` varchar(191) NOT NULL DEFAULT 'USER' ,
    `user_id` int NOT NULL  AUTO_INCREMENT,
    PRIMARY KEY (`user_id`)
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE UNIQUE INDEX `user.email` ON `prisma`.`user`(`email`)

ALTER TABLE `prisma`.`post` ADD FOREIGN KEY (`author_id`) REFERENCES `prisma`.`user`(`user_id`) ON DELETE RESTRICT

ALTER TABLE `prisma`.`profile` ADD FOREIGN KEY (`user_id`) REFERENCES `prisma`.`user`(`user_id`) ON DELETE RESTRICT

DROP TABLE `prisma`.`posts`;

DROP TABLE `prisma`.`profiles`;

DROP TABLE `prisma`.`users`;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200201152800-add-role-model..20200201171659-update-profile-post-models
--- datamodel.dml
+++ datamodel.dml
@@ -3,34 +3,29 @@
 }
 datasource mysql {
   provider = "mysql"
-  url = "***"
+  url      = "mysql://prisma:F1g+sparrow@prisma.clisj67py2b1.us-east-2.rds.amazonaws.com:3306/prisma"
 }
-model posts {
+model post {
   content    String?
   created_at DateTime?
-  post_id    Int       @id
-  title      String
-  author_id  users
+  post_id    Int       @default(autoincrement()) @id
+  title      String    @default("")
+  author_id  user
 }
-model profiles {
+model profile {
   bio        String?
-  profile_id Int     @id
-  user_id    users
+  profile_id Int     @default(autoincrement()) @id
+  user_id    user
 }
-model users {
-  email      String     @unique
+model user {
+  email      String     @default("") @unique
   name       String?
-  user_id    Int        @id
-  postses    posts[]
-  profileses profiles[] 
-  role role @default(USER)
-}
-
-enum role {
-  USER
-  ADMIN
+  role       String     @default("USER")
+  user_id    Int        @default(autoincrement()) @id
+  postses    post[]
+  profileses profile[]
 }
```


