/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80300 (8.3.0)
 Source Host           : localhost:3306
 Source Schema         : NovaMall

 Target Server Type    : MySQL
 Target Server Version : 80300 (8.3.0)
 File Encoding         : 65001

 Date: 01/05/2024 21:58:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for auth_group
-- ----------------------------
DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of auth_group
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for auth_group_permissions
-- ----------------------------
DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of auth_group_permissions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for auth_permission
-- ----------------------------
DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of auth_permission
-- ----------------------------
BEGIN;
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (1, 'Can add log entry', 1, 'add_logentry');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (2, 'Can change log entry', 1, 'change_logentry');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (3, 'Can delete log entry', 1, 'delete_logentry');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (4, 'Can view log entry', 1, 'view_logentry');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (5, 'Can add permission', 2, 'add_permission');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (6, 'Can change permission', 2, 'change_permission');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (7, 'Can delete permission', 2, 'delete_permission');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (8, 'Can view permission', 2, 'view_permission');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (9, 'Can add group', 3, 'add_group');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (10, 'Can change group', 3, 'change_group');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (11, 'Can delete group', 3, 'delete_group');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (12, 'Can view group', 3, 'view_group');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (13, 'Can add user', 4, 'add_user');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (14, 'Can change user', 4, 'change_user');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (15, 'Can delete user', 4, 'delete_user');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (16, 'Can view user', 4, 'view_user');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (17, 'Can add content type', 5, 'add_contenttype');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (18, 'Can change content type', 5, 'change_contenttype');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (19, 'Can delete content type', 5, 'delete_contenttype');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (20, 'Can view content type', 5, 'view_contenttype');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (21, 'Can add session', 6, 'add_session');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (22, 'Can change session', 6, 'change_session');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (23, 'Can delete session', 6, 'delete_session');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (24, 'Can view session', 6, 'view_session');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (25, 'Can add user', 7, 'add_user');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (26, 'Can change user', 7, 'change_user');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (27, 'Can delete user', 7, 'delete_user');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (28, 'Can view user', 7, 'view_user');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (29, 'Can add product', 8, 'add_product');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (30, 'Can change product', 8, 'change_product');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (31, 'Can delete product', 8, 'delete_product');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (32, 'Can view product', 8, 'view_product');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (33, 'Can add cart', 9, 'add_cart');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (34, 'Can change cart', 9, 'change_cart');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (35, 'Can delete cart', 9, 'delete_cart');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (36, 'Can view cart', 9, 'view_cart');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (37, 'Can add order', 10, 'add_order');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (38, 'Can change order', 10, 'change_order');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (39, 'Can delete order', 10, 'delete_order');
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES (40, 'Can view order', 10, 'view_order');
COMMIT;

-- ----------------------------
-- Table structure for auth_user
-- ----------------------------
DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of auth_user
-- ----------------------------
BEGIN;
INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES (1, 'pbkdf2_sha256$720000$od77p91cmhTTKsouMcu1oW$FoqMRMm3w2/NQKbTjg916CLDbkBKV3DUeYr3RUNzij4=', '2024-04-09 15:15:42.938805', 1, 'NovaMall', '', '', '123@gmail.com', 1, 1, '2024-04-09 15:15:06.565185');
INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES (5, '123456', NULL, 0, 'asd', '', '', '123@qq.com', 0, 1, '2024-04-11 09:53:20.758303');
INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES (6, '123456', NULL, 0, 'q', '', '', 'we@qq.com', 0, 1, '2024-04-11 10:14:41.114621');
INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES (7, 'pbkdf2_sha256$720000$No1z0jgfpNYNJSk1odGPHG$ucExj8KR6ky+GkiFF5mjo+mRKKC/69U5dPOrRidvxYg=', NULL, 0, 'qwe', '', '', '123@qq.com', 0, 1, '2024-04-11 10:59:17.298358');
INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES (8, 'pbkdf2_sha256$720000$IW0Oa1CzyrU0WBDcGZ9xYW$GZB95zBbVyYe2ARbjtOVUyRNekqp+Xec5HYJy+OEUZo=', NULL, 0, 'sam', '', '', '123@qq.com', 0, 1, '2024-04-11 11:07:34.469370');
COMMIT;

