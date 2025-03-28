import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"
import { Word } from "../../types.ts";
import WordInfo from "../../components/WordInfo.tsx";

type Data = {
    word: Word;
  };
  
  export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
      const word = ctx.params.word;
      try {
        const response = await Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = response.data;
        if (data?.title === "No Definitions Found") {
            return ctx.render({word: {
                word: "notfound",
                meanings: []
            }})
        }
        return ctx.render({word: data[0]})

      } catch (_e) {
        return ctx.renderNotFound();
      }
    },
  };

  const Page = (props: PageProps<Data>) => {
    if (props.data.word.word === "notfound") {
        return (
            <div>Word not found in dictionary!</div>
        )
    } else {
        return (
            <WordInfo word={props.data.word} />
        )
    }
  }
  
  export default Page;
  