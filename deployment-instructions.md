# AWS EKS Deployment Instructions

## Prerequisites
1. AWS CLI configured
2. kubectl installed
3. eksctl installed
4. Docker registry (ECR recommended)

## Steps to Deploy

### 1. Create EKS Cluster
```bash
eksctl create cluster --name instrumentation-workshop --region us-west-2 --nodegroup-name worker-nodes --node-type t3.medium --nodes 3
```

### 2. Update kubeconfig
```bash
aws eks update-kubeconfig --region us-west-2 --name instrumentation-workshop
```

### 3. Create ECR Repositories
```bash
aws ecr create-repository --repository-name order-service
aws ecr create-repository --repository-name inventory-service
aws ecr create-repository --repository-name coupon-service
aws ecr create-repository --repository-name fulfilment-service
aws ecr create-repository --repository-name spa-server
```

### 4. Build and Push Images
Replace `your-registry` in the deployments.yaml with your ECR registry URL:
```
123456789012.dkr.ecr.us-west-2.amazonaws.com
```

### 5. Deploy to Kubernetes
```bash
# Apply manifests in order
kubectl apply -f namespace.yaml
kubectl apply -f configmap-secrets.yaml
kubectl apply -f infrastructure.yaml
kubectl apply -f services.yaml
kubectl apply -f deployments.yaml
```

### 6. Check Deployment Status
```bash
kubectl get pods -n instrumentation-workshop
kubectl get services -n instrumentation-workshop
```

### 7. Get LoadBalancer URL
```bash
kubectl get service spa-server -n instrumentation-workshop
```

## File Changes Required

### 1. Replace application.properties files:
- Copy `orderService-application.properties` to `orderService/src/main/resources/application.properties`
- Copy `fulfilmentService-application.properties` to `fulfilmentService/src/main/resources/application.properties`

### 2. Replace React constants:
- Copy `constants.js` to `just-order-app/src/components/todo/constants.js`

### 3. Create Dockerfiles:
- Create Dockerfile in each service directory as shown in dockerfiles.md

## Alternative: Use AWS RDS for MySQL
For production, consider using AWS RDS MySQL instead of containerized MySQL:

1. Create RDS MySQL instance
2. Update configmap DB_URL to point to RDS endpoint
3. Remove MySQL StatefulSet from infrastructure.yaml

## Alternative: Use AWS MSK for Kafka
For production, consider using AWS MSK (Managed Streaming for Kafka):

1. Create MSK cluster
2. Update configmap KAFKA_BOOTSTRAP_SERVERS to MSK endpoints
3. Remove Kafka/Zookeeper StatefulSets from infrastructure.yaml