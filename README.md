# AI_Facial_Recognition

This project demonstrates a web application where users can upload an image through a React frontend. The image is sent in Base64 format to a Flask backend, where it is processed using a pre-trained AI model. The model's output is then sent back to the frontend and displayed as text.

---

## Project Overview

The application consists of three main components:
1. **Frontend (React):** Handles the user interface and sends the image to the backend.
2. **Backend (Flask):** Receives the image, processes it using the AI model, and returns the result.
3. **AI Model:** Processes the image and generates a result to be returned to the backend.

---

## Sequence of Steps

### Frontend
1. **File Upload Interface:** A user uploads an image through a file input field on the web page.
2. **Convert to Base64:** The image is converted to Base64 format for easy transmission.
3. **HTTP Request to Backend:** Upon clicking "Submit," the Base64-encoded image is sent to the backend via an HTTP POST request.
4. **Display Result:** The response from the backend is displayed as text on the web page.

---

### Backend
1. **Image Reception:** The Flask server receives the Base64-encoded image from the frontend.
2. **Decoding:** The image is decoded back to its original format for processing.
3. **AI Model Invocation:** The image is passed to the AI model for processing.
4. **Send Result Back:** The result from the AI model is sent back to the frontend as a JSON response.

---

### AI Model
1. **SVM-based Image Classification:** The AI model is based on machine learning techniques for image classification.
2. **Machine Learning Based Project:** The model incorporates various technologies such as:
   - Haar Cascade for detecting faces.
   - Wavelet Transformation for feature extraction.
   - Machine Learning algorithms including SVM, Random Forest, and Logistic Regression.
3. **Process Overview:**
   - Faces are detected using Haar Cascade.
   - The dataset is tested using SVM, Random Forest, and Logistic Regression.
   - An accuracy of 86% is achieved in classifying images into domain-specific categories.
     
     <img width="422" alt="model_params" src="https://github.com/user-attachments/assets/73aa6681-f952-4cd3-9b43-835538d426c3" />
     
   - Precision Score:
     
     <img width="300" alt="precision_score" src="https://github.com/user-attachments/assets/d60784ee-f092-4e0d-83ce-f9bd7ef7d217" />
     
   - Confusion Matrix:
     
     <img width="300" alt="confusion_matrix" src="https://github.com/user-attachments/assets/b1e39944-0e79-438d-b928-f3cbcf4743d1" />
4. **Tools & Technologies Used:** The implementation leverages `Haar cascade`, `Wavelet Transformation`, `sklearn`, and `Jupyter`.

---

## Future Work
- Improve the AI model processing.
- Enhance the frontend interface.
- Add error handling and logging mechanisms.

---
