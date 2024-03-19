import getSkills from "@/api/getSkills";
import Image from "next/image";

export default async function Skills() {
    const skills = await getSkills();
    return (
        <div>
            <p className='mb-[70px]'>Skills</p>
            <ul className='grid lg:grid-cols-4 grid-rows-4 gap-6 text-center items-center justify-center grid-cols-2'>
                {skills.map((skill: any) => (
                    <div key={skill.id} className='flex flex-col items-center'> {/* Déplacez la clé vers l'élément parent */}
                        <Image src={skill.Img} alt={skill.Title} width={80} height={80} /> {/* Réduisez la taille de l'image */}
                        <div>
                            <p>{skill.Title}</p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}
