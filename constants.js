export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

export const APPS=[
    {name: "OrderService", link: process.env.REACT_APP_ORDER_SERVICE_URL || "http://localhost:8080"},
    {name: "InventoryService", link: process.env.REACT_APP_INVENTORY_SERVICE_URL || "http://localhost:9082"},
    {name: "CouponService", link: process.env.REACT_APP_COUPON_SERVICE_URL || "http://localhost:9081"},
    {name: "VendorService", link: process.env.REACT_APP_VENDOR_SERVICE_URL || "http://localhost:9082"},
    {name: "FulfilmentService", link: process.env.REACT_APP_FULFILMENT_SERVICE_URL || "http://localhost:9083"}
]