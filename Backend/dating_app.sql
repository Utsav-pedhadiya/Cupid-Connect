-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 27, 2024 at 03:51 PM
-- Server version: 10.3.39-MariaDB-0ubuntu0.20.04.2
-- PHP Version: 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dating_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int(11) NOT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `data` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `profile_id`, `data`, `created_at`, `updated_at`) VALUES
(20, 126, 'string', '2024-03-05 03:46:37', '2024-03-05 03:46:37'),
(21, 124, 'string', '2024-03-11 04:31:42', '2024-03-11 04:31:42'),
(22, 124, 'string', '2024-03-11 04:33:43', '2024-03-11 04:33:43'),
(23, 124, 'string', '2024-03-11 04:45:00', '2024-03-11 04:45:00'),
(24, 124, 'string', '2024-03-11 04:45:52', '2024-03-11 04:45:52'),
(25, 124, 'string', '2024-03-11 04:59:03', '2024-03-11 04:59:03'),
(26, 124, 'string', '2024-03-13 01:30:34', '2024-03-13 01:30:34'),
(27, 147, 'string', '2024-03-14 01:24:10', '2024-03-14 01:24:10');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2024_02_10_060616_create_user_otps_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `profile_id` int(11) NOT NULL,
  `opp_profile_id` int(11) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `request_id` bigint(20) DEFAULT NULL,
  `request_status` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `profile_id`, `opp_profile_id`, `type`, `data`, `read_at`, `request_id`, `request_status`, `created_at`, `updated_at`) VALUES
