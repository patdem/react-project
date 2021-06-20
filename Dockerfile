FROM node:lts-buster-slim

RUN useradd -ms /bin/bash -G sudo patdem \
   && passwd -d patdem

WORKDIR /home/patdem/app

COPY . .

RUN npm install

USER patdem

CMD ["/bin/bash", "-c", "npm start"]