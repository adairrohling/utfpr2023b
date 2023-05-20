import { getAllStudent } from "@/app/model/StudentService"
import { NextResponse } from "next/server"

export async function GET(){
    const students = await getAllStudent()
    console.log("Acesssu GET...")
    return NextResponse.json(students)
}

export async function POST(){
    console.log("acessou POST")
    return NextResponse.json({sucess:"ok"})
}