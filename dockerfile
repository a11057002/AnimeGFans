FROM nginx

WORKDIR /app

COPY ./dist ./dist/

COPY ./nginx /etc/nginx/conf.d

