-- MySQL Script generated by MySQL Workbench
-- Tue Apr 28 21:40:19 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gorila_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gorila_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gorila_db` DEFAULT CHARACTER SET utf8 ;
USE `gorila_db` ;

-- -----------------------------------------------------
-- Table `gorila_db`.`tb_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gorila_db`.`tb_usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gorila_db`.`tb_grupos_invest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gorila_db`.`tb_grupos_invest` (
  `id_grupo` INT NOT NULL AUTO_INCREMENT,
  `nome_grupo` VARCHAR(45) NULL,
  `prazo` INT NULL,
  `objetivo` VARCHAR(45) NULL,
  `valor_aporte_mes` DECIMAL(9,4) NULL,
  `dia_vencimento` INT NULL,
  PRIMARY KEY (`id_grupo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gorila_db`.`tb_grupos_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gorila_db`.`tb_grupos_usuarios` (
  `id_grupos_usuarios` INT NOT NULL AUTO_INCREMENT,
  `id_grupo` INT NULL,
  `id_usuario` INT NULL,
  PRIMARY KEY (`id_grupos_usuarios`),
  INDEX `fk_tb_grupos_usuarios_tb_grupos_invest_idx` (`id_grupo` ASC) VISIBLE,
  INDEX `fk_tb_grupos_usuarios_tb_usuarios1_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_tb_grupos_usuarios_tb_grupos_invest`
    FOREIGN KEY (`id_grupo`)
    REFERENCES `gorila_db`.`tb_grupos_invest` (`id_grupo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_grupos_usuarios_tb_usuarios1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `gorila_db`.`tb_usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gorila_db`.`tb_pagamentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gorila_db`.`tb_pagamentos` (
  `id_pagamento` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NULL,
  `id_grupo` INT NULL,
  `data_pagamento` DATETIME NULL,
  `comprovante_verif` TINYINT NULL,
  PRIMARY KEY (`id_pagamento`),
  INDEX `fk_tb_pagamentos_tb_usuarios1_idx` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_tb_pagamentos_tb_grupos_invest1_idx` (`id_grupo` ASC) VISIBLE,
  CONSTRAINT `fk_tb_pagamentos_tb_usuarios1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `gorila_db`.`tb_usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_pagamentos_tb_grupos_invest1`
    FOREIGN KEY (`id_grupo`)
    REFERENCES `gorila_db`.`tb_grupos_invest` (`id_grupo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gorila_db`.`tb_rentabilidades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gorila_db`.`tb_rentabilidades` (
  `id_rentabilidade` INT NOT NULL AUTO_INCREMENT,
  `id_pagamento` INT NULL,
  `valor_rentabilidade` DECIMAL(9,4) NULL,
  `data_rentabilidade` DATETIME NULL,
  PRIMARY KEY (`id_rentabilidade`),
  INDEX `fk_tb_rentabilidades_tb_pagamentos1_idx` (`id_pagamento` ASC) VISIBLE,
  CONSTRAINT `fk_tb_rentabilidades_tb_pagamentos1`
    FOREIGN KEY (`id_pagamento`)
    REFERENCES `gorila_db`.`tb_pagamentos` (`id_pagamento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gorila_db`.`tb_rentabilidade_fundos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gorila_db`.`tb_rentabilidade_fundos` (
  `id_rentabilidade_fundos` INT NOT NULL AUTO_INCREMENT,
  `rentabildiade_mes` DECIMAL(9,4) NULL,
  `data` DATETIME NULL,
  PRIMARY KEY (`id_rentabilidade_fundos`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