(349, 125, 124, 'profile_visit', '[{\"profile_id\":\"125\",\"viewer_id\":124,\"updated_at\":\"2024-03-05T11:04:30.000000Z\",\"created_at\":\"2024-03-05T11:04:30.000000Z\",\"id\":305},{\"id\":124,\"gender\":\"male\",\"name\":\"Utsav\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"80.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":6,\"likes\":2,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-05T11:04:22.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 05:34:30', '2024-03-05 05:34:30'),
(350, 125, 124, 'profile_like', '[{\"liked_profile_id\":\"125\",\"liker_id\":124,\"updated_at\":\"2024-03-05T11:04:35.000000Z\",\"created_at\":\"2024-03-05T11:04:35.000000Z\",\"id\":39},{\"id\":124,\"gender\":\"male\",\"name\":\"Utsav\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"80.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":6,\"likes\":2,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-05T11:04:22.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 05:34:35', '2024-03-05 05:34:35'),
(351, 125, 124, 'profile_contact_request', '{\"0\":{\"profile_id\":\"125\",\"requester_id\":124,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-05T11:04:40.000000Z\",\"created_at\":\"2024-03-05T11:04:40.000000Z\",\"id\":64},\"1\":{\"id\":124,\"gender\":\"male\",\"name\":\"Utsav\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"80.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":6,\"likes\":2,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-05T11:04:22.000000Z\"},\"request_id\":64}', '2024-03-05 05:36:10', 64, 'accepted', '2024-03-05 05:34:40', '2024-03-05 05:36:10'),
(353, 124, 125, 'profile_visit', '[{\"profile_id\":\"124\",\"viewer_id\":125,\"updated_at\":\"2024-03-05T11:09:01.000000Z\",\"created_at\":\"2024-03-05T11:09:01.000000Z\",\"id\":306},{\"id\":125,\"gender\":\"male\",\"name\":\"Bhavik\",\"number\":\"987654321\",\"dob\":\"1990-01-01\",\"age\":31,\"nationality\":\"Canada\",\"place_of_residence\":\"Los Angeles\",\"city\":\"New York City\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":1,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"175.00\",\"width\":\"75.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":4,\"likes\":1,\"created_at\":\"2024-03-05T08:58:56.000000Z\",\"updated_at\":\"2024-03-05T11:05:30.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 05:39:01', '2024-03-05 05:39:01'),
(354, 124, 125, 'profile_contact_request', '{\"0\":{\"profile_id\":\"124\",\"requester_id\":125,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-05T11:09:03.000000Z\",\"created_at\":\"2024-03-05T11:09:03.000000Z\",\"id\":65},\"1\":{\"id\":125,\"gender\":\"male\",\"name\":\"Bhavik\",\"number\":\"987654321\",\"dob\":\"1990-01-01\",\"age\":31,\"nationality\":\"Canada\",\"place_of_residence\":\"Los Angeles\",\"city\":\"New York City\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":1,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"175.00\",\"width\":\"75.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":4,\"likes\":1,\"created_at\":\"2024-03-05T08:58:56.000000Z\",\"updated_at\":\"2024-03-05T11:05:30.000000Z\"},\"request_id\":65}', '2024-03-05 05:39:59', 65, 'accepted', '2024-03-05 05:39:03', '2024-03-05 05:39:59'),
(355, 125, 124, 'contact_request_accepted', '{\"0\":{\"profile_id\":124,\"number\":\"363336666\",\"note\":\"Ccthftjj\",\"updated_at\":\"2024-03-05T11:09:59.000000Z\",\"created_at\":\"2024-03-05T11:09:59.000000Z\",\"id\":90},\"1\":{\"id\":124,\"gender\":\"male\",\"name\":\"Utsav\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"80.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":7,\"likes\":2,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-05T11:09:21.000000Z\"},\"request_id\":124}', NULL, NULL, NULL, '2024-03-05 05:39:59', '2024-03-05 05:39:59'),
(356, 124, 125, 'profile_like', '[{\"liked_profile_id\":\"124\",\"liker_id\":125,\"updated_at\":\"2024-03-05T11:43:44.000000Z\",\"created_at\":\"2024-03-05T11:43:44.000000Z\",\"id\":40},{\"id\":125,\"gender\":\"male\",\"name\":\"Bhavik\",\"number\":\"987654321\",\"dob\":\"1990-01-01\",\"age\":31,\"nationality\":\"Canada\",\"place_of_residence\":\"Los Angeles\",\"city\":\"New York City\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":1,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"175.00\",\"width\":\"75.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":4,\"likes\":1,\"created_at\":\"2024-03-05T08:58:56.000000Z\",\"updated_at\":\"2024-03-05T11:43:39.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 06:13:44', '2024-03-05 06:13:44'),
(357, 124, 126, 'profile_visit', '[{\"profile_id\":\"124\",\"viewer_id\":126,\"updated_at\":\"2024-03-05T11:54:06.000000Z\",\"created_at\":\"2024-03-05T11:54:06.000000Z\",\"id\":308},{\"id\":126,\"gender\":\"Female\",\"name\":\"Aditi\",\"number\":\"741258963\",\"dob\":\"2000-01-01\",\"age\":23,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"175.00\",\"width\":\"75.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":3,\"likes\":1,\"created_at\":\"2024-03-05T08:59:12.000000Z\",\"updated_at\":\"2024-03-05T10:34:17.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 06:24:06', '2024-03-05 06:24:06'),
(358, 124, 126, 'profile_like', '[{\"liked_profile_id\":\"124\",\"liker_id\":126,\"updated_at\":\"2024-03-05T11:54:11.000000Z\",\"created_at\":\"2024-03-05T11:54:11.000000Z\",\"id\":41},{\"id\":126,\"gender\":\"Female\",\"name\":\"Aditi\",\"number\":\"741258963\",\"dob\":\"2000-01-01\",\"age\":23,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"175.00\",\"width\":\"75.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":3,\"likes\":1,\"created_at\":\"2024-03-05T08:59:12.000000Z\",\"updated_at\":\"2024-03-05T10:34:17.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 06:24:11', '2024-03-05 06:24:11'),
(359, 124, 126, 'profile_contact_request', '{\"0\":{\"profile_id\":\"124\",\"requester_id\":126,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-05T11:54:13.000000Z\",\"created_at\":\"2024-03-05T11:54:13.000000Z\",\"id\":66},\"1\":{\"id\":126,\"gender\":\"Female\",\"name\":\"Aditi\",\"number\":\"741258963\",\"dob\":\"2000-01-01\",\"age\":23,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"175.00\",\"width\":\"75.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":3,\"likes\":1,\"created_at\":\"2024-03-05T08:59:12.000000Z\",\"updated_at\":\"2024-03-05T10:34:17.000000Z\"},\"request_id\":66}', '2024-03-05 06:39:33', 66, 'rejected', '2024-03-05 06:24:13', '2024-03-05 06:39:33'),
(360, 126, 124, 'contact_request_rejected', '{\"0\":{\"id\":66,\"profile_id\":124,\"requester_id\":126,\"data\":\"[{\\\"id\\\":124,\\\"gender\\\":\\\"male\\\",\\\"name\\\":\\\"Utsav\\\",\\\"number\\\":\\\"123456789\\\",\\\"dob\\\":\\\"2001-09-11\\\",\\\"age\\\":22,\\\"nationality\\\":\\\"USA\\\",\\\"place_of_residence\\\":\\\"New York\\\",\\\"city\\\":\\\"Sharjah\\\",\\\"job\\\":\\\"Software Engineer\\\",\\\"lineage\\\":\\\"Caucasian\\\",\\\"skin_color\\\":\\\"Fair\\\",\\\"martial_status\\\":\\\"Single\\\",\\\"number_of_children\\\":0,\\\"are_the_children_with_you\\\":0,\\\"religious_commitment\\\":\\\"Christian\\\",\\\"financial_situation\\\":\\\"Stable\\\",\\\"height\\\":\\\"180.00\\\",\\\"width\\\":\\\"80.00\\\",\\\"body_tone\\\":\\\"Fit\\\",\\\"health_status\\\":\\\"Good\\\",\\\"write_about_yourself\\\":\\\"I am a software engineer living in New York City.\\\",\\\"qualities_you_are_looking_for\\\":null,\\\"interests\\\":\\\"Reading, hiking, playing guitar\\\",\\\"views\\\":9,\\\"likes\\\":4,\\\"created_at\\\":\\\"2024-03-05T08:58:05.000000Z\\\",\\\"updated_at\\\":\\\"2024-03-05T11:54:11.000000Z\\\"}]\",\"status\":\"rejected\",\"created_at\":\"2024-03-05T11:54:13.000000Z\",\"updated_at\":\"2024-03-05T12:09:32.000000Z\"},\"1\":{\"id\":124,\"gender\":\"male\",\"name\":\"Utsav\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"80.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":9,\"likes\":4,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-05T11:54:11.000000Z\"},\"request_id\":124}', NULL, NULL, NULL, '2024-03-05 06:39:35', '2024-03-05 06:39:35'),
(361, 124, 127, 'profile_visit', '[{\"profile_id\":\"124\",\"viewer_id\":127,\"updated_at\":\"2024-03-05T12:17:14.000000Z\",\"created_at\":\"2024-03-05T12:17:14.000000Z\",\"id\":309},{\"id\":127,\"gender\":\"male\",\"name\":\"Harsh\",\"number\":\"963258741\",\"dob\":\"2002-04-10\",\"age\":21,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":4,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"140.00\",\"width\":\"70.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-05T08:59:42.000000Z\",\"updated_at\":\"2024-03-05T12:16:59.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 06:47:14', '2024-03-05 06:47:14'),
(362, 124, 127, 'profile_like', '[{\"liked_profile_id\":\"124\",\"liker_id\":127,\"updated_at\":\"2024-03-05T12:17:15.000000Z\",\"created_at\":\"2024-03-05T12:17:15.000000Z\",\"id\":42},{\"id\":127,\"gender\":\"male\",\"name\":\"Harsh\",\"number\":\"963258741\",\"dob\":\"2002-04-10\",\"age\":21,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":4,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"140.00\",\"width\":\"70.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-05T08:59:42.000000Z\",\"updated_at\":\"2024-03-05T12:16:59.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 06:47:15', '2024-03-05 06:47:15'),
(363, 124, 127, 'profile_contact_request', '{\"0\":{\"profile_id\":\"124\",\"requester_id\":127,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-05T12:17:17.000000Z\",\"created_at\":\"2024-03-05T12:17:17.000000Z\",\"id\":67},\"1\":{\"id\":127,\"gender\":\"male\",\"name\":\"Harsh\",\"number\":\"963258741\",\"dob\":\"2002-04-10\",\"age\":21,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":4,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"140.00\",\"width\":\"70.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-05T08:59:42.000000Z\",\"updated_at\":\"2024-03-05T12:16:59.000000Z\"},\"request_id\":67}', '2024-03-05 06:47:30', 67, 'accepted', '2024-03-05 06:47:17', '2024-03-05 06:47:30'),
(364, 127, 124, 'contact_request_accepted', '{\"0\":{\"profile_id\":124,\"number\":\"6869\",\"note\":\"Vh h\",\"updated_at\":\"2024-03-05T12:17:30.000000Z\",\"created_at\":\"2024-03-05T12:17:30.000000Z\",\"id\":91},\"1\":{\"id\":124,\"gender\":\"male\",\"name\":\"Utsav\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"80.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":10,\"likes\":5,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-05T12:17:15.000000Z\"},\"request_id\":124}', NULL, NULL, NULL, '2024-03-05 06:47:30', '2024-03-05 06:47:30'),
(365, 124, 128, 'profile_visit', '[{\"profile_id\":\"124\",\"viewer_id\":128,\"updated_at\":\"2024-03-05T12:20:25.000000Z\",\"created_at\":\"2024-03-05T12:20:25.000000Z\",\"id\":310},{\"id\":128,\"gender\":\"male\",\"name\":\"Yash\",\"number\":\"147896325\",\"dob\":\"2004-06-20\",\"age\":19,\"nationality\":\"Germany\",\"place_of_residence\":\"Miami\",\"city\":\"Ras Al Khaimah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":6,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"170.00\",\"width\":\"50.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":1,\"likes\":0,\"created_at\":\"2024-03-05T09:00:01.000000Z\",\"updated_at\":\"2024-03-05T12:20:17.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 06:50:25', '2024-03-05 06:50:25'),
(366, 124, 128, 'profile_like', '[{\"liked_profile_id\":\"124\",\"liker_id\":128,\"updated_at\":\"2024-03-05T12:20:27.000000Z\",\"created_at\":\"2024-03-05T12:20:27.000000Z\",\"id\":43},{\"id\":128,\"gender\":\"male\",\"name\":\"Yash\",\"number\":\"147896325\",\"dob\":\"2004-06-20\",\"age\":19,\"nationality\":\"Germany\",\"place_of_residence\":\"Miami\",\"city\":\"Ras Al Khaimah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":6,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"170.00\",\"width\":\"50.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":1,\"likes\":0,\"created_at\":\"2024-03-05T09:00:01.000000Z\",\"updated_at\":\"2024-03-05T12:20:17.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 06:50:27', '2024-03-05 06:50:27'),
(367, 124, 128, 'profile_contact_request', '{\"0\":{\"profile_id\":\"124\",\"requester_id\":128,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-05T12:20:28.000000Z\",\"created_at\":\"2024-03-05T12:20:28.000000Z\",\"id\":68},\"1\":{\"id\":128,\"gender\":\"male\",\"name\":\"Yash\",\"number\":\"147896325\",\"dob\":\"2004-06-20\",\"age\":19,\"nationality\":\"Germany\",\"place_of_residence\":\"Miami\",\"city\":\"Ras Al Khaimah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":6,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"170.00\",\"width\":\"50.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":1,\"likes\":0,\"created_at\":\"2024-03-05T09:00:01.000000Z\",\"updated_at\":\"2024-03-05T12:20:17.000000Z\"},\"request_id\":68}', '2024-03-05 06:50:44', 68, 'accepted', '2024-03-05 06:50:28', '2024-03-05 06:50:44'),
(368, 128, 124, 'contact_request_accepted', '{\"0\":{\"profile_id\":124,\"number\":\"6869686866\",\"note\":\"Vh h g gcycugg7\",\"updated_at\":\"2024-03-05T12:20:44.000000Z\",\"created_at\":\"2024-03-05T12:20:44.000000Z\",\"id\":92},\"1\":{\"id\":124,\"gender\":\"male\",\"name\":\"Utsav\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"80.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":11,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-05T12:20:27.000000Z\"},\"request_id\":124}', NULL, NULL, NULL, '2024-03-05 06:50:44', '2024-03-05 06:50:44'),
(369, 126, 124, 'profile_visit', '[{\"profile_id\":\"126\",\"viewer_id\":124,\"updated_at\":\"2024-03-06T03:36:39.000000Z\",\"created_at\":\"2024-03-06T03:36:39.000000Z\",\"id\":314},{\"id\":124,\"gender\":\"male\",\"name\":\"7fufuf\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Archery\",\"views\":13,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-06T03:35:30.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 22:06:39', '2024-03-05 22:06:39'),
(370, 126, 124, 'profile_like', '[{\"liked_profile_id\":\"126\",\"liker_id\":124,\"updated_at\":\"2024-03-06T03:36:40.000000Z\",\"created_at\":\"2024-03-06T03:36:40.000000Z\",\"id\":44},{\"id\":124,\"gender\":\"male\",\"name\":\"7fufuf\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Archery\",\"views\":13,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-06T03:35:30.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 22:06:40', '2024-03-05 22:06:40'),
(371, 128, 124, 'profile_visit', '[{\"profile_id\":\"128\",\"viewer_id\":124,\"updated_at\":\"2024-03-06T03:37:41.000000Z\",\"created_at\":\"2024-03-06T03:37:41.000000Z\",\"id\":315},{\"id\":124,\"gender\":\"male\",\"name\":\"7fufuf\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Archery\",\"views\":13,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-06T03:35:30.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 22:07:41', '2024-03-05 22:07:41'),
(372, 127, 124, 'profile_visit', '[{\"profile_id\":\"127\",\"viewer_id\":124,\"updated_at\":\"2024-03-06T03:38:56.000000Z\",\"created_at\":\"2024-03-06T03:38:56.000000Z\",\"id\":320},{\"id\":124,\"gender\":\"male\",\"name\":\"7fufuf\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Archery\",\"views\":13,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-06T03:35:30.000000Z\"}]', NULL, NULL, NULL, '2024-03-05 22:08:56', '2024-03-05 22:08:56'),
(373, 132, 130, 'profile_visit', '[{\"profile_id\":\"132\",\"viewer_id\":130,\"updated_at\":\"2024-03-06T06:59:49.000000Z\",\"created_at\":\"2024-03-06T06:59:49.000000Z\",\"id\":328},{\"id\":130,\"gender\":\"male\",\"name\":\"jay\",\"number\":\"979797979\",\"dob\":\"2011-05-12\",\"age\":30,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"Houston\",\"city\":\"Sharjah\",\"job\":\"Freelance\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":null,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Rich\",\"height\":\"88.00\",\"width\":\"70.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"i am a athlete\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-06T06:33:31.000000Z\",\"updated_at\":\"2024-03-06T06:44:29.000000Z\"}]', NULL, NULL, NULL, '2024-03-06 01:29:49', '2024-03-06 01:29:49'),
(374, 127, 124, 'profile_contact_request', '{\"0\":{\"profile_id\":\"127\",\"requester_id\":124,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-07T12:12:57.000000Z\",\"created_at\":\"2024-03-07T12:12:57.000000Z\",\"id\":69},\"1\":{\"id\":124,\"gender\":\"male\",\"name\":\"7fufuf\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Archery\",\"views\":13,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-07T11:51:11.000000Z\"},\"request_id\":69}', NULL, 69, NULL, '2024-03-07 06:42:57', '2024-03-07 06:42:57'),
(375, 135, 124, 'profile_visit', '[{\"profile_id\":\"135\",\"viewer_id\":124,\"updated_at\":\"2024-03-08T06:27:00.000000Z\",\"created_at\":\"2024-03-08T06:27:00.000000Z\",\"id\":382},{\"id\":124,\"gender\":\"male\",\"name\":\"7fufuf\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Archery\",\"views\":13,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-08T05:59:49.000000Z\"}]', NULL, NULL, NULL, '2024-03-08 00:57:00', '2024-03-08 00:57:00'),
(377, 130, 124, 'profile_visit', '[{\"profile_id\":\"130\",\"viewer_id\":124,\"updated_at\":\"2024-03-11T06:09:14.000000Z\",\"created_at\":\"2024-03-11T06:09:14.000000Z\",\"id\":391},{\"id\":124,\"gender\":\"No\",\"name\":\"Ncjcjfjd\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":12,\"nationality\":\"Australia\",\"place_of_residence\":\"New York\",\"city\":\"Ajman\",\"job\":\"Artist\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Muscular\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"K j jv\",\"qualities_you_are_looking_for\":null,\"interests\":\"Horseback Riding\",\"views\":13,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-11T06:05:13.000000Z\"}]', NULL, NULL, NULL, '2024-03-11 00:39:14', '2024-03-11 00:39:14'),
(378, 128, 124, 'profile_contact_request', '{\"0\":{\"profile_id\":\"128\",\"requester_id\":124,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-11T10:00:03.000000Z\",\"created_at\":\"2024-03-11T10:00:03.000000Z\",\"id\":70},\"1\":{\"id\":124,\"gender\":\"No\",\"name\":\"Ncjcjfjd\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":12,\"nationality\":\"Australia\",\"place_of_residence\":\"New York\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Muscular\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"K j jv\",\"qualities_you_are_looking_for\":null,\"interests\":\"Horseback Riding\",\"views\":13,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-11T09:45:01.000000Z\"},\"request_id\":70}', NULL, 70, NULL, '2024-03-11 04:30:03', '2024-03-11 04:30:03'),
(379, 124, 144, 'profile_visit', '[{\"profile_id\":\"124\",\"viewer_id\":144,\"updated_at\":\"2024-03-11T11:24:56.000000Z\",\"created_at\":\"2024-03-11T11:24:56.000000Z\",\"id\":397},{\"id\":144,\"gender\":\"male\",\"name\":\"Aditi\",\"number\":\"122756978\",\"dob\":\"2024-03-11\",\"age\":0,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Dubai\",\"job\":\"Government Department\",\"lineage\":\"Tribal\",\"skin_color\":\"White\",\"martial_status\":\"single\",\"number_of_children\":0,\"are_the_children_with_you\":1,\"religious_commitment\":\"Committed and Always Pray\",\"financial_situation\":\"Good\",\"height\":\"28.00\",\"width\":\"13.00\",\"body_tone\":\"Medium\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"Hxhx\",\"qualities_you_are_looking_for\":null,\"interests\":\"Swimming\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-11T11:08:18.000000Z\",\"updated_at\":\"2024-03-11T11:08:18.000000Z\"}]', NULL, NULL, NULL, '2024-03-11 05:54:56', '2024-03-11 05:54:56'),
(380, 132, 124, 'profile_visit', '[{\"profile_id\":\"132\",\"viewer_id\":124,\"updated_at\":\"2024-03-12T09:31:29.000000Z\",\"created_at\":\"2024-03-12T09:31:29.000000Z\",\"id\":544},{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":12,\"nationality\":\"Australia\",\"place_of_residence\":\"New York\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Muscular\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":15,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-12T08:59:34.000000Z\"}]', NULL, NULL, NULL, '2024-03-12 04:01:29', '2024-03-12 04:01:29'),
(381, 124, 146, 'profile_visit', '[{\"profile_id\":\"124\",\"viewer_id\":146,\"updated_at\":\"2024-03-14T06:12:16.000000Z\",\"created_at\":\"2024-03-14T06:12:16.000000Z\",\"id\":586},{\"id\":146,\"gender\":\"male\",\"name\":\"Harsh\",\"number\":\"258741369\",\"dob\":\"2019-03-01\",\"age\":5,\"nationality\":\"Australia\",\"place_of_residence\":\"New York\",\"city\":\"Dubai\",\"job\":\"Government Department\",\"lineage\":\"Tribal\",\"skin_color\":\"White\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":null,\"religious_commitment\":\"Committed and Always Pray\",\"financial_situation\":\"Good\",\"height\":\"25.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"dcfvbnm\",\"qualities_you_are_looking_for\":null,\"interests\":\"Swimming\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T05:11:09.000000Z\",\"updated_at\":\"2024-03-14T05:11:46.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 00:42:16', '2024-03-14 00:42:16'),
(382, 124, 146, 'profile_contact_request', '{\"0\":{\"profile_id\":\"124\",\"requester_id\":146,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-14T06:18:34.000000Z\",\"created_at\":\"2024-03-14T06:18:34.000000Z\",\"id\":71},\"1\":{\"id\":146,\"gender\":\"male\",\"name\":\"Harsh\",\"number\":\"258741369\",\"dob\":\"2019-03-01\",\"age\":5,\"nationality\":\"Australia\",\"place_of_residence\":\"New York\",\"city\":\"Dubai\",\"job\":\"Government Department\",\"lineage\":\"Tribal\",\"skin_color\":\"White\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":null,\"religious_commitment\":\"Committed and Always Pray\",\"financial_situation\":\"Good\",\"height\":\"25.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"dcfvbnm\",\"qualities_you_are_looking_for\":null,\"interests\":\"Swimming\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T05:11:09.000000Z\",\"updated_at\":\"2024-03-14T05:11:46.000000Z\"},\"request_id\":71}', '2024-03-14 00:57:50', 71, 'rejected', '2024-03-14 00:48:34', '2024-03-14 00:57:50'),
(383, 146, 124, 'profile_visit', '[{\"profile_id\":\"146\",\"viewer_id\":124,\"updated_at\":\"2024-03-14T06:24:40.000000Z\",\"created_at\":\"2024-03-14T06:24:40.000000Z\",\"id\":592},{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":12,\"nationality\":\"Canada\",\"place_of_residence\":\"New York\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Muscular\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":19,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T06:23:31.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 00:54:41', '2024-03-14 00:54:41'),
(384, 146, 124, 'contact_request_rejected', '{\"0\":{\"id\":71,\"profile_id\":124,\"requester_id\":146,\"data\":\"[{\\\"id\\\":124,\\\"gender\\\":\\\"Male\\\",\\\"name\\\":\\\"Q\\\",\\\"number\\\":\\\"123456789\\\",\\\"dob\\\":\\\"2008-03-10\\\",\\\"age\\\":12,\\\"nationality\\\":\\\"Canada\\\",\\\"place_of_residence\\\":\\\"New York\\\",\\\"city\\\":\\\"Ajman\\\",\\\"job\\\":\\\"Entrepreneur\\\",\\\"lineage\\\":\\\"Non Tribal\\\",\\\"skin_color\\\":\\\"Fair\\\",\\\"martial_status\\\":\\\"Single\\\",\\\"number_of_children\\\":0,\\\"are_the_children_with_you\\\":0,\\\"religious_commitment\\\":\\\"Christian\\\",\\\"financial_situation\\\":\\\"Stable\\\",\\\"height\\\":\\\"180.00\\\",\\\"width\\\":\\\"50.00\\\",\\\"body_tone\\\":\\\"Muscular\\\",\\\"health_status\\\":\\\"Recovered\\\",\\\"write_about_yourself\\\":\\\"Hchcjc\\\",\\\"qualities_you_are_looking_for\\\":null,\\\"interests\\\":\\\"Football\\\",\\\"views\\\":19,\\\"likes\\\":6,\\\"created_at\\\":\\\"2024-03-05T08:58:05.000000Z\\\",\\\"updated_at\\\":\\\"2024-03-14T06:23:31.000000Z\\\"}]\",\"status\":\"rejected\",\"created_at\":\"2024-03-14T06:18:34.000000Z\",\"updated_at\":\"2024-03-14T06:27:50.000000Z\"},\"1\":{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":12,\"nationality\":\"Canada\",\"place_of_residence\":\"New York\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Muscular\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":19,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T06:23:31.000000Z\"},\"request_id\":124}', NULL, NULL, NULL, '2024-03-14 00:57:50', '2024-03-14 00:57:50'),
(385, 146, 124, 'profile_contact_request', '{\"0\":{\"profile_id\":\"146\",\"requester_id\":124,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-14T06:28:04.000000Z\",\"created_at\":\"2024-03-14T06:28:04.000000Z\",\"id\":72},\"1\":{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":12,\"nationality\":\"Canada\",\"place_of_residence\":\"New York\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Muscular\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":19,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T06:23:31.000000Z\"},\"request_id\":72}', NULL, 72, NULL, '2024-03-14 00:58:04', '2024-03-14 00:58:04'),
(386, 124, 147, 'profile_visit', '[{\"profile_id\":\"124\",\"viewer_id\":147,\"updated_at\":\"2024-03-14T06:54:27.000000Z\",\"created_at\":\"2024-03-14T06:54:27.000000Z\",\"id\":595},{\"id\":147,\"gender\":\"Male\",\"name\":\"rushi\",\"number\":\"121212121\",\"dob\":\"2007-06-14\",\"age\":16,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Ras Al Khaimah\",\"job\":\"Artist\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Married\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Excellent\",\"height\":\"77.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"aadd\",\"qualities_you_are_looking_for\":null,\"interests\":\"Horseback Riding\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T06:44:11.000000Z\",\"updated_at\":\"2024-03-14T06:53:40.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 01:24:27', '2024-03-14 01:24:27'),
(387, 124, 147, 'profile_like', '[{\"liked_profile_id\":\"124\",\"liker_id\":147,\"updated_at\":\"2024-03-14T06:54:29.000000Z\",\"created_at\":\"2024-03-14T06:54:29.000000Z\",\"id\":45},{\"id\":147,\"gender\":\"Male\",\"name\":\"rushi\",\"number\":\"121212121\",\"dob\":\"2007-06-14\",\"age\":16,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Ras Al Khaimah\",\"job\":\"Artist\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Married\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Excellent\",\"height\":\"77.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"aadd\",\"qualities_you_are_looking_for\":null,\"interests\":\"Horseback Riding\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T06:44:11.000000Z\",\"updated_at\":\"2024-03-14T06:53:40.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 01:24:29', '2024-03-14 01:24:29'),
(388, 124, 147, 'profile_contact_request', '{\"0\":{\"profile_id\":\"124\",\"requester_id\":147,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-14T06:54:30.000000Z\",\"created_at\":\"2024-03-14T06:54:30.000000Z\",\"id\":73},\"1\":{\"id\":147,\"gender\":\"Male\",\"name\":\"rushi\",\"number\":\"121212121\",\"dob\":\"2007-06-14\",\"age\":16,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Ras Al Khaimah\",\"job\":\"Artist\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Married\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Excellent\",\"height\":\"77.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"aadd\",\"qualities_you_are_looking_for\":null,\"interests\":\"Horseback Riding\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T06:44:11.000000Z\",\"updated_at\":\"2024-03-14T06:53:40.000000Z\"},\"request_id\":73}', '2024-03-14 04:21:02', 73, 'accepted', '2024-03-14 01:24:30', '2024-03-14 04:21:02'),
(389, 126, 147, 'profile_visit', '[{\"profile_id\":\"126\",\"viewer_id\":147,\"updated_at\":\"2024-03-14T06:54:49.000000Z\",\"created_at\":\"2024-03-14T06:54:49.000000Z\",\"id\":596},{\"id\":147,\"gender\":\"Male\",\"name\":\"rushi\",\"number\":\"121212121\",\"dob\":\"2007-06-14\",\"age\":16,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Ras Al Khaimah\",\"job\":\"Artist\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Married\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Excellent\",\"height\":\"77.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"aadd\",\"qualities_you_are_looking_for\":null,\"interests\":\"Horseback Riding\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T06:44:11.000000Z\",\"updated_at\":\"2024-03-14T06:53:40.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 01:24:49', '2024-03-14 01:24:49'),
(390, 126, 147, 'profile_like', '[{\"liked_profile_id\":\"126\",\"liker_id\":147,\"updated_at\":\"2024-03-14T06:54:51.000000Z\",\"created_at\":\"2024-03-14T06:54:51.000000Z\",\"id\":46},{\"id\":147,\"gender\":\"Male\",\"name\":\"rushi\",\"number\":\"121212121\",\"dob\":\"2007-06-14\",\"age\":16,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Ras Al Khaimah\",\"job\":\"Artist\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Married\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Excellent\",\"height\":\"77.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"aadd\",\"qualities_you_are_looking_for\":null,\"interests\":\"Horseback Riding\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T06:44:11.000000Z\",\"updated_at\":\"2024-03-14T06:53:40.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 01:24:51', '2024-03-14 01:24:51'),
(391, 147, 124, 'profile_visit', '[{\"profile_id\":\"147\",\"viewer_id\":124,\"updated_at\":\"2024-03-14T07:09:50.000000Z\",\"created_at\":\"2024-03-14T07:09:50.000000Z\",\"id\":597},{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":12,\"nationality\":\"Canada\",\"place_of_residence\":\"New York\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Muscular\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":20,\"likes\":7,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T07:08:56.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 01:39:50', '2024-03-14 01:39:50'),
(392, 144, 124, 'profile_visit', '[{\"profile_id\":\"144\",\"viewer_id\":124,\"updated_at\":\"2024-03-14T07:16:19.000000Z\",\"created_at\":\"2024-03-14T07:16:19.000000Z\",\"id\":598},{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":12,\"nationality\":\"Canada\",\"place_of_residence\":\"New York\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Muscular\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":20,\"likes\":7,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T07:08:56.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 01:46:19', '2024-03-14 01:46:19'),
(393, 147, 124, 'contact_request_rejected', '{\"0\":{\"id\":73,\"profile_id\":124,\"requester_id\":147,\"data\":\"[{\\\"id\\\":124,\\\"gender\\\":\\\"Male\\\",\\\"name\\\":\\\"Q\\\",\\\"number\\\":\\\"123456789\\\",\\\"dob\\\":\\\"2008-03-10\\\",\\\"age\\\":16,\\\"nationality\\\":\\\"Canada\\\",\\\"place_of_residence\\\":\\\"Chicago\\\",\\\"city\\\":\\\"Ajman\\\",\\\"job\\\":\\\"Entrepreneur\\\",\\\"lineage\\\":\\\"Non Tribal\\\",\\\"skin_color\\\":\\\"Brown color is close to White\\\",\\\"martial_status\\\":\\\"Single\\\",\\\"number_of_children\\\":0,\\\"are_the_children_with_you\\\":0,\\\"religious_commitment\\\":\\\"Not Committed and Always Pray\\\",\\\"financial_situation\\\":\\\"Stable\\\",\\\"height\\\":\\\"180.00\\\",\\\"width\\\":\\\"50.00\\\",\\\"body_tone\\\":\\\"Athletic\\\",\\\"health_status\\\":\\\"Recovered\\\",\\\"write_about_yourself\\\":\\\"Hchcjc\\\",\\\"qualities_you_are_looking_for\\\":null,\\\"interests\\\":\\\"Football\\\",\\\"views\\\":20,\\\"likes\\\":7,\\\"created_at\\\":\\\"2024-03-05T08:58:05.000000Z\\\",\\\"updated_at\\\":\\\"2024-03-14T09:45:53.000000Z\\\"}]\",\"status\":\"rejected\",\"created_at\":\"2024-03-14T06:54:30.000000Z\",\"updated_at\":\"2024-03-14T09:50:49.000000Z\"},\"1\":{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":16,\"nationality\":\"Canada\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Not Committed and Always Pray\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":20,\"likes\":7,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T09:45:53.000000Z\"},\"request_id\":124}', NULL, NULL, NULL, '2024-03-14 04:20:49', '2024-03-14 04:20:49');
INSERT INTO `notifications` (`id`, `profile_id`, `opp_profile_id`, `type`, `data`, `read_at`, `request_id`, `request_status`, `created_at`, `updated_at`) VALUES
(394, 147, 124, 'contact_request_accepted', '{\"0\":{\"profile_id\":124,\"number\":\"43355323333\",\"note\":\"cdfsdf\",\"updated_at\":\"2024-03-14T09:51:02.000000Z\",\"created_at\":\"2024-03-14T09:51:02.000000Z\",\"id\":93},\"1\":{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":16,\"nationality\":\"Canada\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Not Committed and Always Pray\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":20,\"likes\":7,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T09:45:53.000000Z\"},\"request_id\":124}', NULL, NULL, NULL, '2024-03-14 04:21:02', '2024-03-14 04:21:02'),
(395, 124, 148, 'profile_visit', '[{\"profile_id\":\"124\",\"viewer_id\":148,\"updated_at\":\"2024-03-14T10:28:03.000000Z\",\"created_at\":\"2024-03-14T10:28:03.000000Z\",\"id\":600},{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T10:22:23.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 04:58:03', '2024-03-14 04:58:03'),
(396, 124, 148, 'profile_like', '[{\"liked_profile_id\":\"124\",\"liker_id\":148,\"updated_at\":\"2024-03-14T10:28:06.000000Z\",\"created_at\":\"2024-03-14T10:28:06.000000Z\",\"id\":47},{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T10:22:23.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 04:58:06', '2024-03-14 04:58:06'),
(397, 124, 148, 'profile_contact_request', '{\"0\":{\"profile_id\":\"124\",\"requester_id\":148,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-14T10:28:07.000000Z\",\"created_at\":\"2024-03-14T10:28:07.000000Z\",\"id\":74},\"1\":{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T10:22:23.000000Z\"},\"request_id\":74}', '2024-03-14 05:04:40', 74, 'rejected', '2024-03-14 04:58:07', '2024-03-14 05:04:40'),
(398, 130, 148, 'profile_visit', '[{\"profile_id\":\"130\",\"viewer_id\":148,\"updated_at\":\"2024-03-14T10:28:16.000000Z\",\"created_at\":\"2024-03-14T10:28:16.000000Z\",\"id\":601},{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T10:22:23.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 04:58:16', '2024-03-14 04:58:16'),
(399, 130, 148, 'profile_like', '[{\"liked_profile_id\":\"130\",\"liker_id\":148,\"updated_at\":\"2024-03-14T10:28:17.000000Z\",\"created_at\":\"2024-03-14T10:28:17.000000Z\",\"id\":48},{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T10:22:23.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 04:58:17', '2024-03-14 04:58:17'),
(400, 130, 148, 'profile_contact_request', '{\"0\":{\"profile_id\":\"130\",\"requester_id\":148,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-14T10:28:18.000000Z\",\"created_at\":\"2024-03-14T10:28:18.000000Z\",\"id\":75},\"1\":{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T10:22:23.000000Z\"},\"request_id\":75}', '2024-03-14 05:32:57', 75, 'rejected', '2024-03-14 04:58:18', '2024-03-14 05:32:57'),
(401, 146, 148, 'profile_visit', '[{\"profile_id\":\"146\",\"viewer_id\":148,\"updated_at\":\"2024-03-14T10:28:24.000000Z\",\"created_at\":\"2024-03-14T10:28:24.000000Z\",\"id\":602},{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T10:22:23.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 04:58:24', '2024-03-14 04:58:24'),
(402, 147, 148, 'profile_visit', '[{\"profile_id\":\"147\",\"viewer_id\":148,\"updated_at\":\"2024-03-14T10:28:29.000000Z\",\"created_at\":\"2024-03-14T10:28:29.000000Z\",\"id\":603},{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T10:22:23.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 04:58:29', '2024-03-14 04:58:29'),
(403, 147, 148, 'profile_like', '[{\"liked_profile_id\":\"147\",\"liker_id\":148,\"updated_at\":\"2024-03-14T10:28:29.000000Z\",\"created_at\":\"2024-03-14T10:28:29.000000Z\",\"id\":49},{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T10:22:23.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 04:58:29', '2024-03-14 04:58:29'),
(404, 147, 148, 'profile_contact_request', '{\"0\":{\"profile_id\":\"147\",\"requester_id\":148,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-14T10:28:31.000000Z\",\"created_at\":\"2024-03-14T10:28:31.000000Z\",\"id\":76},\"1\":{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T10:22:23.000000Z\"},\"request_id\":76}', '2024-03-14 06:10:11', 76, 'rejected', '2024-03-14 04:58:31', '2024-03-14 06:10:11'),
(405, 148, 124, 'profile_visit', '[{\"profile_id\":\"148\",\"viewer_id\":124,\"updated_at\":\"2024-03-14T10:30:25.000000Z\",\"created_at\":\"2024-03-14T10:30:25.000000Z\",\"id\":604},{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":16,\"nationality\":\"Canada\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Not Committed and Always Pray\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":21,\"likes\":8,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T10:28:54.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 05:00:25', '2024-03-14 05:00:25'),
(406, 148, 124, 'contact_request_rejected', '{\"0\":{\"id\":74,\"profile_id\":124,\"requester_id\":148,\"data\":\"[{\\\"id\\\":124,\\\"gender\\\":\\\"Male\\\",\\\"name\\\":\\\"Q\\\",\\\"number\\\":\\\"123456789\\\",\\\"dob\\\":\\\"2008-03-10\\\",\\\"age\\\":16,\\\"nationality\\\":\\\"Canada\\\",\\\"place_of_residence\\\":\\\"Chicago\\\",\\\"city\\\":\\\"Ajman\\\",\\\"job\\\":\\\"Entrepreneur\\\",\\\"lineage\\\":\\\"Non Tribal\\\",\\\"skin_color\\\":\\\"Brown color is close to White\\\",\\\"martial_status\\\":\\\"Single\\\",\\\"number_of_children\\\":0,\\\"are_the_children_with_you\\\":0,\\\"religious_commitment\\\":\\\"Not Committed and Always Pray\\\",\\\"financial_situation\\\":\\\"Stable\\\",\\\"height\\\":\\\"180.00\\\",\\\"width\\\":\\\"50.00\\\",\\\"body_tone\\\":\\\"Athletic\\\",\\\"health_status\\\":\\\"Recovered\\\",\\\"write_about_yourself\\\":\\\"Hchcjc\\\",\\\"qualities_you_are_looking_for\\\":null,\\\"interests\\\":\\\"Football\\\",\\\"views\\\":21,\\\"likes\\\":8,\\\"created_at\\\":\\\"2024-03-05T08:58:05.000000Z\\\",\\\"updated_at\\\":\\\"2024-03-14T10:28:54.000000Z\\\"}]\",\"status\":\"rejected\",\"created_at\":\"2024-03-14T10:28:07.000000Z\",\"updated_at\":\"2024-03-14T10:34:40.000000Z\"},\"1\":{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":16,\"nationality\":\"Canada\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Not Committed and Always Pray\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":21,\"likes\":8,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T10:28:54.000000Z\"},\"request_id\":124}', NULL, NULL, NULL, '2024-03-14 05:04:40', '2024-03-14 05:04:40'),
(407, 148, 124, 'profile_contact_request', '{\"0\":{\"profile_id\":\"148\",\"requester_id\":124,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-14T10:35:08.000000Z\",\"created_at\":\"2024-03-14T10:35:08.000000Z\",\"id\":77},\"1\":{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":16,\"nationality\":\"Canada\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Not Committed and Always Pray\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":21,\"likes\":8,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T10:28:54.000000Z\"},\"request_id\":77}', '2024-03-14 05:22:56', 77, 'rejected', '2024-03-14 05:05:08', '2024-03-14 05:22:56'),
(408, 148, 124, 'profile_like', '[{\"liked_profile_id\":\"148\",\"liker_id\":124,\"updated_at\":\"2024-03-14T10:35:13.000000Z\",\"created_at\":\"2024-03-14T10:35:13.000000Z\",\"id\":50},{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":16,\"nationality\":\"Canada\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Not Committed and Always Pray\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":21,\"likes\":8,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T10:28:54.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 05:05:13', '2024-03-14 05:05:13'),
(409, 124, 148, 'contact_request_rejected', '{\"0\":{\"id\":77,\"profile_id\":148,\"requester_id\":124,\"data\":\"[{\\\"id\\\":148,\\\"gender\\\":\\\"male\\\",\\\"name\\\":\\\"Rock\\\",\\\"number\\\":\\\"444555666\\\",\\\"dob\\\":\\\"2006-04-13\\\",\\\"age\\\":17,\\\"nationality\\\":\\\"United Kingdom\\\",\\\"place_of_residence\\\":\\\"San Francisco\\\",\\\"city\\\":\\\"Ajman\\\",\\\"job\\\":\\\"Trade\\\",\\\"lineage\\\":\\\"Non Tribal\\\",\\\"skin_color\\\":\\\"Light Brown\\\",\\\"martial_status\\\":\\\"single\\\",\\\"number_of_children\\\":null,\\\"are_the_children_with_you\\\":1,\\\"religious_commitment\\\":\\\"Not Committed and Sometimes Pray\\\",\\\"financial_situation\\\":\\\"Rich\\\",\\\"height\\\":\\\"58.00\\\",\\\"width\\\":\\\"50.00\\\",\\\"body_tone\\\":\\\"Athlete\\\",\\\"health_status\\\":\\\"Healthy\\\",\\\"write_about_yourself\\\":\\\"ghfykyh\\\",\\\"qualities_you_are_looking_for\\\":null,\\\"interests\\\":\\\"Football\\\",\\\"views\\\":3,\\\"likes\\\":1,\\\"created_at\\\":\\\"2024-03-14T10:21:28.000000Z\\\",\\\"updated_at\\\":\\\"2024-03-14T10:35:26.000000Z\\\"}]\",\"status\":\"rejected\",\"created_at\":\"2024-03-14T10:35:08.000000Z\",\"updated_at\":\"2024-03-14T10:52:56.000000Z\"},\"1\":{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":3,\"likes\":1,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T10:35:26.000000Z\"},\"request_id\":148}', NULL, NULL, NULL, '2024-03-14 05:22:56', '2024-03-14 05:22:56'),
(410, 127, 148, 'profile_visit', '[{\"profile_id\":\"127\",\"viewer_id\":148,\"updated_at\":\"2024-03-14T10:53:34.000000Z\",\"created_at\":\"2024-03-14T10:53:34.000000Z\",\"id\":610},{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":3,\"likes\":1,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T10:35:26.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 05:23:34', '2024-03-14 05:23:34'),
(411, 130, 124, 'profile_like', '[{\"liked_profile_id\":\"130\",\"liker_id\":124,\"updated_at\":\"2024-03-14T10:54:54.000000Z\",\"created_at\":\"2024-03-14T10:54:54.000000Z\",\"id\":51},{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":16,\"nationality\":\"Canada\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Not Committed and Always Pray\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":25,\"likes\":8,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T10:53:57.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 05:24:54', '2024-03-14 05:24:54'),
(412, 130, 124, 'profile_contact_request', '{\"0\":{\"profile_id\":\"130\",\"requester_id\":124,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-14T10:54:55.000000Z\",\"created_at\":\"2024-03-14T10:54:55.000000Z\",\"id\":78},\"1\":{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":16,\"nationality\":\"Canada\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Not Committed and Always Pray\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":25,\"likes\":8,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T10:53:57.000000Z\"},\"request_id\":78}', NULL, 78, NULL, '2024-03-14 05:24:55', '2024-03-14 05:24:55'),
(413, 124, 130, 'profile_visit', '[{\"profile_id\":\"124\",\"viewer_id\":130,\"updated_at\":\"2024-03-14T10:55:48.000000Z\",\"created_at\":\"2024-03-14T10:55:48.000000Z\",\"id\":613},{\"id\":130,\"gender\":\"male\",\"name\":\"jay\",\"number\":\"979797979\",\"dob\":\"2011-05-12\",\"age\":30,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"Houston\",\"city\":\"Sharjah\",\"job\":\"Freelance\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":null,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Rich\",\"height\":\"88.00\",\"width\":\"70.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"i am a athlete\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":5,\"likes\":2,\"created_at\":\"2024-03-06T06:33:31.000000Z\",\"updated_at\":\"2024-03-14T10:55:12.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 05:25:48', '2024-03-14 05:25:48'),
(414, 127, 130, 'profile_visit', '[{\"profile_id\":\"127\",\"viewer_id\":130,\"updated_at\":\"2024-03-14T10:59:55.000000Z\",\"created_at\":\"2024-03-14T10:59:55.000000Z\",\"id\":614},{\"id\":130,\"gender\":\"male\",\"name\":\"jay\",\"number\":\"979797979\",\"dob\":\"2011-05-12\",\"age\":30,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"Houston\",\"city\":\"Sharjah\",\"job\":\"Freelance\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":null,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Rich\",\"height\":\"88.00\",\"width\":\"70.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"i am a athlete\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":5,\"likes\":2,\"created_at\":\"2024-03-06T06:33:31.000000Z\",\"updated_at\":\"2024-03-14T10:55:12.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 05:29:55', '2024-03-14 05:29:55'),
(415, 124, 130, 'profile_like', '[{\"liked_profile_id\":\"124\",\"liker_id\":130,\"updated_at\":\"2024-03-14T10:59:59.000000Z\",\"created_at\":\"2024-03-14T10:59:59.000000Z\",\"id\":52},{\"id\":130,\"gender\":\"male\",\"name\":\"jay\",\"number\":\"979797979\",\"dob\":\"2011-05-12\",\"age\":30,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"Houston\",\"city\":\"Sharjah\",\"job\":\"Freelance\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":null,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Rich\",\"height\":\"88.00\",\"width\":\"70.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"i am a athlete\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":5,\"likes\":2,\"created_at\":\"2024-03-06T06:33:31.000000Z\",\"updated_at\":\"2024-03-14T10:55:12.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 05:29:59', '2024-03-14 05:29:59'),
(416, 124, 130, 'profile_contact_request', '{\"0\":{\"profile_id\":\"124\",\"requester_id\":130,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-14T11:00:00.000000Z\",\"created_at\":\"2024-03-14T11:00:00.000000Z\",\"id\":79},\"1\":{\"id\":130,\"gender\":\"male\",\"name\":\"jay\",\"number\":\"979797979\",\"dob\":\"2011-05-12\",\"age\":30,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"Houston\",\"city\":\"Sharjah\",\"job\":\"Freelance\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":null,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Rich\",\"height\":\"88.00\",\"width\":\"70.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"i am a athlete\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":5,\"likes\":2,\"created_at\":\"2024-03-06T06:33:31.000000Z\",\"updated_at\":\"2024-03-14T10:55:12.000000Z\"},\"request_id\":79}', '2024-03-14 05:55:19', 79, 'rejected', '2024-03-14 05:30:00', '2024-03-14 05:55:19'),
(417, 125, 130, 'profile_visit', '[{\"profile_id\":\"125\",\"viewer_id\":130,\"updated_at\":\"2024-03-14T11:00:11.000000Z\",\"created_at\":\"2024-03-14T11:00:11.000000Z\",\"id\":617},{\"id\":130,\"gender\":\"male\",\"name\":\"jay\",\"number\":\"979797979\",\"dob\":\"2011-05-12\",\"age\":30,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"Houston\",\"city\":\"Sharjah\",\"job\":\"Freelance\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":null,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Rich\",\"height\":\"88.00\",\"width\":\"70.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"i am a athlete\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":5,\"likes\":2,\"created_at\":\"2024-03-06T06:33:31.000000Z\",\"updated_at\":\"2024-03-14T10:55:12.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 05:30:11', '2024-03-14 05:30:11'),
(418, 148, 130, 'contact_request_rejected', '{\"0\":{\"id\":75,\"profile_id\":130,\"requester_id\":148,\"data\":\"[{\\\"id\\\":130,\\\"gender\\\":\\\"male\\\",\\\"name\\\":\\\"jay\\\",\\\"number\\\":\\\"979797979\\\",\\\"dob\\\":\\\"2011-05-12\\\",\\\"age\\\":30,\\\"nationality\\\":\\\"United Kingdom\\\",\\\"place_of_residence\\\":\\\"Houston\\\",\\\"city\\\":\\\"Sharjah\\\",\\\"job\\\":\\\"Freelance\\\",\\\"lineage\\\":\\\"Non Tribal\\\",\\\"skin_color\\\":\\\"Brown color is close to White\\\",\\\"martial_status\\\":\\\"Single\\\",\\\"number_of_children\\\":0,\\\"are_the_children_with_you\\\":null,\\\"religious_commitment\\\":\\\"Medium and Always Pray\\\",\\\"financial_situation\\\":\\\"Rich\\\",\\\"height\\\":\\\"88.00\\\",\\\"width\\\":\\\"70.00\\\",\\\"body_tone\\\":\\\"Athlete\\\",\\\"health_status\\\":\\\"Healthy\\\",\\\"write_about_yourself\\\":\\\"i am a athlete\\\",\\\"qualities_you_are_looking_for\\\":null,\\\"interests\\\":\\\"Football\\\",\\\"views\\\":5,\\\"likes\\\":2,\\\"created_at\\\":\\\"2024-03-06T06:33:31.000000Z\\\",\\\"updated_at\\\":\\\"2024-03-14T10:55:12.000000Z\\\"}]\",\"status\":\"rejected\",\"created_at\":\"2024-03-14T10:28:18.000000Z\",\"updated_at\":\"2024-03-14T11:02:57.000000Z\"},\"1\":{\"id\":130,\"gender\":\"male\",\"name\":\"jay\",\"number\":\"979797979\",\"dob\":\"2011-05-12\",\"age\":30,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"Houston\",\"city\":\"Sharjah\",\"job\":\"Freelance\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":null,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Rich\",\"height\":\"88.00\",\"width\":\"70.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"i am a athlete\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":5,\"likes\":2,\"created_at\":\"2024-03-06T06:33:31.000000Z\",\"updated_at\":\"2024-03-14T10:55:12.000000Z\"},\"request_id\":130}', NULL, NULL, NULL, '2024-03-14 05:32:57', '2024-03-14 05:32:57'),
(419, 130, 124, 'contact_request_rejected', '{\"0\":{\"id\":79,\"profile_id\":124,\"requester_id\":130,\"data\":\"[{\\\"id\\\":124,\\\"gender\\\":\\\"Male\\\",\\\"name\\\":\\\"Q\\\",\\\"number\\\":\\\"123456789\\\",\\\"dob\\\":\\\"2008-03-10\\\",\\\"age\\\":16,\\\"nationality\\\":\\\"Canada\\\",\\\"place_of_residence\\\":\\\"Chicago\\\",\\\"city\\\":\\\"Ajman\\\",\\\"job\\\":\\\"Entrepreneur\\\",\\\"lineage\\\":\\\"Non Tribal\\\",\\\"skin_color\\\":\\\"Brown color is close to White\\\",\\\"martial_status\\\":\\\"Single\\\",\\\"number_of_children\\\":0,\\\"are_the_children_with_you\\\":0,\\\"religious_commitment\\\":\\\"Not Committed and Always Pray\\\",\\\"financial_situation\\\":\\\"Stable\\\",\\\"height\\\":\\\"180.00\\\",\\\"width\\\":\\\"50.00\\\",\\\"body_tone\\\":\\\"Athletic\\\",\\\"health_status\\\":\\\"Recovered\\\",\\\"write_about_yourself\\\":\\\"Hchcjc\\\",\\\"qualities_you_are_looking_for\\\":null,\\\"interests\\\":\\\"Football\\\",\\\"views\\\":28,\\\"likes\\\":9,\\\"created_at\\\":\\\"2024-03-05T08:58:05.000000Z\\\",\\\"updated_at\\\":\\\"2024-03-14T11:03:25.000000Z\\\"}]\",\"status\":\"rejected\",\"created_at\":\"2024-03-14T11:00:00.000000Z\",\"updated_at\":\"2024-03-14T11:25:19.000000Z\"},\"1\":{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":16,\"nationality\":\"Canada\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Not Committed and Always Pray\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":28,\"likes\":9,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T11:03:25.000000Z\"},\"request_id\":124}', NULL, NULL, NULL, '2024-03-14 05:55:19', '2024-03-14 05:55:19'),
(420, 148, 147, 'contact_request_rejected', '{\"0\":{\"id\":76,\"profile_id\":147,\"requester_id\":148,\"data\":\"[{\\\"id\\\":147,\\\"gender\\\":\\\"Male\\\",\\\"name\\\":\\\"rushi\\\",\\\"number\\\":\\\"121212121\\\",\\\"dob\\\":\\\"2007-06-14\\\",\\\"age\\\":16,\\\"nationality\\\":\\\"Australia\\\",\\\"place_of_residence\\\":\\\"Houston\\\",\\\"city\\\":\\\"Ras Al Khaimah\\\",\\\"job\\\":\\\"Artist\\\",\\\"lineage\\\":\\\"Non Tribal\\\",\\\"skin_color\\\":\\\"Brown color is close to White\\\",\\\"martial_status\\\":\\\"Married\\\",\\\"number_of_children\\\":2,\\\"are_the_children_with_you\\\":0,\\\"religious_commitment\\\":\\\"Medium and Always Pray\\\",\\\"financial_situation\\\":\\\"Excellent\\\",\\\"height\\\":\\\"77.00\\\",\\\"width\\\":\\\"50.00\\\",\\\"body_tone\\\":\\\"Medium\\\",\\\"health_status\\\":\\\"Recovered\\\",\\\"write_about_yourself\\\":\\\"aadd\\\",\\\"qualities_you_are_looking_for\\\":null,\\\"interests\\\":\\\"Horseback Riding\\\",\\\"views\\\":4,\\\"likes\\\":1,\\\"created_at\\\":\\\"2024-03-14T06:44:11.000000Z\\\",\\\"updated_at\\\":\\\"2024-03-14T11:28:02.000000Z\\\"}]\",\"status\":\"rejected\",\"created_at\":\"2024-03-14T10:28:31.000000Z\",\"updated_at\":\"2024-03-14T11:40:11.000000Z\"},\"1\":{\"id\":147,\"gender\":\"Male\",\"name\":\"rushi\",\"number\":\"121212121\",\"dob\":\"2007-06-14\",\"age\":16,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Ras Al Khaimah\",\"job\":\"Artist\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Married\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Excellent\",\"height\":\"77.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"aadd\",\"qualities_you_are_looking_for\":null,\"interests\":\"Horseback Riding\",\"views\":4,\"likes\":1,\"created_at\":\"2024-03-14T06:44:11.000000Z\",\"updated_at\":\"2024-03-14T11:28:02.000000Z\"},\"request_id\":147}', NULL, NULL, NULL, '2024-03-14 06:10:11', '2024-03-14 06:10:11'),
(421, 127, 147, 'profile_visit', '[{\"profile_id\":\"127\",\"viewer_id\":147,\"updated_at\":\"2024-03-14T11:40:23.000000Z\",\"created_at\":\"2024-03-14T11:40:23.000000Z\",\"id\":621},{\"id\":147,\"gender\":\"Male\",\"name\":\"rushi\",\"number\":\"121212121\",\"dob\":\"2007-06-14\",\"age\":16,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Ras Al Khaimah\",\"job\":\"Artist\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Married\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Excellent\",\"height\":\"77.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"aadd\",\"qualities_you_are_looking_for\":null,\"interests\":\"Horseback Riding\",\"views\":4,\"likes\":1,\"created_at\":\"2024-03-14T06:44:11.000000Z\",\"updated_at\":\"2024-03-14T11:28:02.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 06:10:23', '2024-03-14 06:10:23'),
(422, 148, 147, 'profile_visit', '[{\"profile_id\":\"148\",\"viewer_id\":147,\"updated_at\":\"2024-03-14T11:40:38.000000Z\",\"created_at\":\"2024-03-14T11:40:38.000000Z\",\"id\":622},{\"id\":147,\"gender\":\"Male\",\"name\":\"rushi\",\"number\":\"121212121\",\"dob\":\"2007-06-14\",\"age\":16,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Ras Al Khaimah\",\"job\":\"Artist\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Married\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Excellent\",\"height\":\"77.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"aadd\",\"qualities_you_are_looking_for\":null,\"interests\":\"Horseback Riding\",\"views\":4,\"likes\":1,\"created_at\":\"2024-03-14T06:44:11.000000Z\",\"updated_at\":\"2024-03-14T11:28:02.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 06:10:38', '2024-03-14 06:10:38'),
(423, 148, 147, 'profile_like', '[{\"liked_profile_id\":\"148\",\"liker_id\":147,\"updated_at\":\"2024-03-14T11:40:40.000000Z\",\"created_at\":\"2024-03-14T11:40:40.000000Z\",\"id\":53},{\"id\":147,\"gender\":\"Male\",\"name\":\"rushi\",\"number\":\"121212121\",\"dob\":\"2007-06-14\",\"age\":16,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Ras Al Khaimah\",\"job\":\"Artist\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Married\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Excellent\",\"height\":\"77.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"aadd\",\"qualities_you_are_looking_for\":null,\"interests\":\"Horseback Riding\",\"views\":4,\"likes\":1,\"created_at\":\"2024-03-14T06:44:11.000000Z\",\"updated_at\":\"2024-03-14T11:28:02.000000Z\"}]', NULL, NULL, NULL, '2024-03-14 06:10:40', '2024-03-14 06:10:40'),
(424, 148, 147, 'profile_contact_request', '{\"0\":{\"profile_id\":\"148\",\"requester_id\":147,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-14T11:40:41.000000Z\",\"created_at\":\"2024-03-14T11:40:41.000000Z\",\"id\":80},\"1\":{\"id\":147,\"gender\":\"Male\",\"name\":\"rushi\",\"number\":\"121212121\",\"dob\":\"2007-06-14\",\"age\":16,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Ras Al Khaimah\",\"job\":\"Artist\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Married\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Excellent\",\"height\":\"77.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"aadd\",\"qualities_you_are_looking_for\":null,\"interests\":\"Horseback Riding\",\"views\":4,\"likes\":1,\"created_at\":\"2024-03-14T06:44:11.000000Z\",\"updated_at\":\"2024-03-14T11:28:02.000000Z\"},\"request_id\":80}', '2024-03-14 06:11:09', 80, 'rejected', '2024-03-14 06:10:41', '2024-03-14 06:11:09'),
(425, 147, 148, 'contact_request_rejected', '{\"0\":{\"id\":80,\"profile_id\":148,\"requester_id\":147,\"data\":\"[{\\\"id\\\":148,\\\"gender\\\":\\\"male\\\",\\\"name\\\":\\\"Rock\\\",\\\"number\\\":\\\"444555666\\\",\\\"dob\\\":\\\"2006-04-13\\\",\\\"age\\\":17,\\\"nationality\\\":\\\"United Kingdom\\\",\\\"place_of_residence\\\":\\\"San Francisco\\\",\\\"city\\\":\\\"Ajman\\\",\\\"job\\\":\\\"Trade\\\",\\\"lineage\\\":\\\"Non Tribal\\\",\\\"skin_color\\\":\\\"Light Brown\\\",\\\"martial_status\\\":\\\"single\\\",\\\"number_of_children\\\":null,\\\"are_the_children_with_you\\\":1,\\\"religious_commitment\\\":\\\"Not Committed and Sometimes Pray\\\",\\\"financial_situation\\\":\\\"Rich\\\",\\\"height\\\":\\\"58.00\\\",\\\"width\\\":\\\"50.00\\\",\\\"body_tone\\\":\\\"Athlete\\\",\\\"health_status\\\":\\\"Healthy\\\",\\\"write_about_yourself\\\":\\\"ghfykyh\\\",\\\"qualities_you_are_looking_for\\\":null,\\\"interests\\\":\\\"Football\\\",\\\"views\\\":5,\\\"likes\\\":2,\\\"created_at\\\":\\\"2024-03-14T10:21:28.000000Z\\\",\\\"updated_at\\\":\\\"2024-03-14T11:41:00.000000Z\\\"}]\",\"status\":\"rejected\",\"created_at\":\"2024-03-14T11:40:41.000000Z\",\"updated_at\":\"2024-03-14T11:41:09.000000Z\"},\"1\":{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":5,\"likes\":2,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T11:41:00.000000Z\"},\"request_id\":148}', NULL, NULL, NULL, '2024-03-14 06:11:09', '2024-03-14 06:11:09'),
(426, 148, 149, 'profile_visit', '[{\"profile_id\":\"148\",\"viewer_id\":149,\"updated_at\":\"2024-03-15T06:15:52.000000Z\",\"created_at\":\"2024-03-15T06:15:52.000000Z\",\"id\":623},{\"id\":149,\"gender\":\"male\",\"name\":\"John Doe\",\"number\":\"9876541234\",\"dob\":\"1990-01-01\",\"age\":34,\"nationality\":\"American\",\"place_of_residence\":\"New York\",\"city\":\"New York City\",\"job\":\"Software Engineer\",\"lineage\":\"Irish descent\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Moderate\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"75.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Good\",\"write_about_yourself\":\"I\'m a passionate software engineer who loves coding and outdoor activities.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Hiking, Reading, Playing guitar\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-15T06:10:46.000000Z\",\"updated_at\":\"2024-03-15T06:10:46.000000Z\"}]', NULL, NULL, NULL, '2024-03-15 00:45:52', '2024-03-15 00:45:52'),
(427, 149, 149, 'profile_visit', '[{\"profile_id\":\"149\",\"viewer_id\":149,\"updated_at\":\"2024-03-15T06:16:12.000000Z\",\"created_at\":\"2024-03-15T06:16:12.000000Z\",\"id\":624},{\"id\":149,\"gender\":\"male\",\"name\":\"John Doe\",\"number\":\"9876541234\",\"dob\":\"1990-01-01\",\"age\":34,\"nationality\":\"American\",\"place_of_residence\":\"New York\",\"city\":\"New York City\",\"job\":\"Software Engineer\",\"lineage\":\"Irish descent\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Moderate\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"75.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Good\",\"write_about_yourself\":\"I\'m a passionate software engineer who loves coding and outdoor activities.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Hiking, Reading, Playing guitar\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-15T06:10:46.000000Z\",\"updated_at\":\"2024-03-15T06:10:46.000000Z\"}]', NULL, NULL, NULL, '2024-03-15 00:46:12', '2024-03-15 00:46:12'),
(428, 126, 147, 'profile_contact_request', '{\"0\":{\"profile_id\":\"126\",\"requester_id\":147,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-15T09:47:20.000000Z\",\"created_at\":\"2024-03-15T09:47:20.000000Z\",\"id\":81},\"1\":{\"id\":147,\"gender\":\"Male\",\"name\":\"rushi\",\"number\":\"121212121\",\"dob\":\"2007-06-14\",\"age\":16,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Ras Al Khaimah\",\"job\":\"Artist\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Married\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Excellent\",\"height\":\"77.00\",\"width\":\"50.00\",\"body_tone\":\"Muscular\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"aadd\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":4,\"likes\":1,\"created_at\":\"2024-03-14T06:44:11.000000Z\",\"updated_at\":\"2024-03-15T09:16:14.000000Z\"},\"request_id\":81}', NULL, 81, NULL, '2024-03-15 04:17:20', '2024-03-15 04:17:20'),
(429, 146, 150, 'profile_visit', '[{\"profile_id\":\"146\",\"viewer_id\":150,\"updated_at\":\"2024-03-15T14:48:07.000000Z\",\"created_at\":\"2024-03-15T14:48:07.000000Z\",\"id\":630},{\"id\":150,\"gender\":\"male\",\"name\":\"Krish\",\"number\":\"843899767\",\"dob\":\"2009-10-10\",\"age\":14,\"nationality\":\"USA\",\"place_of_residence\":\"Los Angeles\",\"city\":\"Ajman\",\"job\":\"Private Sector\",\"lineage\":\"Tribal\",\"skin_color\":\"White\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Committed and Always Pray\",\"financial_situation\":\"Good\",\"height\":\"25.00\",\"width\":\"31.00\",\"body_tone\":\"Medium\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"I am krish\",\"qualities_you_are_looking_for\":null,\"interests\":\"Swimming\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-15T14:47:45.000000Z\",\"updated_at\":\"2024-03-15T14:47:45.000000Z\"}]', NULL, NULL, NULL, '2024-03-15 09:18:07', '2024-03-15 09:18:07'),
(430, 146, 150, 'profile_contact_request', '{\"0\":{\"profile_id\":\"146\",\"requester_id\":150,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-15T14:48:15.000000Z\",\"created_at\":\"2024-03-15T14:48:15.000000Z\",\"id\":82},\"1\":{\"id\":150,\"gender\":\"male\",\"name\":\"Krish\",\"number\":\"843899767\",\"dob\":\"2009-10-10\",\"age\":14,\"nationality\":\"USA\",\"place_of_residence\":\"Los Angeles\",\"city\":\"Ajman\",\"job\":\"Private Sector\",\"lineage\":\"Tribal\",\"skin_color\":\"White\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Committed and Always Pray\",\"financial_situation\":\"Good\",\"height\":\"25.00\",\"width\":\"31.00\",\"body_tone\":\"Medium\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"I am krish\",\"qualities_you_are_looking_for\":null,\"interests\":\"Swimming\",\"views\":0,\"likes\":0,\"created_at\":\"2024-03-15T14:47:45.000000Z\",\"updated_at\":\"2024-03-15T14:47:45.000000Z\"},\"request_id\":82}', NULL, 82, NULL, '2024-03-15 09:18:15', '2024-03-15 09:18:15'),
(431, 150, 125, 'profile_visit', '[{\"profile_id\":\"150\",\"viewer_id\":125,\"updated_at\":\"2024-03-18T04:42:37.000000Z\",\"created_at\":\"2024-03-18T04:42:37.000000Z\",\"id\":631},{\"id\":125,\"gender\":\"No\",\"name\":\"Jcjcj\",\"number\":\"686868342\",\"dob\":\"2024-03-03\",\"age\":30,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Dubai\",\"job\":\"Government Department\",\"lineage\":\"Tribal\",\"skin_color\":\"White\",\"martial_status\":\"Obesity\",\"number_of_children\":21,\"are_the_children_with_you\":0,\"religious_commitment\":\"Committed and Always Pray\",\"financial_situation\":\"Good\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"Jvjcuc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Swimming\",\"views\":222,\"likes\":1,\"created_at\":\"2024-03-05T08:58:56.000000Z\",\"updated_at\":\"2024-03-18T04:38:00.000000Z\"}]', NULL, NULL, NULL, '2024-03-17 23:12:37', '2024-03-17 23:12:37'),
(432, 150, 125, 'profile_like', '[{\"liked_profile_id\":\"150\",\"liker_id\":125,\"updated_at\":\"2024-03-18T04:44:05.000000Z\",\"created_at\":\"2024-03-18T04:44:05.000000Z\",\"id\":54},{\"id\":125,\"gender\":\"No\",\"name\":\"Jcjcj\",\"number\":\"686868342\",\"dob\":\"2024-03-03\",\"age\":30,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Dubai\",\"job\":\"Government Department\",\"lineage\":\"Tribal\",\"skin_color\":\"White\",\"martial_status\":\"Obesity\",\"number_of_children\":21,\"are_the_children_with_you\":0,\"religious_commitment\":\"Committed and Always Pray\",\"financial_situation\":\"Good\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"Jvjcuc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Swimming\",\"views\":222,\"likes\":1,\"created_at\":\"2024-03-05T08:58:56.000000Z\",\"updated_at\":\"2024-03-18T04:38:00.000000Z\"}]', NULL, NULL, NULL, '2024-03-17 23:14:05', '2024-03-17 23:14:05'),
(433, 150, 125, 'profile_contact_request', '{\"0\":{\"profile_id\":\"150\",\"requester_id\":125,\"data\":\"\",\"status\":\"pending\",\"updated_at\":\"2024-03-18T04:44:14.000000Z\",\"created_at\":\"2024-03-18T04:44:14.000000Z\",\"id\":83},\"1\":{\"id\":125,\"gender\":\"No\",\"name\":\"Jcjcj\",\"number\":\"686868342\",\"dob\":\"2024-03-03\",\"age\":30,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Dubai\",\"job\":\"Government Department\",\"lineage\":\"Tribal\",\"skin_color\":\"White\",\"martial_status\":\"Obesity\",\"number_of_children\":21,\"are_the_children_with_you\":0,\"religious_commitment\":\"Committed and Always Pray\",\"financial_situation\":\"Good\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"Jvjcuc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Swimming\",\"views\":222,\"likes\":1,\"created_at\":\"2024-03-05T08:58:56.000000Z\",\"updated_at\":\"2024-03-18T04:38:00.000000Z\"},\"request_id\":83}', '2024-03-17 23:15:48', 83, 'rejected', '2024-03-17 23:14:14', '2024-03-17 23:15:48');
INSERT INTO `notifications` (`id`, `profile_id`, `opp_profile_id`, `type`, `data`, `read_at`, `request_id`, `request_status`, `created_at`, `updated_at`) VALUES
(434, 125, 150, 'contact_request_rejected', '{\"0\":{\"id\":83,\"profile_id\":150,\"requester_id\":125,\"data\":\"[{\\\"id\\\":150,\\\"gender\\\":\\\"male\\\",\\\"name\\\":\\\"Krish\\\",\\\"number\\\":\\\"843899767\\\",\\\"dob\\\":\\\"2009-10-10\\\",\\\"age\\\":14,\\\"nationality\\\":\\\"USA\\\",\\\"place_of_residence\\\":\\\"Los Angeles\\\",\\\"city\\\":\\\"Ajman\\\",\\\"job\\\":\\\"Private Sector\\\",\\\"lineage\\\":\\\"Tribal\\\",\\\"skin_color\\\":\\\"White\\\",\\\"martial_status\\\":\\\"single\\\",\\\"number_of_children\\\":null,\\\"are_the_children_with_you\\\":1,\\\"religious_commitment\\\":\\\"Committed and Always Pray\\\",\\\"financial_situation\\\":\\\"Good\\\",\\\"height\\\":\\\"25.00\\\",\\\"width\\\":\\\"31.00\\\",\\\"body_tone\\\":\\\"Medium\\\",\\\"health_status\\\":\\\"Healthy\\\",\\\"write_about_yourself\\\":\\\"I am krish\\\",\\\"qualities_you_are_looking_for\\\":null,\\\"interests\\\":\\\"Swimming\\\",\\\"views\\\":2,\\\"likes\\\":1,\\\"created_at\\\":\\\"2024-03-15T14:47:45.000000Z\\\",\\\"updated_at\\\":\\\"2024-03-18T04:44:59.000000Z\\\"}]\",\"status\":\"rejected\",\"created_at\":\"2024-03-18T04:44:14.000000Z\",\"updated_at\":\"2024-03-18T04:45:48.000000Z\"},\"1\":{\"id\":150,\"gender\":\"male\",\"name\":\"Krish\",\"number\":\"843899767\",\"dob\":\"2009-10-10\",\"age\":14,\"nationality\":\"USA\",\"place_of_residence\":\"Los Angeles\",\"city\":\"Ajman\",\"job\":\"Private Sector\",\"lineage\":\"Tribal\",\"skin_color\":\"White\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Committed and Always Pray\",\"financial_situation\":\"Good\",\"height\":\"25.00\",\"width\":\"31.00\",\"body_tone\":\"Medium\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"I am krish\",\"qualities_you_are_looking_for\":null,\"interests\":\"Swimming\",\"views\":2,\"likes\":1,\"created_at\":\"2024-03-15T14:47:45.000000Z\",\"updated_at\":\"2024-03-18T04:44:59.000000Z\"},\"request_id\":150}', NULL, NULL, NULL, '2024-03-17 23:15:48', '2024-03-17 23:15:48'),
(435, 125, 150, 'profile_visit', '[{\"profile_id\":\"125\",\"viewer_id\":150,\"updated_at\":\"2024-03-18T04:46:55.000000Z\",\"created_at\":\"2024-03-18T04:46:55.000000Z\",\"id\":633},{\"id\":150,\"gender\":\"male\",\"name\":\"Krish\",\"number\":\"843899767\",\"dob\":\"2009-10-10\",\"age\":14,\"nationality\":\"Australia\",\"place_of_residence\":\"Los Angeles\",\"city\":\"Ajman\",\"job\":\"Private Sector\",\"lineage\":\"Tribal\",\"skin_color\":\"White\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Committed and Always Pray\",\"financial_situation\":\"Good\",\"height\":\"25.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"I am krish\",\"qualities_you_are_looking_for\":null,\"interests\":\"Swimming\",\"views\":2,\"likes\":1,\"created_at\":\"2024-03-15T14:47:45.000000Z\",\"updated_at\":\"2024-03-18T04:46:25.000000Z\"}]', NULL, NULL, NULL, '2024-03-17 23:16:55', '2024-03-17 23:16:55'),
(436, 133, 124, 'profile_visit', '[{\"profile_id\":\"133\",\"viewer_id\":124,\"updated_at\":\"2024-03-18T06:30:00.000000Z\",\"created_at\":\"2024-03-18T06:30:00.000000Z\",\"id\":634},{\"id\":124,\"gender\":\"male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":21,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"Chicago\",\"city\":\"Fujairah\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":1,\"are_the_children_with_you\":0,\"religious_commitment\":\"Not Committed and Always Pray\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":29,\"likes\":9,\"profile_status\":2,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-18T06:24:59.000000Z\"}]', NULL, NULL, NULL, '2024-03-18 01:00:00', '2024-03-18 01:00:00'),
(437, 130, 126, 'profile_visit', '[{\"profile_id\":\"130\",\"viewer_id\":126,\"updated_at\":\"2024-03-18T09:40:36.000000Z\",\"created_at\":\"2024-03-18T09:40:36.000000Z\",\"id\":635},{\"id\":126,\"gender\":\"male\",\"name\":\"B, bxbx\",\"number\":\"321321321\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"demodemo\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Archery\",\"views\":36,\"likes\":3,\"profile_status\":1,\"created_at\":\"2024-03-05T08:59:12.000000Z\",\"updated_at\":\"2024-03-18T07:32:36.000000Z\"}]', NULL, NULL, NULL, '2024-03-18 04:10:36', '2024-03-18 04:10:36'),
(438, 135, 125, 'profile_visit', '[{\"profile_id\":\"135\",\"viewer_id\":125,\"updated_at\":\"2024-03-27T03:58:56.000000Z\",\"created_at\":\"2024-03-27T03:58:56.000000Z\",\"id\":636},{\"id\":125,\"gender\":\"No\",\"name\":\"Jcjcj\",\"number\":\"686868342\",\"dob\":\"2024-03-03\",\"age\":30,\"nationality\":\"Germany\",\"place_of_residence\":\"Houston\",\"city\":\"Dubai\",\"job\":\"Government Department\",\"lineage\":\"Non-Tribal\",\"skin_color\":\"White\",\"martial_status\":\"Obesity\",\"number_of_children\":21,\"are_the_children_with_you\":0,\"religious_commitment\":\"Committed and Always Pray\",\"financial_situation\":\"Good\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"Jvjcuc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Swimming\",\"views\":223,\"likes\":1,\"profile_status\":1,\"created_at\":\"2024-03-05T08:58:56.000000Z\",\"updated_at\":\"2024-03-22T11:27:30.000000Z\"}]', NULL, NULL, NULL, '2024-03-26 22:28:56', '2024-03-26 22:28:56'),
(439, 125, 133, 'profile_visit', '[{\"profile_id\":\"125\",\"viewer_id\":133,\"updated_at\":\"2024-03-27T09:35:03.000000Z\",\"created_at\":\"2024-03-27T09:35:03.000000Z\",\"id\":637},{\"id\":133,\"gender\":\"Female\",\"name\":\"Jcjcj\",\"number\":\"686868342\",\"dob\":\"2016-03-27\",\"age\":8,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"New York\",\"city\":\"Dubai\",\"job\":\"Government Department\",\"lineage\":\"Tribal\",\"skin_color\":\"White\",\"martial_status\":\"Obesity\",\"number_of_children\":21,\"are_the_children_with_you\":null,\"religious_commitment\":\"Committed and Always Pray\",\"financial_situation\":\"Good\",\"height\":null,\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"Jvjcuc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Swimming\",\"views\":1,\"likes\":0,\"profile_status\":1,\"created_at\":\"2024-03-06T06:37:43.000000Z\",\"updated_at\":\"2024-03-27T09:11:11.000000Z\"}]', NULL, NULL, NULL, '2024-03-27 04:05:03', '2024-03-27 04:05:03');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `subscription_id` int(11) DEFAULT NULL,
  `payment_date` date DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `profile_id`, `subscription_id`, `payment_date`, `amount`, `payment_method`, `transaction_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(46, 124, 8, '2024-03-06', '80.00', 'card', '1234', 'paid', '2024-03-05 23:07:38', '2024-03-05 23:07:38', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `payment_details`
--

CREATE TABLE `payment_details` (
  `id` int(11) NOT NULL,
  `payment_id` int(11) NOT NULL,
  `profile_id` int(11) NOT NULL,
  `card_holder_name` varchar(255) NOT NULL,
  `card_number` text NOT NULL,
  `expiry_date` datetime NOT NULL,
  `cvv` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `payment_details`
--

INSERT INTO `payment_details` (`id`, `payment_id`, `profile_id`, `card_holder_name`, `card_number`, `expiry_date`, `cvv`, `created_at`, `updated_at`) VALUES
(3, 46, 124, 'UTSAV', 'eyJpdiI6IjFhL0gwM1ZHdHlDQktuN0RlZEtURFE9PSIsInZhbHVlIjoialFuSDM5L2JyeWZvdmtMNG5GYVFxYUdBeXBKcWY5V3JvSFp1c3dzUktZQT0iLCJtYWMiOiI4MWJhYjY0ZDdkMmY1OTY5Mjk1ZDgyM2ZhMzVhZTU4Y2RiNzA3NTUyNjlhM2RiNzExNzQwOWQzZTZhNDQ1ZTg4IiwidGFnIjoiIn0=', '0026-12-01 00:00:00', 'eyJpdiI6IitQT29jaTFJd05wOXBTSmNnaHUxaWc9PSIsInZhbHVlIjoiUE5mK3dFRVZpaDVxMTU0Q2plNW51QT09IiwibWFjIjoiMGU5NWY2ZjE3M2UwZjQ4NjAxMmZiNjM3NzFjNTk2N2YyMzc1MGY1NGVkYTgxOTM4MWEzYzJlMDUwM2Y3NjA0ZSIsInRhZyI6IiJ9', '2024-03-05 23:07:38', '2024-03-05 23:07:38');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(497, 'App\\Models\\Profile', 126, 'auth-token', '6515b36a12206a645adeaeb570ff5706b7fd78978acc585d771133d8967040c9', '[\"*\"]', NULL, NULL, '2024-03-05 03:29:13', '2024-03-05 03:29:13'),
(498, 'App\\Models\\Profile', 127, 'auth-token', 'cbe398362f4668cf80a304005c29df4deb8901e6f543bacd190991d631600ccc', '[\"*\"]', NULL, NULL, '2024-03-05 03:29:42', '2024-03-05 03:29:42'),
(499, 'App\\Models\\Profile', 128, 'auth-token', '913534b91e38b728789c41cf9649e9ddb82c90eeeae53a05dd1009dbea043f94', '[\"*\"]', NULL, NULL, '2024-03-05 03:30:01', '2024-03-05 03:30:01'),
(500, 'App\\Models\\Profile', 126, 'auth-token', 'f65932d7b61d7edd1223c930bedf107f6fbe115bd150d7da6b1dd6481b1fa34c', '[\"*\"]', '2024-03-05 06:46:46', NULL, '2024-03-05 03:42:57', '2024-03-05 06:46:46'),
(503, 'App\\Models\\Profile', 126, 'auth-token', 'e5d2ca910fd862cf74b456b974e1ecd5c9b76bce9b2e05b64ff111bae36ef816', '[\"*\"]', '2024-03-05 06:55:13', NULL, '2024-03-05 04:08:20', '2024-03-05 06:55:13'),
(504, 'App\\Models\\Profile', 126, 'auth-token', '5d49b6d7b13e94608b4a3f9b535205a2611acc94f8aa182d3737c43f5b9b1e3b', '[\"*\"]', '2024-03-05 04:52:49', NULL, '2024-03-05 04:09:55', '2024-03-05 04:52:49'),
(507, 'App\\Models\\Profile', 126, 'auth-token', '530c24b2c2dbe5e760691b08aeb0a9fa317fd6a3cd55c979e942e99090287140', '[\"*\"]', '2024-03-05 05:03:57', NULL, '2024-03-05 04:57:36', '2024-03-05 05:03:57'),
(510, 'App\\Models\\Profile', 127, 'auth-token', 'ad782c405d1fd420735e0c614d71b3fed2295d80667c48c5d03e62df4d748eac', '[\"*\"]', '2024-03-05 05:25:08', NULL, '2024-03-05 05:24:36', '2024-03-05 05:25:08'),
(520, 'App\\Models\\Profile', 127, 'auth-token', '8ef3d9371fd0df60aef361d595832c7ef86f542e64ae6b086543fc548721e470', '[\"*\"]', '2024-03-05 06:49:50', NULL, '2024-03-05 06:47:00', '2024-03-05 06:49:50'),
(521, 'App\\Models\\Profile', 128, 'auth-token', 'f7bdf1fdbc0490a7d386146da1c7741a74d44cda77ee73ebc0e518bd63e439dc', '[\"*\"]', '2024-03-05 06:56:26', NULL, '2024-03-05 06:50:19', '2024-03-05 06:56:26'),
(522, 'App\\Models\\Profile', 128, 'auth-token', 'f19912432fe7859ee93b6eb3355494a9f9028c96682e74446ec8197a5abf4ad8', '[\"*\"]', '2024-03-05 07:14:04', NULL, '2024-03-05 06:57:37', '2024-03-05 07:14:04'),
(523, 'App\\Models\\Profile', 129, 'auth-token', '1e2d0c6c614decb77a2301c884d56e4b6fec6db2cb66cfe54406beb85ebb63a2', '[\"*\"]', '2024-03-05 07:17:16', NULL, '2024-03-05 07:15:41', '2024-03-05 07:17:16'),
(524, 'App\\Models\\Profile', 128, 'auth-token', '011d8f1b7ae508218d94495d5a347dfb643626ea30be208f33c6ac31fdb3ddf7', '[\"*\"]', '2024-03-05 07:49:12', NULL, '2024-03-05 07:17:50', '2024-03-05 07:49:12'),
(525, 'App\\Models\\Profile', 128, 'auth-token', '2ed25b7d2d9b896191575515db1a5c29e1291d2175dcc310eb8a68c39d25957a', '[\"*\"]', NULL, NULL, '2024-03-05 07:36:29', '2024-03-05 07:36:29'),
(526, 'App\\Models\\Profile', 128, 'auth-token', 'ec870108dd8a2ef5938f8c87114990673dbd63258d032434604ff7351ce7ea01', '[\"*\"]', '2024-03-05 07:47:22', NULL, '2024-03-05 07:38:06', '2024-03-05 07:47:22'),
(536, 'App\\Models\\Profile', 130, 'auth-token', 'a83dec3771761c12e71b74da995ffbe4a9649d6e240cc6f030c8a8eeea95cfe6', '[\"*\"]', NULL, NULL, '2024-03-06 01:03:35', '2024-03-06 01:03:35'),
(537, 'App\\Models\\Profile', 131, 'auth-token', 'f140e58b1918e1f4cc1064799be51131bc1a95cf79a0b005dbe87f456f03f3f9', '[\"*\"]', NULL, NULL, '2024-03-06 01:06:14', '2024-03-06 01:06:14'),
(538, 'App\\Models\\Profile', 132, 'auth-token', '9d4c0821c2a89ede696c0ec19eaa05a5f0588facb682ef391d2072246c69ca1d', '[\"*\"]', NULL, NULL, '2024-03-06 01:06:46', '2024-03-06 01:06:46'),
(540, 'App\\Models\\Profile', 130, 'auth-token', 'c74685787d54ef86db75704ff601a96757c2245c3e8311a629dc0709e65e8f30', '[\"*\"]', NULL, NULL, '2024-03-06 01:14:37', '2024-03-06 01:14:37'),
(541, 'App\\Models\\Profile', 130, 'auth-token', '637b01f47a77c1a718a6124a912899889c4cbae10a7b7e08587cad9b70783061', '[\"*\"]', NULL, NULL, '2024-03-06 01:14:49', '2024-03-06 01:14:49'),
(542, 'App\\Models\\Profile', 130, 'auth-token', '40eb4d1c1c272c1d9b651e3c3792b2710e9c84de7f75231c67a82e5390f3f6bf', '[\"*\"]', NULL, NULL, '2024-03-06 01:15:00', '2024-03-06 01:15:00'),
(543, 'App\\Models\\Profile', 130, 'auth-token', '3ab5184c65ba4d2a04f6540a6ea8266430ec56ba9d0030c1f9d39bb020e04787', '[\"*\"]', NULL, NULL, '2024-03-06 01:15:20', '2024-03-06 01:15:20'),
(544, 'App\\Models\\Profile', 130, 'auth-token', 'c0a87cb6596e801dd7bb72e2c565636b485ad0c8d237f3d6b354c0cd86778f54', '[\"*\"]', NULL, NULL, '2024-03-06 01:15:30', '2024-03-06 01:15:30'),
(545, 'App\\Models\\Profile', 130, 'auth-token', 'f5c2ef3a9d447d685cf390c0e367a6b5643d1438df88ae16257956bf6a708633', '[\"*\"]', '2024-03-06 03:28:50', NULL, '2024-03-06 01:16:20', '2024-03-06 03:28:50'),
(547, 'App\\Models\\Profile', 134, 'auth-token', '7bfc40d8c7e0e1e030554ef1e20eb11ae5b958f7fc4e2d41eea0a3724b3b4392', '[\"*\"]', '2024-03-06 02:00:26', NULL, '2024-03-06 01:59:25', '2024-03-06 02:00:26'),
(548, 'App\\Models\\Profile', 135, 'auth-token', '61c93a84607a212a187d55e9857fb1f3e79e9f7655facc97053027e7f60b546f', '[\"*\"]', '2024-03-06 04:17:06', NULL, '2024-03-06 02:01:18', '2024-03-06 04:17:06'),
(608, 'App\\Models\\Profile', 136, 'auth-token', '7a7b6421f0e33eca315dd63a12535b80c7be09149bb55e7213309ce1adaf5b13', '[\"*\"]', '2024-03-10 01:14:05', NULL, '2024-03-10 00:57:16', '2024-03-10 01:14:05'),
(609, 'App\\Models\\Profile', 137, 'auth-token', '86b93650ad5a0296dc0637fceb37dce829d4f6486119a54dd7ed935d800023ae', '[\"*\"]', '2024-03-10 01:46:03', NULL, '2024-03-10 01:18:40', '2024-03-10 01:46:03'),
(610, 'App\\Models\\Profile', 138, 'auth-token', 'e652464b8c50731e2f91a6a5814decd80a6e25f76df6ff5fcf0bed28a7144bb7', '[\"*\"]', '2024-03-10 02:09:10', NULL, '2024-03-10 01:47:12', '2024-03-10 02:09:10'),
(611, 'App\\Models\\Profile', 139, 'auth-token', '612341ae73404514ffdf6414dd53a24976cdf40a63a4a949ffdd10a6013b7bea', '[\"*\"]', NULL, NULL, '2024-03-10 01:50:56', '2024-03-10 01:50:56'),
(612, 'App\\Models\\Profile', 140, 'auth-token', '7562cfd2fd4446128b7f05ad91c4d7e9764f8ffe0fde5cddbe69268b260a264b', '[\"*\"]', NULL, NULL, '2024-03-10 01:51:08', '2024-03-10 01:51:08'),
(613, 'App\\Models\\Profile', 142, 'auth-token', 'c4d738cf5d292d4a7a70d0fc4888706fc726cc66aaa94a7889595b6e9c5e0e6d', '[\"*\"]', '2024-03-15 07:28:32', NULL, '2024-03-10 06:07:26', '2024-03-15 07:28:32'),
(634, 'App\\Models\\Profile', 143, 'auth-token', 'c02d3bd2894ad67b1a3027a40a5508db6dae12e2817caf13af8c2950fc7a55e3', '[\"*\"]', NULL, NULL, '2024-03-11 05:32:48', '2024-03-11 05:32:48'),
(635, 'App\\Models\\Profile', 144, 'auth-token', '8b2b0e5b0c8874c487ba0b0be92e23b0afdc72462ee4bc9abd0e6de7dac1466e', '[\"*\"]', '2024-03-11 06:17:41', NULL, '2024-03-11 05:38:18', '2024-03-11 06:17:41'),
(644, 'App\\Models\\Profile', 145, 'auth-token', 'c8cf12e762e1547aa698e8cfcca84d4e8abed011521e136a33d64ef5b6fc6c6b', '[\"*\"]', '2024-03-13 23:17:35', NULL, '2024-03-13 23:16:14', '2024-03-13 23:17:35'),
(645, 'App\\Models\\Profile', 146, 'auth-token', 'd260771d7a531b494458acfcfa6027117c5bb998e5ab2ff9194d36a56f1a6c10', '[\"*\"]', '2024-03-14 00:53:19', NULL, '2024-03-13 23:41:09', '2024-03-14 00:53:19'),
(648, 'App\\Models\\Profile', 147, 'auth-token', '2d8018abe9a644ab153caff6159bc0b6839d075b64e4099718fc33085f805227', '[\"*\"]', '2024-03-14 01:29:52', NULL, '2024-03-14 01:14:11', '2024-03-14 01:29:52'),
(649, 'App\\Models\\Profile', 147, 'auth-token', '46028b5c1ad151c9de6b52eec321e8d0c5c9abc9eac0bc45b0283403b09e7776', '[\"*\"]', '2024-03-14 01:30:49', NULL, '2024-03-14 01:30:06', '2024-03-14 01:30:49'),
(650, 'App\\Models\\Profile', 131, 'auth-token', '8a12a9ef573f572b5537f6d18879fef2068468a2248873c228a56fdde4cb8b30', '[\"*\"]', '2024-03-14 01:31:19', NULL, '2024-03-14 01:31:03', '2024-03-14 01:31:19'),
(651, 'App\\Models\\Profile', 147, 'auth-token', '8f784459d95c91e536b16fd630c1035e9cc33f978e9f32a4e7bc136bbb3c19f9', '[\"*\"]', '2024-03-14 01:38:45', NULL, '2024-03-14 01:31:34', '2024-03-14 01:38:45'),
(653, 'App\\Models\\Profile', 147, 'auth-token', '5ab920dadc782883e8c2635e830ced62085db6ec47ed5e7b90f949dbef9ede64', '[\"*\"]', '2024-03-14 03:07:05', NULL, '2024-03-14 03:04:52', '2024-03-14 03:07:05'),
(655, 'App\\Models\\Profile', 148, 'auth-token', '5aad65467e7a3e7264fb2bbc5eb6ebfbc6bc48b7305473b9712a126fa5afeee1', '[\"*\"]', '2024-03-14 04:58:42', NULL, '2024-03-14 04:51:28', '2024-03-14 04:58:42'),
(657, 'App\\Models\\Profile', 148, 'auth-token', '9bc06bce8d6d3d9155eb155ca7537e2e616293ed7fe87cc33c110e7bec359218', '[\"*\"]', '2024-03-14 05:23:44', NULL, '2024-03-14 05:05:29', '2024-03-14 05:23:44'),
(659, 'App\\Models\\Profile', 130, 'auth-token', '70ef811010ab58d415c00df54805f993ff4086f97a59d4612615d91060e2036d', '[\"*\"]', '2024-03-14 05:33:14', NULL, '2024-03-14 05:25:14', '2024-03-14 05:33:14'),
(661, 'App\\Models\\Profile', 147, 'auth-token', '349feb114bdabdb28b0d8f42805220161639f1c411e329c0ab7251286fb61584', '[\"*\"]', '2024-03-14 05:56:22', NULL, '2024-03-14 05:55:58', '2024-03-14 05:56:22'),
(663, 'App\\Models\\Profile', 148, 'auth-token', '6a198a0d8d52cdc3d8a75ce8459aea8eb9116c152181bb5bdbc0626862fa3a75', '[\"*\"]', '2024-03-14 05:57:51', NULL, '2024-03-14 05:57:24', '2024-03-14 05:57:51'),
(664, 'App\\Models\\Profile', 147, 'auth-token', 'b72165819f46e3f4c224bf581df3ab17f15cf52f60c6a7820629dfda0e71c2d2', '[\"*\"]', '2024-03-14 06:10:48', NULL, '2024-03-14 05:58:04', '2024-03-14 06:10:48'),
(665, 'App\\Models\\Profile', 148, 'auth-token', 'e41bcf7cd2dbd7d9a199375f689d73e3aeeb6e37caba0bfd118104e4fc518258', '[\"*\"]', '2024-03-14 06:36:44', NULL, '2024-03-14 06:11:03', '2024-03-14 06:36:44'),
(667, 'App\\Models\\Profile', 147, 'auth-token', 'a937c8b646ddbd85a0c5842ecdf8fcbc57cc6f618bcc95b01259e81cd06192f9', '[\"*\"]', '2024-03-15 06:04:24', NULL, '2024-03-14 22:31:03', '2024-03-15 06:04:24'),
(668, 'App\\Models\\Profile', 149, 'auth-token', '3ce13a333f4e3b6722eae011d196c8b26cd94b707ecca4d3500039d5954b132b', '[\"*\"]', '2024-03-15 00:49:59', NULL, '2024-03-15 00:40:46', '2024-03-15 00:49:59'),
(669, 'App\\Models\\Profile', 143, 'auth-token', 'befeff35e0fba89c87d94fcc3fe806838aeb55fc5fbade1a9eb1cad8299de7f9', '[\"*\"]', '2024-03-15 00:53:22', NULL, '2024-03-15 00:52:23', '2024-03-15 00:53:22'),
(682, 'App\\Models\\Profile', 126, 'auth-token', 'e980e9912ea158e4675b2f6208256f8407a5b4fc47aa7f9475c2ece7b22ad779', '[\"*\"]', '2024-03-18 04:12:33', NULL, '2024-03-18 01:58:14', '2024-03-18 04:12:33'),
(685, 'App\\Models\\Profile', 152, 'auth-token', '2b261d93f0caa7b8394165352891c07bfcbbcbe996c06985b78027ad4e9f316b', '[\"*\"]', NULL, NULL, '2024-03-18 03:03:36', '2024-03-18 03:03:36'),
(686, 'App\\Models\\Profile', 153, 'auth-token', 'f46dffdbc0032bd8a2762ebd2ca28848841a8b97d8b129ad1087c05475deafdb', '[\"*\"]', NULL, NULL, '2024-03-18 03:03:59', '2024-03-18 03:03:59'),
(687, 'App\\Models\\Profile', 154, 'auth-token', '2b0a913afa494a349141ed83c8dab38f484d175588cc0ee89ec4a631c8d841c1', '[\"*\"]', NULL, NULL, '2024-03-18 03:10:53', '2024-03-18 03:10:53'),
(693, 'App\\Models\\Profile', 162, 'auth-token', 'ab1b8c859936725e2b7c59317d8e75827751047dbc464487847fce9ffea6039a', '[\"*\"]', NULL, NULL, '2024-03-18 03:59:57', '2024-03-18 03:59:57'),
(696, 'App\\Models\\Profile', 171, 'auth-token', 'b9356c9f86e9e24df5e8a22f3eada0c3ac158c0e0359d05f5a4f4b6fdbb47694', '[\"*\"]', NULL, NULL, '2024-03-19 03:12:37', '2024-03-19 03:12:37'),
(697, 'App\\Models\\Profile', 173, 'auth-token', 'a09f6d8f8d2900550a83d78ffd4d79b3ddaced9669fb81f61f55dd572dcf4ca2', '[\"*\"]', NULL, NULL, '2024-03-19 03:16:09', '2024-03-19 03:16:09'),
(707, 'App\\Models\\Profile', 183, 'auth-token', 'a161ff180b1681802fec989c6310685e6b774042cf3add516faba4dcf196c295', '[\"*\"]', '2024-03-20 00:40:14', NULL, '2024-03-20 00:34:50', '2024-03-20 00:40:14'),
(716, 'App\\Models\\Profile', 125, 'auth-token', '1eabda937d6eef9b521459a6a8a9776eb96ea3be287a676935a43dc02e2a19a9', '[\"*\"]', '2024-03-27 03:27:42', NULL, '2024-03-27 02:58:07', '2024-03-27 03:27:42');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` int(11) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `number` varchar(20) DEFAULT NULL,
  `otp` varchar(10) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `nationality` varchar(50) DEFAULT NULL,
  `place_of_residence` varchar(100) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `job` varchar(100) DEFAULT NULL,
  `lineage` varchar(100) DEFAULT NULL,
  `skin_color` text DEFAULT NULL,
  `martial_status` varchar(20) DEFAULT NULL,
  `number_of_children` int(11) DEFAULT NULL,
  `are_the_children_with_you` tinyint(1) DEFAULT NULL,
  `religious_commitment` text DEFAULT NULL,
  `financial_situation` varchar(100) DEFAULT NULL,
  `height` decimal(5,2) DEFAULT NULL,
  `width` decimal(5,2) DEFAULT NULL,
  `body_tone` text DEFAULT NULL,
  `health_status` varchar(100) DEFAULT NULL,
  `write_about_yourself` text DEFAULT NULL,
  `qualities_you_are_looking_for` text DEFAULT NULL,
  `interests` text DEFAULT NULL,
  `views` int(11) DEFAULT 0,
  `likes` int(11) DEFAULT 0,
  `profile_status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '0=Inactive,1=Active,2=Suspended',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `gender`, `name`, `number`, `otp`, `dob`, `age`, `nationality`, `place_of_residence`, `city`, `job`, `lineage`, `skin_color`, `martial_status`, `number_of_children`, `are_the_children_with_you`, `religious_commitment`, `financial_situation`, `height`, `width`, `body_tone`, `health_status`, `write_about_yourself`, `qualities_you_are_looking_for`, `interests`, `views`, `likes`, `profile_status`, `created_at`, `updated_at`) VALUES
(124, 'male', 'Q', '123456789', '143856', '2008-03-10', 21, 'United Kingdom', 'Chicago', 'Fujairah', 'Entrepreneur', 'Non Tribal', 'Light Brown', 'single', 1, 0, 'Not Committed and Always Pray', 'Stable', '180.00', '50.00', 'Athletic', 'Recovered', 'Hchcjc', NULL, 'Football', 29, 9, 2, '2024-03-05 03:28:05', '2024-03-27 02:57:36'),
(125, 'male', 'Utsav', '845454454', '162152', '2024-03-05', 0, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', 2, 0, 'Committed and Always Pray', 'Good', '145.00', '50.00', 'Medium', 'Healthy', 'fgnhg', NULL, 'Swimming', 225, 1, 1, '2024-03-05 03:28:56', '2024-03-27 04:05:30'),
(126, 'female', 'B, bxbx', '321321321', '437199', '2001-09-11', 22, 'USA', 'New York', 'Sharjah', 'Software Engineer', 'demodemo', 'Fair', 'Single', 0, 0, 'Christian', 'Stable', '180.00', '50.00', 'Fit', 'Good', 'I am a software engineer living in New York City.', NULL, 'Archery', 36, 3, 1, '2024-03-05 03:29:12', '2024-03-18 04:12:25'),
(127, 'male', 'utsav', '123456789', '458101', '2001-09-11', 22, 'USA', 'New York', 'Sharjah', 'Software Engineer', 'Caucasian', 'Fair', 'Single', 0, 0, 'Christian', 'Stable', '180.00', '50.00', 'Fit', 'Good', 'I am a software engineer living in New York City.', NULL, 'Archery', 8, 0, 1, '2024-03-05 03:29:42', '2024-03-14 06:10:23'),
(128, 'male', 'uuuuuuu', '147896325', '580529', '2004-06-20', 19, 'Germany', 'Miami', 'Ras Al Khaimah', 'Software Engineer', 'Caucasian', 'Fair', 'Single', 6, 0, 'Christian', 'Stable', '170.00', '50.00', 'Fit', 'Good', 'I am a software engineer living in New York City.', NULL, 'Reading, hiking, playing guitar', 10, 0, 1, '2024-03-05 03:30:01', '2024-03-14 00:59:24'),
(130, 'male', 'jay', '979797979', '435875', '2011-05-12', 30, 'United Kingdom', 'Houston', 'Sharjah', 'Freelance', 'Non Tribal', 'Brown color is close to White', 'Single', 0, NULL, 'Medium and Always Pray', 'Rich', '88.00', '70.00', 'Athlete', 'Healthy', 'i am a athlete', NULL, 'Football', 6, 2, 1, '2024-03-06 01:03:31', '2024-03-18 04:10:36'),
(132, 'male', 'jay', '979345869', '163037', '2011-05-12', 30, 'United Kingdom', 'Houston', 'Sharjah', 'Freelance', 'Non Tribal', 'Brown color is close to White', 'Single', 0, NULL, 'Medium and Always Pray', 'Rich', '90.00', '70.00', 'Athlete', 'Healthy', 'i am a athlete', NULL, 'Football', 2, 0, 1, '2024-03-06 01:06:45', '2024-03-12 04:01:29'),
(133, 'Female', 'Jcjcj', '686868342', '400991', '2016-03-27', 8, 'United Kingdom', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'Obesity', 21, NULL, 'Committed and Always Pray', 'Good', NULL, '50.00', 'Medium', 'Healthy', 'Jvjcuc', NULL, 'Swimming', 1, 0, 1, '2024-03-06 01:07:43', '2024-03-27 03:41:11'),
(134, 'male', 'Gxfuigiv', '606868686', '163037', '2005-03-03', 30, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', 1, NULL, 'Committed and Always Pray', 'Good', '25.00', '29.00', 'Medium', 'Healthy', 'Jvuv', NULL, 'Swimming', 0, 0, 1, '2024-03-06 01:59:25', '2024-03-06 01:59:25'),
(135, 'male', 'Bn', '585698268', '163037', '2018-03-01', 30, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'Obesity', 5, 1, 'Committed and Always Pray', 'Good', '12.00', '36.00', 'Medium', 'Healthy', 'Xhb', NULL, 'Swimming', 7, 0, 1, '2024-03-06 02:01:18', '2024-03-26 22:28:56'),
(136, 'male', 'Jcici', '665896647', '163037', '2024-03-07', 18, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'Obesity', 8, 1, 'Committed and Always Pray', 'Good', '6.00', '50.00', 'Medium', 'Healthy', 'B j', NULL, 'Swimming', 0, 0, 1, '2024-03-10 00:57:16', '2024-03-10 00:57:49'),
(137, 'Female', 'Jcic', '258963874', '163037', '2018-03-10', 18, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', 28, 1, 'Committed and Always Pray', 'Good', '68.00', '50.00', 'Medium', 'Healthy', 'Hc', NULL, 'Swimming', 0, 0, 1, '2024-03-10 01:18:40', '2024-03-10 01:39:25'),
(138, 'male', 'Hdnxn', '533715988', '163037', '2018-03-10', 18, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'Obesity', 2, 1, 'Committed and Always Pray', 'Average', '56.00', '50.00', 'Athletic', 'Recovered', 'Bdbc', NULL, 'Swimming', 0, 0, 1, '2024-03-10 01:47:12', '2024-03-10 02:08:54'),
(139, 'string', 'string', 'string', 'string', '2024-03-10', 0, 'string', 'string', 'string', 'string', 'string', 'string', 'string', 0, 1, 'string', 'string', '0.00', '0.00', 'string', 'string', 'string', NULL, 'string', 0, 0, 1, '2024-03-10 01:50:56', '2024-03-10 01:50:56'),
(140, 'string', 'string', 'stringg', 'string', '2024-03-10', 0, 'string', 'string', 'string', 'string', 'string', 'string', 'string', 0, 1, 'string', 'string', '0.00', '0.00', 'string', 'string', 'string', NULL, 'string', 0, 0, 1, '2024-03-10 01:51:08', '2024-03-10 01:51:08'),
(141, 'male', 'H', '389086668', '163037', '2024-03-01', 0, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', 0, 1, 'Committed and Always Pray', 'Good', '568.00', '25.00', 'Medium', 'Healthy', 'Gchc', NULL, 'Swimming', 0, 0, 1, '2024-03-10 06:05:25', '2024-03-10 06:05:25'),
(142, 'male', 'Zyycc', '389086826', '163037', '2024-03-05', 0, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', 0, 1, 'Committed and Always Pray', 'Good', '555.00', '88.00', 'Medium', 'Healthy', 'Xhh', NULL, 'Swimming', 0, 0, 1, '2024-03-10 06:07:26', '2024-03-10 06:07:26'),
(143, 'male', 'John Doe', '876541234', '471775', '1990-01-01', 34, 'American', 'New York', 'New York City', 'Software Engineer', 'Irish descent', 'Fair', 'Single', 0, 0, 'Moderate', 'Stable', '180.00', '75.00', 'Athletic', 'Good', 'I\'m a passionate software engineer who loves coding and outdoor activities.', NULL, 'Hiking, Reading, Playing guitar', 0, 0, 1, '2024-03-11 05:32:48', '2024-03-15 00:52:13'),
(144, 'male', 'Aditi', '122756978', '163037', '2024-03-11', 0, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', 0, 1, 'Committed and Always Pray', 'Good', '28.00', '50.00', 'Medium', 'Healthy', 'Hxhx', NULL, 'Swimming', 1, 0, 1, '2024-03-11 05:38:18', '2024-03-14 01:46:19'),
(145, 'male', NULL, '454545787', '163037', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Athlete', NULL, 'Fggf', NULL, NULL, 0, 0, 1, '2024-03-13 23:16:14', '2024-03-13 23:16:14'),
(146, 'male', 'Harsh', '258741369', '163037', '2019-03-01', 5, 'Australia', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '25.00', '50.00', 'Medium', 'Healthy', 'dcfvbnm', NULL, 'Swimming', 4, 0, 1, '2024-03-13 23:41:09', '2024-03-15 09:18:07'),
(147, 'Male', 'rushi', '121212121', '684084', '2007-06-14', 16, 'Australia', 'Houston', 'Ras Al Khaimah', 'Artist', 'Non Tribal', 'Brown color is close to White', 'Married', 2, 0, 'Medium and Always Pray', 'Excellent', '77.00', '50.00', 'Muscular', 'Recovered', 'aadd', NULL, 'Football', 4, 1, 1, '2024-03-14 01:14:11', '2024-03-15 03:46:14'),
(148, 'male', 'Rock', '444555666', '413424', '2006-04-13', 17, 'Canada', 'San Francisco', 'Ras Al Khaimah', 'Trade', 'Non Tribal', 'Light Brown', 'single', NULL, 1, 'Not Committed and Sometimes Pray', 'Rich', '58.00', '50.00', 'Athlete', 'Healthy', 'ghfykyh', NULL, 'Football', 6, 2, 1, '2024-03-14 04:51:28', '2024-03-15 00:45:52'),
(149, 'male', 'John Doe', '876541234', '365214', '1990-02-01', 34, 'American', 'New York', 'New York City', 'Software Engineer', 'Irish descent', 'Fair', 'Single', 0, 0, 'Moderate', 'Stable', '180.00', '75.00', 'Athletic', 'Good', 'I\'m a passionate software engineer who loves coding and outdoor activities.', NULL, 'Hiking, Reading, Playing guitar', 5, 0, 1, '2024-03-15 00:40:46', '2024-03-15 00:49:59'),
(150, 'male', 'Krish', '843899767', '437312', '2009-10-10', 14, 'Australia', 'Los Angeles', 'Ajman', 'Private Sector', 'Tribal', 'White', 'single', NULL, 1, 'Committed and Always Pray', 'Good', '25.00', '50.00', 'Medium', 'Healthy', 'I am krish', NULL, 'Swimming', 2, 1, 1, '2024-03-15 09:17:45', '2024-03-17 23:16:25'),
(151, 'male', 'Yash', '608595896', '163037', '2001-10-21', 22, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '24.00', '38.00', 'Medium', 'Healthy', 'This is demo about', NULL, 'Swimming', 0, 0, 1, '2024-03-18 02:13:57', '2024-03-18 02:13:57'),
(152, 'male', 'Yash', '536874129', '163037', '2001-10-21', 22, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '24.00', '38.00', 'Medium', 'Healthy', 'This is demo about', NULL, 'Swimming', 0, 0, 1, '2024-03-18 03:03:36', '2024-03-18 03:03:36'),
(153, 'male', 'Yash', '321456987', '163037', '2001-10-21', 22, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '24.00', '38.00', 'Medium', 'Healthy', 'This is demo about', NULL, 'Swimming', 0, 0, 1, '2024-03-18 03:03:59', '2024-03-18 03:03:59'),
(154, 'male', 'Yash', '985632174', '163037', '2001-10-21', 22, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '24.00', '38.00', 'Medium', 'Healthy', 'This is demo about', NULL, 'Swimming', 0, 0, 1, '2024-03-18 03:10:53', '2024-03-18 03:10:53'),
(155, 'male', 'Rohan', '257395523', '163037', '2003-03-18', 21, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '39.00', '98.00', 'Medium', 'Healthy', 'Hii, this is demo', NULL, 'Swimming', 0, 0, 1, '2024-03-18 03:15:19', '2024-03-18 03:15:19'),
(156, 'male', 'Hvhvuuv', '068638689', '163037', '2018-03-18', 6, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '68.00', '21.00', 'Medium', 'Healthy', 'This is demo application', NULL, 'Swimming', 0, 0, 1, '2024-03-18 03:27:15', '2024-03-18 03:27:15'),
(157, 'male', 'Ysbb', '246405318', '163037', '2020-03-18', 4, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '38.00', '15.00', 'Medium', 'Healthy', 'Hii, this is demo', NULL, 'Swimming', 0, 0, 1, '2024-03-18 03:29:54', '2024-03-18 03:29:54'),
(158, 'male', 'Gcych', '066038389', '163037', '2019-03-18', 5, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '58.00', '69.00', 'Medium', 'Healthy', 'Ychcyc', NULL, 'Swimming', 0, 0, 1, '2024-03-18 03:35:03', '2024-03-18 03:35:03'),
(159, 'male', 'G h', '066038381', '163037', '2018-03-18', 6, 'Canada', 'Miami', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '25.00', '50.00', 'Medium', 'Healthy', 'Uvuv', NULL, 'Swimming', 0, 0, 1, '2024-03-18 03:37:16', '2024-03-18 03:50:21'),
(160, 'male', 'Gg', '500585858', '163037', '2018-03-18', 6, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '35.00', '85.00', 'Medium', 'Healthy', 'b b', NULL, 'Swimming', 0, 0, 1, '2024-03-18 03:56:16', '2024-03-18 03:56:16'),
(161, 'male', 'Gzb', '553699774', '163037', '2018-03-18', 6, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '66.00', '14.00', 'Medium', 'Healthy', 'F f', NULL, 'Swimming', 0, 0, 1, '2024-03-18 03:58:49', '2024-03-18 03:58:49'),
(162, 'male', 'Gzb', '632547891', '163037', '2018-03-18', 6, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '66.00', '14.00', 'Medium', 'Healthy', 'F f', NULL, 'Swimming', 0, 0, 1, '2024-03-18 03:59:57', '2024-03-18 03:59:57'),
(163, 'male', 'Hvu', '553699771', '163037', '2016-03-18', 8, 'USA', 'New York', 'Dubai', 'Student', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '56.00', '50.00', 'Medium', 'Healthy', 'Uguguv', NULL, 'Swimming', 0, 0, 1, '2024-03-18 04:16:10', '2024-03-18 04:29:20'),
(164, 'male', 'hrk', '236985144', '163037', '2003-03-14', 3, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, 1, 'Committed and Always Pray', 'Good', '36.00', '25.00', 'Medium', 'Healthy', 'Vh', NULL, 'Swimming', 0, 0, 1, '2024-03-19 00:28:02', '2024-03-19 00:28:02'),
(165, 'male', 'hrk', '589632552', '163037', '2003-03-14', 7, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, 1, 'Committed and Always Pray', 'Good', '11.00', '36.00', 'Medium', 'Healthy', 'This is demo', NULL, 'Swimming', 0, 0, 1, '2024-03-19 00:34:33', '2024-03-19 00:34:33'),
(166, 'male', 'hrk', '366214587', '928980', '2003-03-14', 7, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'Married', NULL, 1, 'Committed and Always Pray', 'Good', '11.00', '36.00', 'Medium', 'Healthy', NULL, NULL, 'Swimming', 0, 0, 1, '2024-03-19 01:22:07', '2024-03-19 01:25:26'),
(167, 'male', 'hrk', '236987145', '163037', '2003-03-14', 11, 'France', 'San Francisco', 'Umm Al Quwain', 'Trade', 'Non Tribal', 'Dark Brown', 'single', NULL, 0, 'I don\'t pray', 'Medium Income', '25.00', '32.00', 'Skinny', 'Psychic obstruction', NULL, NULL, 'Swimming', 0, 0, 1, '2024-03-19 02:02:03', '2024-03-19 02:02:03'),
(168, 'male', 'hrk', '236987115', '163037', '2003-03-14', 11, 'France', 'San Francisco', 'Umm Al Quwain', 'Trade', 'Non Tribal', 'Dark Brown', 'single', NULL, 0, 'I don\'t pray', 'Medium Income', '25.00', '32.00', 'Skinny', 'Psychic obstruction', 'this is demo', NULL, 'Swimming', 0, 0, 1, '2024-03-19 02:30:39', '2024-03-19 02:30:39'),
(169, 'male', 'hrk', '521463987', '163037', '2003-03-14', 3, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, 0, 'Committed and Always Pray', 'Good', '25.00', '69.00', 'Medium', 'Healthy', 'This is demo', NULL, 'Swimming', 0, 0, 1, '2024-03-19 03:06:25', '2024-03-19 03:06:25'),
(170, 'male', 'hrk', '521463947', '163037', '2003-03-14', 3, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, 0, 'Committed and Always Pray', 'Good', '25.00', '69.00', 'Medium', 'Healthy', 'This is demo', NULL, 'Swimming', 0, 0, 1, '2024-03-19 03:11:07', '2024-03-19 03:11:07'),
(171, 'male', 'abc abc', '777888999', '456456', '2024-03-19', 1, 'string', 'string', 'string', 'string', 'string', 'string', 'string', 0, 1, 'string', 'string', '0.00', '0.00', 'string', 'string', 'string', NULL, 'string', 0, 0, 1, '2024-03-19 03:12:37', '2024-03-19 03:12:37'),
(172, 'male', 'hrk', '521465287', '163037', '2003-03-14', 3, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, 0, 'Committed and Always Pray', 'Good', '25.00', '69.00', 'Medium', 'Healthy', 'This is demo', NULL, 'Swimming', 0, 0, 1, '2024-03-19 03:13:28', '2024-03-19 03:13:28'),
(173, 'male', 'hrk', '123698987', '163037', '2003-03-14', 3, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, 0, 'Committed and Always Pray', 'Good', '25.00', '69.00', 'Medium', 'Healthy', 'This is demo', NULL, 'Swimming', 0, 0, 1, '2024-03-19 03:16:09', '2024-03-19 03:16:09'),
(174, 'Female', 'hrk', '785215652', '163037', '2003-03-14', 10, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, 0, 'Committed and Always Pray', 'Good', '25.00', '50.00', 'Medium', 'Healthy', 'I am Tapan', NULL, 'Swimming', 0, 0, 1, '2024-03-19 03:19:10', '2024-03-19 03:25:28'),
(175, 'male', 'hrk', '224488665', '163037', '2003-03-14', 4, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, 0, 'Committed and Always Pray', 'Good', '36.00', '25.00', 'Medium', 'Healthy', 'Hii, I am Utsav', NULL, 'Swimming', 0, 0, 1, '2024-03-19 03:39:47', '2024-03-19 03:39:47'),
(176, 'male', NULL, '843056704', '163037', NULL, 0, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', NULL, NULL, 'Committed and Always Pray', 'Good', '85.00', '32.00', 'Medium', 'Healthy', 'Hii', NULL, 'Swimming', 0, 0, 1, '2024-03-19 07:18:43', '2024-03-19 07:18:43'),
(177, 'male', 'Hbscihcv', '248370730', '163037', NULL, 0, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'Married', NULL, NULL, 'Committed and Always Pray', 'Good', '55.00', '56.00', 'Medium', 'Healthy', 'H', NULL, 'Swimming', 0, 0, 1, '2024-03-19 07:38:57', '2024-03-19 07:38:57'),
(178, 'male', 'Hch', '606838606', '163037', '2018-03-06', 7, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', 1, NULL, 'Committed and Always Pray', 'Good', '66.00', '55.00', 'Medium', 'Healthy', 'Jn', NULL, 'Swimming', 0, 0, 1, '2024-03-19 08:00:42', '2024-03-19 08:00:42'),
(179, 'male', 'Fugi', '256987412', '163037', NULL, 0, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'Married', 25, 1, 'Committed and Always Pray', 'Good', '36.00', '32.00', 'Medium', 'Healthy', 'Div', NULL, 'Swimming', 0, 0, 1, '2024-03-19 23:57:25', '2024-03-19 23:57:25'),
(180, 'male', 'Rishab', '355935177', '163037', '2019-03-20', 5, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'Married', 30, 1, 'Committed and Always Pray', 'Good', '31.00', '32.00', 'Medium', 'Healthy', 'Hii', NULL, 'Swimming', 0, 0, 1, '2024-03-20 00:03:07', '2024-03-20 00:03:07'),
(181, 'Female', 'Dish', '254158963', '163037', '2013-03-20', 11, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'Married', 25, 1, 'Committed and Always Pray', 'Good', '96.00', '85.00', 'Medium', 'Healthy', NULL, NULL, 'Swimming', 0, 0, 1, '2024-03-20 00:06:15', '2024-03-20 00:06:15'),
(182, 'Male', 'Rajav', '665874123', '163037', '1995-03-20', 29, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', 25, 1, 'Committed and Always Pray', 'Good', '74.00', '50.00', 'Medium', 'Healthy', 'Hii', NULL, 'Swimming', 0, 0, 1, '2024-03-20 00:09:03', '2024-03-20 00:11:58'),
(183, 'Male', 'Krish', '874569321', '325698', '2020-03-20', 4, 'USA', 'New York', 'Dubai', 'Government', 'Non-Trible', 'White', 'obesity', 0, 1, 'Pray', 'Good', '10.00', '20.00', 'Slim', 'good', 'Hii', NULL, 'Swimming', 0, 0, 1, '2024-03-20 00:34:50', '2024-03-20 00:39:42'),
(184, 'male', 'Kuldip', '987456288', '163037', '1995-03-20', 29, 'United Kingdom', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'Married', 87, 1, 'Committed and Always Pray', 'Good', '98.00', '50.00', 'Medium', 'Healthy', 'Hii', NULL, 'Swimming', 0, 0, 1, '2024-03-20 00:41:45', '2024-03-20 00:42:42'),
(185, 'male', 'H hc', '968683939', '163037', '1985-03-20', 39, 'Australia', 'New York', 'Ras Al Khaimah', 'Government Department', 'Tribal', 'White', 'single', 87, 1, 'Committed and Always Pray', 'Good', '98.00', '50.00', 'Medium', 'Healthy', 'Gchcyc', NULL, 'Swimming', 0, 0, 1, '2024-03-20 00:51:17', '2024-03-20 00:56:38'),
(186, 'male', 'Utsav', '845454454', '163037', '2024-03-05', 0, 'USA', 'New York', 'Dubai', 'Government Department', 'Tribal', 'White', 'single', 2, NULL, 'Committed and Always Pray', 'Good', '145.00', '50.00', 'Medium', 'Healthy', 'Ytg', NULL, 'Archery', 0, 0, 1, '2024-03-27 01:24:20', '2024-03-27 01:42:38');

-- --------------------------------------------------------

--
-- Table structure for table `profile_contacts`
--

CREATE TABLE `profile_contacts` (
  `id` int(11) NOT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `profile_contacts`
--

INSERT INTO `profile_contacts` (`id`, `profile_id`, `number`, `note`, `created_at`, `updated_at`) VALUES
(89, 125, '123644578', 'Sysdyz', '2024-03-05 05:36:10', '2024-03-05 05:36:10'),
(90, 124, '363336666', 'Ccthftjj', '2024-03-05 05:39:59', '2024-03-05 05:39:59'),
(91, 124, '6869', 'Vh h', '2024-03-05 06:47:30', '2024-03-05 06:47:30'),
(92, 124, '6869686866', 'Vh h g gcycugg7', '2024-03-05 06:50:44', '2024-03-05 06:50:44'),
(93, 124, '43355323333', 'cdfsdf', '2024-03-14 04:21:02', '2024-03-14 04:21:02');

-- --------------------------------------------------------

--
-- Table structure for table `profile_likes`
--

CREATE TABLE `profile_likes` (
  `id` int(11) NOT NULL,
  `liked_profile_id` int(11) NOT NULL,
  `liker_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `profile_likes`
