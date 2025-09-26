# Start your image with a node base image
FROM node:24-slim

# The /app directory should act as the main application inside of the container
WORKDIR /app

# Copy the app package and package-lock.json file
COPY ./app/package*.json ./

RUN npm install


COPY ./app/ .

ENV PORT=8080

EXPOSE 8080

# Start the app using serve command
CMD [ "npm", "run", "start"]