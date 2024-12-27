-- CreateTable
CREATE TABLE `cadastro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(100) NOT NULL,
    `Cliente_email` VARCHAR(30) NOT NULL,

    INDEX `Cliente_email`(`Cliente_email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cliente` (
    `email` VARCHAR(30) NOT NULL,
    `nome` VARCHAR(30) NOT NULL,
    `idade` VARCHAR(2) NOT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cadastro` ADD CONSTRAINT `cadastro_ibfk_1` FOREIGN KEY (`Cliente_email`) REFERENCES `cliente`(`email`) ON DELETE NO ACTION ON UPDATE NO ACTION;
