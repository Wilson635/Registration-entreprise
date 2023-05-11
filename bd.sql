DROP DATABASE IF EXISTS MLR1;

CREATE DATABASE IF NOT EXISTS MLR1;
USE MLR1;
# -----------------------------------------------------------------------------
#       TABLE : INSCRIPTION
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS INSCRIPTION
 (
   NUMERO CHAR(32) NOT NULL  ,
   CODEEMP CHAR(32) NOT NULL  ,
   IDCLASS CHAR(32) NOT NULL  ,
   MATRICULE CHAR(32) NOT NULL  ,
   DATEINS CHAR(32) NULL  
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
   MATRICULE CHAR(32) NOT NULL  ,
   NOM CHAR(32) NULL  ,
   PRENOM CHAR(32) NULL  ,
   SEXE CHAR(32) NULL  ,
   DATENAIS CHAR(32) NULL  ,
   CONTACTTUTEUR CHAR(32) NULL  ,
   NOMTUTEUR CHAR(32) NULL  
   , PRIMARY KEY (MATRICULE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : CLASSE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CLASSE
 (
   IDCLASS CHAR(32) NOT NULL  ,
   NOMCLASS CHAR(32) NULL  ,
   FRAIS CHAR(32) NULL  
   , PRIMARY KEY (IDCLASS) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : EMPLOYE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS EMPLOYE
 (
   CODEEMP CHAR(32) NOT NULL  ,
   NOMEMP CHAR(32) NULL  ,
   PRENOMEMP CHAR(32) NULL  ,
   TELEMP CHAR(32) NULL  
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

