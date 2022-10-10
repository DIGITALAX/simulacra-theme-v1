import nextConnect from "next-connect";
import previewTokens from "../../graphql/queries/previewTokens";
const bodyParser = require("body-parser");

const handler = nextConnect();

handler.use((req: any, res: any, next) => {
  bodyParser();
  next();
});

handler.post(async (req: any, res: any) => {
  try {
    const response: any = await previewTokens(JSON.parse(req.body));
    const tokens: any = response.data.tokens.nodes;
    return res.json(tokens);
  } catch (err: any) {
    return res.status(500).json({ error: "Error", success: false });
  }
});

export default handler;
