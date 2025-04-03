import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/f58a2521-3f7a-45b0-8e71-152e968fcf74/github/main', token: '5425425b2a7cd81a0d1a104358693d4d401974a8', queries,  });
export default client;
  