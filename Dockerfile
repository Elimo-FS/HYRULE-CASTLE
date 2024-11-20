FROM node:latest

WORKDIR /HyruleCastle/

# dans l'optique où quelqu'un voudrait récupérer les fichiers du jeu
COPY /hyrule/. .

RUN npm i

CMD [ "npm", "start" ]