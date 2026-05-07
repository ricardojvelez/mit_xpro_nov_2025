# ---- Docker Image ----
# A Dockerfile is a recipe that tells Docker HOW to build an image.
# Each instruction below creates a new layer in the image.

# Base image: start from an official Node.js runtime
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first so Docker can cache this layer
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Document which port the app listens on (informational)
EXPOSE 5000

# The command that runs when a container starts
CMD ["node", "server.js"]


