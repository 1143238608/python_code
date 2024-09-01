from PyQt5Window import Ui_Form

from PyQt5.QtCore import *
from PyQt5.QtWidgets import QMainWindow, QApplication, QListWidget, QListWidgetItem
from PyQt5.Qt import QTableWidgetItem
import sys
from PyQt5.QtGui import QIcon
from PyQt5 import QtGui


class MainWindow(QMainWindow):
    def __init__(self):
        super(MainWindow, self).__init__()
        self.ui = Ui_Form()
        self.ui.setupUi(self)
        self.setWindowIcon(QIcon("雪花.svg"))
        self.setWindowTitle("PyQt5 ListView Example")
        # 创建数据模型
        self.model = QtGui.QStandardItemModel()
        self.ui.listView.setModel(self.model)

    def click(self):
        # items = ["Item 1", "Item 2", "Item 3", "Item 4"]
        items = ["为了在PyQt5中向QListView控件添加数据，需要使用QStandardItemModel或其他合适的模型来管理数据。以下是如何在你的代码中设置并向QListView控件添加信息的详细步骤。"]
        for item in items:
            self.add_item_to_listview(item)

    def add_item_to_listview(self, item_text):
        # 创建QStandardItem并将其添加到模型
        item = QtGui.QStandardItem(item_text)
        self.model.appendRow(item)


if __name__ == '__main__':
    app = QApplication(sys.argv)
    win = MainWindow()
    win.show()
    sys.exit(app.exec_())
