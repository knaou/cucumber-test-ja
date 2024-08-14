FROM node:20

RUN apt-get update && \
  apt-get install -y libatk-bridge2.0-0 libxss1 libnss3  libcups2  libxkbcommon-dev \
  libxdamage-dev libgbm-dev libpango-1.0-0 libcairo2 libasound2-dev libxcomposite-dev libxrandr-dev \
  fonts-ipafont fonts-ipaexfont && \
  rm -rf /var/lib/apt/lists/*

WORKDIR /work
COPY . .
RUN npm install && npx playwright install

CMD ["npm", "run", "test"]