--

INSERT INTO `profile_likes` (`id`, `liked_profile_id`, `liker_id`, `created_at`, `updated_at`) VALUES
(39, 125, 124, '2024-03-05 05:34:35', '2024-03-05 05:34:35'),
(40, 124, 125, '2024-03-05 06:13:44', '2024-03-05 06:13:44'),
(41, 124, 126, '2024-03-05 06:24:11', '2024-03-05 06:24:11'),
(42, 124, 127, '2024-03-05 06:47:15', '2024-03-05 06:47:15'),
(43, 124, 128, '2024-03-05 06:50:27', '2024-03-05 06:50:27'),
(44, 126, 124, '2024-03-05 22:06:40', '2024-03-05 22:06:40'),
(45, 124, 147, '2024-03-14 01:24:29', '2024-03-14 01:24:29'),
(46, 126, 147, '2024-03-14 01:24:51', '2024-03-14 01:24:51'),
(47, 124, 148, '2024-03-14 04:58:06', '2024-03-14 04:58:06'),
(48, 130, 148, '2024-03-14 04:58:17', '2024-03-14 04:58:17'),
(49, 147, 148, '2024-03-14 04:58:29', '2024-03-14 04:58:29'),
(50, 148, 124, '2024-03-14 05:05:13', '2024-03-14 05:05:13'),
(51, 130, 124, '2024-03-14 05:24:54', '2024-03-14 05:24:54'),
(52, 124, 130, '2024-03-14 05:29:59', '2024-03-14 05:29:59'),
(53, 148, 147, '2024-03-14 06:10:40', '2024-03-14 06:10:40'),
(54, 150, 125, '2024-03-17 23:14:05', '2024-03-17 23:14:05');

