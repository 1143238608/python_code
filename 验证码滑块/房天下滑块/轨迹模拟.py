import math, random
import numpy as np

gj = [
    {
        "x": 0,
        "y": 331,
        "t": 1709354751078,
        "e": "mousedown"
    },
    {
        "x": 0,
        "y": 331,
        "t": 1709354751117,
        "e": "mousemove"
    },
    {
        "x": 1,
        "y": 331,
        "t": 1709354751125,
        "e": "mousemove"
    }
]


def get_slide_track(distance, _y):
    base_gj = [{
        "x": 0,
        "y": _y,
        "t": 1709354751078,
        "e": "mousedown"
    }]
    for i in range(1, random.randint(17, 20)):
        dic = {}
        base_gj.append(dic)
        base_gj[i]['x'] = base_gj[i - 1]['x'] + random.randint(1, 10)
        base_gj[i]['y'] = _y
        base_gj[i]['t'] = base_gj[i - 1]['t'] + random.randint(1, 10)
        base_gj[i]['e'] = 'mousemove'
    base_gj[-1]['x'] = distance
    base_gj[-1]['e'] = 'mouseup'
    print(base_gj)


get_slide_track(75, 331)
