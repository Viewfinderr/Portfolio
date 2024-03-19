-- CreateTable
CREATE TABLE "Categories" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "TinyTitle" VARCHAR,
    "Tiny Description" TEXT,
    "TinyImg" VARCHAR,
    "Title" VARCHAR,
    "Description" TEXT,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Img" VARCHAR DEFAULT '',
    "Title" VARCHAR NOT NULL DEFAULT '',
    "Url" VARCHAR DEFAULT '',
    "ContactDetails" VARCHAR DEFAULT '',

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Title" VARCHAR DEFAULT '',
    "Diplome" VARCHAR DEFAULT '',
    "Tasks" TEXT DEFAULT '',
    "Date" BIGINT,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Img" VARCHAR,
    "Title" VARCHAR NOT NULL DEFAULT '',
    "Description" TEXT DEFAULT '',
    "Slug" TEXT DEFAULT '',
    "GitURL" VARCHAR DEFAULT '',
    "WebURL" VARCHAR DEFAULT '',
    "Skills" VARCHAR DEFAULT '',

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Name" VARCHAR,
    "Img" VARCHAR,

    CONSTRAINT "Projects_pkey1" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Img" VARCHAR DEFAULT '',
    "Title" VARCHAR DEFAULT '',

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Social" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Name" VARCHAR NOT NULL DEFAULT '',
    "Url" VARCHAR NOT NULL DEFAULT '',
    "Img" VARCHAR DEFAULT '',

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

