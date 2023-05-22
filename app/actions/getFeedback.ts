import prisma from "@/app/libs/prismadb";

export interface IFeedbackParams {
    userId?: string;
    startDate?: string;
    endDate?: string;
    comment?: string;
}

export default async function getFeedback(
    params: IFeedbackParams
) {
    try {
        const {
            userId,
            startDate,
            endDate,
            comment,
        } = params;

        let query: any = {};

        if (userId) {
            query.userId = userId;
        }

        if (comment) {
            query.comment = comment;
        }

        if (startDate && endDate) {
            query.NOT = {
                reservations: {
                    some: {
                        OR: [
                            {
                                endDate: { gte: startDate },
                                startDate: { lte: startDate }
                            },
                            {
                                startDate: { lte: endDate },
                                endDate: { gte: endDate }
                            }
                        ]
                    }
                }
            }
        }

        const comments = await prisma.comment.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            }
        });

        const safecomments = comments.map((comment: { createdAt: { toISOString: () => any; }; }) => ({
            ...comment,
            createdAt: comment.createdAt.toISOString(),
        }));

        return safecomments;
    } catch (error: any) {
        throw new Error(error);
    }
}
