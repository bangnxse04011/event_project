/*
Navicat PGSQL Data Transfer

Source Server         : PostgreSQL
Source Server Version : 90504
Source Host           : localhost:5432
Source Database       : support_project
Source Schema         : public

Target Server Type    : PGSQL
Target Server Version : 90200
File Encoding         : 65001

Date: 2018-04-23 08:47:16
*/


-- ----------------------------
-- Sequence structure for accounts_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "accounts_id_seq";
CREATE SEQUENCE "accounts_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

-- ----------------------------
-- Sequence structure for collection_ens_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "collection_ens_id_seq";
CREATE SEQUENCE "collection_ens_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

-- ----------------------------
-- Sequence structure for collection_vis_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "collection_vis_id_seq";
CREATE SEQUENCE "collection_vis_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

-- ----------------------------
-- Sequence structure for event_demo_ens_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "event_demo_ens_id_seq";
CREATE SEQUENCE "event_demo_ens_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

-- ----------------------------
-- Sequence structure for event_demo_vis_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "event_demo_vis_id_seq";
CREATE SEQUENCE "event_demo_vis_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

-- ----------------------------
-- Sequence structure for events_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "events_id_seq";
CREATE SEQUENCE "events_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 3
 CACHE 1;
SELECT setval('"public"."events_id_seq"', 3, true);

-- ----------------------------
-- Sequence structure for feed_back_ens_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "feed_back_ens_id_seq";
CREATE SEQUENCE "feed_back_ens_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

-- ----------------------------
-- Sequence structure for feed_back_vis_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "feed_back_vis_id_seq";
CREATE SEQUENCE "feed_back_vis_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

-- ----------------------------
-- Sequence structure for feed_backs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "feed_backs_id_seq";
CREATE SEQUENCE "feed_backs_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

-- ----------------------------
-- Sequence structure for Info_support_ens_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "Info_support_ens_id_seq";
CREATE SEQUENCE "Info_support_ens_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

-- ----------------------------
-- Sequence structure for info_support_vis_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "info_support_vis_id_seq";
CREATE SEQUENCE "info_support_vis_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

-- ----------------------------
-- Sequence structure for info_supports_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "info_supports_id_seq";
CREATE SEQUENCE "info_supports_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 2
 CACHE 1;
