# Use an official Node.js runtime as a parent image
FROM node:latest


# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app to the container
COPY . .

# Build the app for production
RUN npm run build

# Set the command to start the server
CMD [ "npm", "preview" ]
