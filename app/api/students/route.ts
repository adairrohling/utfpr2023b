import { getAllStudent, addStudent } from "@/app/model/StudentService"
import { NextResponse } from "next/server"

export async function GET(){
    const students = await getAllStudent()
    console.log("Acesssu GET...")
    return NextResponse.json(students)
}

export async function POST(request: Request){
    const student = await request.json()
    addStudent(student.name, student.email)
    return NextResponse.json({sucess:"ok"})
}