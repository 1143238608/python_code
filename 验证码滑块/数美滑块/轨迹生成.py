import math, random
import numpy as np


def get_track(distance):
    x = [0, 0]
    y = [0, 0, 0]
    z = [0]
    count = np.linspace(-math.pi / 2, math.pi / 2, random.randrange(20, 30))
    func = list(map(math.sin, count))
    nx = [1 + 1 for i in func]
    add = random.randrange(10, 15)
    sadd = distance + add
    x.extend(list(map(lambda x: x * (sadd / 2), nx)))
    x.extend(np.linspace(sadd, distance, 3 if add > 12 else 2))
    x = [math.floor(i) for i in x]
    for i in range(len(x) - 2):
        if y[-1] < 30:
            y.append(y[-1] + random.choice([0, 0, 1, 1, 2, 2, 1, 2, 0, 0, 3, 3]))
        else:
            y.append(y[-1] + random.choice([0, 0, -1, -1, -2, -2, -1, -2, 0, 0, -3, -3]))
        for i in range(len(x) - 1):
            z.append((z[-1] // 100 * 100) + 100 + random.choice([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2]))
        trace = list(map(list, zip(x, y, z)))
        times = trace[-1][-1] + random.randint(1, 5)
        # logger.info（f模拟的轨迹--->>>{trace}）#logger.info(f'times--->>>{times})
        return trace, times


print(get_track(383))
