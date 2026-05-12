# Step 1 : Choose a Base Image
FROM alpine

# Step 2 : Install a software
RUN apk add binutils
RUN apk update
RUN apk add mongodb=3.4.4-r0

# Step 2.5 : Configure the software
VOLUME ['/data/db']
WORKDIR /data
EXPOSE 27017

# Step 3 : Set Default commands
CMD ['mongod']