# Stage 1: Build the Angular app
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Build the Angular app in production mode
RUN ng build --configuration production

# Stage 2: Serve the Angular app using nginx
FROM nginx:latest

# Copy custom Nginx configuration (replace default nginx.conf with custom one)
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy the built Angular app from the build stage to Nginx's html directory
COPY --from=build /app/dist/angular-frontend/browser /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
