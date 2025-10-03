# Dockerfiles for Each Service

You'll need to create Dockerfiles for each service. Here are the templates:

## orderService/Dockerfile
```dockerfile
FROM openjdk:17-jre-slim
WORKDIR /app
COPY build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## inventoryService/Dockerfile
```dockerfile
FROM openjdk:17-jre-slim
WORKDIR /app
COPY build/libs/*.jar app.jar
EXPOSE 9082
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## couponService/Dockerfile
```dockerfile
FROM openjdk:17-jre-slim
WORKDIR /app
COPY build/libs/*.jar app.jar
EXPOSE 9081
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## fulfilmentService/Dockerfile
```dockerfile
FROM openjdk:17-jre-slim
WORKDIR /app
COPY build/libs/*.jar app.jar
EXPOSE 9083
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## SPAServer/Dockerfile
```dockerfile
FROM openjdk:17-jre-slim
WORKDIR /app
COPY build/libs/*.jar app.jar
COPY ../just-order-app/build/ /app/just-order-app/build/
EXPOSE 9090
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## Build script for all services
```bash
#!/bin/bash
# Build all JAR files
./gradlew build

# Build and push Docker images
docker build -t your-registry/order-service:latest ./orderService
docker build -t your-registry/inventory-service:latest ./inventoryService
docker build -t your-registry/coupon-service:latest ./couponService
docker build -t your-registry/fulfilment-service:latest ./fulfilmentService
docker build -t your-registry/spa-server:latest ./SPAServer

# Push to registry
docker push your-registry/order-service:latest
docker push your-registry/inventory-service:latest
docker push your-registry/coupon-service:latest
docker push your-registry/fulfilment-service:latest
docker push your-registry/spa-server:latest
```