-- ----------------------------
-- Table structure for auth_user_groups
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_groups`;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of auth_user_groups
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for auth_user_user_permissions
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_user_permissions`;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of auth_user_user_permissions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for django_admin_log
-- ----------------------------
DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of django_admin_log
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for django_content_type
-- ----------------------------
DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of django_content_type
-- ----------------------------
BEGIN;
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (1, 'admin', 'logentry');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (3, 'auth', 'group');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (2, 'auth', 'permission');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (4, 'auth', 'user');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (5, 'contenttypes', 'contenttype');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (10, 'Order', 'order');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (6, 'sessions', 'session');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (8, 'ShopPage', 'product');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (9, 'ShoppingCart', 'cart');
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES (7, 'User', 'user');
COMMIT;

-- ----------------------------
-- Table structure for django_migrations
-- ----------------------------
DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of django_migrations
-- ----------------------------
BEGIN;
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (1, 'Order', '0001_initial', '2024-04-02 13:15:14.343700');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (2, 'ShopPage', '0001_initial', '2024-04-02 13:15:14.355463');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (4, 'User', '0001_initial', '2024-04-02 13:15:14.367487');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (5, 'contenttypes', '0001_initial', '2024-04-02 13:15:14.384184');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (6, 'auth', '0001_initial', '2024-04-02 13:15:14.502963');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (7, 'admin', '0001_initial', '2024-04-02 13:15:14.527362');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (8, 'admin', '0002_logentry_remove_auto_add', '2024-04-02 13:15:14.530064');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (9, 'admin', '0003_logentry_add_action_flag_choices', '2024-04-02 13:15:14.532942');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (10, 'contenttypes', '0002_remove_content_type_name', '2024-04-02 13:15:14.560946');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (11, 'auth', '0002_alter_permission_name_max_length', '2024-04-02 13:15:14.572261');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (12, 'auth', '0003_alter_user_email_max_length', '2024-04-02 13:15:14.584074');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (13, 'auth', '0004_alter_user_username_opts', '2024-04-02 13:15:14.587029');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (14, 'auth', '0005_alter_user_last_login_null', '2024-04-02 13:15:14.599358');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (15, 'auth', '0006_require_contenttypes_0002', '2024-04-02 13:15:14.599893');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (16, 'auth', '0007_alter_validators_add_error_messages', '2024-04-02 13:15:14.602495');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (17, 'auth', '0008_alter_user_username_max_length', '2024-04-02 13:15:14.614626');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (18, 'auth', '0009_alter_user_last_name_max_length', '2024-04-02 13:15:14.627341');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (19, 'auth', '0010_alter_group_name_max_length', '2024-04-02 13:15:14.637456');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (20, 'auth', '0011_update_proxy_permissions', '2024-04-02 13:15:14.641533');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (21, 'auth', '0012_alter_user_first_name_max_length', '2024-04-02 13:15:14.653380');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (22, 'sessions', '0001_initial', '2024-04-02 13:15:14.660178');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (25, 'ShoppingCart', '0001_initial', '2024-04-03 16:06:28.875938');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (26, 'Order', '0002_initial', '2024-04-03 16:11:55.700696');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (27, 'ShoppingCart', '0002_initial', '2024-04-03 16:11:55.715077');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (28, 'Order', '0003_alter_order_user', '2024-04-09 13:34:15.052786');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (29, 'Order', '0004_alter_order_user', '2024-04-09 13:34:15.059717');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (30, 'ShoppingCart', '0003_alter_cart_user', '2024-04-09 13:34:15.093836');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (31, 'ShoppingCart', '0004_alter_cart_user', '2024-04-09 13:34:15.099246');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (32, 'User', '0002_delete_user', '2024-04-09 13:34:15.102731');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (33, 'ShopPage', '0002_product_catagory', '2024-04-09 17:19:12.259275');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (34, 'Order', '0005_remove_order_product_id_order_productids', '2024-04-10 13:20:44.396337');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (35, 'ShoppingCart', '0005_cart_product_name', '2024-04-10 13:20:44.416249');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES (36, 'ShopPage', '0003_alter_product_image', '2024-04-10 19:41:48.707207');
COMMIT;

-- ----------------------------
-- Table structure for django_session
-- ----------------------------
DROP TABLE IF EXISTS `django_session`;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of django_session
-- ----------------------------
BEGIN;
INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES ('w0pkh6f59yp8ztdnr7om0ea5kyq479rf', '.eJxVjDsOwjAQBe_iGln-xD9Kes5g7dprHEC2FCcV4u4QKQW0b2bei0XY1hq3QUucMzszyU6_G0J6UNtBvkO7dZ56W5cZ-a7wgw5-7Zmel8P9O6gw6rdORiQZvCHUwXoMBm1RBsEVUqQtIU06kQdbgpmEzC65AEa44nTQSgr2_gDtFTe3:1ruDCI:8XFQOmYq3OnKGbTKBJoU2IRt2rqs_WifUdP52WGZSXQ', '2024-04-23 15:15:42.940554');
COMMIT;

