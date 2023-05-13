import { getAllStudent } from "@/app/model/StudentService"
import { NextResponse } from "next/server"


export async function GET(){
    const students = await getAllStudent()
    console.log("Acesssu GET...")
    return NextResponse.json(students)
  
}