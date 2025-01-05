# Microfrontend Architecture with Single-SPA

This project demonstrates a **microfrontend architecture** using the **Single-SPA framework**. It consists of multiple independently deployable React applications (App1 and App2) integrated into a root-config application. This setup enables modular development and seamless scalability for large-scale projects.

# Features
- **Modular Design**: Each app functions independently, reducing coupling.
- **React-Based Microfrontends**: App1 and App2 are React applications built using `create-react-app`.
- **Single-SPA Integration**: Combines multiple apps under a unified structure.
- **Dynamic Module Loading**: Microfrontends are dynamically loaded and mounted based on the URL path.

# Project Structure
- **Root Config**: Manages the lifecycle and routing of all microfrontends.
- **App1**: Displays a simple "Welcome" message.
- **App2**: Displays another independent feature or page.

# Setup Instructions
1. Clone the repository:  
   `git clone https://github.com/your-repo/microfrontend-example.git`
2. Install dependencies for each app (`root-config`, `app1`, `app2`):  
   `npm install`
3. Start the apps:  
   - Root Config: `npm start` (port 9000)  
   - App1: `npm start` (port 3000)  
   - App2: `npm start` (port 3001)
4. Navigate to `http://localhost:9000` to see the microfrontends in action.

## License
This project is licensed under the MIT License.
