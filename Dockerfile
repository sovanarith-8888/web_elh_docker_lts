FROM node:lts as development
# Set the working directory
WORKDIR /app 

# Install dependencies
COPY package*.json ./ 
RUN npm install  --force

# Copy the rest of the application code
COPY . . 
RUN npm install

# Expose port 3000
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]
