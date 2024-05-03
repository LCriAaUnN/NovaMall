-- MySQL dump 10.13  Distrib 8.3.0, for macos13.6 (arm64)
--
-- Host: localhost    Database: NovaMall
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add user',7,'add_user'),(26,'Can change user',7,'change_user'),(27,'Can delete user',7,'delete_user'),(28,'Can view user',7,'view_user'),(29,'Can add product',8,'add_product'),(30,'Can change product',8,'change_product'),(31,'Can delete product',8,'delete_product'),(32,'Can view product',8,'view_product'),(33,'Can add cart',9,'add_cart'),(34,'Can change cart',9,'change_cart'),(35,'Can delete cart',9,'delete_cart'),(36,'Can view cart',9,'view_cart'),(37,'Can add order',10,'add_order'),(38,'Can change order',10,'change_order'),(39,'Can delete order',10,'delete_order'),(40,'Can view order',10,'view_order');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$720000$od77p91cmhTTKsouMcu1oW$FoqMRMm3w2/NQKbTjg916CLDbkBKV3DUeYr3RUNzij4=','2024-04-09 15:15:42.938805',1,'NovaMall','','','123@gmail.com',1,1,'2024-04-09 15:15:06.565185'),(5,'123456',NULL,0,'asd','','','123@qq.com',0,1,'2024-04-11 09:53:20.758303'),(6,'123456',NULL,0,'q','','','we@qq.com',0,1,'2024-04-11 10:14:41.114621'),(7,'pbkdf2_sha256$720000$No1z0jgfpNYNJSk1odGPHG$ucExj8KR6ky+GkiFF5mjo+mRKKC/69U5dPOrRidvxYg=',NULL,0,'qwe','','','123@qq.com',0,1,'2024-04-11 10:59:17.298358'),(8,'pbkdf2_sha256$720000$IW0Oa1CzyrU0WBDcGZ9xYW$GZB95zBbVyYe2ARbjtOVUyRNekqp+Xec5HYJy+OEUZo=',NULL,0,'sam','','','123@qq.com',0,1,'2024-04-11 11:07:34.469370');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(10,'Order','order'),(6,'sessions','session'),(8,'ShopPage','product'),(9,'ShoppingCart','cart'),(7,'User','user');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'Order','0001_initial','2024-04-02 13:15:14.343700'),(2,'ShopPage','0001_initial','2024-04-02 13:15:14.355463'),(4,'User','0001_initial','2024-04-02 13:15:14.367487'),(5,'contenttypes','0001_initial','2024-04-02 13:15:14.384184'),(6,'auth','0001_initial','2024-04-02 13:15:14.502963'),(7,'admin','0001_initial','2024-04-02 13:15:14.527362'),(8,'admin','0002_logentry_remove_auto_add','2024-04-02 13:15:14.530064'),(9,'admin','0003_logentry_add_action_flag_choices','2024-04-02 13:15:14.532942'),(10,'contenttypes','0002_remove_content_type_name','2024-04-02 13:15:14.560946'),(11,'auth','0002_alter_permission_name_max_length','2024-04-02 13:15:14.572261'),(12,'auth','0003_alter_user_email_max_length','2024-04-02 13:15:14.584074'),(13,'auth','0004_alter_user_username_opts','2024-04-02 13:15:14.587029'),(14,'auth','0005_alter_user_last_login_null','2024-04-02 13:15:14.599358'),(15,'auth','0006_require_contenttypes_0002','2024-04-02 13:15:14.599893'),(16,'auth','0007_alter_validators_add_error_messages','2024-04-02 13:15:14.602495'),(17,'auth','0008_alter_user_username_max_length','2024-04-02 13:15:14.614626'),(18,'auth','0009_alter_user_last_name_max_length','2024-04-02 13:15:14.627341'),(19,'auth','0010_alter_group_name_max_length','2024-04-02 13:15:14.637456'),(20,'auth','0011_update_proxy_permissions','2024-04-02 13:15:14.641533'),(21,'auth','0012_alter_user_first_name_max_length','2024-04-02 13:15:14.653380'),(22,'sessions','0001_initial','2024-04-02 13:15:14.660178'),(25,'ShoppingCart','0001_initial','2024-04-03 16:06:28.875938'),(26,'Order','0002_initial','2024-04-03 16:11:55.700696'),(27,'ShoppingCart','0002_initial','2024-04-03 16:11:55.715077'),(28,'Order','0003_alter_order_user','2024-04-09 13:34:15.052786'),(29,'Order','0004_alter_order_user','2024-04-09 13:34:15.059717'),(30,'ShoppingCart','0003_alter_cart_user','2024-04-09 13:34:15.093836'),(31,'ShoppingCart','0004_alter_cart_user','2024-04-09 13:34:15.099246'),(32,'User','0002_delete_user','2024-04-09 13:34:15.102731'),(33,'ShopPage','0002_product_catagory','2024-04-09 17:19:12.259275'),(34,'Order','0005_remove_order_product_id_order_productids','2024-04-10 13:20:44.396337'),(35,'ShoppingCart','0005_cart_product_name','2024-04-10 13:20:44.416249'),(36,'ShopPage','0003_alter_product_image','2024-04-10 19:41:48.707207');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('w0pkh6f59yp8ztdnr7om0ea5kyq479rf','.eJxVjDsOwjAQBe_iGln-xD9Kes5g7dprHEC2FCcV4u4QKQW0b2bei0XY1hq3QUucMzszyU6_G0J6UNtBvkO7dZ56W5cZ-a7wgw5-7Zmel8P9O6gw6rdORiQZvCHUwXoMBm1RBsEVUqQtIU06kQdbgpmEzC65AEa44nTQSgr2_gDtFTe3:1ruDCI:8XFQOmYq3OnKGbTKBJoU2IRt2rqs_WifUdP52WGZSXQ','2024-04-23 15:15:42.940554');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Order_order`
--

DROP TABLE IF EXISTS `Order_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Order_order`
--

LOCK TABLES `Order_order` WRITE;
/*!40000 ALTER TABLE `Order_order` DISABLE KEYS */;
INSERT INTO `Order_order` VALUES (14,70,1,6,'\"[{\\\"id\\\": 15, \\\"name\\\": \\\"Harry Potter\\\", \\\"price\\\": 70.0}]\"'),(17,90,1,8,'\"[{\\\"id\\\": 15, \\\"name\\\": \\\"Harry Potter\\\", \\\"price\\\": 70.0}, {\\\"id\\\": 14, \\\"name\\\": \\\"Alice in the WonderLand\\\", \\\"price\\\": 20.0}]\"'),(18,20,0,8,'\"[{\\\"id\\\": 14, \\\"name\\\": \\\"Alice in the WonderLand\\\", \\\"price\\\": 20.0}]\"');
/*!40000 ALTER TABLE `Order_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ShopPage_product`
--

DROP TABLE IF EXISTS `ShopPage_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ShopPage_product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `price` double NOT NULL,
  `description` varchar(128) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `count` int NOT NULL,
  `catagory` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ShopPage_product`
--

LOCK TABLES `ShopPage_product` WRITE;
/*!40000 ALTER TABLE `ShopPage_product` DISABLE KEYS */;
INSERT INTO `ShopPage_product` VALUES (38,'Alice in the WonderLand',12,'It details the story of a girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures.','images/Alice_in_the_wonderland.jpg',100,'Books'),(39,'Beautiful T Shirts',70,'Wow, so beautiful they are.','images/Beautiful_T_Shirts.png',80,'Clothings'),(40,'Huawei Phone',7999,'Love & support for Huawei!','images/huawei.png',3000,'Electronics'),(41,'Expensive Ring',1314,'A worthy ring for your great wedding.','images/Ring.jpeg',10,'Accessories'),(42,'The Ring of Power',20,'Five star recommendation: Must Read!','images/The_ring_of_power.jpg',0,'Books'),(43,'Airpods 3',799,'Meet AirPods (3rd generation). All-new design featuring spatial audio','images/airpods.jpeg',40,'Electronics'),(44,'Apple Watch Series 8',1299,'Buy Apple Watch SE GPS, 40mm Midnight Aluminum Case with Light Pink Sport Band','images/apple_watch.jpeg',50,'Electronics'),(45,'Gold Necklace',79,'Dainty Gold Necklace for Women 14K Gold Plated Necklaces for Teen Girls','images/gold_necklaces.jpg',25,'Accessories'),(46,'Harry Potter',20,'Harry Potter and the Sorcerer\'s Stone','images/harry_potter.jpeg',100,'Books'),(47,'Twilight',38,'Washington to live with her father she expects that her new life will be as dull as the town.','images/Twilight.jpg',0,'Books'),(48,'Pants',128,'The Argon Pants are down-filled trousers designed to offer extra warmth','images/pants.webp',200,'Clothings'),(49,'Earring',75,'Our Good Girl Mission champions women who inspire us. ','images/earring.webp',20,'Accessories');
/*!40000 ALTER TABLE `ShopPage_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ShoppingCart_cart`
--

DROP TABLE IF EXISTS `ShoppingCart_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ShoppingCart_cart`
--

LOCK TABLES `ShoppingCart_cart` WRITE;
/*!40000 ALTER TABLE `ShoppingCart_cart` DISABLE KEYS */;
INSERT INTO `ShoppingCart_cart` VALUES (23,7,10000,1,'monica');
/*!40000 ALTER TABLE `ShoppingCart_cart` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-03 11:06:25
