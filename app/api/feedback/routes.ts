import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(
    request: Request,
) {
    const body = await request.json();
    const {
        comment,
    } = body;


    const feedback = await prisma.comment.create({
        data: {
            comment,
        }
    });

    return NextResponse.json(feedback);
}
