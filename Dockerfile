FROM node:16 


#create app directory
WORKDIR /usr/project/

#copy package.json and package-lock.json
COPY ./package.json /usr/project/
#install package deps
RUN npm install 


# If you are building your code for production
# RUN npm ci --only=production

# COPY ./node_modules/ ./
COPY ./src/ /usr/project/src/
EXPOSE 8080

# ENTRYPOINT ["pwd"]
# ENTRYPOINT ["ls"]
CMD ["node", "src/index.js"]
# CMD ["pwd", "&&", "node", "src/index.js"]
