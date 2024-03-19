import prisma from "@/libs/prismadb";
export default async function getCategories() {
    try {
        const categories = await prisma.categories.findMany({

        });
        return categories;
    } catch (err) {
        console.error("Erreur lors de la récupération des compétences :", err);
        return [];
    }
}

getCategories()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
