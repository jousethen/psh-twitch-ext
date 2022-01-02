-- CreateTable
CREATE TABLE "Match" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "displayScore" TEXT NOT NULL,
    "player1Name" TEXT NOT NULL,
    "player1Prefix" TEXT NOT NULL,
    "player1Twitter" TEXT NOT NULL,
    "player2Name" TEXT NOT NULL,
    "player2Prefix" TEXT NOT NULL,
    "player2Twitter" TEXT NOT NULL
);
