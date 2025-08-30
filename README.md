Carbon Footprint Estimator

A simple backend API that estimates the carbon footprint of dishes based on their ingredients.


Features
 - POST /estimate` → Estimate from dish name (mock LLM)
 - POST /estimate/image` → Estimate from uploaded image (mock Vision)
 - Static carbon dataset (`carbonValues.json`)
 - Dockerized for easy run

Setup

--bash
git clone <your-repo>
cd carbon-estimator
npm install
npm run dev
