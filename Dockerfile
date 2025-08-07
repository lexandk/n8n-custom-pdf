FROM n8nio/n8n:1.106.1

USER root
RUN npm install -g pdf-parse
USER node
