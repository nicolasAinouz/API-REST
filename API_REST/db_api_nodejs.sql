-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 29 avr. 2022 à 11:38
-- Version du serveur :  5.7.31
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db_api_nodejs`
--

-- --------------------------------------------------------

--
-- Structure de la table `marque_de_voiture`
--

DROP TABLE IF EXISTS `marque_de_voiture`;
CREATE TABLE IF NOT EXISTS `marque_de_voiture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `fondateur` varchar(255) NOT NULL,
  `creation` int(11) NOT NULL,
  `origine` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `marque_de_voiture`
--

INSERT INTO `marque_de_voiture` (`id`, `nom`, `fondateur`, `creation`, `origine`) VALUES
(1, 'BMW', 'Otto', 1916, 'Allemagne'),
(2, 'Mercedes', 'Daimler', 1926, 'Allemagne'),
(3, 'Audi', 'Horch', 1909, 'Allemagne'),
(4, 'Seat', 'Griffihts', 1950, 'Italie');

-- --------------------------------------------------------

--
-- Structure de la table `modele_voiture`
--

DROP TABLE IF EXISTS `modele_voiture`;
CREATE TABLE IF NOT EXISTS `modele_voiture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serie` varchar(255) NOT NULL,
  `motorisation` varchar(255) NOT NULL,
  `puissance` int(11) NOT NULL,
  `annee` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `modele_voiture`
--

INSERT INTO `modele_voiture` (`id`, `serie`, `motorisation`, `puissance`, `annee`) VALUES
(1, 'e87', '118d', 143, 2007);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
