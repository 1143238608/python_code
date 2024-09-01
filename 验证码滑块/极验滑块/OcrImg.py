import ddddocr
import cv2


class Ocr:
    def get_x(self):
        slide = ddddocr.DdddOcr(det=False, ocr=False)

        with open('pic/right_fullbg.jpg', 'rb') as f:
            target_bytes = f.read()

        with open('pic/right_bg.jpg', 'rb') as f:
            background_bytes = f.read()

        # img = cv2.imread("pic/bg.jpg")

        res = slide.slide_comparison(target_bytes, background_bytes)
        return res
cor = Ocr()
print(cor.get_x())