SELECT setval('"public"."info_supports_id_seq"', 2, true);

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS "accounts";
CREATE TABLE "accounts" (
"id" int4 DEFAULT nextval('accounts_id_seq'::regclass) NOT NULL,
"fullName" varchar(255) COLLATE "default",
"email" varchar(255) COLLATE "default",
"id_user" varchar(255) COLLATE "default",
"user_name" varchar(255) COLLATE "default",
"pass_word" varchar(255) COLLATE "default",
"phone_number" varchar(255) COLLATE "default",
"role" int4,
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of accounts
-- ----------------------------
BEGIN;
INSERT INTO "accounts" VALUES ('1', 'Nguyen Xuan Bang', 'bangnxse', '1', 'admin', 'admin', '1', '1', '2018-04-19 18:21:53+07', '2018-04-19 18:21:55+07');
INSERT INTO "accounts" VALUES ('2', 'ada', 'adad', '2', 'u1', 'u1', '1', '0', '2018-04-20 01:06:56+07', '2018-04-20 01:06:57+07');
COMMIT;

-- ----------------------------
-- Table structure for collection_ens
-- ----------------------------
DROP TABLE IF EXISTS "collection_ens";
CREATE TABLE "collection_ens" (
"id" int4 DEFAULT nextval('collection_ens_id_seq'::regclass) NOT NULL,
"fullName" varchar(10485760) COLLATE "default",
"title" varchar(10485760) COLLATE "default",
"address" varchar(10485760) COLLATE "default",
"description" varchar(10485760) COLLATE "default",
"path_img" varchar(255) COLLATE "default",
"status" int4,
"total_view" int4,
"price" int4,
"date" timestamptz(6),
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of collection_ens
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for collection_vis
-- ----------------------------
DROP TABLE IF EXISTS "collection_vis";
CREATE TABLE "collection_vis" (
"id" int4 DEFAULT nextval('collection_vis_id_seq'::regclass) NOT NULL,
"fullName" varchar(10485760) COLLATE "default",
"title" varchar(10485760) COLLATE "default",
"address" varchar(10485760) COLLATE "default",
"description" varchar(10485760) COLLATE "default",
"path_img" varchar(255) COLLATE "default",
"status" int4,
"total_view" int4,
"price" int4,
"date" timestamptz(6),
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of collection_vis
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for event_demo_ens
-- ----------------------------
DROP TABLE IF EXISTS "event_demo_ens";
CREATE TABLE "event_demo_ens" (
"id" int4 DEFAULT nextval('event_demo_ens_id_seq'::regclass) NOT NULL,
"fullName" varchar(10485760) COLLATE "default",
"title" varchar(10485760) COLLATE "default",
"address" varchar(10485760) COLLATE "default",
"description" varchar(10485760) COLLATE "default",
"path_img" varchar(255) COLLATE "default",
"status" int4,
"total_view" int4,
"price" int4,
"date" timestamptz(6),
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of event_demo_ens
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for event_demo_vis
-- ----------------------------
DROP TABLE IF EXISTS "event_demo_vis";
CREATE TABLE "event_demo_vis" (
"id" int4 DEFAULT nextval('event_demo_vis_id_seq'::regclass) NOT NULL,
"fullName" varchar(10485760) COLLATE "default",
"title" varchar(10485760) COLLATE "default",
"address" varchar(10485760) COLLATE "default",
"description" varchar(10485760) COLLATE "default",
"path_img" varchar(255) COLLATE "default",
"status" int4,
"total_view" int4,
"price" int4,
"date" timestamptz(6),
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of event_demo_vis
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for events
-- ----------------------------
DROP TABLE IF EXISTS "events";
CREATE TABLE "events" (
"id" int4 DEFAULT nextval('events_id_seq'::regclass) NOT NULL,
"fullName" varchar(10485760) COLLATE "default",
"title" varchar(10485760) COLLATE "default",
"address" varchar(10485760) COLLATE "default",
"description" varchar(10485760) COLLATE "default",
"path_img" varchar(255) COLLATE "default",
"status" int4,
"total_view" int4,
"money" int4,
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of events
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for feed_back_ens
-- ----------------------------
DROP TABLE IF EXISTS "feed_back_ens";
CREATE TABLE "feed_back_ens" (
"id" int4 DEFAULT nextval('feed_back_ens_id_seq'::regclass) NOT NULL,
"fullName" varchar(10485760) COLLATE "default",
"description" varchar(10485760) COLLATE "default",
"status" int4,
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of feed_back_ens
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for feed_back_vis
-- ----------------------------
DROP TABLE IF EXISTS "feed_back_vis";
CREATE TABLE "feed_back_vis" (
"id" int4 DEFAULT nextval('feed_back_vis_id_seq'::regclass) NOT NULL,
"fullName" varchar(10485760) COLLATE "default",
"description" varchar(10485760) COLLATE "default",
"status" int4,
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of feed_back_vis
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for feed_backs
-- ----------------------------
DROP TABLE IF EXISTS "feed_backs";
CREATE TABLE "feed_backs" (
"id" int4 DEFAULT nextval('feed_backs_id_seq'::regclass) NOT NULL,
"fullName" varchar(255) COLLATE "default",
"email" varchar(255) COLLATE "default",
"title" varchar(255) COLLATE "default",
"message" varchar(255) COLLATE "default",
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of feed_backs
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for Info_support_ens
-- ----------------------------
DROP TABLE IF EXISTS "Info_support_ens";
CREATE TABLE "Info_support_ens" (
"id" int4 DEFAULT nextval('"Info_support_ens_id_seq"'::regclass) NOT NULL,
"fullName" varchar(10485760) COLLATE "default",
"title" varchar(10485760) COLLATE "default",
"address" varchar(10485760) COLLATE "default",
"description" varchar(10485760) COLLATE "default",
"path_img" varchar(255) COLLATE "default",
"status" int4,
"total_view" int4,
"money" int4,
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of Info_support_ens
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for info_support_vis
-- ----------------------------
DROP TABLE IF EXISTS "info_support_vis";
CREATE TABLE "info_support_vis" (
"id" int4 DEFAULT nextval('info_support_vis_id_seq'::regclass) NOT NULL,
"fullName" varchar(10485760) COLLATE "default",
"title" varchar(10485760) COLLATE "default",
"address" varchar(10485760) COLLATE "default",
"description" varchar(10485760) COLLATE "default",
"path_img" varchar(255) COLLATE "default",
"status" int4,
"total_view" int4,
"money" int4,
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of info_support_vis
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for info_supports
-- ----------------------------
DROP TABLE IF EXISTS "info_supports";
CREATE TABLE "info_supports" (
"id" int4 DEFAULT nextval('info_supports_id_seq'::regclass) NOT NULL,
"fullName" varchar(10485760) COLLATE "default",
"title" varchar(10485760) COLLATE "default",
"address" varchar(10485760) COLLATE "default",
"description" varchar(10485760) COLLATE "default",
"path_img" varchar(255) COLLATE "default",
"status" int4,
"total_view" int4,
"money" int4,
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of info_supports
-- ----------------------------
BEGIN;
INSERT INTO "info_supports" VALUES ('2', ' #MyHealthie Photo Contest', ' #MyHealthie Photo Contest', '1 phần quà mỗi tuần trao tặng cho người có số bình chọn và yêu thích nhiều nhất,', 'Thông Tin Chi tiết

Sức khỏe là điều quan trọng nhất trong cuộc sống. Việc sống tích cực, lành mạnh luôn mang lại cho chúng ta những điều tốt đẹp, và khi lưu lại những khoảnh khắc lành mạnh đó sẽ giúp cho bản thân chúng ta thêm động lực tập luyện và duy trì sức khoẻ tốt hơn. Và chia sẻ khoảnh khắc của bạn lan toả đến mọi người khác xung quanh lại càng ý nghĩa hơn rất nhiều.', 'eadeac30-43ea-11e8-8f09-1716b8e1969c.jpg', '1', '5', '10000', '2018-04-19 23:01:27.684+07', '2018-04-20 13:18:56.583+07');
COMMIT;

-- ----------------------------
-- Alter Sequences Owned By 
-- ----------------------------
ALTER SEQUENCE "accounts_id_seq" OWNED BY "accounts"."id";
ALTER SEQUENCE "collection_ens_id_seq" OWNED BY "collection_ens"."id";
ALTER SEQUENCE "collection_vis_id_seq" OWNED BY "collection_vis"."id";
ALTER SEQUENCE "event_demo_ens_id_seq" OWNED BY "event_demo_ens"."id";
ALTER SEQUENCE "event_demo_vis_id_seq" OWNED BY "event_demo_vis"."id";
ALTER SEQUENCE "events_id_seq" OWNED BY "events"."id";
ALTER SEQUENCE "feed_back_ens_id_seq" OWNED BY "feed_back_ens"."id";
ALTER SEQUENCE "feed_back_vis_id_seq" OWNED BY "feed_back_vis"."id";
ALTER SEQUENCE "feed_backs_id_seq" OWNED BY "feed_backs"."id";
ALTER SEQUENCE "Info_support_ens_id_seq" OWNED BY "Info_support_ens"."id";
ALTER SEQUENCE "info_support_vis_id_seq" OWNED BY "info_support_vis"."id";
ALTER SEQUENCE "info_supports_id_seq" OWNED BY "info_supports"."id";

-- ----------------------------
-- Primary Key structure for table accounts
-- ----------------------------
ALTER TABLE "accounts" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table collection_ens
-- ----------------------------
ALTER TABLE "collection_ens" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table collection_vis
-- ----------------------------
ALTER TABLE "collection_vis" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table event_demo_ens
-- ----------------------------
ALTER TABLE "event_demo_ens" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table event_demo_vis
-- ----------------------------
ALTER TABLE "event_demo_vis" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table events
-- ----------------------------
ALTER TABLE "events" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table feed_back_ens
-- ----------------------------
ALTER TABLE "feed_back_ens" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table feed_back_vis
-- ----------------------------
ALTER TABLE "feed_back_vis" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table feed_backs
-- ----------------------------
ALTER TABLE "feed_backs" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table Info_support_ens
-- ----------------------------
ALTER TABLE "Info_support_ens" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table info_support_vis
-- ----------------------------
ALTER TABLE "info_support_vis" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table info_supports
-- ----------------------------
ALTER TABLE "info_supports" ADD PRIMARY KEY ("id");