-- --------------------------------------------------------

--
-- Table structure for table `profile_views`
--

CREATE TABLE `profile_views` (
  `id` int(11) NOT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `viewer_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `profile_views`
--

INSERT INTO `profile_views` (`id`, `profile_id`, `viewer_id`, `created_at`, `updated_at`) VALUES
(305, 125, 124, '2024-03-05 05:34:30', '2024-03-05 05:34:30'),
(306, 124, 125, '2024-03-05 05:39:01', '2024-03-05 05:39:01'),
(307, 124, 125, '2024-03-05 06:13:44', '2024-03-05 06:13:44'),
(308, 124, 126, '2024-03-05 06:24:06', '2024-03-05 06:24:06'),
(309, 124, 127, '2024-03-05 06:47:14', '2024-03-05 06:47:14'),
(310, 124, 128, '2024-03-05 06:50:25', '2024-03-05 06:50:25'),
(311, 124, 128, '2024-03-05 07:46:37', '2024-03-05 07:46:37'),
(312, 124, 128, '2024-03-05 07:47:35', '2024-03-05 07:47:35'),
(313, 125, 124, '2024-03-05 22:06:30', '2024-03-05 22:06:30'),
(314, 126, 124, '2024-03-05 22:06:39', '2024-03-05 22:06:39'),
(315, 128, 124, '2024-03-05 22:07:41', '2024-03-05 22:07:41'),
(316, 125, 124, '2024-03-05 22:07:52', '2024-03-05 22:07:52'),
(317, 125, 124, '2024-03-05 22:08:14', '2024-03-05 22:08:14'),
(318, 126, 124, '2024-03-05 22:08:40', '2024-03-05 22:08:40'),
(319, 126, 124, '2024-03-05 22:08:45', '2024-03-05 22:08:45'),
(320, 127, 124, '2024-03-05 22:08:56', '2024-03-05 22:08:56'),
(321, 125, 124, '2024-03-05 22:10:04', '2024-03-05 22:10:04'),
(322, 125, 124, '2024-03-05 22:10:09', '2024-03-05 22:10:09'),
(323, 128, 124, '2024-03-05 22:17:18', '2024-03-05 22:17:18'),
(324, 125, 124, '2024-03-05 22:43:59', '2024-03-05 22:43:59'),
(325, 125, 124, '2024-03-05 22:45:18', '2024-03-05 22:45:18'),
(326, 125, 124, '2024-03-05 23:03:59', '2024-03-05 23:03:59'),
(327, 125, 124, '2024-03-05 23:10:13', '2024-03-05 23:10:13'),
(328, 132, 130, '2024-03-06 01:29:49', '2024-03-06 01:29:49'),
(329, 126, 124, '2024-03-06 07:00:52', '2024-03-06 07:00:52'),
(330, 126, 124, '2024-03-06 07:10:01', '2024-03-06 07:10:01'),
(331, 126, 124, '2024-03-06 07:17:01', '2024-03-06 07:17:01'),
(332, 125, 124, '2024-03-06 22:38:56', '2024-03-06 22:38:56'),
(333, 125, 124, '2024-03-06 22:39:01', '2024-03-06 22:39:01'),
(334, 125, 124, '2024-03-06 22:59:50', '2024-03-06 22:59:50'),
(335, 125, 124, '2024-03-06 23:04:06', '2024-03-06 23:04:06'),
(336, 125, 124, '2024-03-06 23:05:11', '2024-03-06 23:05:11'),
(337, 125, 124, '2024-03-06 23:05:19', '2024-03-06 23:05:19'),
(338, 125, 124, '2024-03-06 23:06:32', '2024-03-06 23:06:32'),
(339, 125, 124, '2024-03-06 23:06:41', '2024-03-06 23:06:41'),
(340, 125, 124, '2024-03-06 23:11:09', '2024-03-06 23:11:09'),
(341, 125, 124, '2024-03-06 23:11:18', '2024-03-06 23:11:18'),
(342, 125, 124, '2024-03-06 23:11:55', '2024-03-06 23:11:55'),
(343, 125, 124, '2024-03-06 23:12:02', '2024-03-06 23:12:02'),
(344, 125, 124, '2024-03-06 23:12:04', '2024-03-06 23:12:04'),
(345, 125, 124, '2024-03-06 23:12:15', '2024-03-06 23:12:15'),
(346, 125, 124, '2024-03-06 23:12:19', '2024-03-06 23:12:19'),
(347, 125, 124, '2024-03-06 23:12:28', '2024-03-06 23:12:28'),
(348, 125, 124, '2024-03-06 23:12:31', '2024-03-06 23:12:31'),
(349, 125, 124, '2024-03-06 23:12:50', '2024-03-06 23:12:50'),
(350, 125, 124, '2024-03-06 23:12:54', '2024-03-06 23:12:54'),
(351, 125, 124, '2024-03-06 23:13:03', '2024-03-06 23:13:03'),
(352, 125, 124, '2024-03-06 23:13:09', '2024-03-06 23:13:09'),
(353, 125, 124, '2024-03-06 23:13:12', '2024-03-06 23:13:12'),
(354, 125, 124, '2024-03-06 23:15:30', '2024-03-06 23:15:30'),
(355, 125, 124, '2024-03-06 23:15:33', '2024-03-06 23:15:33'),
(356, 125, 124, '2024-03-06 23:17:24', '2024-03-06 23:17:24'),
(357, 125, 124, '2024-03-06 23:17:26', '2024-03-06 23:17:26'),
(358, 125, 124, '2024-03-06 23:17:28', '2024-03-06 23:17:28'),
(359, 125, 124, '2024-03-06 23:17:36', '2024-03-06 23:17:36'),
(360, 125, 124, '2024-03-06 23:17:41', '2024-03-06 23:17:41'),
(361, 125, 124, '2024-03-06 23:17:44', '2024-03-06 23:17:44'),
(362, 125, 124, '2024-03-06 23:17:46', '2024-03-06 23:17:46'),
(363, 125, 124, '2024-03-06 23:18:42', '2024-03-06 23:18:42'),
(364, 125, 124, '2024-03-06 23:18:53', '2024-03-06 23:18:53'),
(365, 125, 124, '2024-03-06 23:19:05', '2024-03-06 23:19:05'),
(366, 125, 124, '2024-03-06 23:19:24', '2024-03-06 23:19:24'),
(367, 125, 124, '2024-03-06 23:19:33', '2024-03-06 23:19:33'),
(368, 125, 124, '2024-03-06 23:19:55', '2024-03-06 23:19:55'),
(369, 125, 124, '2024-03-06 23:20:19', '2024-03-06 23:20:19'),
(370, 125, 124, '2024-03-06 23:20:22', '2024-03-06 23:20:22'),
(371, 126, 124, '2024-03-06 23:20:46', '2024-03-06 23:20:46'),
(372, 127, 124, '2024-03-07 01:21:09', '2024-03-07 01:21:09'),
(373, 125, 124, '2024-03-07 01:46:21', '2024-03-07 01:46:21'),
(374, 125, 124, '2024-03-07 01:47:27', '2024-03-07 01:47:27'),
(375, 125, 124, '2024-03-07 06:29:03', '2024-03-07 06:29:03'),
(376, 125, 124, '2024-03-07 06:29:12', '2024-03-07 06:29:12'),
(377, 128, 124, '2024-03-07 06:37:56', '2024-03-07 06:37:56'),
(378, 128, 124, '2024-03-07 06:37:59', '2024-03-07 06:37:59'),
(379, 128, 124, '2024-03-07 06:38:03', '2024-03-07 06:38:03'),
(380, 127, 124, '2024-03-07 06:38:08', '2024-03-07 06:38:08'),
(381, 127, 124, '2024-03-07 06:42:50', '2024-03-07 06:42:50'),
(382, 135, 124, '2024-03-08 00:57:00', '2024-03-08 00:57:00'),
(383, 135, 124, '2024-03-08 00:58:14', '2024-03-08 00:58:14'),
(384, 135, 124, '2024-03-08 00:58:40', '2024-03-08 00:58:40'),
(385, 135, 124, '2024-03-08 00:58:48', '2024-03-08 00:58:48'),
(386, 135, 124, '2024-03-08 00:59:19', '2024-03-08 00:59:19'),
(387, 135, 124, '2024-03-08 00:59:46', '2024-03-08 00:59:46'),
(389, 125, 124, '2024-03-10 23:25:25', '2024-03-10 23:25:25'),
(390, 125, 124, '2024-03-11 00:36:15', '2024-03-11 00:36:15'),
(391, 130, 124, '2024-03-11 00:39:14', '2024-03-11 00:39:14'),
(392, 130, 124, '2024-03-11 01:45:48', '2024-03-11 01:45:48'),
(393, 128, 124, '2024-03-11 01:47:53', '2024-03-11 01:47:53'),
(394, 126, 124, '2024-03-11 04:27:20', '2024-03-11 04:27:20'),
(395, 125, 124, '2024-03-11 04:28:42', '2024-03-11 04:28:42'),
(396, 128, 124, '2024-03-11 04:29:56', '2024-03-11 04:29:56'),
(397, 124, 144, '2024-03-11 05:54:56', '2024-03-11 05:54:56'),
(398, 124, 144, '2024-03-11 05:57:15', '2024-03-11 05:57:15'),
(399, 125, 124, '2024-03-11 05:57:21', '2024-03-11 05:57:21'),
(400, 125, 124, '2024-03-11 06:02:10', '2024-03-11 06:02:10'),
(401, 125, 124, '2024-03-11 06:03:17', '2024-03-11 06:03:17'),
(402, 125, 124, '2024-03-11 06:03:19', '2024-03-11 06:03:19'),
(403, 125, 124, '2024-03-11 06:03:25', '2024-03-11 06:03:25'),
(404, 125, 124, '2024-03-11 06:03:31', '2024-03-11 06:03:31'),
(405, 125, 124, '2024-03-11 06:03:51', '2024-03-11 06:03:51'),
(406, 125, 124, '2024-03-11 06:06:04', '2024-03-11 06:06:04'),
(407, 125, 124, '2024-03-11 06:11:10', '2024-03-11 06:11:10'),
(408, 125, 124, '2024-03-11 06:12:16', '2024-03-11 06:12:16'),
(409, 125, 124, '2024-03-11 06:12:45', '2024-03-11 06:12:45'),
(410, 125, 124, '2024-03-11 06:12:47', '2024-03-11 06:12:47'),
(411, 125, 124, '2024-03-11 06:12:50', '2024-03-11 06:12:50'),
(412, 125, 124, '2024-03-11 06:12:57', '2024-03-11 06:12:57'),
(413, 125, 124, '2024-03-11 06:16:33', '2024-03-11 06:16:33'),
(414, 125, 124, '2024-03-11 06:16:33', '2024-03-11 06:16:33'),
(415, 125, 124, '2024-03-11 06:22:58', '2024-03-11 06:22:58'),
(416, 125, 124, '2024-03-11 06:26:04', '2024-03-11 06:26:04'),
(417, 125, 124, '2024-03-11 06:28:04', '2024-03-11 06:28:04'),
(418, 125, 124, '2024-03-11 06:28:06', '2024-03-11 06:28:06'),
(419, 125, 124, '2024-03-11 06:28:13', '2024-03-11 06:28:13'),
(420, 125, 124, '2024-03-11 06:28:18', '2024-03-11 06:28:18'),
(421, 125, 124, '2024-03-11 06:28:21', '2024-03-11 06:28:21'),
(422, 125, 124, '2024-03-11 06:29:30', '2024-03-11 06:29:30'),
(423, 126, 124, '2024-03-11 06:35:36', '2024-03-11 06:35:36'),
(424, 126, 124, '2024-03-11 06:35:56', '2024-03-11 06:35:56'),
(425, 126, 124, '2024-03-11 06:36:02', '2024-03-11 06:36:02'),
(426, 126, 124, '2024-03-11 06:36:15', '2024-03-11 06:36:15'),
(427, 126, 124, '2024-03-11 06:36:33', '2024-03-11 06:36:33'),
(428, 126, 124, '2024-03-11 06:36:49', '2024-03-11 06:36:49'),
(429, 126, 124, '2024-03-11 06:36:53', '2024-03-11 06:36:53'),
(430, 126, 124, '2024-03-11 06:37:00', '2024-03-11 06:37:00'),
(431, 126, 124, '2024-03-11 06:37:03', '2024-03-11 06:37:03'),
(432, 126, 124, '2024-03-11 06:37:16', '2024-03-11 06:37:16'),
(433, 126, 124, '2024-03-11 06:45:21', '2024-03-11 06:45:21'),
(434, 126, 124, '2024-03-11 06:45:28', '2024-03-11 06:45:28'),
(435, 126, 124, '2024-03-11 06:45:35', '2024-03-11 06:45:35'),
(436, 126, 124, '2024-03-11 06:46:03', '2024-03-11 06:46:03'),
(437, 126, 124, '2024-03-11 06:47:28', '2024-03-11 06:47:28'),
(438, 126, 124, '2024-03-11 06:48:06', '2024-03-11 06:48:06'),
(439, 126, 124, '2024-03-11 06:48:21', '2024-03-11 06:48:21'),
(440, 125, 124, '2024-03-11 06:48:45', '2024-03-11 06:48:45'),
(441, 125, 124, '2024-03-11 06:49:14', '2024-03-11 06:49:14'),
(442, 125, 124, '2024-03-11 06:49:19', '2024-03-11 06:49:19'),
(443, 125, 124, '2024-03-11 06:49:42', '2024-03-11 06:49:42'),
(444, 126, 124, '2024-03-11 06:51:51', '2024-03-11 06:51:51'),
(445, 126, 124, '2024-03-11 06:53:10', '2024-03-11 06:53:10'),
(446, 125, 124, '2024-03-11 06:53:36', '2024-03-11 06:53:36'),
(447, 125, 124, '2024-03-11 06:56:23', '2024-03-11 06:56:23'),
(448, 125, 124, '2024-03-11 06:56:34', '2024-03-11 06:56:34'),
(449, 125, 124, '2024-03-11 06:57:14', '2024-03-11 06:57:14'),
(450, 125, 124, '2024-03-11 06:57:22', '2024-03-11 06:57:22'),
(451, 125, 124, '2024-03-11 06:57:35', '2024-03-11 06:57:35'),
(452, 125, 124, '2024-03-11 06:57:37', '2024-03-11 06:57:37'),
(453, 125, 124, '2024-03-11 06:57:42', '2024-03-11 06:57:42'),
(454, 125, 124, '2024-03-11 07:03:01', '2024-03-11 07:03:01'),
(455, 125, 124, '2024-03-11 07:03:12', '2024-03-11 07:03:12'),
(456, 125, 124, '2024-03-11 07:04:08', '2024-03-11 07:04:08'),
(457, 125, 124, '2024-03-11 07:04:13', '2024-03-11 07:04:13'),
(458, 125, 124, '2024-03-11 07:04:58', '2024-03-11 07:04:58'),
(459, 125, 124, '2024-03-11 07:05:01', '2024-03-11 07:05:01'),
(460, 125, 124, '2024-03-11 07:05:04', '2024-03-11 07:05:04'),
(461, 125, 124, '2024-03-11 07:11:47', '2024-03-11 07:11:47'),
(462, 125, 124, '2024-03-11 07:11:49', '2024-03-11 07:11:49'),
(463, 125, 124, '2024-03-11 07:12:13', '2024-03-11 07:12:13'),
(464, 125, 124, '2024-03-11 07:12:32', '2024-03-11 07:12:32'),
(465, 125, 124, '2024-03-11 07:12:36', '2024-03-11 07:12:36'),
(466, 125, 124, '2024-03-11 07:12:37', '2024-03-11 07:12:37'),
(467, 125, 124, '2024-03-11 07:12:39', '2024-03-11 07:12:39'),
(468, 125, 124, '2024-03-11 07:12:43', '2024-03-11 07:12:43'),
(469, 125, 124, '2024-03-11 07:13:06', '2024-03-11 07:13:06'),
(470, 125, 124, '2024-03-11 07:14:49', '2024-03-11 07:14:49'),
(471, 125, 124, '2024-03-11 07:18:49', '2024-03-11 07:18:49'),
(472, 125, 124, '2024-03-11 07:18:53', '2024-03-11 07:18:53'),
(473, 125, 124, '2024-03-11 07:19:17', '2024-03-11 07:19:17'),
(474, 125, 124, '2024-03-11 07:20:00', '2024-03-11 07:20:00'),
(475, 125, 124, '2024-03-11 07:20:03', '2024-03-11 07:20:03'),
(476, 125, 124, '2024-03-11 07:21:28', '2024-03-11 07:21:28'),
(477, 125, 124, '2024-03-11 07:22:00', '2024-03-11 07:22:00'),
(478, 125, 124, '2024-03-11 22:37:51', '2024-03-11 22:37:51'),
(479, 125, 124, '2024-03-11 22:44:16', '2024-03-11 22:44:16'),
(480, 125, 124, '2024-03-11 22:45:50', '2024-03-11 22:45:50'),
(481, 125, 124, '2024-03-11 22:45:53', '2024-03-11 22:45:53'),
(482, 125, 124, '2024-03-11 22:46:07', '2024-03-11 22:46:07'),
(483, 125, 124, '2024-03-11 22:46:12', '2024-03-11 22:46:12'),
(484, 125, 124, '2024-03-11 22:46:14', '2024-03-11 22:46:14'),
(485, 125, 124, '2024-03-11 22:46:59', '2024-03-11 22:46:59'),
(486, 125, 124, '2024-03-11 22:50:02', '2024-03-11 22:50:02'),
(487, 125, 124, '2024-03-11 22:50:30', '2024-03-11 22:50:30'),
(488, 125, 124, '2024-03-11 22:52:18', '2024-03-11 22:52:18'),
(489, 125, 124, '2024-03-11 22:53:20', '2024-03-11 22:53:20'),
(490, 125, 124, '2024-03-11 22:55:52', '2024-03-11 22:55:52'),
(491, 125, 124, '2024-03-11 22:55:54', '2024-03-11 22:55:54'),
(492, 125, 124, '2024-03-11 22:55:58', '2024-03-11 22:55:58'),
(493, 125, 124, '2024-03-11 22:56:01', '2024-03-11 22:56:01'),
(494, 125, 124, '2024-03-11 22:56:03', '2024-03-11 22:56:03'),
(495, 125, 124, '2024-03-11 23:01:19', '2024-03-11 23:01:19'),
(496, 125, 124, '2024-03-11 23:01:59', '2024-03-11 23:01:59'),
(497, 125, 124, '2024-03-11 23:02:45', '2024-03-11 23:02:45'),
(498, 125, 124, '2024-03-11 23:04:55', '2024-03-11 23:04:55'),
(499, 125, 124, '2024-03-12 03:07:42', '2024-03-12 03:07:42'),
(500, 125, 124, '2024-03-12 03:08:07', '2024-03-12 03:08:07'),
(501, 125, 124, '2024-03-12 03:08:08', '2024-03-12 03:08:08'),
(502, 125, 124, '2024-03-12 03:08:12', '2024-03-12 03:08:12'),
(503, 125, 124, '2024-03-12 03:08:22', '2024-03-12 03:08:22'),
(504, 125, 124, '2024-03-12 03:08:24', '2024-03-12 03:08:24'),
(505, 125, 124, '2024-03-12 03:08:26', '2024-03-12 03:08:26'),
(506, 125, 124, '2024-03-12 03:08:30', '2024-03-12 03:08:30'),
(507, 125, 124, '2024-03-12 03:08:32', '2024-03-12 03:08:32'),
(508, 125, 124, '2024-03-12 03:08:55', '2024-03-12 03:08:55'),
(509, 125, 124, '2024-03-12 03:09:00', '2024-03-12 03:09:00'),
(510, 125, 124, '2024-03-12 03:09:07', '2024-03-12 03:09:07'),
(511, 125, 124, '2024-03-12 03:11:29', '2024-03-12 03:11:29'),
(512, 125, 124, '2024-03-12 03:11:31', '2024-03-12 03:11:31'),
(513, 125, 124, '2024-03-12 03:21:12', '2024-03-12 03:21:12'),
(514, 125, 124, '2024-03-12 03:23:15', '2024-03-12 03:23:15'),
(515, 125, 124, '2024-03-12 03:24:15', '2024-03-12 03:24:15'),
(516, 126, 124, '2024-03-12 03:24:24', '2024-03-12 03:24:24'),
(517, 127, 124, '2024-03-12 03:24:33', '2024-03-12 03:24:33'),
(518, 125, 124, '2024-03-12 03:25:05', '2024-03-12 03:25:05'),
(519, 125, 124, '2024-03-12 03:26:23', '2024-03-12 03:26:23'),
(520, 125, 124, '2024-03-12 03:27:13', '2024-03-12 03:27:13'),
(521, 130, 124, '2024-03-12 03:27:20', '2024-03-12 03:27:20'),
(522, 125, 124, '2024-03-12 03:27:25', '2024-03-12 03:27:25'),
(523, 128, 124, '2024-03-12 03:27:29', '2024-03-12 03:27:29'),
(524, 125, 124, '2024-03-12 03:27:36', '2024-03-12 03:27:36'),
(525, 125, 124, '2024-03-12 03:27:37', '2024-03-12 03:27:37'),
(526, 125, 124, '2024-03-12 03:34:38', '2024-03-12 03:34:38'),
(527, 125, 124, '2024-03-12 03:34:55', '2024-03-12 03:34:55'),
(528, 125, 124, '2024-03-12 03:38:15', '2024-03-12 03:38:15'),
(529, 125, 124, '2024-03-12 03:39:13', '2024-03-12 03:39:13'),
(530, 125, 124, '2024-03-12 03:40:12', '2024-03-12 03:40:12'),
(531, 125, 124, '2024-03-12 03:40:33', '2024-03-12 03:40:33'),
(532, 125, 124, '2024-03-12 03:40:50', '2024-03-12 03:40:50'),
(533, 125, 124, '2024-03-12 03:41:15', '2024-03-12 03:41:15'),
(534, 125, 124, '2024-03-12 03:42:10', '2024-03-12 03:42:10'),
(535, 125, 124, '2024-03-12 03:43:23', '2024-03-12 03:43:23'),
(536, 125, 124, '2024-03-12 03:43:37', '2024-03-12 03:43:37'),
(537, 125, 124, '2024-03-12 03:43:52', '2024-03-12 03:43:52'),
(538, 125, 124, '2024-03-12 03:44:01', '2024-03-12 03:44:01'),
(539, 125, 124, '2024-03-12 03:44:01', '2024-03-12 03:44:01'),
(540, 125, 124, '2024-03-12 03:44:17', '2024-03-12 03:44:17'),
(541, 125, 124, '2024-03-12 03:44:27', '2024-03-12 03:44:27'),
(542, 125, 124, '2024-03-12 03:44:36', '2024-03-12 03:44:36'),
(543, 126, 124, '2024-03-12 03:49:52', '2024-03-12 03:49:52'),
(544, 132, 124, '2024-03-12 04:01:29', '2024-03-12 04:01:29'),
(545, 126, 124, '2024-03-13 01:13:03', '2024-03-13 01:13:03'),
(546, 125, 124, '2024-03-13 04:33:22', '2024-03-13 04:33:22'),
(547, 125, 124, '2024-03-13 05:17:01', '2024-03-13 05:17:01'),
(548, 125, 124, '2024-03-13 23:24:27', '2024-03-13 23:24:27'),
(549, 125, 124, '2024-03-13 23:26:34', '2024-03-13 23:26:34'),
(550, 125, 124, '2024-03-13 23:27:52', '2024-03-13 23:27:52'),
(551, 125, 124, '2024-03-13 23:30:32', '2024-03-13 23:30:32'),
(552, 125, 124, '2024-03-13 23:32:54', '2024-03-13 23:32:54'),
(553, 125, 124, '2024-03-13 23:34:29', '2024-03-13 23:34:29'),
(554, 125, 124, '2024-03-13 23:34:40', '2024-03-13 23:34:40'),
(555, 125, 124, '2024-03-13 23:34:59', '2024-03-13 23:34:59'),
(556, 125, 124, '2024-03-13 23:34:59', '2024-03-13 23:34:59'),
(557, 125, 124, '2024-03-13 23:35:09', '2024-03-13 23:35:09'),
(558, 125, 124, '2024-03-13 23:35:23', '2024-03-13 23:35:23'),
(559, 125, 124, '2024-03-13 23:36:35', '2024-03-13 23:36:35'),
(560, 125, 124, '2024-03-13 23:41:07', '2024-03-13 23:41:07'),
(561, 125, 124, '2024-03-13 23:44:50', '2024-03-13 23:44:50'),
(562, 125, 124, '2024-03-13 23:45:53', '2024-03-13 23:45:53'),
(563, 125, 124, '2024-03-13 23:47:09', '2024-03-13 23:47:09'),
(564, 125, 124, '2024-03-13 23:47:33', '2024-03-13 23:47:33'),
(565, 125, 124, '2024-03-13 23:47:38', '2024-03-13 23:47:38'),
(566, 125, 124, '2024-03-13 23:50:29', '2024-03-13 23:50:29'),
(567, 125, 124, '2024-03-13 23:50:33', '2024-03-13 23:50:33'),
(568, 125, 124, '2024-03-13 23:50:42', '2024-03-13 23:50:42'),
(569, 125, 124, '2024-03-13 23:50:49', '2024-03-13 23:50:49'),
(570, 125, 124, '2024-03-13 23:50:55', '2024-03-13 23:50:55'),
(571, 125, 124, '2024-03-13 23:57:47', '2024-03-13 23:57:47'),
(572, 125, 124, '2024-03-13 23:59:54', '2024-03-13 23:59:54'),
(573, 125, 124, '2024-03-14 00:00:59', '2024-03-14 00:00:59'),
(574, 126, 124, '2024-03-14 00:01:30', '2024-03-14 00:01:30'),
(575, 125, 124, '2024-03-14 00:02:28', '2024-03-14 00:02:28'),
(576, 125, 124, '2024-03-14 00:02:55', '2024-03-14 00:02:55'),
(577, 125, 124, '2024-03-14 00:08:48', '2024-03-14 00:08:48'),
(578, 125, 124, '2024-03-14 00:10:26', '2024-03-14 00:10:26'),
(579, 125, 124, '2024-03-14 00:11:28', '2024-03-14 00:11:28'),
(580, 125, 124, '2024-03-14 00:12:03', '2024-03-14 00:12:03'),
(581, 125, 124, '2024-03-14 00:12:17', '2024-03-14 00:12:17'),
(582, 125, 124, '2024-03-14 00:12:27', '2024-03-14 00:12:27'),
(583, 125, 124, '2024-03-14 00:13:14', '2024-03-14 00:13:14'),
(584, 125, 124, '2024-03-14 00:13:28', '2024-03-14 00:13:28'),
(585, 125, 124, '2024-03-14 00:14:47', '2024-03-14 00:14:47'),
(586, 124, 146, '2024-03-14 00:42:16', '2024-03-14 00:42:16'),
(587, 124, 146, '2024-03-14 00:48:25', '2024-03-14 00:48:25'),
(588, 124, 146, '2024-03-14 00:48:33', '2024-03-14 00:48:33'),
(589, 124, 146, '2024-03-14 00:50:15', '2024-03-14 00:50:15'),
(590, 125, 124, '2024-03-14 00:52:11', '2024-03-14 00:52:11'),
(591, 125, 124, '2024-03-14 00:53:46', '2024-03-14 00:53:46'),
(592, 146, 124, '2024-03-14 00:54:40', '2024-03-14 00:54:40'),
(593, 146, 124, '2024-03-14 00:58:00', '2024-03-14 00:58:00'),
(594, 128, 124, '2024-03-14 00:59:24', '2024-03-14 00:59:24'),
(595, 124, 147, '2024-03-14 01:24:27', '2024-03-14 01:24:27'),
(596, 126, 147, '2024-03-14 01:24:49', '2024-03-14 01:24:49'),
(597, 147, 124, '2024-03-14 01:39:50', '2024-03-14 01:39:50'),
(598, 144, 124, '2024-03-14 01:46:19', '2024-03-14 01:46:19'),
(599, 147, 124, '2024-03-14 04:19:32', '2024-03-14 04:19:32'),
(600, 124, 148, '2024-03-14 04:58:03', '2024-03-14 04:58:03'),
(601, 130, 148, '2024-03-14 04:58:16', '2024-03-14 04:58:16'),
(602, 146, 148, '2024-03-14 04:58:24', '2024-03-14 04:58:24'),
(603, 147, 148, '2024-03-14 04:58:29', '2024-03-14 04:58:29'),
(604, 148, 124, '2024-03-14 05:00:25', '2024-03-14 05:00:25'),
(605, 148, 124, '2024-03-14 05:05:06', '2024-03-14 05:05:06'),
(606, 148, 124, '2024-03-14 05:05:12', '2024-03-14 05:05:12'),
(607, 124, 148, '2024-03-14 05:08:09', '2024-03-14 05:08:09'),
(608, 124, 148, '2024-03-14 05:09:57', '2024-03-14 05:09:57'),
(609, 124, 148, '2024-03-14 05:22:53', '2024-03-14 05:22:53'),
(610, 127, 148, '2024-03-14 05:23:34', '2024-03-14 05:23:34'),
(611, 124, 148, '2024-03-14 05:23:36', '2024-03-14 05:23:36'),
(612, 130, 124, '2024-03-14 05:24:51', '2024-03-14 05:24:51'),
(613, 124, 130, '2024-03-14 05:25:48', '2024-03-14 05:25:48'),
(614, 127, 130, '2024-03-14 05:29:55', '2024-03-14 05:29:55'),
(615, 124, 130, '2024-03-14 05:29:58', '2024-03-14 05:29:58'),
(616, 124, 130, '2024-03-14 05:30:05', '2024-03-14 05:30:05'),
(617, 125, 130, '2024-03-14 05:30:11', '2024-03-14 05:30:11'),
(618, 124, 147, '2024-03-14 05:56:04', '2024-03-14 05:56:04'),
(619, 148, 124, '2024-03-14 05:56:54', '2024-03-14 05:56:54'),
(620, 147, 148, '2024-03-14 05:57:42', '2024-03-14 05:57:42'),
(621, 127, 147, '2024-03-14 06:10:23', '2024-03-14 06:10:23'),
(622, 148, 147, '2024-03-14 06:10:38', '2024-03-14 06:10:38'),
(623, 148, 149, '2024-03-15 00:45:52', '2024-03-15 00:45:52'),
(624, 149, 149, '2024-03-15 00:46:12', '2024-03-15 00:46:12'),
(625, 149, 149, '2024-03-15 00:46:45', '2024-03-15 00:46:45'),
(626, 149, 149, '2024-03-15 00:48:04', '2024-03-15 00:48:04'),
(627, 149, 149, '2024-03-15 00:49:26', '2024-03-15 00:49:26'),
(628, 149, 149, '2024-03-15 00:49:59', '2024-03-15 00:49:59'),
(629, 126, 147, '2024-03-15 04:17:17', '2024-03-15 04:17:17'),
(630, 146, 150, '2024-03-15 09:18:07', '2024-03-15 09:18:07'),
(631, 150, 125, '2024-03-17 23:12:37', '2024-03-17 23:12:37'),
(632, 150, 125, '2024-03-17 23:14:00', '2024-03-17 23:14:00'),
(633, 125, 150, '2024-03-17 23:16:55', '2024-03-17 23:16:55'),
(634, 133, 124, '2024-03-18 01:00:00', '2024-03-18 01:00:00'),
(635, 130, 126, '2024-03-18 04:10:36', '2024-03-18 04:10:36'),
(636, 135, 125, '2024-03-26 22:28:56', '2024-03-26 22:28:56'),
(637, 125, 133, '2024-03-27 04:05:03', '2024-03-27 04:05:03'),
(638, 125, 133, '2024-03-27 04:05:30', '2024-03-27 04:05:30');

-- --------------------------------------------------------

--
-- Table structure for table `qualities`
--

CREATE TABLE `qualities` (
  `id` int(11) NOT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `quality_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `qualities`
--

INSERT INTO `qualities` (`id`, `profile_id`, `quality_name`, `created_at`, `updated_at`) VALUES
(278, 128, 'reading', '2024-03-05 07:39:44', '2024-03-05 07:39:44'),
(279, 128, 'swimming', '2024-03-05 07:39:46', '2024-03-05 07:39:46'),
(295, 130, 'fit,energatic', '2024-03-06 01:03:31', '2024-03-06 01:03:31'),
(297, 132, 'fit', '2024-03-06 01:06:46', '2024-03-06 01:06:46'),
(301, 134, 'H jv', '2024-03-06 01:59:25', '2024-03-06 01:59:25'),
(302, 135, 'Chnn', '2024-03-06 02:01:18', '2024-03-06 02:01:18'),
(326, 127, NULL, '2024-03-08 04:43:41', '2024-03-08 04:43:41'),
(348, 136, 'Qualities ? Qualities : profile_Details.quality_name,', '2024-03-10 00:57:49', '2024-03-10 00:57:49'),
(353, 137, 'Qualities ? Qualities : profile_Details.quality_name,', '2024-03-10 01:39:25', '2024-03-10 01:39:25'),
(355, 139, 'string', '2024-03-10 01:50:56', '2024-03-10 01:50:56'),
(356, 140, 'string', '2024-03-10 01:51:08', '2024-03-10 01:51:08'),
(372, 138, 'Qualities ? Qualities : profile_Details.quality_name,', '2024-03-10 02:08:54', '2024-03-10 02:08:54'),
(373, 142, 'Xbb', '2024-03-10 06:07:26', '2024-03-10 06:07:26'),
(390, 144, 'Fjvjc', '2024-03-11 05:58:08', '2024-03-11 05:58:08'),
(398, 145, 'Ryfx', '2024-03-13 23:16:14', '2024-03-13 23:16:14'),
(401, 146, NULL, '2024-03-13 23:41:46', '2024-03-13 23:41:46'),
(437, 148, 'tgbnhy', '2024-03-14 06:33:59', '2024-03-14 06:33:59'),
(456, 143, 'Sense of humor', '2024-03-15 00:45:14', '2024-03-15 00:45:14'),
(459, 149, 'Sense of humor', '2024-03-15 00:49:08', '2024-03-15 00:49:08'),
(461, 147, 'dfdfdfd', '2024-03-15 03:46:14', '2024-03-15 03:46:14'),
(470, 150, NULL, '2024-03-17 23:16:25', '2024-03-17 23:16:25'),
(495, 124, NULL, '2024-03-18 01:03:02', '2024-03-18 01:03:02'),
(500, 126, 'demodemo', '2024-03-18 02:00:14', '2024-03-18 02:00:14'),
(504, 151, 'A', '2024-03-18 02:13:57', '2024-03-18 02:13:57'),
(505, 151, 'B', '2024-03-18 02:13:57', '2024-03-18 02:13:57'),
(506, 151, 'c', '2024-03-18 02:13:57', '2024-03-18 02:13:57'),
(507, 152, 'A', '2024-03-18 03:03:36', '2024-03-18 03:03:36'),
(508, 152, 'B', '2024-03-18 03:03:36', '2024-03-18 03:03:36'),
(509, 152, 'c', '2024-03-18 03:03:36', '2024-03-18 03:03:36'),
(510, 153, 'A', '2024-03-18 03:03:59', '2024-03-18 03:03:59'),
(511, 153, 'B', '2024-03-18 03:03:59', '2024-03-18 03:03:59'),
(512, 153, 'c', '2024-03-18 03:03:59', '2024-03-18 03:03:59'),
(513, 154, 'A', '2024-03-18 03:10:53', '2024-03-18 03:10:53'),
(514, 154, 'B', '2024-03-18 03:10:53', '2024-03-18 03:10:53'),
(515, 154, 'c', '2024-03-18 03:10:53', '2024-03-18 03:10:53'),
(516, 155, 'Swimming', '2024-03-18 03:15:19', '2024-03-18 03:15:19'),
(517, 155, 'reading', '2024-03-18 03:15:19', '2024-03-18 03:15:19'),
(518, 156, 'Acting', '2024-03-18 03:27:15', '2024-03-18 03:27:15'),
(519, 156, 'traveling', '2024-03-18 03:27:15', '2024-03-18 03:27:15'),
(520, 157, 'A', '2024-03-18 03:29:54', '2024-03-18 03:29:54'),
(521, 157, 'B', '2024-03-18 03:29:54', '2024-03-18 03:29:54'),
(522, 157, 'C', '2024-03-18 03:29:54', '2024-03-18 03:29:54'),
(529, 159, NULL, '2024-03-18 03:50:21', '2024-03-18 03:50:21'),
(530, 160, 'H h', '2024-03-18 03:56:16', '2024-03-18 03:56:16'),
(531, 160, 'uguv', '2024-03-18 03:56:16', '2024-03-18 03:56:16'),
(532, 162, 'QualityPara', '2024-03-18 03:59:57', '2024-03-18 03:59:57'),
(539, 163, NULL, '2024-03-18 04:26:22', '2024-03-18 04:26:22'),
(540, 171, 'string', '2024-03-19 03:12:37', '2024-03-19 03:12:37'),
(541, 173, 'null', '2024-03-19 03:16:09', '2024-03-19 03:16:09'),
(543, 174, NULL, '2024-03-19 03:25:28', '2024-03-19 03:25:28'),
(544, 175, 'Demo', '2024-03-19 03:39:47', '2024-03-19 03:39:47'),
(545, 175, 'Demo', '2024-03-19 03:39:47', '2024-03-19 03:39:47'),
(546, 176, 'Deno', '2024-03-19 07:18:43', '2024-03-19 07:18:43'),
(547, 177, 'Vjv', '2024-03-19 07:38:57', '2024-03-19 07:38:57'),
(548, 178, 'Hxhc', '2024-03-19 08:00:42', '2024-03-19 08:00:42'),
(549, 179, 'Gij', '2024-03-19 23:57:25', '2024-03-19 23:57:25'),
(550, 180, NULL, '2024-03-20 00:03:07', '2024-03-20 00:03:07'),
(551, 181, NULL, '2024-03-20 00:06:15', '2024-03-20 00:06:15'),
(553, 182, NULL, '2024-03-20 00:11:42', '2024-03-20 00:11:42'),
(554, 183, 'demo', '2024-03-20 00:34:50', '2024-03-20 00:34:50'),
(556, 184, NULL, '2024-03-20 00:42:42', '2024-03-20 00:42:42'),
(560, 185, 'qualities', '2024-03-20 00:56:06', '2024-03-20 00:56:06'),
(566, 125, 'hiii, i am looking for a person who is good in raeding', '2024-03-27 03:08:03', '2024-03-27 03:08:03'),
(567, 133, 'G', '2024-03-27 03:35:51', '2024-03-27 03:35:51');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `data` text DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `resolved_issue` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`id`, `profile_id`, `title`, `note`, `data`, `status`, `resolved_issue`, `created_at`, `updated_at`) VALUES
(56, 124, 'string', 'string', NULL, NULL, NULL, '2024-03-05 03:45:17', '2024-03-05 03:45:17'),
(57, 126, 'string', 'string', NULL, NULL, NULL, '2024-03-05 03:46:10', '2024-03-05 03:46:10'),
(58, 124, 'string', 'string', NULL, NULL, NULL, '2024-03-11 05:02:41', '2024-03-11 05:02:41'),
(59, 147, 'string', 'string', NULL, NULL, NULL, '2024-03-14 01:24:01', '2024-03-14 01:24:01');

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `requester_id` int(11) DEFAULT NULL,
  `data` text DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`id`, `profile_id`, `requester_id`, `data`, `status`, `created_at`, `updated_at`) VALUES
