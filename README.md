# Radus Software Onboarding Portal 🚀

A modern onboarding portal built with React.js that streamlines the user authentication process through Google Suite integration. This portal provides seamless access to Google services with one-click automation.

## 🌟 Features

- Dynamic login/signup interface
- Google Authentication integration
- Automated Google Suite service provisioning
- Responsive home page dashboard
- Secure authentication flow
- Single Sign-On (SSO) capability

## 🛠️ Tech Stack

- React.js
- Node.js
- Google Authentication API
- HTML/CSS
- npm package manager

## ⚙️ Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm (Comes with Node.js)
- A modern web browser

## 🚀 Installation & Setup

1. Clone the repository:
```bash
git clone [repository-url]
cd radus-onboarding-portal
```

2. Install dependencies:
```bash
npm install
```

3. Configure OpenSSL (Required only on first startup):
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🔧 Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are properly installed:
```bash
npm cache clean --force
npm install
```

2. If you get OpenSSL-related errors, run:
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

3. For port conflicts, you can specify a different port:
```bash
PORT=3001 npm start
```

## 📝 Important Notes

- The `node_modules` directory is not included in the repository (as per best practices)
- Always run `npm install` after cloning
- The OpenSSL legacy provider command is only needed on startup
- Make sure your Google API credentials are properly configured

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details

## 👤 Author

**Devakh Rashie**
