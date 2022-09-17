import { createRouter } from "./context";
import { z } from "zod";
import { getSectionBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

export const dataRouter = createRouter()
.query("section", {
  input: z
    .object({
      section: z.string(),
    }),
  async resolve({ input }) {
    const { section } = input;
    const sectionData = getSectionBySlug(section, ["id", "content"]);
    const content = await markdownToHtml(sectionData.content || "");
    return {
      ...sectionData,
      content: content,
    }
  },
});
