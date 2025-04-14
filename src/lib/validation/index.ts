import * as z from "zod"

export const SignupValidation = z
    .object({
        name: z.string().min(2, { message: 'Please provide a name having more than 2 characters.' }),
        username: z.string().min(2, { message: 'Please provide a username having more than 2 characters' }).max(50),
        email: z.string().email(),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, "Password must meet the criteria"),
        confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
        message: "Password must be the same as above",
        path: ["confirm"],
    });

export const SigninValidation = z
    .object({
        email: z.string().email(),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
    });