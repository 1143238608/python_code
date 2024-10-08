import random


class Track:
    def __ease_out_expo(self, sep):
        """
        缓动函数 easeOutExpo
        参考：https://easings.net/zh-cn#easeOutExpo
        """
        if sep == 1:
            return 1
        else:
            return 1 - pow(2, -10 * sep)

    def get_slide_track(self, distance):
        """
        根据滑动距离生成滑动轨迹
        :param distance: 需要滑动的距离
        :return: 滑动轨迹<type 'list'>: [[x,y,t], ...]
            x: 已滑动的横向距离
            y: 已滑动的纵向距离, 除起点外, 均为0
            t: 滑动过程消耗的时间, 单位: 毫秒
        """

        if not isinstance(distance, int) or distance < 0:
            raise ValueError(f"distance类型必须是大于等于0的整数: distance: {distance}, type: {type(distance)}")
        # 初始化轨迹列表
        slide_track = [
            # [random.randint(-50, -10), random.randint(-50, -10), 0],
            [0, 0, 0],
        ]
        # 共记录count次滑块位置信息
        count = int(distance / 2)
        # 初始化滑动时间
        t = random.randint(50, 100)
        # 记录上一次滑动的距离
        _x = 0
        _y = 0
        for i in range(3):
            # 已滑动的横向距离
            x = round(self.__ease_out_expo(i / 3) * distance)
            # 滑动过程消耗的时间
            # t += random.randint(10, 20)
            t += 100
            slide_track.append([x, _y, t])
            _x = x
        # slide_track.append(slide_track[-1])
        return slide_track,t+random.randint(1, 5)


track = Track()
slide_track = track.get_slide_track(383+random.randrange(10, 15))
print(slide_track)