-- ----------------------------
-- Table structure for Order_order
-- ----------------------------
DROP TABLE IF EXISTS `Order_order`;
CREATE TABLE `Order_order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `price` double NOT NULL,
  `status` smallint NOT NULL,
  `user_id` int NOT NULL,
  `productIDs` json NOT NULL DEFAULT (_utf8mb3'""'),
  PRIMARY KEY (`id`),
  KEY `Order_order_user_id_de1a5bf6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `Order_order_user_id_de1a5bf6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of Order_order
-- ----------------------------
BEGIN;
INSERT INTO `Order_order` (`id`, `price`, `status`, `user_id`, `productIDs`) VALUES (14, 70, 1, 6, '\"[{\\\"id\\\": 15, \\\"name\\\": \\\"Harry Potter\\\", \\\"price\\\": 70.0}]\"');
INSERT INTO `Order_order` (`id`, `price`, `status`, `user_id`, `productIDs`) VALUES (17, 90, 1, 8, '\"[{\\\"id\\\": 15, \\\"name\\\": \\\"Harry Potter\\\", \\\"price\\\": 70.0}, {\\\"id\\\": 14, \\\"name\\\": \\\"Alice in the WonderLand\\\", \\\"price\\\": 20.0}]\"');
INSERT INTO `Order_order` (`id`, `price`, `status`, `user_id`, `productIDs`) VALUES (18, 20, 0, 8, '\"[{\\\"id\\\": 14, \\\"name\\\": \\\"Alice in the WonderLand\\\", \\\"price\\\": 20.0}]\"');
COMMIT;

-- ----------------------------
-- Table structure for ShopPage_product
-- ----------------------------
DROP TABLE IF EXISTS `ShopPage_product`;
CREATE TABLE `ShopPage_product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `price` double NOT NULL,
  `description` varchar(128) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `count` int NOT NULL,
  `catagory` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of ShopPage_product
-- ----------------------------
BEGIN;
INSERT INTO `ShopPage_product` (`id`, `name`, `price`, `description`, `image`, `count`, `catagory`) VALUES (38, 'Alice in the WonderLand', 12, 'It details the story of a girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures.', 'images/Alice_in_the_wonderland.jpg', 100, 'Books');
INSERT INTO `ShopPage_product` (`id`, `name`, `price`, `description`, `image`, `count`, `catagory`) VALUES (39, 'Beautiful T Shirts', 70, 'Wow, so beautiful they are.', 'images/Beautiful_T_Shirts.png', 80, 'Clothings');
INSERT INTO `ShopPage_product` (`id`, `name`, `price`, `description`, `image`, `count`, `catagory`) VALUES (40, 'Huawei Phone', 7999, 'Love & support for Huawei!', 'images/huawei.png', 3000, 'Electronics');
INSERT INTO `ShopPage_product` (`id`, `name`, `price`, `description`, `image`, `count`, `catagory`) VALUES (41, 'Expensive Ring', 1314, 'A worthy ring for your great wedding.', 'images/Ring.jpeg', 10, 'Accessories');
INSERT INTO `ShopPage_product` (`id`, `name`, `price`, `description`, `image`, `count`, `catagory`) VALUES (42, 'The Ring of Power', 20, 'Five star recommendation: Must Read!', 'images/The_ring_of_power.jpg', 0, 'Books');
COMMIT;

-- ----------------------------
-- Table structure for ShoppingCart_cart
-- ----------------------------
DROP TABLE IF EXISTS `ShoppingCart_cart`;
CREATE TABLE `ShoppingCart_cart` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `price` double NOT NULL,
  `user_id` int NOT NULL,
  `product_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ShoppingCart_cart_user_id_9234eae5_fk_auth_user_id` (`user_id`),
  CONSTRAINT `ShoppingCart_cart_user_id_9234eae5_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of ShoppingCart_cart
-- ----------------------------
BEGIN;
INSERT INTO `ShoppingCart_cart` (`id`, `product_id`, `price`, `user_id`, `product_name`) VALUES (23, 7, 10000, 1, 'monica');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
