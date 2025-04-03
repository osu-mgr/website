import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '374a853cb3fa4b705f32a441f26264ff9dcc12c8', queries,  });
export default client;
  