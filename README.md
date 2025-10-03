# Instrumentation Workshop - Kubernetes Deployment

This repository contains Kubernetes manifests and configuration files to deploy the instrumentation workshop application on AWS EKS.

## Overview

The application is a microservices-based system with:
- **Frontend**: React SPA served by SPAServer
- **Backend Services**: OrderService, InventoryService, CouponService, FulfilmentService
- **Infrastructure**: Kafka, Zookeeper, MySQL

## Files

### Kubernetes Manifests
- `namespace.yaml` - Kubernetes namespace definition
- `services.yaml` - Service definitions for all components
- `deployments.yaml` - Deployment manifests with environment variables
- `infrastructure.yaml` - StatefulSets for Kafka, Zookeeper, MySQL
- `configmap-secrets.yaml` - Configuration and secrets management

### Application Configuration
- `orderService-application.properties` - Updated Spring Boot configuration with environment variables
- `fulfilmentService-application.properties` - Updated Spring Boot configuration with environment variables
- `constants.js` - Updated React frontend configuration for environment-based URLs

### Documentation
- `dockerfiles.md` - Docker build templates for all services
- `deployment-instructions.md` - Complete AWS EKS deployment guide

## Key Changes for Cloud Deployment

1. **Environment Variables**: Replaced hardcoded localhost URLs with configurable environment variables
2. **Service Discovery**: Added Kubernetes services for inter-service communication
3. **External Access**: LoadBalancer service for frontend access
4. **Persistent Storage**: StatefulSets with persistent volumes for data services

## Deployment

See `deployment-instructions.md` for complete deployment steps to AWS EKS.

## Original Application

This is a cloud-ready version of the original instrumentation workshop application, modified for Kubernetes deployment while preserving all business logic.