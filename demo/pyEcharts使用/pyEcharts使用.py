import pyecharts
import pyecharts.charts.base as base
from pyecharts.charts import Bar
from pyecharts import options as opts

print(pyecharts.__version__)
bar = (
    Bar()
    .add_xaxis(["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"])
    .add_yaxis("商家A", [5, 20, 36, 10, 75, 90])
    .add_yaxis("商家B", [7, 25, 30, 20, 65, 80])
)
bar.set_colors([ "#4cabce", "#e5323e"])
bar.render()