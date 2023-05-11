DROP DATABASE IF EXISTS Projet_JAVA;

CREATE DATABASE IF NOT EXISTS Projet_JAVA;
USE Projet_JAVA;
# -----------------------------------------------------------------------------
#       TABLE : INSCRIPTION
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS INSCRIPTION
 (
   NUMERO INT(11) NOT NULL AUTO_INCREMENT ,
   CODEEMP VARCHAR(255) NOT NULL  ,
   IDCLASS INT(11) NOT NULL  ,
   MATRICULE VARCHAR(255) NOT NULL  ,
   DATEINS DATETIME  
   , PRIMARY KEY (NUMERO) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE INSCRIPTION
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_INSCRIPTION_EMPLOYE
     ON INSCRIPTION (CODEEMP ASC);

CREATE  INDEX I_FK_INSCRIPTION_CLASSE
     ON INSCRIPTION (IDCLASS ASC);

CREATE  INDEX I_FK_INSCRIPTION_ELEVE
     ON INSCRIPTION (MATRICULE ASC);

# -----------------------------------------------------------------------------
#       TABLE : ELEVE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS ELEVE
 (
   MATRICULE VARCHAR(255) NOT NULL ,
   NOM VARCHAR(32) NULL  ,
   PRENOM VARCHAR(32) NULL  ,
   SEXE VARCHAR(32) NULL  ,
   DATENAIS DATETIME  ,
   CONTACTTUTEUR INT(32) NULL  ,
   NOMTUTEUR VARCHAR(32) NULL  
   , PRIMARY KEY (MATRICULE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : CLASSE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CLASSE
 (
   IDCLASS INT(11) NOT NULL AUTO_INCREMENT  ,
   NOMCLASS VARCHAR(255) NULL  ,
   FRAIS VARCHAR(32) NULL  
   , PRIMARY KEY (IDCLASS) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : EMPLOYE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS EMPLOYE
 (
   CODEEMP VARCHAR(50) NOT NULL ,
   NOMEMP VARCHAR(255) NULL  ,
   PRENOMEMP VARCHAR(255) NULL  ,
   TELEMP INT(32) NULL  
   , PRIMARY KEY (CODEEMP) 
 ) 
 comment = "";


# -----------------------------------------------------------------------------
#       CREATION DES REFERENCES DE TABLE
# -----------------------------------------------------------------------------


ALTER TABLE INSCRIPTION 
  ADD FOREIGN KEY FK_INSCRIPTION_EMPLOYE (CODEEMP)
      REFERENCES EMPLOYE (CODEEMP) ;


ALTER TABLE INSCRIPTION 
  ADD FOREIGN KEY FK_INSCRIPTION_CLASSE (IDCLASS)
      REFERENCES CLASSE (IDCLASS) ;


ALTER TABLE INSCRIPTION 
  ADD FOREIGN KEY FK_INSCRIPTION_ELEVE (MATRICULE)
      REFERENCES ELEVE (MATRICULE) ;

