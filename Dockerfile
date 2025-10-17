# Multi-stage build for React application
# Stage 1: Build the application
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install all deps (Vite is in devDependencies)
RUN npm ci

# Copy source code
COPY . .

# Build the application
ENV NODE_ENV=production
RUN npm run build

# Stage 2: Serve the application with nginx
FROM nginx:1.25-alpine

# Copy built application from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Install curl for healthcheck
RUN apk add --no-cache curl

# Expose port 80
EXPOSE 80

# Simple healthcheck
HEALTHCHECK --interval=30s --timeout=3s CMD curl -fsS http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
