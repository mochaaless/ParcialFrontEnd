// import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

// type Data = {
//   added?: boolean;
//   name?: string;
// };

// export const handler: Handlers = {
//   GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
//     const url = new URL(req.url);
//     const name = url.searchParams.get("name");
//     const phone = url.searchParams.get("phone");
//     const email = url.searchParams.get("email");
    

//     return ctx.render();
//   },
// };

// const Page = (props: PageProps<Data>) => (
//   <>
//     <AddContact />
//     {props.data?.added && <p>Contacto de {props.data.name} añadido</p>}
//   </>
// );

// export default Page;
