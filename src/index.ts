import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { bookRoutes } from './web-api/routes/bookRoutes';
import { errorHandler } from './web-api/middleware/errorHandler';
import { logger } from './infrastructure/logger';
import { setupSwagger } from './web-api/swagger';

const app = express();

app.use(errorHandler);
app.use(express.json());
app.use('/api', bookRoutes);
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
