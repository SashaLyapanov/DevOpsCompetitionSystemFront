FROM node:23-alpine3.20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
RUN ls -la /app

FROM nginx:alpine
COPY --from=build /app/build/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]