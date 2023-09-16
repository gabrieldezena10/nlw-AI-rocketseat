import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { getAllPromptsRoutes } from "./routes/get-all-prompts";
import { uploadVideoRoutes } from "./routes/upload-video";
import { create } from "domain";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";

const app = fastify();

app.register(fastifyCors, {
    origin: '*',
})

app.register(getAllPromptsRoutes)
app.register(uploadVideoRoutes)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
    port: 3333,
}).then((port) => {
    console.log(`Server listening at ${port}`);
});

