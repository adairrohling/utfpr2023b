import { NextResponse } from "next/server"
import {deleteStudent} from "@/app/model/StudentService"

export async function DELETE(request:Request, {params}:any){
    deleteStudent(params.id)
    return NextResponse.json({sucess:"ok"})

}
