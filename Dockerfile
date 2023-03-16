# specify the base image
FROM node:16-buster-slim

# set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the files to the working directory
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]