import { z } from "zod";
export const FontFormSchema = z.object({
	file: z.string().regex(/^.*\.(ttf|otf|woff2)$/),
});

export type FontFormSchema = z.infer<typeof FontFormSchema>;
