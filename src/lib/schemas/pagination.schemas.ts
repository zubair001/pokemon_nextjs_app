import { z } from "zod";

export const paginationQuerySchema = z.object({
  limit: z.number().nullish(),
  offset: z.number().nullish(),
});
export type PagintationQuery = z.infer<typeof paginationQuerySchema>
