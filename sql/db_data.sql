-- -----------------------------------------------------
-- Schema traktor
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table "traktor"."crop"
-- -----------------------------------------------------
INSERT INTO "traktor"."crop" VALUES 
(1, 'Wheat'),
(2, 'Corn'),
(3, 'Cotton'),
(4, 'Oat');


-- -----------------------------------------------------
-- Table "traktor"."crop_variety"
-- -----------------------------------------------------
INSERT INTO "traktor"."crop_variety" VALUES
(1, 'Durum', 1),
(2, 'Sweet', 2),
(3, 'Deltapine', 3),
(4, 'Deon', 4);


-- -----------------------------------------------------
-- Table "traktor"."market"
-- -----------------------------------------------------
INSERT INTO "traktor"."market" VALUES
(1, 'Tbilisi', 100, 200),
(2, 'Kutaisi', 300, 400),
(3, 'Gori', 500, 600);

-- -----------------------------------------------------
-- Table "traktor"."price"
-- -----------------------------------------------------
INSERT INTO "traktor"."price" VALUES
(1, 2.1, '2012-01-02 12:00:00', 1, 1),
(2, 2.2, '2012-02-03 12:00:00', 1, 2),
(3, 2.3, '2012-03-04 12:00:00', 1, 3),
(4, 2.4, '2012-04-02 12:00:00', 2, 1),
(5, 2.5, '2012-05-03 12:00:00', 2, 2),
(6, 2.6, '2012-06-04 12:00:00', 2, 3),
(7, 2.7, '2012-07-02 12:00:00', 3, 1),
(8, 2.8, '2012-08-03 12:00:00', 3, 2),
(9, 2.9, '2012-09-04 12:00:00', 3, 3),
(10, 3.1, '2012-10-02 12:00:00', 4, 1),
(11, 3.2, '2012-11-03 12:00:00', 4, 2),
(12, 3.3, '2012-12-04 12:00:00', 4, 3),
(13, 2.1, '2013-01-02 12:00:00', 1, 1),
(14, 2.2, '2013-02-03 12:00:00', 1, 2),
(15, 2.3, '2013-03-04 12:00:00', 1, 3),
(16, 2.4, '2013-04-02 12:00:00', 2, 1),
(17, 2.5, '2013-05-03 12:00:00', 2, 2),
(18, 2.6, '2013-06-04 12:00:00', 2, 3),
(19, 2.7, '2013-07-02 12:00:00', 3, 1),
(20, 2.8, '2013-08-03 12:00:00', 3, 2),
(21, 2.9, '2013-09-04 12:00:00', 3, 3),
(22, 3.1, '2013-10-02 12:00:00', 4, 1),
(23, 3.2, '2013-11-03 12:00:00', 4, 2),
(24, 3.3, '2013-12-04 12:00:00', 4, 3),
(25, 2.1, '2014-01-02 12:00:00', 1, 1),
(26, 2.2, '2014-02-03 12:00:00', 1, 2),
(27, 2.3, '2014-03-04 12:00:00', 1, 3),
(28, 2.4, '2014-04-02 12:00:00', 2, 1),
(29, 2.5, '2014-05-03 12:00:00', 2, 2),
(30, 2.6, '2014-06-04 12:00:00', 2, 3),
(31, 2.7, '2014-07-02 12:00:00', 3, 1),
(32, 2.8, '2014-08-03 12:00:00', 3, 2),
(33, 2.9, '2014-09-04 12:00:00', 3, 3),
(34, 3.1, '2014-10-02 12:00:00', 4, 1),
(35, 3.2, '2014-11-03 12:00:00', 4, 2),
(36, 3.3, '2014-12-04 12:00:00', 4, 3),
(37, 2.1, '2015-01-02 12:00:00', 1, 1),
(38, 2.2, '2015-02-03 12:00:00', 1, 2),
(39, 2.3, '2015-03-04 12:00:00', 1, 3),
(40, 2.4, '2015-04-02 12:00:00', 2, 1),
(41, 2.5, '2015-05-03 12:00:00', 2, 2),
(42, 2.6, '2015-06-04 12:00:00', 2, 3),
(43, 2.7, '2015-07-02 12:00:00', 3, 1),
(44, 2.8, '2015-08-03 12:00:00', 3, 2),
(45, 2.9, '2015-09-04 12:00:00', 3, 3),
(46, 3.1, '2015-10-02 12:00:00', 4, 1),
(47, 3.2, '2015-11-03 12:00:00', 4, 2),
(48, 3.3, '2015-12-04 12:00:00', 4, 3),
(49, 2.1, '2016-01-02 12:00:00', 1, 1),
(50, 2.2, '2016-02-03 12:00:00', 1, 2),
(51, 2.3, '2016-03-04 12:00:00', 1, 3),
(52, 2.4, '2016-04-02 12:00:00', 2, 1),
(53, 2.5, '2016-05-03 12:00:00', 2, 2),
(54, 2.6, '2016-06-01 12:00:00', 2, 3),
(55, 2.7, '2016-06-02 12:00:00', 3, 1),
(56, 2.8, '2016-06-03 12:00:00', 3, 2),
(57, 2.9, '2016-06-04 12:00:00', 3, 3),
(58, 3.1, '2016-06-05 12:00:00', 4, 1),
(59, 3.2, '2016-06-06 12:00:00', 4, 2),
(60, 3.3, '2016-06-07 12:00:00', 4, 3);

