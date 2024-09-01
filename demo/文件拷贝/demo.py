import os
import shutil
from pathlib import Path

# 定义需要遍历的文件夹路径
base_folder = Path(r'F:\看雪[2024]《安卓高级研修班(网课)》月薪三万计划\第14章 IOS设备指纹开发与逆向')
# 遍历文件夹下的文件夹
for folder in base_folder.iterdir():
    if folder.is_dir():
        # 遍历源文件夹中的所有文件
        for filename in os.listdir(folder):
            # 检查文件是否以.sz结尾
            if filename.endswith('.sz'):
                print(filename)
                # 构建源文件的完整路径
                source_file = os.path.join(folder, filename)
                # 构建目标文件的完整路径
                target_file = os.path.join(base_folder, filename)
                # 移动文件
                shutil.move(source_file, target_file)
                print(f'Moved: {source_file} to {target_file}')

print('所有文件移动完成!!')
