# RESTful API — raamatukogu infosüsteem
- Arendada RESTful API kahes etapis: mock andmetega ja PostgreSQL andmebaasiga
## OSA 1: Mock Data
### 1. Tehnoloogiad
- TypeScript
- Express.js
- Zod validation
- In-memory andmehoidla
### 2. Kohustuslik funktsionaalsus
---
### 3. Mock Data
- Raamatud - 15
- Autorid	- 6
- Kirjastused	- 4
- Arvustused - 20
- Žanrid - 6
### 4. Koodistruktuur
- src/models/ - (author.model.ts, books.model.ts, genre.model.ts, publisher.model.ts, review.model.ts)
- src/data/	- (data.ts)
- src/services/	- (books.service.ts, review.service.ts)
- src/validators/	- (zod.ts)
- src/middleware/	- (errors.ts)
- src/express/routes/	- (book.routes.ts)
- prisma/	- (migration, seed.ts, schema.prisma)
### 5. Response formaadid
---

## OSA 2: PostgreSQL
### 1. Andmebaas

### 2. Prisma Schema

### 3. Funktsionaalsus

### 4. Setup
- .env.example
- Migratsioonide käsud
- Seed käsk


## Käivitamise käsud:
- npm install
- npx prisma generate
- npm install -D ts-node typescript
- npx ts-node prisma/seed.ts or npx tsx prisma/seed.ts
- npx prisma studio
- npm run dev
- npm prisma db seed
- npm prisma db push
