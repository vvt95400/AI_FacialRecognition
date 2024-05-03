import numpy as np
import cv2
import matplotlib
from matplotlib import pyplot as plt
import cv2

img = cv2.imread(r"C:\Users\hp\Downloads\messi3.jpg")
face_cascade = cv2.CascadeClassifier(r'C:\New folder\AI_FacialRecognition\backend\opencv\haarcascades\haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier(r'C:\New folder\AI_FacialRecognition\backend\opencv\haarcascades\haarcascade_eye.xml')
gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

faces = face_cascade.detectMultiScale(gray, 1.3, 5)
(x,y,w,h) = faces[0]
# face_img = cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),4)

for (x,y,w,h) in faces:
    face_img = cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)
    roi_gray = gray[y:y+h, x:x+w]
    roi_color = face_img[y:y+h, x:x+w]
    eyes = eye_cascade.detectMultiScale(roi_gray)
    for (ex,ey,ew,eh) in eyes:
        cv2.rectangle(roi_color,(ex,ey),(ex+ew,ey+eh),(0,255,0),2)
cv2.imshow("hi",img)
while True:
    if cv2.waitKey(1) == -1:
        continue
    else:
        break

# Close all windows
cv2.destroyAllWindows()