# 🍽️ WishDish API

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)  
Frontend: [WishDish iOS App](https://github.com/Roshankumar350/WishDish)

Modular, scalable Node.js + Express backend powering the WishDish restaurant app — designed for emotionally resonant dining experiences.

---

## 🚀 Features

- ✅ Modular route architecture (`/menu`, `/wishlist`, `/orders`)
- ✅ Dynamic filtering by category, popularity, and dietary preferences
- ✅ Pagination support for scalable frontend integration
- ✅ Clean repo hygiene with `.gitignore` and structured folders
- ✅ Ready for OpenAPI spec and SwiftUI integration

---

## 📦 Tech Stack

- **Node.js** + **Express**
- JSON-based mock data (`menu.json`)
- RESTful endpoints
- GitHub + SSH integration

---

## 📂 Folder Structure

```
wishdish-api/ 
├── routes/
│ └── menu.js
├── data/
│ └── menu.json 
├── app.js 
├── .gitignore 
└── README.md
```

---

## 🔌 API Endpoints

### `GET /api/menu`

Query parameters:
- `category`: filter by category (e.g. `Spicy Adventure`)
- `isVegetarian`: `true` or `false`
- `isPopular`: `true` or `false`
- `page`: pagination (default: `1`)
- `limit`: items per page (default: `50`)

Example:
GET /api/menu?category=Spicy Adventure&isVegetarian=true&page=1


---

## 🧠 Future Enhancements & Learning

This project is a living showcase of modular backend architecture and continuous learning. Upcoming enhancements and areas of exploration include:

### 🔧 Technical Roadmap
- 🔐 JWT-based authentication and user session management
- 🧾 Invoice and order tracking endpoints
- 📜 Swagger/OpenAPI documentation for frontend and third-party integration
- ☁️ Serverless deployment using AWS Lambda + API Gateway
- 🗃️ DynamoDB integration for scalable, cloud-native data storage
- 🧪 Unit and integration testing with Jest or Supertest
- 🚦 Rate limiting and error handling middleware

### 📚 Learning Milestones
- Deepening AWS expertise via [LinkedIn Learning: AWS API Gateway with HTTP, Lambda, DynamoDB, and iOS](https://www.linkedin.com/learning/aws-api-gateway-with-http-lambda-dynamodb-and-ios-24306413)
- Mapping SwiftUI mental models to backend architecture
- Exploring CI/CD pipelines with GitHub Actions and AWS CodePipeline
- Studying OpenAPI spec design and documentation best practices
- Engaging with open-source contributors for architectural feedback and mentorship

This repo is not just a backend — it’s a reflection of my journey toward full-stack mastery and emotionally resonant product design.


---

## 👨‍💻 Author

**Roshan Kumar**  
Senior iOS Developer  
Architecting modular, emotionally resonant mobile and backend experiences  
GitHub: [Roshankumar350](https://github.com/Roshankumar350)

---

## 📸 Demo

Coming soon: SwiftUI frontend + demo video walkthrough

---

## 🫱 Contributing & Feedback

WishDish API is a learning-driven, emotionally resonant backend project — and I welcome contributions from fellow developers and open-source enthusiasts.

If you spot areas for improvement, architectural suggestions, or best practices I can adopt, please feel free to:

- Open an issue with your insights or recommendations
- Submit a pull request with clean, modular enhancements
- Share feedback on API design, scalability, or cloud deployment strategies

I'm especially eager to learn from experienced Node.js and AWS developers — your guidance helps me grow as a full-stack architect.

Let’s build something delightful together.

---

## 📄 License

[MIT](LICENSE)