(64, 125, 124, '[{\"profile_id\":125,\"number\":\"123644578\",\"note\":\"Sysdyz\",\"updated_at\":\"2024-03-05T11:06:10.000000Z\",\"created_at\":\"2024-03-05T11:06:10.000000Z\",\"id\":89}]', 'accepted', '2024-03-05 05:34:40', '2024-03-05 05:36:10'),
(65, 124, 125, '[{\"profile_id\":124,\"number\":\"363336666\",\"note\":\"Ccthftjj\",\"updated_at\":\"2024-03-05T11:09:59.000000Z\",\"created_at\":\"2024-03-05T11:09:59.000000Z\",\"id\":90}]', 'pending', '2024-03-05 05:39:03', '2024-03-05 11:38:35'),
(66, 124, 126, '[{\"id\":124,\"gender\":\"male\",\"name\":\"Utsav\",\"number\":\"123456789\",\"dob\":\"2001-09-11\",\"age\":22,\"nationality\":\"USA\",\"place_of_residence\":\"New York\",\"city\":\"Sharjah\",\"job\":\"Software Engineer\",\"lineage\":\"Caucasian\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"80.00\",\"body_tone\":\"Fit\",\"health_status\":\"Good\",\"write_about_yourself\":\"I am a software engineer living in New York City.\",\"qualities_you_are_looking_for\":null,\"interests\":\"Reading, hiking, playing guitar\",\"views\":9,\"likes\":4,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-05T11:54:11.000000Z\"}]', 'rejected', '2024-03-05 06:24:13', '2024-03-05 06:39:32'),
(67, 124, 127, '[{\"profile_id\":124,\"number\":\"6869\",\"note\":\"Vh h\",\"updated_at\":\"2024-03-05T12:17:30.000000Z\",\"created_at\":\"2024-03-05T12:17:30.000000Z\",\"id\":91}]', 'accepted', '2024-03-05 06:47:17', '2024-03-05 06:47:30'),
(68, 124, 128, '[{\"profile_id\":124,\"number\":\"6869686866\",\"note\":\"Vh h g gcycugg7\",\"updated_at\":\"2024-03-05T12:20:44.000000Z\",\"created_at\":\"2024-03-05T12:20:44.000000Z\",\"id\":92}]', 'accepted', '2024-03-05 06:50:28', '2024-03-05 06:50:44'),
(69, 127, 124, '', 'pending', '2024-03-07 06:42:57', '2024-03-07 06:42:57'),
(70, 128, 124, '', 'pending', '2024-03-11 04:30:03', '2024-03-11 04:30:03'),
(71, 124, 146, '[{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":12,\"nationality\":\"Canada\",\"place_of_residence\":\"New York\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Fair\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Christian\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Muscular\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":19,\"likes\":6,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T06:23:31.000000Z\"}]', 'rejected', '2024-03-14 00:48:34', '2024-03-14 00:57:50'),
(72, 146, 124, '', 'pending', '2024-03-14 00:58:04', '2024-03-14 00:58:04'),
(73, 124, 147, '[{\"profile_id\":124,\"number\":\"43355323333\",\"note\":\"cdfsdf\",\"updated_at\":\"2024-03-14T09:51:02.000000Z\",\"created_at\":\"2024-03-14T09:51:02.000000Z\",\"id\":93}]', 'accepted', '2024-03-14 01:24:30', '2024-03-14 04:21:02'),
(74, 124, 148, '[{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":16,\"nationality\":\"Canada\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Not Committed and Always Pray\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":21,\"likes\":8,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T10:28:54.000000Z\"}]', 'rejected', '2024-03-14 04:58:07', '2024-03-14 05:04:40'),
(75, 130, 148, '[{\"id\":130,\"gender\":\"male\",\"name\":\"jay\",\"number\":\"979797979\",\"dob\":\"2011-05-12\",\"age\":30,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"Houston\",\"city\":\"Sharjah\",\"job\":\"Freelance\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":null,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Rich\",\"height\":\"88.00\",\"width\":\"70.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"i am a athlete\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":5,\"likes\":2,\"created_at\":\"2024-03-06T06:33:31.000000Z\",\"updated_at\":\"2024-03-14T10:55:12.000000Z\"}]', 'rejected', '2024-03-14 04:58:18', '2024-03-14 05:32:57'),
(76, 147, 148, '[{\"id\":147,\"gender\":\"Male\",\"name\":\"rushi\",\"number\":\"121212121\",\"dob\":\"2007-06-14\",\"age\":16,\"nationality\":\"Australia\",\"place_of_residence\":\"Houston\",\"city\":\"Ras Al Khaimah\",\"job\":\"Artist\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Married\",\"number_of_children\":2,\"are_the_children_with_you\":0,\"religious_commitment\":\"Medium and Always Pray\",\"financial_situation\":\"Excellent\",\"height\":\"77.00\",\"width\":\"50.00\",\"body_tone\":\"Medium\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"aadd\",\"qualities_you_are_looking_for\":null,\"interests\":\"Horseback Riding\",\"views\":4,\"likes\":1,\"created_at\":\"2024-03-14T06:44:11.000000Z\",\"updated_at\":\"2024-03-14T11:28:02.000000Z\"}]', 'rejected', '2024-03-14 04:58:31', '2024-03-14 06:10:11'),
(77, 148, 124, '[{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":3,\"likes\":1,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T10:35:26.000000Z\"}]', 'rejected', '2024-03-14 05:05:08', '2024-03-14 05:22:56'),
(78, 130, 124, '', 'pending', '2024-03-14 05:24:55', '2024-03-14 05:24:55'),
(79, 124, 130, '[{\"id\":124,\"gender\":\"Male\",\"name\":\"Q\",\"number\":\"123456789\",\"dob\":\"2008-03-10\",\"age\":16,\"nationality\":\"Canada\",\"place_of_residence\":\"Chicago\",\"city\":\"Ajman\",\"job\":\"Entrepreneur\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Brown color is close to White\",\"martial_status\":\"Single\",\"number_of_children\":0,\"are_the_children_with_you\":0,\"religious_commitment\":\"Not Committed and Always Pray\",\"financial_situation\":\"Stable\",\"height\":\"180.00\",\"width\":\"50.00\",\"body_tone\":\"Athletic\",\"health_status\":\"Recovered\",\"write_about_yourself\":\"Hchcjc\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":28,\"likes\":9,\"created_at\":\"2024-03-05T08:58:05.000000Z\",\"updated_at\":\"2024-03-14T11:03:25.000000Z\"}]', 'rejected', '2024-03-14 05:30:00', '2024-03-14 05:55:19'),
(80, 148, 147, '[{\"id\":148,\"gender\":\"male\",\"name\":\"Rock\",\"number\":\"444555666\",\"dob\":\"2006-04-13\",\"age\":17,\"nationality\":\"United Kingdom\",\"place_of_residence\":\"San Francisco\",\"city\":\"Ajman\",\"job\":\"Trade\",\"lineage\":\"Non Tribal\",\"skin_color\":\"Light Brown\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Not Committed and Sometimes Pray\",\"financial_situation\":\"Rich\",\"height\":\"58.00\",\"width\":\"50.00\",\"body_tone\":\"Athlete\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"ghfykyh\",\"qualities_you_are_looking_for\":null,\"interests\":\"Football\",\"views\":5,\"likes\":2,\"created_at\":\"2024-03-14T10:21:28.000000Z\",\"updated_at\":\"2024-03-14T11:41:00.000000Z\"}]', 'rejected', '2024-03-14 06:10:41', '2024-03-14 06:11:09'),
(81, 126, 147, '', 'pending', '2024-03-15 04:17:20', '2024-03-15 04:17:20'),
(82, 146, 150, '', 'pending', '2024-03-15 09:18:15', '2024-03-15 09:18:15'),
(83, 150, 125, '[{\"id\":150,\"gender\":\"male\",\"name\":\"Krish\",\"number\":\"843899767\",\"dob\":\"2009-10-10\",\"age\":14,\"nationality\":\"USA\",\"place_of_residence\":\"Los Angeles\",\"city\":\"Ajman\",\"job\":\"Private Sector\",\"lineage\":\"Tribal\",\"skin_color\":\"White\",\"martial_status\":\"single\",\"number_of_children\":null,\"are_the_children_with_you\":1,\"religious_commitment\":\"Committed and Always Pray\",\"financial_situation\":\"Good\",\"height\":\"25.00\",\"width\":\"31.00\",\"body_tone\":\"Medium\",\"health_status\":\"Healthy\",\"write_about_yourself\":\"I am krish\",\"qualities_you_are_looking_for\":null,\"interests\":\"Swimming\",\"views\":2,\"likes\":1,\"created_at\":\"2024-03-15T14:47:45.000000Z\",\"updated_at\":\"2024-03-18T04:44:59.000000Z\"}]', 'rejected', '2024-03-17 23:14:14', '2024-03-17 23:15:48');

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` int(11) NOT NULL,
  `plan_name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `months` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `color_code` varchar(50) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `plan_name`, `price`, `months`, `description`, `color_code`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(5, 'Demo Plan 1', 80, 1, 'This Is Demo Plan 1\r\nPerks Are Nothing', '#fff3db', 1, '2024-03-05 05:08:01', '2024-03-05 05:08:01', NULL),
