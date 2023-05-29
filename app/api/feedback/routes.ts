import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function POST(
    request: Request,
) {
    const body = await request.json();
    const {
        comment,
    } = body;

    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    });


    const feedback = await prisma.comment.create({
        data: {
            comment,
            userId: currentUser.id,
        },
    });

    return NextResponse.json(feedback);
}
