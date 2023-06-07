import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function POST(
  request: Request,
) {
  const body = await request.json();
  const {
    email,
    name,
    password,
  } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    }
  });

  const exist = await prisma.user.count({ where: { email: user.email } });
  if (exist) {
    return NextResponse.json({ error: `User already exists with that email` }, { status: 400 })
  };

  return NextResponse.json(user);
}
