# 🧪 Drug API - Week 6 Assignment

A simple Node.js + Express RESTful API project that allows you to interact with a list of drug data using various GET and POST endpoints.

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- Postman for testing API requests

### Installation

1. Clone this repository or copy your project folder.
2. Open a terminal and run the following:

```bash
npm init -y
npm install express
```

3. Start the server:

```bash
node index.js
```

---

## 💊 API Endpoints

### Base URL: `http://localhost:5000/`

---

### 1. `GET /antibioticsDrugs`
- **Description**: Get all drugs in the "Antibiotic" category.

---

### 2. `GET /drugsNames`
- **Description**: Get all drug names in lowercase.

---

### 3. `POST /by_category`
- **Body**:
```json
{ "category": "Analgesic" }
```
- **Description**: Get all drugs in the given category.

---

### 4. `GET /names_manufacturer`
- **Description**: Returns name and manufacturer of all drugs.

---

### 5. `GET /prescription`
- **Description**: Returns drugs that require a prescription.

---

### 6. `GET /drugs_formatted`
- **Description**: Returns each drug formatted like `"Drug: Paracetamol - 1000mg"`.

---

### 7. `GET /low_stock`
- **Description**: Returns drugs with stock less than 50.

---

### 8. `GET /non_prescription`
- **Description**: Returns drugs that do NOT require a prescription.

---

### 9. `POST /manufacturer_count`
- **Body**:
```json
{ "manufacturer": "Pfizer" }
```
- **Description**: Returns how many drugs are made by that manufacturer.

---

### 10. `GET /analgesics_drugs`
- **Description**: Returns how many drugs fall under the "Analgesic" category.

---

## 🛠 Developer Notes

- All requests using POST must include a `Content-Type: application/json` header.
- To avoid errors on empty JSON body, use proper validation in your route.

---

## 🧑‍💻 Author

Created by **Bilyaminu Ahmad** as part of Week 6 backend assignment.