(8, 'Demo Plan 2', 120, 3, 'Demo Plan 2 \r\nPerks Are:- Nothing', '#fff0fc', 1, '2024-03-05 05:08:51', '2024-03-05 05:08:51', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subscription_histories`
--

CREATE TABLE `subscription_histories` (
  `id` int(11) NOT NULL,
  `subscription_profile_id` int(11) DEFAULT NULL,
  `subscription_id` int(11) DEFAULT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `subscription_histories`
--

INSERT INTO `subscription_histories` (`id`, `subscription_profile_id`, `subscription_id`, `profile_id`, `start_date`, `end_date`, `created_at`) VALUES
(1, 4, 5, 124, '2024-03-06', '2024-04-18', '2024-03-18 05:59:32');

-- --------------------------------------------------------

--
-- Table structure for table `subscription_profile_details`
--

CREATE TABLE `subscription_profile_details` (
  `id` int(11) NOT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `subscription_id` int(11) DEFAULT NULL,
  `strt_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `renewal_date` date DEFAULT NULL,
  `auto_renewal` tinyint(1) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `is_upgraded` tinyint(1) NOT NULL DEFAULT 0,
  `last_amount` int(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `subscription_profile_details`
--

INSERT INTO `subscription_profile_details` (`id`, `profile_id`, `subscription_id`, `strt_date`, `end_date`, `renewal_date`, `auto_renewal`, `status`, `is_upgraded`, `last_amount`, `created_at`, `updated_at`, `deleted_at`) VALUES
(4, 124, 5, '2024-03-18', '2024-04-18', '2024-04-18', 0, 'active', 0, 0, '2024-03-05 23:07:38', '2024-03-18 06:04:20', NULL);

--
-- Triggers `subscription_profile_details`
--
DELIMITER $$
CREATE TRIGGER `after_insert_subscription_history` AFTER INSERT ON `subscription_profile_details` FOR EACH ROW BEGIN
INSERT INTO subscription_histories (subscription_profile_id,subscription_id,profile_id,start_date,end_date)
VALUES (NEW.id,NEW.subscription_id,NEW.profile_id,NEW.strt_date,NEW.end_date);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `after_update_subscription_histories` AFTER UPDATE ON `subscription_profile_details` FOR EACH ROW BEGIN
    IF OLD.subscription_id <> NEW.subscription_id THEN
        INSERT INTO subscription_histories (subscription_profile_id,subscription_id,profile_id,start_date,end_date)
        VALUES (NEW.id,NEW.subscription_id,NEW.profile_id,NEW.strt_date,NEW.end_date);
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `terms_and_conditions`
--

CREATE TABLE `terms_and_conditions` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `terms_and_conditions`
--

INSERT INTO `terms_and_conditions` (`id`, `title`, `content`, `created_at`, `updated_at`) VALUES
(1, 'Terms of Service', 'By using this marriage app, you agree to abide by all terms and conditions set forth herein.', '2024-03-05 23:56:55', '2024-03-06 00:03:47'),
(3, 'Privacy Policy', 'We respect your privacy and are committed to protecting your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data.', '2024-03-06 00:01:45', '2024-03-06 00:01:45'),
(4, 'User Conduct', 'Users are expected to conduct themselves in a respectful manner towards others. Any abusive or offensive behavior will not be tolerated.', '2024-03-06 00:02:03', '2024-03-06 00:02:03'),
(5, 'Membership', 'Membership to the marriage app is granted to individuals who are of legal age and not prohibited by law from entering into marriage.', '2024-03-06 00:02:27', '2024-03-06 00:02:27'),
(6, 'Termination', 'We reserve the right to terminate or suspend access to the marriage app for users who violate our terms and conditions.', '2024-03-06 00:02:39', '2024-03-06 00:02:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile_no` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `mobile_no`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `image`) VALUES
(1, 'Admin', 'admin', 'admin@gmail.com', '1234567890', NULL, '$2y$10$er7naDQm72Oaz0dNjtlNP.B9h77dcGys1CmwWMkSFXXX/nxi/OJpm', NULL, '2024-02-10 01:01:47', '2024-03-06 01:30:08', 'uploads/UuXaeWu7T2RDWsWwi6BLzco8OWFaka6RewwHJOVo.png');

-- --------------------------------------------------------

--
-- Table structure for table `user_otps`
--

CREATE TABLE `user_otps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `otp` varchar(255) NOT NULL,
  `expire_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_otps`
--

INSERT INTO `user_otps` (`id`, `user_id`, `otp`, `expire_at`, `created_at`, `updated_at`) VALUES
(1, 1, '439701', '2024-02-10 01:15:29', '2024-02-10 01:05:29', '2024-02-10 01:05:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_details`
--
ALTER TABLE `payment_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile_contacts`
--
ALTER TABLE `profile_contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile_likes`
--
ALTER TABLE `profile_likes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile_views`
--
ALTER TABLE `profile_views`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qualities`
--
ALTER TABLE `qualities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profile_id` (`profile_id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscription_histories`
--
ALTER TABLE `subscription_histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscription_profile_details`
--
ALTER TABLE `subscription_profile_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `terms_and_conditions`
--
ALTER TABLE `terms_and_conditions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `user_otps`
--
ALTER TABLE `user_otps`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=440;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `payment_details`
--
ALTER TABLE `payment_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=718;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=187;

--
-- AUTO_INCREMENT for table `profile_contacts`
--
ALTER TABLE `profile_contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `profile_likes`
--
ALTER TABLE `profile_likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `profile_views`
--
ALTER TABLE `profile_views`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=639;

--
-- AUTO_INCREMENT for table `qualities`
--
ALTER TABLE `qualities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=568;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `subscription_histories`
--
ALTER TABLE `subscription_histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `subscription_profile_details`
--
ALTER TABLE `subscription_profile_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `terms_and_conditions`
--
ALTER TABLE `terms_and_conditions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_otps`
--
ALTER TABLE `user_otps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `qualities`
--
ALTER TABLE `qualities`
  ADD CONSTRAINT `qualities_ibfk_1` FOREIGN KEY (`profile_id`) REFERENCES `profiles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