-- -----------------------------------------------------
-- Table "traktor"."daily"
-- -----------------------------------------------------
INSERT INTO "traktor"."daily" VALUES
(1, 2.1, '2016-06-01 12:00:00', 1, 1),
(2, 2.2, '2016-06-01 12:00:00', 1, 2),
(3, 2.3, '2016-06-01 12:00:00', 1, 3),
(4, 2.1, '2016-06-01 12:00:00', 2, 1),
(5, 2.2, '2016-06-01 12:00:00', 2, 2),
(6, 2.3, '2016-06-01 12:00:00', 2, 3),
(7, 2.1, '2016-06-01 12:00:00', 3, 1),
(8, 2.2, '2016-06-01 12:00:00', 3, 2),
(9, 2.3, '2016-06-01 12:00:00', 3, 3),
(10, 2.1, '2016-06-01 12:00:00', 4, 1),
(11, 2.2, '2016-06-01 12:00:00', 4, 2),
(12, 2.3, '2016-06-01 12:00:00', 4, 3),
(13, 2.1, '2016-06-02 12:00:00', 1, 1),
(14, 2.2, '2016-06-02 12:00:00', 1, 2),
(15, 2.3, '2016-06-02 12:00:00', 1, 3),
(16, 2.1, '2016-06-02 12:00:00', 2, 1),
(17, 2.2, '2016-06-02 12:00:00', 2, 2),
(18, 2.3, '2016-06-02 12:00:00', 2, 3),
(19, 2.1, '2016-06-02 12:00:00', 3, 1),
(20, 2.2, '2016-06-02 12:00:00', 3, 2),
(21, 2.3, '2016-06-02 12:00:00', 3, 3),
(22, 2.1, '2016-06-02 12:00:00', 4, 1),
(23, 2.2, '2016-06-02 12:00:00', 4, 2),
(24, 2.3, '2016-06-03 12:00:00', 4, 3),
(25, 2.1, '2016-06-03 12:00:00', 1, 1),
(26, 2.2, '2016-06-03 12:00:00', 1, 2),
(27, 2.3, '2016-06-03 12:00:00', 1, 3),
(28, 2.1, '2016-06-03 12:00:00', 2, 1),
(29, 2.2, '2016-06-03 12:00:00', 2, 2),
(30, 2.3, '2016-06-03 12:00:00', 2, 3),
(31, 2.1, '2016-06-03 12:00:00', 3, 1),
(32, 2.2, '2016-06-03 12:00:00', 3, 2),
(33, 2.3, '2016-06-03 12:00:00', 3, 3),
(34, 2.1, '2016-06-03 12:00:00', 4, 1),
(35, 2.2, '2016-06-03 12:00:00', 4, 2),
(36, 2.3, '2016-06-04 12:00:00', 4, 3),
(37, 2.1, '2016-06-04 12:00:00', 1, 1),
(38, 2.2, '2016-06-04 12:00:00', 1, 2),
(39, 2.3, '2016-06-04 12:00:00', 1, 3),
(40, 2.1, '2016-06-04 12:00:00', 2, 1),
(41, 2.2, '2016-06-04 12:00:00', 2, 2),
(42, 2.3, '2016-06-04 12:00:00', 2, 3),
(43, 2.1, '2016-06-04 12:00:00', 3, 1),
(44, 2.2, '2016-06-04 12:00:00', 3, 2),
(45, 2.3, '2016-06-04 12:00:00', 3, 3),
(46, 2.1, '2016-06-04 12:00:00', 4, 1),
(47, 2.2, '2016-06-04 12:00:00', 4, 2),
(48, 2.3, '2016-06-04 12:00:00', 4, 3);

