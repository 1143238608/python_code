from PySide6 import QtWidgets

class MWindow(QtWidgets.QMainWindow):

    def __init__(self):

        super().__init__()
        self.resize(400, 200)


        # central Widget
        centralWidget = QtWidgets.QWidget(self)
        self.setCentralWidget(centralWidget)

        # central Widget 里面的 主 layout
        mainLayout = QtWidgets.QVBoxLayout(centralWidget)

        # 子 layout
        topLayout = QtWidgets.QHBoxLayout()

        label = QtWidgets.QLabel('姓名')
        nameEdit = QtWidgets.QLineEdit(self)
        # 添加内部控件
        topLayout.addWidget(label)
        topLayout.addWidget(nameEdit)


        # 主 layout 里面添加内容
        mainLayout.addLayout(topLayout)  # 添加 子 Layout
        textEdit = QtWidgets.QPlainTextEdit(self)
        mainLayout.addWidget(textEdit)   # 添加 子 Widget


app = QtWidgets.QApplication()
window = MWindow()
window.show()
app.exec()