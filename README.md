Final Project | CRM @[ArkX](https://www.arkx.group/)

## Introduction: What is a CRM?
[**Customer relationship management (CRM)**](https://www.salesforce.com/crm/what-is-crm/) is a technology for managing all your company’s relationships and interactions with customers and potential customers. The goal is simple: Improve business relationships to grow your business. A CRM system helps companies stay connected to customers, streamline processes, and improve profitability.

a **CRM system**, on the other hand is a tool that helps with contact management, sales management, agent productivity, and more. CRM tools can now be used to manage customer relationships across the entire customer lifecycle, spanning marketing, sales, digital commerce, and customer service interactions.

## Description
Given the critical importance of such tool in modern business operations, this project builds a Customer Relationship Management (CRM) system using the MERN stack (MongoDB, Express, React, Node.js). The CRM aims to improve customer interaction management and sales efficiency for businesses, particularly focusing on **general business needs**. However, the core functionalities can be easily adapted to various industries.

## Key Functionalities
- **Contact Management**: Create, store, and manage detailed contact information for leads, customers, and other business associates.
- **Sales Pipeline Management**: Track deals through various stages of the sales pipeline.
- **Task Management**: Assign and track tasks related to sales, customer interactions, and other business activities, improving team collaboration and organization.
- **Reporting**: Generate reports to gain insights into sales performance, customer trends, and identify areas for improvement.

Please check out [ROADMAP.md](ROADMAP.md) for a full breakdown of the functionalities we aim to implement.

## Evaluation Criteria
- Functionality: Completeness and effectiveness of the implemented features.
- User Interface (UI) and User Experience (UX): Design, ease of use, and overall user experience.
- Code Quality: Code structure, readability, maintainability, and adherence to best practices.
- Documentation: Clarity and comprehensiveness of the project's documentation
- Team Organization and Collaboration: effective communication and demonstrated collaboration through a presentation.

## Installation
**Prerequisites:** Node.js and npm (or yarn) installed on your system. You can download them from the official Node.js website: [https://nodejs.org/en](https://nodejs.org/en)


1. Clone the repository:

   ```bash
   git clone https://github.com/spytech-arkx/mern-crm
   ```

2. Navigate to the project directory:

   ```bash
   cd mern-crm
   ```

3. Install server and client dependencies :

   ```bash
   cd client
   npm install 
   ```

    ```bash
   cd server
   npm install 
   ```

4. Create a local `.env` based of the `.env.example` or use the normalized version found @Discord.

5. run both servers: 
   ```bash
   # mern-crm/server
   nodemon
   ```

    ```bash
   # mern-crm/client
   node --run dev # (Node v22.0.0)
   npm run dev # if not
   ```

## Contributing
Please check out the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines about how to contribute to the CRM project's codebase.