-- -----------------------------------------------------
-- Table "traktor"."yearly"
-- -----------------------------------------------------
INSERT INTO "traktor"."yearly" VALUES
(1, 2.1, 2012, 1, 1),
(2, 2.2, 2012, 1, 2),
(3, 2.3, 2012, 1, 3),
(4, 2.1, 2012, 2, 1),
(5, 2.2, 2012, 2, 2),
(6, 2.3, 2012, 2, 3),
(7, 2.1, 2012, 3, 1),
(8, 2.2, 2012, 3, 2),
(9, 2.3, 2012, 3, 3),
(10, 2.1, 2012, 4, 1),
(11, 2.2, 2012, 4, 2),
(12, 2.3, 2012, 4, 3),
(13, 2.1, 2013, 1, 1),
(14, 2.2, 2013, 1, 2),
(15, 2.3, 2013, 1, 3),
(16, 2.1, 2013, 2, 1),
(17, 2.2, 2013, 2, 2),
(18, 2.3, 2013, 2, 3),
(19, 2.1, 2013, 3, 1),
(20, 2.2, 2013, 3, 2),
(21, 2.3, 2013, 3, 3),
(22, 2.1, 2013, 4, 1),
(23, 2.2, 2013, 4, 2),
(24, 2.3, 2013, 4, 3),
(25, 2.1, 2014, 1, 1),
(26, 2.2, 2014, 1, 2),
(27, 2.3, 2014, 1, 3),
(28, 2.1, 2014, 2, 1),
(29, 2.2, 2014, 2, 2),
(30, 2.3, 2014, 2, 3),
(31, 2.1, 2014, 3, 1),
(32, 2.2, 2014, 3, 2),
(33, 2.3, 2014, 3, 3),
(34, 2.1, 2014, 4, 1),
(35, 2.2, 2014, 4, 2),
(36, 2.3, 2014, 4, 3),
(37, 2.1, 2015, 1, 1),
(38, 2.2, 2015, 1, 2),
(39, 2.3, 2015, 1, 3),
(40, 2.1, 2015, 2, 1),
(41, 2.2, 2015, 2, 2),
(42, 2.3, 2015, 2, 3),
(43, 2.1, 2015, 3, 1),
(44, 2.2, 2015, 3, 2),
(45, 2.3, 2015, 3, 3),
(46, 2.1, 2015, 4, 1),
(47, 2.2, 2015, 4, 2),
(48, 2.3, 2015, 4, 3);

-- -----------------------------------------------------
-- Table "traktor"."global_prices"
-- -----------------------------------------------------
INSERT INTO "traktor"."global_prices" VALUES
(1, 2.1, 2.0, 1),
(2, 3.1, 2.9, 2),
(3, 2.4, 2.8, 3),
(4, 2.9, 2.1, 4);
