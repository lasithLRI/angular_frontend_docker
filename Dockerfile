
FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration production

FROM nginx:latest

COPY --from=build /app/dist/angular-frontend/browser /usr/share/nginx/html


EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
