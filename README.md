# odoo-indus-hackathon-2026
# Core Inventory Management System (IMS)

A full-stack **Inventory Management System** built during the **Odoo × Indus University Hackathon 2026** to digitize warehouse operations and enable real-time inventory tracking.

The system replaces manual inventory tracking methods such as Excel sheets and paper registers with a centralized platform that manages products, stock movements, and warehouse operations efficiently.

---

# Problem Statement

Many businesses still rely on manual processes to track inventory. This leads to several operational issues:

* Stock mismatches between physical and recorded inventory
* Lack of centralized inventory data
* Difficulty managing warehouse operations
* No real-time visibility into stock levels
* Inefficient tracking of incoming and outgoing goods

The goal of this project was to design a system that **centralizes inventory operations and ensures accurate real-time stock management.**

---

# Solution

We developed a **Core Inventory Management System** that allows businesses to manage stock movements through a digital platform.

The system records every inventory operation and automatically updates stock levels.

Key capabilities include:

* Product management with SKU tracking
* Incoming stock management
* Outgoing deliveries
* Internal warehouse transfers
* Stock adjustment handling
* Inventory dashboard and analytics
* Stock movement ledger for tracking all operations

---

# Key Features

## 1. Authentication

* User login and authentication
* Role-based access for inventory managers and warehouse staff

---

## 2. Dashboard

Provides an overview of warehouse activity and inventory metrics.

Displayed KPIs include:

* Total products
* Low stock items
* Out-of-stock items
* Pending receipts
* Pending deliveries
* Internal transfers

---

## 3. Product Management

Allows creation and management of products with key attributes such as:

* Product Name
* SKU Code
* Category
* Unit of Measure
* Current Stock Level

Example:

Product Name: Steel Rod
SKU: STL001
Category: Raw Material
Unit: KG
Stock: 100

---

## 4. Inventory Operations

### Receipts (Incoming Stock)

When goods arrive from suppliers, the system records the receipt and automatically increases stock levels.

Example:
Vendor delivers 50 units → Stock increases by 50.

---

### Deliveries (Outgoing Stock)

When goods are shipped to customers, the system deducts stock accordingly.

Example:
Customer order of 10 units → Stock decreases by 10.

---

### Internal Transfers

Allows movement of products between warehouse locations.

Example:
Main Warehouse → Rack A

The overall stock remains the same, but the location changes.

---

### Stock Adjustments

Used when there is a mismatch between recorded inventory and physical stock.

Example:
System stock: 50
Physical stock: 47

Adjustment: -3

The system updates stock and logs the change.

---

## 5. Stock Ledger

Every inventory action is recorded in a **stock movement ledger**.

This provides a complete timeline of all inventory activities including:

* Receipts
* Deliveries
* Transfers
* Adjustments

This helps maintain transparency and auditability.

---

# System Architecture

The project follows a full-stack web application architecture.

Frontend
React
Tailwind CSS

Backend
Node.js
Express.js

Database
MongoDB

---


# Installation & Setup

## 1. Clone the Repository

```
git clone https://github.com/<repository-link>.git
```

```
cd project-folder
```

---

## 2. Install Dependencies

Frontend

```
cd frontend
npm install
```

Backend

```
cd backend
npm install
```

---

## 3. Start Development Servers

Frontend

```
npm run dev
```

Backend

```
npm run start
```

---

# Hackathon Strategy

Since the project was developed during a hackathon, the focus was on building a **Minimum Viable Product (MVP)** with the most critical features.

Core features implemented:

* Product management
* Inventory receipts
* Delivery operations
* Stock updates
* Dashboard metrics

Additional features such as internal transfers and stock adjustments were designed to extend the system's capabilities.

---

# Team Collaboration

This project was developed collaboratively during the **Odoo × Indus University Hackathon 2026**.

Each team member worked on different modules including:

* Frontend dashboard
* Inventory operations
* Backend architecture
* System integration

---

# Future Improvements

Possible enhancements for the system include:

* AI-based stock demand prediction
* Smart reorder recommendations
* Multi-warehouse support
* Advanced analytics dashboard
* Barcode scanning for warehouse operations

---

# Learning Outcomes

This project helped us gain hands-on experience with:

* Building full-stack applications
* Designing scalable backend architecture
* Managing Git-based team collaboration
* Implementing real-world inventory workflows

---

# License

This project was developed as part of a hackathon prototype and is intended for educational and demonstration purposes.

