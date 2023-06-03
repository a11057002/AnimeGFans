FROM nginx

WORKDIR /app

COPY ./dist ./dist/

RUN ["chmod","755","-R","/app/dist"]

COPY ./nginx /etc/nginx/conf.d

