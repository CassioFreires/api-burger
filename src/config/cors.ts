import cors from 'cors';

const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5173',
  // Adicione outros domínios aqui, se necessário
];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true); // Permite requisições sem origem, como quando o front-end está no mesmo domínio
    } else {
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log(`Origin not allowed: ${origin}`);
        callback(new Error('⛔ Not allowed by CORS'));
      }
    }
  },
  credentials: true, // Habilite se estiver usando cookies ou autenticação com sessão
};

export default cors(corsOptions);