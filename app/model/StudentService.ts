import { sql } from "@vercel/postgres";

export async function getAllStudent(){
    const { rows:students } = await sql`SELECT * from student;`;
    return students
}
export async function addStudent(name:string, email:string){
    await sql`INSERT INTO student (name, email) VALUES (${name}, ${email})`;
}
export async function deleteStudent(id: string){
    await sql`DELETE FROM student WHERE id=${id}`;
}


