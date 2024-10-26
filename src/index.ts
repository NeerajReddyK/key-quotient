import axios from "axios";
import express, {Request, Response} from "express";
const app = express();

app.get('/', async (req:Request, res:Response) => {
  let words: string[] = ["Neeraj", "Reddy", "Hyderabad"];
  
  const ipsumGenerator = async (): Promise<string | undefined> => {
    try {
      const loremUrl =  'https://loripsum.net/api/2/short/plaintext'
      const ipsum = await axios.get(loremUrl);
      const result = ipsum.data;
      return result;
    }
    catch(error) {
      console.error("Error: ", error);
    }
  }
  const ipsum = await ipsumGenerator();
  if(ipsum) {
    words.push(ipsum);
  }
  res.send(words.join(" "));
})

app.listen(3000, () => {
  console.log("Running on port 3000");
})