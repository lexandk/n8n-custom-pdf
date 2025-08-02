FROM n8nio/n8n

USER root

RUN npm install -g pdf-parse

USER node
